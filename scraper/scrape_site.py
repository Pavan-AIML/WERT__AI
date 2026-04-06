#!/usr/bin/env python3
"""
Scrape a website (including many React/Vite SPAs like Base44-hosted apps) and
export structured JSON for analysis or sharing with an assistant.

Static mode: fast HTTP fetch + HTML parse (good for SSR or mostly-static pages).
Dynamic mode: Playwright renders JavaScript before extraction (use for empty shells).

Usage:
  python scrape_site.py https://example.com -o out.json
  python scrape_site.py https://example.com --playwright --wait-ms 3000 -o out.json
  python scrape_site.py https://example.com --crawl --max-pages 15 -o crawl.json
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from collections import deque
from dataclasses import asdict, dataclass, field
from html import unescape
from typing import Any
from urllib.parse import urljoin, urlparse

import httpx
from bs4 import BeautifulSoup

DEFAULT_UA = (
    "Mozilla/5.0 (compatible; WERT-AI-Scraper/1.0; +https://example.local; research)"
)


@dataclass
class PageSnapshot:
    url: str
    final_url: str | None = None
    title: str | None = None
    meta_description: str | None = None
    language: str | None = None
    headings: dict[str, list[str]] = field(default_factory=dict)
    paragraphs: list[str] = field(default_factory=list)
    links: list[dict[str, str]] = field(default_factory=list)
    images: list[dict[str, str]] = field(default_factory=list)
    tables: list[dict[str, Any]] = field(default_factory=list)
    script_json_blobs: list[dict[str, Any]] = field(default_factory=list)
    raw_text_preview: str | None = None
    error: str | None = None


def _same_site(base: str, candidate: str) -> bool:
    try:
        b, c = urlparse(base), urlparse(candidate)
        return (b.scheme, b.netloc) == (c.scheme, c.netloc)
    except Exception:
        return False


def _normalize_url(base: str, href: str) -> str | None:
    if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
        return None
    return urljoin(base, href.split("#")[0])


def _strip_text(s: str, max_len: int = 80_000) -> str:
    s = re.sub(r"\s+", " ", unescape(s)).strip()
    return s[:max_len] if len(s) > max_len else s


def _json_after_marker(raw: str, marker: str) -> Any | None:
    i = raw.find(marker)
    if i < 0:
        return None
    j = raw.find("{", i)
    if j < 0:
        return None
    try:
        obj, _ = json.JSONDecoder().raw_decode(raw[j:])
        return obj
    except json.JSONDecodeError:
        return None


def _extract_json_from_scripts(soup: BeautifulSoup) -> list[dict[str, Any]]:
    out: list[dict[str, Any]] = []
    markers = (
        "__NEXT_DATA__",
        "window.__INITIAL_STATE__",
        "window.__PRELOADED_STATE__",
    )
    for tag in soup.find_all("script"):
        t = (tag.get("type") or "").lower()
        raw = (tag.string or "").strip()
        if not raw:
            continue
        if "json" in t or t == "importmap":
            try:
                parsed = json.loads(raw)
                out.append({"type": tag.get("type") or "application/json", "data": parsed})
            except json.JSONDecodeError:
                out.append(
                    {
                        "type": tag.get("type") or "text",
                        "parse_error": True,
                        "preview": raw[:2000],
                    }
                )
            continue
        for m in markers:
            parsed = _json_after_marker(raw, m)
            if parsed is not None:
                out.append({"type": "inferred_json", "marker": m, "data": parsed})
                break
    return out[:50]


def _parse_html(url: str, html: str, final_url: str | None = None) -> PageSnapshot:
    soup = BeautifulSoup(html, "lxml")
    snap = PageSnapshot(url=url, final_url=final_url or url)

    if soup.title and soup.title.string:
        snap.title = _strip_text(soup.title.string, 500)

    desc = soup.find("meta", attrs={"name": "description"}) or soup.find(
        "meta", attrs={"property": "og:description"}
    )
    if desc and desc.get("content"):
        snap.meta_description = _strip_text(desc["content"], 2000)

    lang_tag = soup.find("html")
    if lang_tag and lang_tag.get("lang"):
        snap.language = str(lang_tag.get("lang"))

    headings: dict[str, list[str]] = {}
    for level in range(1, 7):
        tag = f"h{level}"
        texts = []
        for h in soup.find_all(tag):
            t = h.get_text(separator=" ", strip=True)
            if t:
                texts.append(_strip_text(t, 2000))
        if texts:
            headings[tag] = texts
    snap.headings = headings

    paras = []
    for p in soup.find_all("p"):
        t = p.get_text(separator=" ", strip=True)
        if len(t) > 2:
            paras.append(_strip_text(t, 5000))
    snap.paragraphs = paras[:500]

    links = []
    seen_href: set[str] = set()
    for a in soup.find_all("a", href=True):
        abs_url = _normalize_url(snap.final_url, a["href"])
        if not abs_url or abs_url in seen_href:
            continue
        seen_href.add(abs_url)
        text = _strip_text(a.get_text(separator=" ", strip=True), 500)
        links.append({"href": abs_url, "text": text})
    snap.links = links[:2000]

    images = []
    for img in soup.find_all("img", src=True):
        src = _normalize_url(snap.final_url, img["src"])
        if not src:
            continue
        images.append(
            {
                "src": src,
                "alt": (img.get("alt") or "")[:500],
            }
        )
    snap.images = images[:500]

    tables = []
    for idx, table in enumerate(soup.find_all("table")[:30]):
        rows_out: list[list[str]] = []
        for tr in table.find_all("tr")[:200]:
            cells = [
                _strip_text(c.get_text(separator=" ", strip=True), 2000)
                for c in tr.find_all(["th", "td"])
            ]
            if cells:
                rows_out.append(cells)
        if rows_out:
            tables.append({"index": idx, "rows": rows_out})
    snap.tables = tables

    snap.script_json_blobs = _extract_json_from_scripts(soup)

    body = soup.body
    if body:
        snap.raw_text_preview = _strip_text(body.get_text(separator="\n", strip=True))
    return snap


def fetch_static(url: str, timeout: float) -> PageSnapshot:
    headers = {"User-Agent": DEFAULT_UA, "Accept": "text/html,application/xhtml+xml"}
    try:
        with httpx.Client(follow_redirects=True, timeout=timeout, headers=headers) as client:
            r = client.get(url)
            r.raise_for_status()
            ct = r.headers.get("content-type", "")
            if "text/html" not in ct and "application/xhtml" not in ct:
                return PageSnapshot(
                    url=url,
                    final_url=str(r.url),
                    error=f"Non-HTML content-type: {ct}",
                )
            return _parse_html(url, r.text, final_url=str(r.url))
    except Exception as e:
        return PageSnapshot(url=url, error=str(e))


def fetch_playwright(url: str, wait_ms: int, timeout_ms: int) -> PageSnapshot:
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        return PageSnapshot(
            url=url,
            error="Playwright not installed. Run: pip install playwright && playwright install chromium",
        )

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(user_agent=DEFAULT_UA)
            page = context.new_page()
            page.goto(url, wait_until="networkidle", timeout=timeout_ms)
            if wait_ms > 0:
                page.wait_for_timeout(wait_ms)
            html = page.content()
            final = page.url
            browser.close()
        return _parse_html(url, html, final_url=final)
    except Exception as e:
        return PageSnapshot(url=url, error=str(e))


def crawl(
    start_url: str,
    max_pages: int,
    delay_s: float,
    use_playwright: bool,
    wait_ms: int,
    timeout: float,
    timeout_ms: int,
) -> list[PageSnapshot]:
    parsed = urlparse(start_url)
    if not parsed.scheme or not parsed.netloc:
        raise ValueError("Start URL must include scheme, e.g. https://")

    seen: set[str] = set()
    q: deque[str] = deque([start_url])
    results: list[PageSnapshot] = []

    while q and len(results) < max_pages:
        u = q.popleft()
        if u in seen:
            continue
        seen.add(u)

        if use_playwright:
            snap = fetch_playwright(u, wait_ms=wait_ms, timeout_ms=timeout_ms)
        else:
            snap = fetch_static(u, timeout=timeout)

        results.append(snap)

        if snap.error:
            continue

        for link in snap.links:
            href = link["href"]
            if not _same_site(start_url, href):
                continue
            path = urlparse(href).path.lower()
            if any(
                path.endswith(ext)
                for ext in (
                    ".pdf",
                    ".zip",
                    ".png",
                    ".jpg",
                    ".jpeg",
                    ".gif",
                    ".svg",
                    ".ico",
                    ".css",
                    ".js",
                    ".mp4",
                    ".webp",
                )
            ):
                continue
            if href not in seen:
                q.append(href)

        if delay_s > 0:
            time.sleep(delay_s)

    return results


def main() -> int:
    p = argparse.ArgumentParser(description="Scrape a site to structured JSON (Base44 / React-friendly).")
    p.add_argument("url", help="Starting URL (include https://)")
    p.add_argument("-o", "--output", help="Write JSON to this file (UTF-8)")
    p.add_argument("--playwright", action="store_true", help="Render with Chromium (for JS-heavy SPAs)")
    p.add_argument("--wait-ms", type=int, default=1500, help="Extra wait after load (playwright only)")
    p.add_argument("--timeout", type=float, default=30.0, help="HTTP timeout seconds (static mode)")
    p.add_argument("--timeout-ms", type=int, default=60_000, help="Navigation timeout ms (playwright)")
    p.add_argument("--crawl", action="store_true", help="Follow same-site links up to --max-pages")
    p.add_argument("--max-pages", type=int, default=10, help="Max pages when crawling")
    p.add_argument("--delay", type=float, default=0.5, help="Seconds between crawl requests")
    args = p.parse_args()

    if args.crawl:
        pages = crawl(
            args.url,
            max_pages=args.max_pages,
            delay_s=args.delay,
            use_playwright=args.playwright,
            wait_ms=args.wait_ms,
            timeout=args.timeout,
            timeout_ms=args.timeout_ms,
        )
        payload = {
            "start_url": args.url,
            "mode": "crawl",
            "page_count": len(pages),
            "pages": [asdict(pg) for pg in pages],
        }
    else:
        if args.playwright:
            snap = fetch_playwright(args.url, wait_ms=args.wait_ms, timeout_ms=args.timeout_ms)
        else:
            snap = fetch_static(args.url, timeout=args.timeout)
        payload = {
            "start_url": args.url,
            "mode": "single",
            "page": asdict(snap),
        }

    text = json.dumps(payload, ensure_ascii=False, indent=2)
    if args.output:
        with open(args.output, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Wrote {args.output}", file=sys.stderr)
    else:
        print(text)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
