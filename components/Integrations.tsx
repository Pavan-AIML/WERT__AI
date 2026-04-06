export function Integrations() {
  const platforms = ["SAP", "SNOW", "SF", "RMB", "S/4"];

  return (
    <section className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Works with existing service platforms.
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          TriageOS sits between ticket creation and dispatch decision. It
          integrates into your existing service infrastructure — no workflow
          disruption required.
        </p>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <div className="flex h-full flex-col rounded-2xl border border-border bg-slate-50 p-6 sm:p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
              Without TriageOS
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                { title: "Ticket Created", sub: "Incomplete alarm data" },
                { title: "Manual Assessment", sub: "Engineer interprets alone" },
                { title: "Blind Dispatch", sub: "No root cause confirmed" },
                { title: "Repeat Visit", sub: "Higher return rate risk" },
              ].map((item, idx) => (
                <li
                  key={item.title}
                  className={`rounded-lg border px-4 py-3.5 ${
                    idx >= 2
                      ? "border-rose-200 bg-rose-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p className="text-[15px] font-semibold text-slate-800">{item.title}</p>
                  <p className="text-[11px] uppercase tracking-wide text-slate-500">
                    {item.sub}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Service platform layer
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span
                  key={`without-${p}`}
                  className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-600"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <span className="rounded-md bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
              TriageOS
            </span>
          </div>

          <div className="flex h-full flex-col rounded-2xl border border-slate-800/70 bg-hero p-6 text-white sm:p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
              With TriageOS
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                { title: "Ticket Created", sub: "Alarm + context ingested" },
                { title: "TriageOS Analysis", sub: "Evidence gathered automatically" },
                { title: "Verdict Issued", sub: "Remote or dispatch + risk score" },
                { title: "Informed Dispatch", sub: "First-time fix rate improved" },
              ].map((item, idx) => (
                <li
                  key={item.title}
                  className={`rounded-lg border px-4 py-3.5 ${
                    idx === 3
                      ? "border-emerald-400/35 bg-emerald-500/10"
                      : "border-white/15 bg-white/[0.03]"
                  }`}
                >
                  <p className="text-[15px] font-semibold text-white">{item.title}</p>
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">
                    {item.sub}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              Service platform layer
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span
                  key={`with-${p}`}
                  className="rounded-md border border-white/20 bg-white/5 px-2.5 py-1.5 text-[11px] font-semibold text-slate-300"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
