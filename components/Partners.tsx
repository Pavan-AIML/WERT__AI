export function Partners() {
  return (
    <section id="partners" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Built for high-stakes service environments
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted">
          TriageOS is best for teams with recurring diagnostic ambiguity, SLA
          pressure, and repeat-visit risk.{" "}
          <strong className="font-medium text-foreground">
            Not ideal for very low-volume dispatch operations.
          </strong>
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "OEM service teams",
              text: "Machine builders and aftermarket teams handling field-installed equipment with incomplete incoming case data.",
            },
            {
              title: "Industrial field service",
              text: "Service organizations with technician dispatch complexity, repeat visits, and response-time commitments.",
            },
            {
              title: "Service operations leaders",
              text: "Managers who need predictable triage quality across shifts, regions, and technician skill levels.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
