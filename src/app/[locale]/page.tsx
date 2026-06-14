import { getTranslations, setRequestLocale } from "next-intl/server";
import { Apple, Play } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/locale-switcher";
import type { Locale } from "@/i18n/routing";

const APP_STORE_URL = "https://apps.apple.com/th/app/dutig/id1623325508";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Hero");
  const tNav = await getTranslations("Nav");

  return (
    <div className="flex min-h-screen flex-col bg-navy-900 text-white">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-2xl font-bold tracking-tight">Dutig</span>
        <div className="flex items-center gap-4">
          <LocaleSwitcher currentLocale={locale} />
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "primary",
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            {tNav("getApp")}
          </a>
        </div>
      </header>

      {/* Hero (placeholder — Phase 4 builds the full sections) */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <span className="mb-5 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-400">
          {t("badge")}
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-white/70">
          {t("subtitle")}
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            <Apple className="size-5" aria-hidden="true" />
            {t("ctaAppStore")}
          </a>
          {/*
            "Coming soon" affordance. Native `disabled` keeps it inert without
            client JS (this is a server component); the visible label already
            reads "… coming soon", so screen readers announce the state. We mark
            it aria-disabled too for AT that don't expose the disabled state.
          */}
          <Button
            type="button"
            variant="outline"
            size="lg"
            disabled
            aria-disabled="true"
          >
            <Play className="size-5" aria-hidden="true" />
            {t("ctaGooglePlay")}
          </Button>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Dutig · Mobile Security Application
      </footer>
    </div>
  );
}
