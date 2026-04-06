export function ProblemSolution() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Diagnose service cases before dispatch
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted">
          TriageOS helps service teams determine whether a machine issue can be
          resolved remotely, requires more evidence, or is ready for onsite
          dispatch.
        </p>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <h3 className="text-base font-semibold uppercase tracking-wide text-red-600/90">
            Without TriageOS
          </h3>
          <ul className="mt-4 space-y-3 text-lg text-muted">
            <li className="flex gap-3">
              <span className="text-red-500" aria-hidden>
                —
              </span>
              Incomplete tickets force engineers to assess cases manually.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500" aria-hidden>
                —
              </span>
              Dispatch decisions happen before diagnostic readiness is confirmed.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500" aria-hidden>
                —
              </span>
              Repeat visits increase SLA risk and technician capacity pressure.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/45 p-8 shadow-sm">
          <h3 className="text-base font-semibold uppercase tracking-wide text-brand-dark">
            With TriageOS
          </h3>
          <ul className="mt-4 space-y-3 text-lg text-foreground/90">
            <li className="flex gap-3">
              <span className="font-bold text-brand" aria-hidden>
                +
              </span>
              Machine context, prior cases, and evidence gaps are assembled
              before dispatch.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand" aria-hidden>
                +
              </span>
              Multi-agent diagnosis returns readiness verdict and repeat-visit
              risk score.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand" aria-hidden>
                +
              </span>
              Technician profile, likely spare parts, and checklist are prepared
              for first-visit success.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
