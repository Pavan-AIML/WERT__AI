"use client";

import { useEffect, useRef, useState } from "react";

type Metric = {
  label: string;
  suffix?: string;
  prefix?: string;
  value: number;
  decimals?: number;
  caption: string;
};

const metrics: Metric[] = [
  {
    label: "Steps to a clear first response",
    value: 3,
    caption: "Capture → triage with context → actionable brief",
  },
  {
    label: "Human oversight",
    value: 100,
    suffix: "%",
    caption: "Decision support; your experts stay in control",
  },
  {
    label: "Pilot horizon (typical)",
    value: 12,
    prefix: "≤",
    caption: "Weeks to validate on real stops, not slide decks",
  },
];

function useCountUp(
  target: number,
  enabled: boolean,
  decimals: number = 0,
) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const duration = 1100;
    const start = performance.now();
    let frame: number;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(target * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled, target]);
  const factor = 10 ** decimals;
  return Math.round(n * factor) / factor;
}

function MetricCard({ metric, enabled }: { metric: Metric; enabled: boolean }) {
  const decimals = metric.decimals ?? 0;
  const shown = useCountUp(metric.value, enabled, decimals);
  const display =
    decimals > 0 ? shown.toFixed(decimals) : String(Math.round(shown));
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-sm">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/10 blur-2xl"
        aria-hidden
      />
      <p className="text-sm font-medium text-muted">{metric.label}</p>
      <p className="mt-4 font-mono text-4xl font-bold tracking-tight text-foreground tabular-nums sm:text-5xl">
        {metric.prefix}
        {display}
        {metric.suffix}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{metric.caption}</p>
    </div>
  );
}

export function ImpactMetrics() {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setOn(true);
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="border-b border-border bg-gradient-to-b from-background to-surface py-16"
      aria-label="Impact at a glance"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-dark">
          Outcomes we optimize for
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted">
          Industrial AI homepages lead with clarity and speed. Here is how we
          frame value for SMEs and public funding reviewers — concrete, not
          hype.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {metrics.map((m) => (
            <MetricCard key={m.label} metric={m} enabled={on} />
          ))}
        </div>
      </div>
    </section>
  );
}
