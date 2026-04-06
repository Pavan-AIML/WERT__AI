import Link from "next/link";

const nav = [
  { href: "#product", label: "Product" },
  { href: "#innovation", label: "Knowledge graph" },
  { href: "#how", label: "How it works" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:h-24 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-0">
        <div className="flex items-center justify-between gap-5">
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-slate-900"
          >
            <span
              className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-emerald-700 text-xl font-bold text-white shadow-md shadow-slate-900/25 ring-2 ring-emerald-100"
              aria-hidden
            >
              W
            </span>
            <span className="text-3xl sm:text-4xl">Wert AI</span>
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-brand px-5 py-2.5 text-lg font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:hidden"
          >
            Pilot
          </a>
        </div>
        <nav className="flex flex-wrap items-center gap-2 rounded-full border border-slate-200/90 bg-white/80 p-1.5 shadow-sm sm:flex-1 sm:justify-center">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-full px-4 py-2 text-lg font-semibold tracking-[0.01em] text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-slate-800 to-emerald-700 px-6 py-3 text-lg font-semibold text-white shadow-md shadow-slate-900/25 transition hover:brightness-110 sm:inline-flex"
        >
          Request pilot
        </a>
      </div>
    </header>
  );
}
