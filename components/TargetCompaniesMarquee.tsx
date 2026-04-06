const targetCompanies = [
  "SME Discrete Manufacturers",
  "Machine Builders (OEMs)",
  "Industrial Integrators",
  "Field Service Teams",
  "Food & Packaging Plants",
  "Metalworking & CNC Shops",
  "Automotive Suppliers",
  "Electronics Assembly Lines",
  "Maintenance Contractors",
  "Research & Pilot Networks",
];

export function TargetCompaniesMarquee() {
  const repeated = [...targetCompanies, ...targetCompanies];

  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-dark">
          Best-fit companies we target
        </p>
        <h3 className="mt-2 text-center text-2xl font-bold text-foreground sm:text-3xl">
          Built for teams where downtime has real cost
        </h3>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent"
          aria-hidden
        />
        <ul className="marquee-track flex w-max items-center gap-4 px-4 sm:px-6">
          {repeated.map((company, idx) => (
            <li
              key={`${company}-${idx}`}
              className="rounded-full border border-border bg-background px-5 py-2.5 text-base font-medium text-foreground shadow-sm"
            >
              {company}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
