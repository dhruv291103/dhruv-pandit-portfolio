import SectionHeader from "./SectionHeader";

const groups = [
  {
    title: "Languages",
    items: [
      { name: "Python", level: 92 },
      { name: "C++", level: 88 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 86 },
      { name: "Express", level: 84 },
      { name: "Flask", level: 82 },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "TensorFlow", level: 84 },
      { name: "Pandas", level: 88 },
      { name: "Scikit-learn", level: 82 },
      { name: "NumPy", level: 86 },
    ],
  },
  {
    title: "Databases & Tools",
    items: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 84 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 82 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Toolbox"
          title="A stack chosen for clarity and speed."
          description="The tools I reach for to ship reliable, well-tested products."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.title}
              className="reveal glass relative overflow-hidden rounded-2xl p-6 transition-all hover:bg-white/[0.05]"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-medium text-foreground">{g.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {g.items.length} tools
                </span>
              </div>
              <ul className="space-y-4">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/90">{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${s.level}%`,
                          background: "var(--gradient-primary)",
                          boxShadow: "0 0 12px oklch(0.7 0.22 280 / 0.6)",
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}