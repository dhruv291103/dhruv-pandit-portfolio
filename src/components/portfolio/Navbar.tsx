import { useEffect, useState } from "react";
import portrait from "@/assets/dhruv-portrait.jpg";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled ? "glass-strong shadow-[var(--shadow-elegant)]" : "bg-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg p-[2px] shadow-[var(--shadow-glow-sm)]" style={{ background: "var(--gradient-primary)" }}>
              <img
                src={portrait}
                alt="Dhruv Pandit"
                className="h-full w-full rounded-[6px] object-cover"
              />
              <span className="pointer-events-none absolute -bottom-1 -right-1 rounded-md bg-background/90 px-1 py-px font-display text-[8px] font-bold text-foreground/90 ring-1 ring-white/10">
                DP
              </span>
            </span>
            <span className="hidden font-display text-sm font-medium tracking-wide text-foreground/90 sm:block">
              Dhruv Pandit
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-lg bg-[var(--gradient-primary)] px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow-sm)] transition-transform hover:scale-[1.03] md:inline-block"
          >
            Let's talk
          </a>

          <button
            aria-label="Toggle menu"
            className="md:hidden rounded-lg p-2 text-foreground/80 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="glass-strong mt-2 rounded-2xl p-4 md:hidden animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}