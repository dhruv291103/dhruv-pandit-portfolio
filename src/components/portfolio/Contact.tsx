import { useState } from "react";
import SectionHeader from "./SectionHeader";

const channels = [
  { label: "Email", value: "dhruv.pandit@example.com", href: "mailto:dhruv.pandit@example.com" },
  { label: "Phone", value: "+91 77389 70479", href: "tel:+917738970479" },
  { label: "GitHub", value: "github.com/dhruvpandit", href: "https://github.com" },
  { label: "LinkedIn", value: "linkedin.com/in/dhruvpandit", href: "https://linkedin.com" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something serious."
          description="Have a role, a product idea, or just want to chat systems & ML? My inbox is open."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="reveal glass relative overflow-hidden rounded-3xl p-8 lg:col-span-2">
            <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-radial)" }} />
            <h3 className="font-display text-2xl font-semibold text-foreground">Reach me directly</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              I usually reply within a day. For urgent things, email is fastest.
            </p>
            <ul className="mt-8 space-y-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group flex items-center justify-between rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm transition-all hover:border-white/15 hover:bg-white/[0.06]"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="flex items-center gap-2 text-foreground/90 group-hover:text-foreground">
                      {c.value}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
              (e.target as HTMLFormElement).reset();
            }}
            className="reveal glass relative overflow-hidden rounded-3xl p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Lionel Messi" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            </div>
            <Field className="mt-5" label="Subject" name="subject" placeholder="Internship / role / collaboration" />
            <div className="mt-5">
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about the team, the product, the problem..."
                className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-white/20 focus:bg-white/[0.06] focus:ring-2 focus:ring-[var(--neon-purple)]/30"
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Or just{" "}
                <a href="mailto:dhruv.pandit@example.com" className="text-foreground underline-offset-4 hover:underline">
                  email me
                </a>{" "}
                directly.
              </p>
              <button
                type="submit"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[var(--gradient-primary)] px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow-sm)] transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-glow)]"
              >
                {sent ? "Sent ✓" : "Send message"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-white/20 focus:bg-white/[0.06] focus:ring-2 focus:ring-[var(--neon-purple)]/30"
      />
    </div>
  );
}