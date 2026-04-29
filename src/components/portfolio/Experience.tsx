import SectionHeader from "./SectionHeader";

const bullets = [
  "Built and maintained workflows on IBM Security Identity Manager (ISIM) for enterprise clients.",
  "Automated identity lifecycle: provisioning, role mapping, and de-provisioning across systems.",
  "Integrated Active Directory and LDAP for unified authentication and access control.",
  "Wrote backend automation scripts that cut manual IAM tasks and reduced incident turnaround.",
];

const stack = ["IBM ISIM", "Active Directory", "LDAP", "Java", "REST APIs", "Workflow Automation"];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've shipped real work."
          description="Enterprise-grade identity and access management at scale."
        />

        <div className="reveal glow-border glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-primary)" }} aria-hidden />

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-primary)] font-display text-lg font-bold text-primary-foreground shadow-[var(--shadow-glow-sm)]">
                NS
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Current role</div>
                <h3 className="mt-1 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  IAM Engineer
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  NuSummit CyberSecurity · Mumbai
                </p>
              </div>
            </div>
            <span className="rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">
              Present
            </span>
          </div>

          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-purple)] shadow-[0_0_8px_var(--neon-purple)]" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-border bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}