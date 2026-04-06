export function Trust() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Security, trust, and accountability
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            TriageOS is decision support for service engineers, not autonomous
            dispatch control. Recommendations are source-backed, reviewable, and
            designed for regulated industrial environments.
          </p>
        </div>
        <ul className="shrink-0 space-y-2 text-sm text-muted">
          <li className="flex items-center gap-2">
            <span className="text-brand" aria-hidden>
              ✓
            </span>
            Human-in-the-loop approval before dispatch decisions
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand" aria-hidden>
              ✓
            </span>
            No model training on customer data by default
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand" aria-hidden>
              ✓
            </span>
            Tenant isolation, encryption, and configurable retention
          </li>
        </ul>
      </div>
    </section>
  );
}
