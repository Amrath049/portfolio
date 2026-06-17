import { profile, stats } from "../data";
import { Reveal } from "./ui-bits";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <Reveal>
            <p className="eyebrow mb-3 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-border-strong" />
              About
            </p>
            <h2 className="text-3xl text-foreground sm:text-4xl">
              Backend, done deliberately.
            </h2>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-5 leading-relaxed text-muted-foreground text-[15px] sm:text-base">
                I care about the parts users never see: predictable APIs, sane data
                models, and services that fail gracefully. My focus is backend
                architecture, service reliability, and helping teams ship with
                confidence.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-serif text-2xl text-foreground sm:text-3xl">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
