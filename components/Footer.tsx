export function Footer() {
  return (
    <footer className="border-t border-border bg-hero py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold">
            W
          </span>
          <span className="font-semibold">Wert AI</span>
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
