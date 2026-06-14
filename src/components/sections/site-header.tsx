import { getTranslations } from "next-intl/server";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { APP_STORE_URL } from "@/lib/links";
import type { Locale } from "@/i18n/routing";

// Keyboard focus ring for plain text links on the navy header band.
const focusRing =
  "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900";

/** Sits on the navy hero band, so it uses light-on-navy styling. */
export async function SiteHeader({ locale }: { locale: Locale }) {
  const t = await getTranslations("Nav");

  return (
    <header className="relative z-10 bg-navy-900 py-5 text-white">
      <Container className="flex items-center justify-between gap-4">
        <a
          href="#top"
          className={`text-2xl font-bold tracking-tight ${focusRing}`}
        >
          Dutig
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex"
        >
          <a
            href="#how-it-works"
            className={`transition-colors hover:text-white ${focusRing}`}
          >
            {t("pillars")}
          </a>
          <a
            href="#roles"
            className={`transition-colors hover:text-white ${focusRing}`}
          >
            {t("roles")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
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
            {t("getApp")}
          </a>
        </div>
      </Container>
    </header>
  );
}
