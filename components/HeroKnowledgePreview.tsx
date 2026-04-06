export function HeroKnowledgePreview() {
  return (
    <div
      className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
      aria-hidden
    >
      <div className="float-soft relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/40 backdrop-blur-md">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-emerald-200/90">
          Multi-agent triage flow (illustrative)
        </p>
        <p className="mt-2 text-center text-[12px] text-slate-300">
          Orchestrator routes tasks and validates output quality
        </p>
        <div className="relative mt-6 aspect-[16/10] w-full">
          <svg
            viewBox="0 0 400 300"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="hero-edge"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgb(45, 212, 191)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="rgb(56, 189, 248)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="rgb(45, 212, 191)" stopOpacity="0.35" />
              </linearGradient>
              <filter id="hero-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g stroke="url(#hero-edge)" strokeWidth="1.6" strokeLinecap="round">
              <path
                className="graph-edge-animate"
                strokeDasharray="6 10"
                d="M 72 150 L 168 104"
              />
              <path
                className="graph-edge-animate"
                style={{ animationDelay: "-0.4s" }}
                strokeDasharray="6 10"
                d="M 72 150 L 168 196"
              />
              <path
                className="graph-edge-animate"
                style={{ animationDelay: "-0.8s" }}
                strokeDasharray="6 10"
                d="M 200 150 L 288 88"
              />
              <path
                className="graph-edge-animate"
                style={{ animationDelay: "-1.1s" }}
                strokeDasharray="6 10"
                d="M 200 150 L 292 150"
              />
              <path
                className="graph-edge-animate"
                style={{ animationDelay: "-1.4s" }}
                strokeDasharray="6 10"
                d="M 200 150 L 288 212"
              />
            </g>
            <g filter="url(#hero-glow)">
              <circle
                cx="72"
                cy="150"
                r="24"
                className="graph-node-pulse fill-teal-400/25 stroke-teal-300/90"
                strokeWidth="1.5"
              />
              <circle
                cx="200"
                cy="150"
                r="29"
                className="graph-node-pulse fill-sky-400/20 stroke-sky-300/90"
                style={{ animationDelay: "-0.6s" }}
                strokeWidth="1.5"
              />
              <circle
                cx="168"
                cy="104"
                r="18"
                fill="rgb(15 118 110 / 0.35)"
                stroke="rgb(45 212 191 / 0.9)"
                strokeWidth="1.2"
              />
              <circle
                cx="168"
                cy="196"
                r="18"
                fill="rgb(15 118 110 / 0.35)"
                stroke="rgb(45 212 191 / 0.9)"
                strokeWidth="1.2"
              />
              <circle
                cx="288"
                cy="88"
                r="18"
                fill="rgb(12 74 110 / 0.35)"
                stroke="rgb(56 189 248 / 0.85)"
                strokeWidth="1.2"
              />
              <circle
                cx="292"
                cy="150"
                r="18"
                fill="rgb(12 74 110 / 0.35)"
                stroke="rgb(56 189 248 / 0.85)"
                strokeWidth="1.2"
              />
              <circle
                cx="288"
                cy="212"
                r="18"
                fill="rgb(12 74 110 / 0.35)"
                stroke="rgb(56 189 248 / 0.85)"
                strokeWidth="1.2"
              />
            </g>
            <text
              x="72"
              y="154"
              textAnchor="middle"
              className="fill-white text-[14px] font-semibold"
            >
              Intake
            </text>
            <text
              x="200"
              y="154"
              textAnchor="middle"
              className="fill-white text-[14px] font-semibold"
            >
              Orchestrator
            </text>
            <text
              x="168"
              y="108"
              textAnchor="middle"
              className="fill-teal-100 text-[12px] font-medium"
            >
              Diagnosis
            </text>
            <text
              x="168"
              y="200"
              textAnchor="middle"
              className="fill-teal-100 text-[12px] font-medium"
            >
              Evidence
            </text>
            <text
              x="288"
              y="92"
              textAnchor="middle"
              className="fill-sky-100 text-[12px] font-medium"
            >
              Source QA
            </text>
            <text
              x="292"
              y="154"
              textAnchor="middle"
              className="fill-sky-100 text-[12px] font-medium"
            >
              Planner
            </text>
            <text
              x="288"
              y="216"
              textAnchor="middle"
              className="fill-sky-100 text-[12px] font-medium"
            >
              Action
            </text>
          </svg>
        </div>
        <ul className="mt-4 flex flex-wrap justify-center gap-2 text-[12px] text-slate-200">
          <li className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Agent handoff with confidence checks
          </li>
          <li className="rounded-full border border-teal-400/25 bg-teal-500/10 px-3 py-1 text-teal-100">
            Cited manuals + work-order evidence
          </li>
        </ul>
      </div>
    </div>
  );
}
