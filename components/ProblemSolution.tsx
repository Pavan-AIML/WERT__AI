export function ProblemSolution() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          When the line stops, knowledge is scattered
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Tickets, WhatsApp, PDF manuals, and the one expert who remembers
          “that fault from 2019” — your team loses time searching instead of
          fixing. Wert AI concentrates the first response into one guided flow.
        </p>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600/90">
            Status quo
          </h3>
          <ul className="mt-4 space-y-3 text-muted">
            <li className="flex gap-3">
              <span className="text-red-500" aria-hidden>
                —
              </span>
              Operator and maintenance describe the problem differently; context
              is lost by the time help arrives.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500" aria-hidden>
                —
              </span>
              Mechanics travel without the right parts or tools, or need a second
              visit.
            </li>
            <li className="flex gap-3">
              <span className="text-red-500" aria-hidden>
                —
              </span>
              Full enterprise field-service suites are heavy for smaller plants.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-teal-200/80 bg-teal-50/50 p-8 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
            With Wert AI
          </h3>
          <ul className="mt-4 space-y-3 text-foreground/90">
            <li className="flex gap-3">
              <span className="font-bold text-brand" aria-hidden>
                +
              </span>
              Guided intake: symptoms, codes, photos — turned into structured
              context.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand" aria-hidden>
                +
              </span>
              Ranked hypotheses, step-by-step checks, and “what to bring”
              suggestions grounded in your approved documents.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand" aria-hidden>
                +
              </span>
              Start with uploads and light integrations; add CMMS or signals when
              you are ready.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
