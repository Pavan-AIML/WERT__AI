export function HeroKnowledgePreview() {
  return (
    <div
      className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
      aria-hidden
    >
      <div className="float-soft relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/40 backdrop-blur-md">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-emerald-200/90">
          Agent graph + knowledge retrieval
        </p>
        <div className="relative mt-4 aspect-[16/10] w-full">
          <svg
            viewBox="0 0 440 300"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="hero-preview-kg-edge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="rgb(96, 165, 250)" stopOpacity="0.85" />
              </linearGradient>
              <filter
                id="hero-preview-kg-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Same edge topology as KnowledgeGraphSection agent graph */}
            <g
              stroke="url(#hero-preview-kg-edge)"
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
                d="M 258 166 L 306 122"
              />
              <path
                className="graph-edge-animate"
                style={{ animationDelay: "-1.05s" }}
                strokeDasharray="5 9"
                d="M 258 166 L 310 168"
              />
              <path
                className="graph-edge-animate"
                style={{ animationDelay: "-1.4s" }}
                strokeDasharray="5 9"
                d="M 258 186 L 306 230"
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
            <g filter="url(#hero-preview-kg-glow)">
              <circle
                cx="92"
                cy="176"
                r="30"
                className="graph-node-pulse fill-emerald-500/20 stroke-emerald-300/80"
                strokeWidth="1.2"
              />
              <circle
                cx="226"
                cy="176"
                r="32"
                className="graph-node-pulse fill-blue-500/15 stroke-blue-300/75"
                style={{ animationDelay: "-0.5s" }}
                strokeWidth="1.2"
              />
              <circle
                cx="193"
                cy="88"
                r="26"
                fill="rgb(6 95 70 / 0.32)"
                stroke="rgb(110 231 183 / 0.8)"
                strokeWidth="1"
              />
              <circle
                cx="193"
                cy="260"
                r="26"
                fill="rgb(6 95 70 / 0.32)"
                stroke="rgb(110 231 183 / 0.8)"
                strokeWidth="1"
              />
              <circle
                cx="332"
                cy="102"
                r="27"
                fill="rgb(30 58 138 / 0.3)"
                stroke="rgb(147 197 253 / 0.8)"
                strokeWidth="1"
              />
              <circle
                cx="336"
                cy="174"
                r="28"
                fill="rgb(30 58 138 / 0.3)"
                stroke="rgb(147 197 253 / 0.8)"
                strokeWidth="1"
              />
              <circle
                cx="332"
                cy="246"
                r="27"
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
        <p className="mt-3 text-center text-sm text-slate-300">
          Each agent decision is grounded in graph links with confidence,
          provenance, and timestamps for reliable GraphRAG retrieval.
        </p>
      </div>
    </div>
  );
}
