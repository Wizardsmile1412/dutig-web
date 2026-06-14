import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Short label that names the section's role (encodes meaning, not decoration). */
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  /** Match the background the heading sits on. */
  tone?: "navy" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            tone === "navy" ? "text-blue-400" : "text-blue-600",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            tone === "navy" ? "text-white/70" : "text-navy-900/70",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
