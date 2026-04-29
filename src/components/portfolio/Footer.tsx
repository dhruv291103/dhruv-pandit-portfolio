export default function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--gradient-primary)] font-display text-xs font-bold text-primary-foreground">
            DP
          </span>
          Dhruv Pandit · Engineered with care · 2026
        </div>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="#top" className="hover:text-foreground">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}