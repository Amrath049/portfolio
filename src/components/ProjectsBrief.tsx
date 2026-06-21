import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects, projects } from "../data";
import { Reveal, SectionHeader } from "./ui-bits";

export default function ProjectsBrief() {
  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Selected work"
            title="Projects"
            description="A few things I've designed and built. Tap any project for the full write-up and screenshots."
          />
          <Reveal className="hidden shrink-0 sm:block">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              All {projects.length} projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-3 sm:mt-14">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <Link
                to={`/projects/${project.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg text-foreground">{project.title}</h3>
                    <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                      {project.role}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {project.oneLiner}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((t) => (
                      <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="rounded-md px-1 py-0.5 text-xs text-muted-foreground">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center self-start rounded-full border border-border text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground sm:self-center">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 sm:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground"
          >
            View all {projects.length} projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
