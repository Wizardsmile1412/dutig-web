import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium",
  {
    variants: {
      tone: {
        // pill on a navy/dark background
        onNavy: "border-white/20 bg-white/5 text-blue-400",
        // pill on a white/light background
        onLight: "border-blue-600/20 bg-blue-600/5 text-blue-600",
        // filled accent pill
        solid: "border-transparent bg-blue-600 text-white",
      },
    },
    defaultVariants: {
      tone: "onLight",
    },
  },
);

interface BadgeProps
  extends ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {}

export function Badge({ tone, className, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
