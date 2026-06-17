import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "../data";
import { Reveal } from "./ui-bits";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Get in touch</p>
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Let's build something solid.
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground text-[15px] sm:text-base">
            I'm open to backend roles and interesting problems. Have something in
            mind, or just want to say hi? My inbox is open.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>

          <div className="mt-8 flex items-center justify-center gap-3">
            <SocialLink href={profile.socials.github} label="GitHub">
              <Github className="h-[18px] w-[18px]" />
            </SocialLink>
            <SocialLink href={profile.socials.linkedin} label="LinkedIn">
              <Linkedin className="h-[18px] w-[18px]" />
            </SocialLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-border-strong hover:bg-background"
    >
      {children}
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
