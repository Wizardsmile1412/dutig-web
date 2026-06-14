import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-2xl p-6 sm:p-7", {
  variants: {
    tone: {
      light: "border border-gray-200 bg-white shadow-sm",
      navy: "border border-white/10 bg-white/5",
      outline: "border border-navy-900/10 bg-transparent",
    },
    interactive: {
      true: "transition-all duration-200",
      false: "",
    },
  },
  compoundVariants: [
    {
      tone: "light",
      interactive: true,
      class: "hover:border-blue-600/40 hover:shadow-md",
    },
    {
      tone: "navy",
      interactive: true,
      class: "hover:border-white/25 hover:bg-white/10",
    },
  ],
  defaultVariants: {
    tone: "light",
    interactive: false,
  },
});

interface CardProps
  extends ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

export function Card({ tone, interactive, className, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ tone, interactive }), className)}
      {...props}
    />
  );
}
