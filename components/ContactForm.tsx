"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      body: (form.elements.namedItem("body") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong.");
        return;
      }
      setStatus("success");
      setMessage("Thank you — we will get back to you shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or email us directly.");
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Run a focused pilot with your service organization
            </h2>
            <p className="mt-4 text-muted">
              Start with one machine family, 100 service cases, and a 6–8 week
              scope to measure repeat visits and triage decision time.
            </p>
            <p className="mt-6 text-sm text-muted">
              We can scope your pilot within one week.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-sm"
          >
            <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
              Please fill in all fields so we can scope your pilot accurately.
            </p>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none ring-brand/30 focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none ring-brand/30 focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-foreground"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                required
                autoComplete="organization"
                className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none ring-brand/30 focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="body"
                className="block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="body"
                name="body"
                required
                rows={4}
                className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none ring-brand/30 focus:ring-2"
                placeholder="e.g. We run OEM field service across 12 sites and want to pilot TriageOS for spindle alarm dispatch decisions."
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 rounded-full bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            {message ? (
              <p
                className={
                  status === "success"
                    ? "text-sm font-medium text-brand-dark"
                    : "text-sm text-red-600"
                }
                role="status"
              >
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
