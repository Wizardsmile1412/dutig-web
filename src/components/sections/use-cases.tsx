import { getTranslations } from "next-intl/server";
import { Home, Building2, Warehouse, Factory, Briefcase, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

type UseCaseKey =
  | "villages"
  | "condos"
  | "warehouses"
  | "factories"
  | "offices";

const USE_CASES: { key: UseCaseKey; icon: LucideIcon }[] = [
  { key: "villages", icon: Home },
  { key: "condos", icon: Building2 },
  { key: "warehouses", icon: Warehouse },
  { key: "factories", icon: Factory },
  { key: "offices", icon: Briefcase },
];

export async function UseCases() {
  const t = await getTranslations("UseCases");

  return (
    <Section id="use-cases" tone="navy" spacing="compact" className="bg-transparent">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
          align="center"
          tone="navy"
        />

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {USE_CASES.map(({ key, icon: Icon }) => (
            <li key={key}>
              <Card
                tone="navy"
                interactive
                className="flex h-full flex-col items-center gap-3 text-center hover:scale-[1.03] focus-within:scale-[1.03]"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-white">
                  {t(`items.${key}`)}
                </span>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
