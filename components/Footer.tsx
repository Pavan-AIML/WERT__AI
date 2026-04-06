export function Footer() {
  return (
    <footer className="border-t border-border bg-hero py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-base font-bold ring-1 ring-white/20">
            W
          </span>
          <span className="text-xl font-semibold">Wert AI</span>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Wert AI. Decision support for
          maintenance — not a substitute for qualified personnel or safe work
          procedures.
        </p>
      </div>
    </footer>
  );
}
