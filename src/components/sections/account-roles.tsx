import { getTranslations } from "next-intl/server";
import { BadgeCheck, Factory, Home } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type RoleKey =
  | "manatig"
  | "asstManatig"
  | "guardig"
  | "guardigPlus"
  | "residentig";

const ROLES: { key: RoleKey; primary?: boolean }[] = [
  { key: "manatig", primary: true },
  { key: "asstManatig" },
  { key: "guardig" },
  { key: "guardigPlus" },
  { key: "residentig" },
];

export async function AccountRoles() {
  const t = await getTranslations("Roles");

  return (
    <Section id="roles" tone="navy" className="bg-gradient-to-b from-navy-950 to-navy-800">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
          align="center"
          tone="navy"
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map(({ key, primary }) => (
            <li key={key}>
              <Card
                tone="navy"
                interactive
                className={cn(
                  "relative flex h-full flex-col gap-5 overflow-hidden hover:scale-[1.03] focus-within:scale-[1.03]",
                  primary && "border-blue-600/50 bg-blue-600/10",
                )}
              >
                {/* Credential top edge: role code + verify mark */}
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <span className="font-mono text-sm font-semibold tracking-wide text-blue-400">
                    {t(`items.${key}.code`)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/50">
                    <BadgeCheck className="size-4 text-blue-400" aria-hidden="true" />
                    {t("verified")}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold tracking-tight">
                      {t(`items.${key}.name`)}
                    </h3>
                    {primary && (
                      <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                        {t("firstAccount")}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-blue-400">
                    {t(`items.${key}.role`)}
                  </p>
                </div>

                <p className="flex-1 text-pretty text-sm leading-relaxed text-white/70">
                  {t(`items.${key}.body`)}
                </p>

                {/* Access segments served by this credential */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                    <Factory className="size-3.5" aria-hidden="true" />
                    {t("industrial")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                    <Home className="size-3.5" aria-hidden="true" />
                    {t("residential")}
                  </span>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
