import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "../data";
import { Reveal, SectionHeader } from "./ui-bits";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="Always learning"
          title="Licenses & certifications"
          description="Continuous learning to sharpen my craft and stay current."
        />

        <div className="mt-12 divide-y divide-border border-y border-border sm:mt-14">
          {certifications.map((cert) => (
            <Reveal key={cert.credentialId}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 py-6 transition-colors hover:bg-muted/40 sm:gap-5 sm:px-2"
              >
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground">
                  <Award className="h-5 w-5" />
                </span>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base text-foreground sm:text-lg">{cert.title}</h3>
                    <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer} · Issued {cert.date}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
