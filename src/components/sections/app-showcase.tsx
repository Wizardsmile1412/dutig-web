import { getTranslations } from "next-intl/server";
import { LogIn, BarChart3, DoorOpen, UsersRound, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type ScreenKey = "signIn" | "dashboard" | "permission" | "roles";

const SCREENS: { key: ScreenKey; icon: LucideIcon }[] = [
  { key: "signIn", icon: LogIn },
  { key: "dashboard", icon: BarChart3 },
  { key: "permission", icon: DoorOpen },
  { key: "roles", icon: UsersRound },
];

export async function AppShowcase() {
  const t = await getTranslations("Showcase");

  return (
    <Section id="app" tone="muted">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
          align="center"
        />

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SCREENS.map(({ key, icon: Icon }) => (
            <li key={key} className="flex flex-col items-center gap-5 text-center">
              {/*
                Phone-frame placeholder. Real screens live in ../Docs/app-demo/;
                drop an <Image> inside this frame when the assets land in the repo.
              */}
              <div className="flex aspect-[9/19] w-full max-w-[200px] items-center justify-center rounded-[1.75rem] border border-navy-900/10 bg-gradient-to-b from-navy-900 to-navy-950 p-3 shadow-sm">
                <Icon className="size-10 text-blue-400" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold tracking-tight">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-navy-900/70">
                  {t(`items.${key}.body`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
