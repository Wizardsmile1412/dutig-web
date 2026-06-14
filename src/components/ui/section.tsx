import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

// A full-width band. `tone` sets the background; sections on the page alternate
// navy and light. `scroll-mt` offsets the sticky header for in-page anchors.
const sectionVariants = cva("scroll-mt-20", {
  variants: {
    tone: {
      navy: "bg-navy-900 text-white",
      light: "bg-white text-navy-900",
      muted: "bg-gray-50 text-navy-900",
    },
    spacing: {
      normal: "py-20 sm:py-28",
      compact: "py-14 sm:py-20",
    },
  },
  defaultVariants: {
    tone: "light",
    spacing: "normal",
  },
});

interface SectionProps
  extends ComponentProps<"section">,
    VariantProps<typeof sectionVariants> {}

export function Section({ tone, spacing, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ tone, spacing }), className)}
      {...props}
    />
  );
}
