export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
      <div
        className="absolute -z-10 left-1/2 top-0 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--gradient-radial)" }}
        aria-hidden
      />
      <div
        className="absolute -z-10 right-[-10%] top-1/3 h-[40vh] w-[40vh] rounded-full opacity-40 blur-3xl animate-[float_8s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.2 245 / 0.5), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -z-10 left-[-5%] bottom-1/4 h-[30vh] w-[30vh] rounded-full opacity-30 blur-3xl animate-[float_10s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.16 200 / 0.45), transparent 70%)" }}
        aria-hidden
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-8">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground animate-[fade-up_0.7s_ease-out_both]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-cyan)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
            </span>
            Available for SDE / Backend / ML roles · 2026
          </div>

          <h1
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.05s both" }}
          >
            <span className="text-gradient">Building scalable systems</span>
            <br />
            <span className="text-gradient-brand">& intelligent experiences.</span>
          </h1>

          <p
            className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
            style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}
          >
            I'm <span className="text-foreground">Dhruv Pandit</span> — a software
            engineer focused on backend systems, AI, and crafting fast, reliable
            products. Currently shipping identity automation at NuSummit.
          </p>

          <div
            className="flex flex-wrap items-center gap-3"
            style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s both" }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[var(--gradient-primary)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow-sm)] transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-glow)]"
            >
              <span className="relative z-10">View projects</span>
              <svg className="relative z-10 transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="/resume.pdf"
              download="Dhruv-Pandit-Resume.pdf"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/10"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Download résumé
            </a>
          </div>

          {/* Stat strip */}
          <div
            className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
            style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}
          >
            {[
              { v: "200+", l: "DSA solved" },
              { v: "0.72", l: "BLEU score" },
              { v: "30%", l: "Faster nav" },
              { v: "₹7.5K", l: "Comp. prize" },
            ].map((s) => (
              <div key={s.l} className="bg-background/80 p-4 backdrop-blur">
                <div className="font-display text-2xl font-semibold text-gradient-brand">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]">
          Scroll
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-foreground/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}