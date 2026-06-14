import { getTranslations } from "next-intl/server";
import { Apple, Play, ShieldCheck, Download, Building2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { APP_STORE_URL } from "@/lib/links";

export async function Hero() {
  const t = await getTranslations("Hero");

  const trust = [
    { icon: ShieldCheck, label: t("noHardware") },
    { icon: Download, label: t("freeToStart") },
    { icon: Building2, label: t("worksEverywhere") },
  ];

  return (
    <section>
      <Container className="flex flex-col items-center py-20 text-center">
      <Badge tone="onNavy" className="mb-6">
        {t("badge")}
      </Badge>

      <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
        {t("title")}
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
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
          client JS (server component); the visible label reads "… coming soon",
          so screen readers announce the state. aria-disabled covers AT that
          don't expose the native disabled state.
        */}
        <Button type="button" variant="outline" size="lg" disabled aria-disabled="true">
          <Play className="size-5" aria-hidden="true" />
          {t("ctaGooglePlay")}
        </Button>
      </div>

      <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/60">
        {trust.map(({ icon: Icon, label }) => (
          <li key={label} className="inline-flex items-center gap-2">
            <Icon className="size-4 text-blue-400" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
      </Container>
    </section>
  );
}
