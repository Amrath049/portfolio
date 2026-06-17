import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { Reveal, SectionHeader } from "./ui-bits";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects I've shipped"
          description="A focused set of backend systems I've helped design and build in production."
        />

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl text-foreground">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-4 leading-relaxed text-muted-foreground text-[15px]">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-border-strong" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
