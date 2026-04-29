import SectionHeader from "./SectionHeader";
import portrait from "@/assets/dhruv-portrait.jpg";

const focus = [
  {
    title: "Backend engineering",
    desc: "APIs, auth, automation pipelines and performant data layers built to scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
        <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
  },
  {
    title: "ML systems",
    desc: "From CNN + Transformer pipelines to clean inference APIs in production.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
      </svg>
    ),
  },
  {
    title: "Scalable apps",
    desc: "End-to-end MERN products with a focus on performance and clean UX.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About"
          title="Engineer who cares about the system, not just the code."
          description="Final-year Computer Engineering student from Mumbai, building products that combine clean backends with intelligent ML layers."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="reveal glass relative overflow-hidden rounded-2xl p-8 lg:col-span-2">
            <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-radial)" }} />
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">profile.dp</div>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl opacity-70 blur-md" style={{ background: "var(--gradient-primary)" }} aria-hidden />
                <img
                  src={portrait}
                  alt="Portrait of Dhruv Pandit"
                  loading="lazy"
                  className="relative h-20 w-20 rounded-2xl object-cover ring-1 ring-white/15"
                />
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-foreground">Dhruv Pandit</div>
                <div className="text-xs text-muted-foreground">Software Engineer · Mumbai</div>
              </div>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              I design and ship software with the same craft I'd want in tools I use
              every day —{" "}
              <span className="text-gradient-brand font-medium">fast, reliable, and elegant.</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              When I'm not building, I'm grinding DSA — over{" "}
              <span className="text-foreground">200+ problems solved</span> across LeetCode
              and Codeforces — and competing in coding contests.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Mumbai, IN", "CS Engineering", "Builder"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-3 sm:grid-cols-1">
            {focus.map((f, i) => (
              <div
                key={f.title}
                className="reveal glass group relative flex items-start gap-5 overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:bg-white/[0.06]"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow-sm)]">
                  <div className="h-6 w-6">{f.icon}</div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}