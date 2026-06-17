import type { ReactNode } from "react";
import { useReveal } from "../hooks";

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
