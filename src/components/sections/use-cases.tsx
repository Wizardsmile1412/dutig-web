import { getTranslations } from "next-intl/server";
import { Home, Building2, Warehouse, Factory, Briefcase, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

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
    <Section id="use-cases" tone="light" spacing="compact">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
          align="center"
        />

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {USE_CASES.map(({ key, icon: Icon }) => (
            <li
              key={key}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white p-6 text-center transition-colors hover:border-blue-600/40"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-navy-900/5 text-navy-900">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold">
                {t(`items.${key}`)}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
