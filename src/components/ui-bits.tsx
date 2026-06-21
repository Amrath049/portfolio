import { useState, type ReactNode } from "react";
import { useReveal } from "../hooks";

/** Project screenshot with a graceful monochrome fallback when missing. */
export function ProjectThumb({
  src,
  title,
  className = "",
}: {
  src?: string;
  title: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const resolved = src ? `${import.meta.env.BASE_URL}${src}` : undefined;

  if (!resolved || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-muted ${className}`}
        aria-hidden
      >
        <span className="bg-linear-to-br from-foreground/70 to-foreground bg-clip-text font-serif text-4xl text-transparent">
          {title.slice(0, 2).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <img
      src={resolved}
      alt={`${title} preview`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/** Fades + lifts its children into view on scroll. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/** Eyebrow label + serif title, used at the top of each section. */
export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="eyebrow mb-3 flex items-center gap-3">
        <span className="inline-block h-px w-8 bg-border-strong" />
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground leading-relaxed text-[15px] sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
