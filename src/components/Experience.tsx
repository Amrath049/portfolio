import { Briefcase } from "lucide-react";
import { experience } from "../data";
import { Reveal, SectionHeader } from "./ui-bits";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've grown"
          description="A few years of focused backend work — building services, designing APIs, and growing into broader architectural ownership."
        />

        <div className="mt-14 sm:mt-16">
          <ol className="relative ml-1 border-l border-border-strong">
            {experience.map((job, i) => (
              <li key={i} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
                {/* node */}
                <span
                  className={`absolute -left-[7px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 ${
                    job.current
                      ? "border-foreground bg-foreground"
                      : "border-border-strong bg-background"
                  }`}
                  aria-hidden
                />
                <Reveal delay={i * 80}>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-xl text-foreground">{job.title}</h3>
                    {job.current && (
                      <span className="rounded-full bg-foreground px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-background">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 text-foreground">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.company}
                    </span>
                    <span className="text-border-strong">•</span>
                    <span>{job.period}</span>
                    <span className="text-border-strong">•</span>
                    <span>{job.type}</span>
                  </div>

                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-[15px]">
                    {job.summary}
                  </p>

                  <ul className="mt-4 grid max-w-2xl gap-2.5 sm:grid-cols-2">
                    {job.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-border-strong" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
