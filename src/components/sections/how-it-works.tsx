import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const STEPS = ["noHardware", "download", "community", "control"] as const;

export async function HowItWorks() {
  const t = await getTranslations("HowItWorks");

  return (
    <Section id="how-it-works" tone="muted">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
          align="center"
        />

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step} className="flex flex-col gap-4">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-navy-900 font-mono text-sm font-semibold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-tight">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="text-pretty leading-relaxed text-navy-900/70">
                {t(`steps.${step}.body`)}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
