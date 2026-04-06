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
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white"
              aria-hidden
            >
              W
            </span>
            Wert AI
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:hidden"
          >
            Pilot
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 sm:flex-1 sm:justify-center md:gap-x-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:inline-flex"
        >
          Request pilot
        </a>
      </div>
    </header>
  );
}
