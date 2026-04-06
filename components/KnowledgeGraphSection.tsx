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
            "radial-gradient(ellipse 70% 50% at 15% 20%, rgba(37, 99, 235, 0.12), transparent), radial-gradient(ellipse 60% 45% at 85% 80%, rgba(15, 118, 110, 0.18), transparent)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300/90">
            Multi-agent + knowledge graph architecture
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            How our multi-agent system resolves downtime faster
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-slate-200">
            On real shop floors, teams ask practical questions:{" "}
            <strong className="font-semibold text-white">
              which part, which check, and what should the mechanic bring?
            </strong>{" "}
            Wert AI combines specialized agents with a{" "}
            <strong className="font-semibold text-white">
              maintenance knowledge graph
            </strong>{" "}
            so every recommendation is source-backed, role-aware, and ready for
            action.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="order-2 space-y-6 text-base leading-relaxed text-slate-200 lg:order-1">
            <div className="rounded-xl border border-blue-300/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-100">
              <span className="font-semibold text-white">Orchestration layer:</span>{" "}
              routes tasks between agents, scores confidence, and escalates
              uncertain cases for human confirmation.
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">
                What the graph unlocks
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-400" aria-hidden>
                    →
                  </span>
                  <span>
                    <strong className="text-slate-100">Faster triage:</strong>{" "}
                    intake and diagnosis agents traverse documented links, not
                    keyword guesswork.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-300" aria-hidden>
                    →
                  </span>
                  <span>
                    <strong className="text-slate-100">Fewer wrong visits:</strong>{" "}
                    planning and evidence agents attach parts, tools, and steps
                    before dispatch.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-400" aria-hidden>
                    →
                  </span>
                  <span>
                    <strong className="text-slate-100">Consistent execution:</strong>{" "}
                    orchestrated handoffs keep decisions consistent across shifts
                    and sites.
                  </span>
                </li>
              </ul>
            </div>
            <p className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-base text-emerald-100">
              We combine{" "}
              <span className="font-medium text-white">
                domain structure (graph)
              </span>{" "}
              with{" "}
              <span className="font-medium text-white">
                language models for intake and explanation
              </span>
              , with citations back to your sources.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
              Example scenario:{" "}
              <span className="text-slate-100">Conveyor stop + alarm A17</span>{" "}
              {"->"} Intake Agent captures symptoms {"->"} Diagnosis Agent ranks
              causes {"->"} Evidence Agent cites manual section + past WO {"->"}{" "}
              Planner Agent outputs parts and checklist.
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl shadow-black/35 backdrop-blur-md">
              <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
                Agent graph + knowledge retrieval
              </p>
              <div className="mt-4 aspect-[16/10] w-full">
                <svg
                  viewBox="0 0 440 352"
                  className="h-full w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="kg-edge" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="rgb(96, 165, 250)" stopOpacity="0.85" />
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
                      d="M 220 166 L 320 168"
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
                      y="152"
                      width="88"
                      height="46"
                      rx="10"
                      className="graph-node-pulse fill-emerald-500/20 stroke-emerald-300/80"
                      strokeWidth="1.2"
                    />
                    <rect
                      x="180"
                      y="152"
                      width="92"
                      height="46"
                      rx="10"
                      className="graph-node-pulse fill-blue-500/15 stroke-blue-300/75"
                      style={{ animationDelay: "-0.5s" }}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="152"
                      y="68"
                      width="82"
                      height="40"
                      rx="9"
                      fill="rgb(6 95 70 / 0.32)"
                      stroke="rgb(110 231 183 / 0.8)"
                      strokeWidth="1"
                    />
                    <rect
                      x="152"
                      y="240"
                      width="82"
                      height="40"
                      rx="9"
                      fill="rgb(6 95 70 / 0.32)"
                      stroke="rgb(110 231 183 / 0.8)"
                      strokeWidth="1"
                    />
                    <rect
                      x="288"
                      y="84"
                      width="88"
                      height="40"
                      rx="9"
                      fill="rgb(30 58 138 / 0.3)"
                      stroke="rgb(147 197 253 / 0.8)"
                      strokeWidth="1"
                    />
                    <rect
                      x="288"
                      y="154"
                      width="96"
                      height="40"
                      rx="9"
                      fill="rgb(30 58 138 / 0.3)"
                      stroke="rgb(147 197 253 / 0.8)"
                      strokeWidth="1"
                    />
                    <rect
                      x="288"
                      y="224"
                      width="88"
                      height="40"
                      rx="9"
                      fill="rgb(30 58 138 / 0.3)"
                      stroke="rgb(147 197 253 / 0.8)"
                      strokeWidth="1"
                    />
                  </g>
                  <text
                    x="88"
                    y="180"
                    textAnchor="middle"
                    className="fill-white text-[13px] font-semibold"
                  >
                    Intake
                  </text>
                  <text
                    x="220"
                    y="180"
                    textAnchor="middle"
                    className="fill-white text-[13px] font-semibold"
                  >
                    Orchestrator
                  </text>
                  <text
                    x="188"
                    y="94"
                    textAnchor="middle"
                    className="fill-emerald-100 text-[11px] font-medium"
                  >
                    Diagnosis
                  </text>
                  <text
                    x="188"
                    y="266"
                    textAnchor="middle"
                    className="fill-emerald-100 text-[11px] font-medium"
                  >
                    Evidence
                  </text>
                  <text
                    x="326"
                    y="108"
                    textAnchor="middle"
                    className="fill-blue-100 text-[11px] font-medium"
                  >
                    Source QA
                  </text>
                  <text
                    x="330"
                    y="180"
                    textAnchor="middle"
                    className="fill-blue-100 text-[11px] font-medium"
                  >
                    Planner
                  </text>
                  <text
                    x="326"
                    y="250"
                    textAnchor="middle"
                    className="fill-blue-100 text-[11px] font-medium"
                  >
                    Action pack
                  </text>
                </svg>
              </div>
              <p className="mt-3 text-center text-sm text-slate-400">
                Each agent decision is grounded in graph links with confidence,
                provenance, and timestamps for reliable GraphRAG retrieval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
