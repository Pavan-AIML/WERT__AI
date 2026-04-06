export function KnowledgeGraphSection() {
  return (
    <section
      id="innovation"
      className="relative overflow-hidden bg-hero py-20 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50 animate-hero-blob"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 15% 20%, rgba(56, 189, 248, 0.12), transparent), radial-gradient(ellipse 60% 45% at 85% 80%, rgba(20, 184, 166, 0.2), transparent)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-300/90">
            Why a knowledge graph (not “just chat”)
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Connect symptoms, assets, and evidence — the way experts already
            think
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-slate-200">
            Generative UI alone can sound convincing without being right. Wert
            AI pairs structured machine context with a{" "}
            <strong className="font-semibold text-white">
              maintenance knowledge graph
            </strong>
            : entities (lines, alarms, procedures, parts, work orders) and
            relationships your team trusts. Retrieval and ranking stay
            traceable for audits, pilots, and EXIST-style scrutiny.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 space-y-6 text-base leading-relaxed text-slate-200 lg:order-1">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">
                What the graph unlocks
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-teal-400" aria-hidden>
                    →
                  </span>
                  <span>
                    <strong className="text-slate-100">Faster triage:</strong>{" "}
                    traverse from symptom to likely causes via documented links,
                    not keyword luck.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-sky-400" aria-hidden>
                    →
                  </span>
                  <span>
                    <strong className="text-slate-100">Fewer wrong visits:</strong>{" "}
                    parts and tools attach to procedures and past resolutions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-teal-400" aria-hidden>
                    →
                  </span>
                  <span>
                    <strong className="text-slate-100">Funding story:</strong>{" "}
                    explicit data model + evaluation — easier to defend than a
                    black-box assistant.
                  </span>
                </li>
              </ul>
            </div>
            <p className="rounded-xl border border-teal-400/20 bg-teal-500/10 px-4 py-3 text-base text-teal-100">
              For EXIST reviewers: we combine{" "}
              <span className="font-medium text-white">
                domain structure (graph)
              </span>{" "}
              with{" "}
              <span className="font-medium text-white">
                language models for intake and explanation
              </span>
              , with citations back to your sources.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-md">
              <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
                Graph + retrieval (concept)
              </p>
              <div className="mt-4 aspect-[5/4] w-full">
                <svg
                  viewBox="0 0 440 352"
                  className="h-full w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="kg-edge" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgb(45, 212, 191)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="rgb(56, 189, 248)" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  <g
                    stroke="url(#kg-edge)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  >
                    <path
                      className="graph-edge-animate"
                      strokeDasharray="5 9"
                      d="M 88 176 L 188 96"
                    />
                    <path
                      className="graph-edge-animate"
                      style={{ animationDelay: "-0.35s" }}
                      strokeDasharray="5 9"
                      d="M 88 176 L 188 256"
                    />
                    <path
                      className="graph-edge-animate"
                      style={{ animationDelay: "-0.7s" }}
                      strokeDasharray="5 9"
                      d="M 220 176 L 312 112"
                    />
                    <path
                      className="graph-edge-animate"
                      style={{ animationDelay: "-1.05s" }}
                      strokeDasharray="5 9"
                      d="M 220 176 L 320 176"
                    />
                    <path
                      className="graph-edge-animate"
                      style={{ animationDelay: "-1.4s" }}
                      strokeDasharray="5 9"
                      d="M 220 176 L 312 240"
                    />
                    <path
                      className="graph-edge-animate"
                      style={{ animationDelay: "-0.5s" }}
                      strokeDasharray="5 9"
                      d="M 188 96 L 220 176"
                    />
                    <path
                      className="graph-edge-animate"
                      style={{ animationDelay: "-0.9s" }}
                      strokeDasharray="5 9"
                      d="M 188 256 L 220 176"
                    />
                  </g>
                  <g>
                    <rect
                      x="48"
                      y="156"
                      width="80"
                      height="40"
                      rx="10"
                      className="graph-node-pulse fill-teal-500/20 stroke-teal-300/80"
                      strokeWidth="1.2"
                    />
                    <rect
                      x="180"
                      y="156"
                      width="80"
                      height="40"
                      rx="10"
                      className="graph-node-pulse fill-sky-500/15 stroke-sky-300/75"
                      style={{ animationDelay: "-0.5s" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="152"
                      y="72"
                      width="72"
                      height="36"
                      rx="9"
                      fill="rgb(15 118 110 / 0.25)"
                      stroke="rgb(94 234 212 / 0.75)"
                      strokeWidth="1"
                    />
                    <rect
                      x="152"
                      y="244"
                      width="72"
                      height="36"
                      rx="9"
                      fill="rgb(15 118 110 / 0.25)"
                      stroke="rgb(94 234 212 / 0.75)"
                      strokeWidth="1"
                    />
                    <rect
                      x="288"
                      y="88"
                      width="76"
                      height="36"
                      rx="9"
                      fill="rgb(12 74 110 / 0.3)"
                      stroke="rgb(125 211 252 / 0.8)"
                      strokeWidth="1"
                    />
                    <rect
                      x="288"
                      y="158"
                      width="84"
                      height="36"
                      rx="9"
                      fill="rgb(12 74 110 / 0.3)"
                      stroke="rgb(125 211 252 / 0.8)"
                      strokeWidth="1"
                    />
                    <rect
                      x="288"
                      y="228"
                      width="76"
                      height="36"
                      rx="9"
                      fill="rgb(12 74 110 / 0.3)"
                      stroke="rgb(125 211 252 / 0.8)"
                      strokeWidth="1"
                    />
                  </g>
                  <text
                    x="88"
                    y="180"
                    textAnchor="middle"
                    className="fill-white text-[11px] font-semibold"
                  >
                    Machine
                  </text>
                  <text
                    x="220"
                    y="180"
                    textAnchor="middle"
                    className="fill-white text-[11px] font-semibold"
                  >
                    Stop event
                  </text>
                  <text
                    x="188"
                    y="94"
                    textAnchor="middle"
                    className="fill-teal-100 text-[9px]"
                  >
                    Sensor pattern
                  </text>
                  <text
                    x="188"
                    y="266"
                    textAnchor="middle"
                    className="fill-teal-100 text-[9px]"
                  >
                    Error code
                  </text>
                  <text
                    x="326"
                    y="108"
                    textAnchor="middle"
                    className="fill-sky-100 text-[9px]"
                  >
                    Manual §
                  </text>
                  <text
                    x="330"
                    y="180"
                    textAnchor="middle"
                    className="fill-sky-100 text-[9px]"
                  >
                    Similar case
                  </text>
                  <text
                    x="326"
                    y="250"
                    textAnchor="middle"
                    className="fill-sky-100 text-[9px]"
                  >
                    BOM / part
                  </text>
                </svg>
              </div>
              <p className="mt-3 text-center text-sm text-slate-400">
                Edges can carry weights, provenance, and time — the substrate for
                GraphRAG-style retrieval over your plant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
