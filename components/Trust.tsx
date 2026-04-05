export function Trust() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Trust & data
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Wert AI is decision support, not autonomous machine control. Pilot
            data stays under your agreements; we design for GDPR-friendly
            hosting in the EU and clear retention — details are agreed per pilot
            and contract.
          </p>
        </div>
        <ul className="shrink-0 space-y-2 text-sm text-muted">
          <li className="flex items-center gap-2">
            <span className="text-brand" aria-hidden>
              ✓
            </span>
            Human-in-the-loop by design
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand" aria-hidden>
              ✓
            </span>
            Read-only machine access in early phases
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand" aria-hidden>
              ✓
            </span>
            No training on your data without explicit consent
          </li>
        </ul>
      </div>
    </section>
  );
}
