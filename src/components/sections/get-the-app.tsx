import { getTranslations } from "next-intl/server";
import { Apple, Play } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { APP_STORE_URL } from "@/lib/links";

export async function GetTheApp() {
  const t = await getTranslations("GetApp");

  return (
    <Section id="get-app" tone="navy">
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
          align="center"
          tone="navy"
        />

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            <Apple className="size-5" aria-hidden="true" />
            {t("ctaAppStore")}
          </a>
          <Button type="button" variant="outline" size="lg" disabled aria-disabled="true">
            <Play className="size-5" aria-hidden="true" />
            {t("ctaGooglePlay")}
          </Button>
        </div>

        <p className="text-sm text-white/50">{t("free")}</p>
      </Container>
    </Section>
  );
}
