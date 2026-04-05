const steps = [
  {
    n: "01",
    title: "Capture the stop",
    body: "Short form on phone or desktop: machine, symptom, alarm code, optional photo. No new habits for night shifts.",
  },
  {
    n: "02",
    title: "Triage with context",
    body: "Wert AI combines your manuals, past work orders, and expert rules to suggest likely causes and safe checks — with citations.",
  },
  {
    n: "03",
    title: "Act with clarity",
    body: "Share a concise brief with internal staff or external service: checklist done, parts to bring, and when to escalate.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="border-y border-border bg-surface py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Three steps from chaos to a clear first response — without replacing
          your CMMS or ticketing on day one.
        </p>
        <ol className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border bg-background p-8"
            >
              <span className="text-4xl font-bold text-brand/25">{s.n}</span>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
