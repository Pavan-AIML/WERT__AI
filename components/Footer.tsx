export function Footer() {
  return (
    <footer className="border-t border-border bg-hero py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-emerald-700 text-base font-bold ring-1 ring-white/20">
                W
              </span>
              <span className="text-xl font-semibold">Wert AI</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-300">
              AI Diagnostic Systems
              <br />
              for Industrial Service
            </p>
            <p className="mt-4 max-w-sm text-sm">
              © {new Date().getFullYear()} Wert AI. Decision support for
              maintenance — not a substitute for qualified personnel or safe work
              procedures.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Product
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#how" className="transition hover:text-white">
                  TriageOS
                </a>
              </li>
              <li>
                <a href="#partners" className="transition hover:text-white">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Pilot Program
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@wert.ai"
                  className="transition hover:text-white"
                >
                  hello@wert.ai
                </a>
              </li>
              <li>
                <a
                  href="mailto:pilot@wert.ai"
                  className="transition hover:text-white"
                >
                  pilot@wert.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
