import { ArrowUp } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground font-serif text-sm text-background">
            A
          </span>
          <p className="text-sm text-muted-foreground">
            © 2026 {profile.name}. Built with React & Tailwind.
          </p>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border">
            <ArrowUp className="h-3.5 w-3.5" />
          </span>
        </button>
      </div>
    </footer>
  );
}
