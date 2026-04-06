const steps = [
  {
    n: "01",
    title: "Ticket opens",
    body: "Alarm, asset, and location are ingested from your existing service flow.",
  },
  {
    n: "02",
    title: "Context assembled",
    body: "Machine history, configuration, and similar prior cases are attached automatically.",
  },
  {
    n: "03",
    title: "Evidence identified",
    body: "Missing diagnostic evidence is flagged before a technician is committed.",
  },
  {
    n: "04",
    title: "Diagnosis generated",
    body: "Likely root causes are ranked with confidence and source citations.",
  },
  {
    n: "05",
    title: "Dispatch risk scored",
    body: "Repeat-visit probability is estimated to avoid blind truck rolls.",
  },
  {
    n: "06",
    title: "Technician prepared",
    body: "Recommended profile, likely parts, and pre-visit checklist are generated.",
  },
  {
    n: "07",
    title: "Decision written back",
    body: "Final verdict is pushed into SAP, ServiceNow, remberg, or your current platform.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="border-y border-border bg-surface py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Pre-dispatch workflow
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted">
          One workflow before every dispatch. TriageOS sits between ticket
          creation and technician dispatch.
        </p>
        <ol className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border bg-background p-8"
            >
              <span className="text-4xl font-bold text-brand/25">{s.n}</span>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
