import SectionHeader from "./SectionHeader";

const projects = [
  {
    tag: "AI · MERN · Python",
    title: "AI Image Caption Generator",
    desc: "End-to-end vision-to-text pipeline combining a CNN encoder with a Transformer decoder, served via Flask and consumed by a MERN front-end for real-time captions.",
    metrics: [
      { k: "BLEU", v: "0.72" },
      { k: "Latency", v: "<400ms" },
      { k: "Model", v: "CNN + Transformer" },
    ],
    stack: ["TensorFlow", "Flask", "React", "MongoDB", "Node"],
    href: "https://github.com/dhruvpandit/ai-image-caption-generator",
    demo: "https://github.com/dhruvpandit/ai-image-caption-generator",
    accent: "from-[var(--neon-purple)] to-[var(--neon-blue)]",
  },
  {
    tag: "Full-stack · MERN",
    title: "Food Ordering Platform",
    desc: "A full-stack ordering web app with JWT auth, optimized data fetching, and a UI rebuilt around perceived performance — measurable lifts in engagement.",
    metrics: [
      { k: "Navigation", v: "+30% faster" },
      { k: "Bounce", v: "↓ significant" },
      { k: "Auth", v: "JWT" },
    ],
    stack: ["React", "Node", "Express", "MongoDB", "JWT"],
    href: "https://github.com/dhruvpandit/food-ordering-platform",
    demo: "https://github.com/dhruvpandit/food-ordering-platform",
    accent: "from-[var(--neon-blue)] to-[var(--neon-cyan)]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects I'm proud to ship."
          description="A mix of full-stack engineering and applied ML — built end-to-end."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 transition-all hover:-translate-y-1 hover:border-white/15"
              style={{ boxShadow: "var(--shadow-glass)" }}
            >
              {/* glow on hover */}
              <div
                className={`pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30 ${p.accent}`}
                aria-hidden
              />
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60"
                aria-hidden
              />

              {/* Mock preview */}
              <div className="relative mb-6 h-44 overflow-hidden rounded-2xl border border-border bg-background/60">
                <div className={`absolute inset-0 bg-gradient-to-br opacity-80 ${p.accent}`} />
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="relative flex h-full items-center justify-center">
                  <div className="glass-strong rounded-xl px-4 py-3 font-mono text-xs text-foreground">
                    {p.title.split(" ")[0].toLowerCase()}.run()
                  </div>
                </div>
                <div className="absolute left-3 top-3 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {p.tag}
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

              <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
                {p.metrics.map((m) => (
                  <div key={m.k} className="bg-background/80 p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
                    <div className="mt-1 font-display text-sm font-semibold text-foreground">{m.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-border bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
                >
                  View code
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Live demo →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}