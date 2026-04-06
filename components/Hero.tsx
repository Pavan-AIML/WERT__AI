import { HeroKnowledgePreview } from "@/components/HeroKnowledgePreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 animate-hero-blob"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15, 118, 110, 0.3), transparent)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30 animate-hero-blob-alt"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 45% at 90% 70%, rgba(37, 99, 235, 0.14), transparent)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="mb-4 text-base font-semibold uppercase tracking-wider text-emerald-200/90">
          TriageOS - Early Access
        </p>
        <h1 className="max-w-6xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          The first minutes after a stop matter most.
        </h1>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-200">
              Wert AI uses a{" "}
              <span className="font-medium text-white">multi-agent system</span>{" "}
              to understand what is going wrong before the mechanic is on site
              — structured intake, ranked likely causes, evidence-backed
              checklists, and what to bring. A{" "}
              <span className="font-medium text-white">
                maintenance knowledge graph with source citations
              </span>{" "}
              keeps every recommendation grounded. Built for{" "}
              <span className="font-medium text-white">
                small and mid-sized manufacturers
              </span>{" "}
              who cannot afford another wasted visit.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-900/35 transition hover:bg-brand-dark"
              >
                Request Pilot
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                See Product
              </a>
            </div>
            <dl className="mt-16 grid gap-8 sm:grid-cols-3">
              {[
                {
                  k: "Faster first response",
                  v: "Clear triage in minutes, not hours",
                },
                { k: "Right visit", v: "Better context for external mechanics" },
                { k: "SME-first", v: "Light setup — grow into deeper integrations" },
              ].map((item) => (
                <div key={item.k} className="border-l border-white/15 pl-4">
                  <dt className="text-base font-semibold text-emerald-200">{item.k}</dt>
                  <dd className="mt-1 text-base text-slate-300">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <HeroKnowledgePreview />
          </div>
        </div>
      </div>
    </section>
  );
}
