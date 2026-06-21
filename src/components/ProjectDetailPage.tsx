import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Check } from "lucide-react";
import { getProject, projects } from "../data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Reveal, ProjectThumb } from "./ui-bits";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/projects" replace />;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* header */}
        <section className="border-b border-border bg-surface py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <Link
              to="/projects"
              className="mb-7 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              All projects
            </Link>

            <p className="eyebrow mb-3">{project.role}</p>
            <h1 className="text-4xl text-foreground sm:text-5xl">{project.title}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{project.subtitle}</p>

            {project.links.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.links.map((link) => {
                  const Icon =
                    link.kind === "repo"
                      ? Github
                      : link.kind === "admin"
                      ? ArrowUpRight
                      : ExternalLink;
                  const primary = link.kind === "live";
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                        primary
                          ? "bg-foreground text-background hover:-translate-y-0.5"
                          : "border border-border-strong text-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
          {/* screenshots */}
          {project.images && project.images.length > 0 && (
            <div
              className={`mb-12 grid gap-4 sm:mb-16 ${
                project.images.length > 1 ? "sm:grid-cols-2" : "max-w-md"
              }`}
            >
              {project.images.map((img) => (
                <Reveal key={img.src}>
                  <a
                    href={`${import.meta.env.BASE_URL}${img.src}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    title="Open full size"
                  >
                    <figure className="aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
                      <ProjectThumb
                        src={img.src}
                        title={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </figure>
                  </a>
                  <figcaption className="mt-2 text-xs text-muted-foreground">
                    {img.alt}
                  </figcaption>
                </Reveal>
              ))}
            </div>
          )}

          {/* overview */}
          <Reveal>
            <h2 className="text-2xl text-foreground">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground text-[15px] sm:text-base">
              {project.overview}
            </p>
          </Reveal>

          {/* tech stack */}
          <Reveal delay={80}>
            <div className="mt-10">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">
                Tech stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* sections */}
          <div className="mt-12 space-y-10">
            {project.sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 60}>
                <h3 className="text-xl text-foreground">{section.title}</h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          {/* next project */}
          <Reveal>
            <Link
              to={`/projects/${next.slug}`}
              className="group mt-16 flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-border-strong sm:p-6"
            >
              <div>
                <p className="eyebrow mb-1">Next project</p>
                <p className="text-lg text-foreground">{next.title}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
