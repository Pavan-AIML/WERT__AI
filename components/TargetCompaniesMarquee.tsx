const targetCompanies = [
  { short: "HVAC", full: "Commercial HVAC Service" },
  { short: "OEM", full: "Machine Builder Field Service" },
  { short: "CNC", full: "Installed CNC Production Equipment" },
  { short: "PACKAGING", full: "Packaging & Food Line Service" },
  { short: "UTILITIES", full: "Critical Facility Maintenance Teams" },
  { short: "MRO", full: "Multi-site Industrial MRO Dispatch" },
  { short: "FOOD", full: "Food & Beverage Processing Plants" },
  { short: "PHARMA", full: "Pharma Production Service Teams" },
  { short: "AUTO", full: "Automotive Tier Supplier Service" },
  { short: "CHEM", full: "Chemical Process Maintenance Teams" },
  { short: "LOGISTICS", full: "Automated Warehouse & Intralogistics" },
  { short: "ENERGY", full: "Energy Facility Field Service Ops" },
  { short: "WATER", full: "Water & Utilities Operations Teams" },
  { short: "METAL", full: "Metalworking and Fabrication Sites" },
];

const cardStyles = [
  {
    border: "border-emerald-200/80",
    hover: "hover:shadow-emerald-800/15",
    icon:
      "bg-gradient-to-br from-emerald-500/20 to-teal-600/20 text-emerald-800 ring-1 ring-emerald-200",
  },
  {
    border: "border-indigo-200/85",
    hover: "hover:shadow-indigo-900/15",
    icon:
      "bg-gradient-to-br from-indigo-500/20 to-blue-600/20 text-indigo-800 ring-1 ring-indigo-200",
  },
  {
    border: "border-amber-200/85",
    hover: "hover:shadow-amber-900/15",
    icon:
      "bg-gradient-to-br from-amber-400/20 to-orange-500/20 text-amber-800 ring-1 ring-amber-200",
  },
  {
    border: "border-rose-200/80",
    hover: "hover:shadow-rose-900/15",
    icon:
      "bg-gradient-to-br from-rose-400/20 to-pink-500/20 text-rose-800 ring-1 ring-rose-200",
  },
];

export function TargetCompaniesMarquee() {
  const trackItems = [...targetCompanies, ...targetCompanies];

  return (
    <section className="border-y border-border bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-dark">
          Use cases
        </p>
        <h3 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Designed for real service scenarios
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted">
          From SLA-driven HVAC alarms to recurring OEM field issues, TriageOS
          improves dispatch readiness before the first visit.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent"
          aria-hidden
        />
        <div className="marquee-rail flex w-max items-center">
          {[0, 1].map((copyIdx) => (
            <ul
              key={copyIdx}
              className="flex w-max items-center gap-7 px-4 py-2 sm:px-6"
              aria-hidden={copyIdx === 1}
            >
              {trackItems.map((company, idx) => (
                <li
                  key={`${copyIdx}-${company.short}-${idx}`}
                  className={`group relative flex h-[228px] w-[228px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg ${cardStyles[idx % cardStyles.length].border} ${cardStyles[idx % cardStyles.length].hover}`}
                >
                  <span
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(15,118,110,0.05), rgba(37,99,235,0.04))",
                    }}
                    aria-hidden
                  />
                  <span
                    className={`relative z-[1] flex h-14 w-14 items-center justify-center rounded-xl text-xl font-bold ${cardStyles[idx % cardStyles.length].icon}`}
                    aria-hidden
                  >
                    {company.short.slice(0, 1)}
                  </span>
                  <span className="relative z-[1] leading-tight">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      {company.short}
                    </span>
                    <span className="mt-2 block text-base font-semibold text-foreground">
                      {company.full}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
