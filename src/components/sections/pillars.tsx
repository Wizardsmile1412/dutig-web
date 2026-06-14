import { getTranslations } from "next-intl/server";
import { TrendingUp, Users, ShieldCheck, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

const PILLARS: { key: "enhance" | "connect" | "verify"; icon: LucideIcon }[] = [
  { key: "enhance", icon: TrendingUp },
  { key: "connect", icon: Users },
  { key: "verify", icon: ShieldCheck },
];

export async function Pillars() {
  const t = await getTranslations("Pillars");

  return (
    <Section id="pillars" tone="light">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ key, icon: Icon }) => (
            <Card key={key} tone="light" interactive className="flex flex-col gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  {t(`${key}.name`)}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {t(`${key}.title`)}
                </h3>
              </div>
              <p className="text-pretty leading-relaxed text-navy-900/70">
                {t(`${key}.body`)}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
