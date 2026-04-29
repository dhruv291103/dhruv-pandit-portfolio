import SectionHeader from "./SectionHeader";

const items = [
  {
    title: "Coding competition winner",
    desc: "1st place, ₹7,500 prize — out-shipped the field in a timed algorithmic challenge.",
    badge: "₹7.5K",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 11-10 0V4z" />
        <path d="M5 6H3v2a3 3 0 003 3M19 6h2v2a3 3 0 01-3 3" />
      </svg>
    ),
  },
  {
    title: "200+ DSA problems solved",
    desc: "Consistent practice across LeetCode, Codeforces & GFG — strong fundamentals in algorithms and complexity analysis.",
    badge: "200+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: "Competitive mindset",
    desc: "Active in hackathons & contests — I optimize for both correctness and speed under pressure.",
    badge: "Top%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
];

export default function Achievements() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Recognition"
          title="Receipts, not adjectives."
          description="Outcomes I've shipped and competitions I've won."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 transition-all hover:-translate-y-1 hover:border-white/15"
              style={{ transitionDelay: `${i * 60}ms`, boxShadow: "var(--shadow-glass)" }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40" style={{ background: "var(--gradient-primary)" }} />
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow-sm)]">
                  <div className="h-6 w-6">{it.icon}</div>
                </div>
                <span className="font-display text-xl font-semibold text-gradient-brand">{it.badge}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}