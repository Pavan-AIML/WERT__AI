export function Partners() {
  return (
    <section id="partners" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Built with pilots, not slides alone
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted">
          At Wert AI we are engaging manufacturing companies, integrators, and
          university partners for{" "}
          <strong className="font-medium text-foreground">
            defined, non-binding pilots
          </strong>
          . If you are exploring EXIST-style funding or strategic collaboration,
          we would like to hear from you.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Manufacturers",
              text: "SME plants with mixed machine parks and real downtime pain — co-design the triage flow with us.",
            },
            {
              title: "OEMs & integrators",
              text: "After-sales and service teams who want faster remote diagnosis without a multi-year IT project.",
            },
            {
              title: "Research & networks",
              text: "TUM, Fraunhofer-style collaboration, clusters — we align with EU data residency and serious security roadmaps.",
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
