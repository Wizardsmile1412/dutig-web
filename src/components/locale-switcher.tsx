"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");

  function switchTo(next: Locale) {
    if (next === currentLocale) return;
    // Swap the leading /th or /en segment.
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  }

  return (
    <div
      className="inline-flex items-center rounded-full border border-white/25 p-0.5 text-sm"
      role="group"
      aria-label={t("label")}
    >
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchTo(loc)}
          aria-current={loc === currentLocale ? "true" : undefined}
          className={cn(
            "rounded-full px-3 py-1 font-medium transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900",
            loc === currentLocale
              ? "bg-white text-navy-900"
              : "text-white/80 hover:text-white",
          )}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}
