const targetCompanies = [
  { short: "OEM BUILDERS", full: "Machine Builders & OEMs" },
  { short: "SME PLANTS", full: "SME Discrete Manufacturers" },
  { short: "INTEGRATORS", full: "Industrial System Integrators" },
  { short: "FIELD SERVICE", full: "Service & Maintenance Teams" },
  { short: "PACKAGING", full: "Food, Pharma, and Packaging Lines" },
  { short: "CNC SHOPS", full: "Metalworking and CNC Workshops" },
  { short: "AUTO SUPPLY", full: "Automotive Tier Suppliers" },
  { short: "ELEC ASSEMBLY", full: "Electronics Assembly Plants" },
  { short: "CONTRACTORS", full: "Maintenance Contractors" },
  { short: "RESEARCH", full: "Pilot and Research Networks" },
];

export function TargetCompaniesMarquee() {
  const repeated = [...targetCompanies, ...targetCompanies];

  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-dark">
          Where Wert AI fits best
        </p>
        <h3 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Trusted-by style showcase for ideal customers
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted">
          Styled like a modern logo carousel so visitors immediately understand
          the market we are built for.
        </p>
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
        <ul className="marquee-track flex w-max items-center gap-5 px-4 sm:px-6">
          {repeated.map((company, idx) => (
            <li
              key={`${company.short}-${idx}`}
              className="group flex min-w-[220px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500/15 to-cyan-500/20 text-sm font-bold text-brand-dark ring-1 ring-teal-100"
                aria-hidden
              >
                {company.short.slice(0, 1)}
              </span>
              <span className="leading-tight">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  {company.short}
                </span>
                <span className="block text-sm font-semibold text-foreground">
                  {company.full}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
