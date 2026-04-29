type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-purple)] shadow-[0_0_10px_var(--neon-purple)]" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-gradient sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}