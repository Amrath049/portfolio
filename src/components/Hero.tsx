import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* faint grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12">
          {/* Left: copy */}
          <div className="reveal is-visible order-2 md:order-1">
            {profile.available && (
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                <span className="relative inline-flex h-2 w-2 text-emerald-500">
                  <span className="ping-soft absolute inset-0 rounded-full" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to opportunities
              </span>
            )}

            <h1 className="text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hi, I'm {profile.name.split(" ")[0]}.
              <span className="block text-muted-foreground">
                I engineer the backend.
              </span>
            </h1>

            <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground sm:text-base">
              <span className="text-foreground">{profile.role}</span>
              {profile.stack.map((s) => (
                <span key={s} className="flex items-center gap-2">
                  <span className="text-border-strong">/</span>
                  {s}
                </span>
              ))}
            </p>

            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground text-[15px] sm:text-base">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowDown className="h-4 w-4" />
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>

              <div className="ml-1 flex items-center gap-1">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Github className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Linkedin className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: avatar */}
          <div className="reveal is-visible order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative">
              <div className="avatar-disc relative flex h-48 w-48 items-end justify-center overflow-hidden rounded-full border border-border-strong shadow-sm sm:h-60 sm:w-60">
                <img
                  src={profile.avatar}
                  alt={`Illustrated avatar of ${profile.name}`}
                  className="h-[94%] w-[94%] object-contain object-bottom"
                  loading="eager"
                  width={256}
                  height={256}
                />
              </div>

              {/* online status badge */}
              <span className="absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-emerald-500 text-emerald-500 sm:bottom-4 sm:right-4">
                <span className="ping-soft absolute inset-0 rounded-full" />
              </span>

              {/* orbiting accent ring */}
              <div
                className="pointer-events-none absolute -inset-3 rounded-full border border-dashed border-border"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground sm:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
