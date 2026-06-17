import { skills, skillFocus } from "../data";
import { Reveal, SectionHeader } from "./ui-bits";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="Toolbox"
          title="Skills & technologies"
          description="The stack I reach for when designing and building backend systems."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, i) => {
            const { Icon } = skill;
            return (
              <Reveal key={skill.name} delay={(i % 4) * 60}>
                <div className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong">
                  <Icon
                    className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                    aria-hidden
                  />
                  <span className="text-sm text-foreground">{skill.name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-muted-foreground">
            <span className="eyebrow !tracking-[0.18em]">Also</span>
            {skillFocus.map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span className="text-border-strong">·</span>}
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
