import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, otherProjects } from "../data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Reveal, ProjectThumb } from "./ui-bits";

export default function ProjectsListPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* header */}
        <section className="border-b border-border bg-surface py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <p className="eyebrow mb-3 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-border-strong" />
              Selected work
            </p>
            <h1 className="text-4xl text-foreground sm:text-5xl">Projects</h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-[15px] sm:text-base">
              Backend systems and full-stack products I've designed and built — from
              microservices platforms to client-side tools.
            </p>
          </div>
        </section>

        {/* grid */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-6 px-5 sm:grid-cols-2 sm:px-6">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 90}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                    <ProjectThumb
                      src={project.cover}
                      title={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-lg text-foreground">{project.title}</h2>
                      <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                        {project.role}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.oneLiner}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((t) => (
                          <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                        Details
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* client / other projects section */}
        <section className="border-t border-border py-14 sm:py-20 bg-surface/30">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <Reveal>
              <div className="max-w-2xl mb-10">
                <p className="eyebrow mb-3 flex items-center gap-3">
                  <span className="inline-block h-px w-8 bg-border-strong" />
                  Client Websites
                </p>
                <h2 className="text-2xl text-foreground sm:text-3xl">Local Businesses</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground text-sm sm:text-base">
                  Websites built for local businesses to help them establish their online presence, showcase products, and connect with customers.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {otherProjects.map((project, i) => (
                <Reveal key={project.title} delay={i * 90}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                      <ProjectThumb
                        src={project.cover}
                        title={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg text-foreground">{project.title}</h3>
                        <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                          Client Site
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {project.oneLiner}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                          Visit Live
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
