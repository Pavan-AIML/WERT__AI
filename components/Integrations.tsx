export function Integrations() {
  const items = [
    "PDF & Word manuals",
    "Work orders (CSV / export)",
    "REST APIs (CMMS / ticketing)",
    "Optional: OPC UA / MQTT via edge (read-only)",
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="rounded-3xl bg-hero px-8 py-14 text-white sm:px-14">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Integrations that match how SMEs actually work
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          We do not ask you to rip out Outlook or your ticketing tool on day one.
          Start with documents and exports; connect systems when the value is
          proven — same phased mindset you see in mature industrial SaaS, but
          scoped for smaller teams.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {items.map((label) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-brand"
                aria-hidden
              />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
