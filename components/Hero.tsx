export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(20, 184, 166, 0.35), transparent)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-teal-300/90">
          Manufacturing & maintenance
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          The first minutes after a stop matter most.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Wert AI helps your team understand what is going wrong before the
          mechanic is on site — structured questions, likely causes, checklists,
          and what to bring. Built for{" "}
          <span className="font-medium text-white">
            small and mid-sized manufacturers
          </span>{" "}
          who cannot afford another wasted visit.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/30 transition hover:bg-teal-500"
          >
            Talk to us about a pilot
          </a>
          <a
            href="#product"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            See the product
          </a>
        </div>
        <dl className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            { k: "Faster first response", v: "Clear triage in minutes, not hours" },
            { k: "Right visit", v: "Better context for external mechanics" },
            { k: "SME-first", v: "Light setup — grow into deeper integrations" },
          ].map((item) => (
            <div key={item.k} className="border-l border-white/15 pl-4">
              <dt className="text-sm font-semibold text-teal-200">{item.k}</dt>
              <dd className="mt-1 text-sm text-slate-400">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
