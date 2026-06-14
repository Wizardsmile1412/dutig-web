import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type ScreenKey = "signIn" | "dashboard" | "permission" | "roles";

export async function AppShowcase() {
  const t = await getTranslations("Showcase");
  const locale = await getLocale();

  // Real app screens (public/screens/). The sign-in shot is locale-aware so
  // the framed screenshot matches the page language — and shows the TH/EN
  // toggle either way.
  const screens: { key: ScreenKey; src: string }[] = [
    {
      key: "signIn",
      src: locale === "th" ? "/screens/login-th.PNG" : "/screens/login-en.PNG",
    },
    { key: "dashboard", src: "/screens/dashboard.PNG" },
    { key: "permission", src: "/screens/permission2.PNG" },
    { key: "roles", src: "/screens/roles.PNG" },
  ];

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
          {screens.map(({ key, src }) => (
            <li key={key} className="flex flex-col items-center gap-5 text-center">
              {/* Phone bezel wrapping the real screenshot. */}
              <div className="relative aspect-[9/19] w-full max-w-[200px] overflow-hidden rounded-[1.75rem] border border-navy-900/10 bg-navy-900 p-1.5 shadow-md">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-white">
                  <Image
                    src={src}
                    alt={t(`items.${key}.title`)}
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                  />
                </div>
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
