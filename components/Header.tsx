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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:h-28 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-0">
        <div className="flex items-center justify-between gap-5">
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-foreground"
          >
            <span
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-2xl font-bold text-white shadow-lg shadow-teal-900/20 ring-2 ring-teal-100"
              aria-hidden
            >
              W
            </span>
            <span className="text-3xl sm:text-4xl">Wert AI</span>
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-brand px-5 py-2.5 text-base font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:hidden"
          >
            Pilot
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-1 sm:flex-1 sm:justify-center md:gap-x-9">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-brand px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:inline-flex"
        >
          Request pilot
        </a>
      </div>
    </header>
  );
}
