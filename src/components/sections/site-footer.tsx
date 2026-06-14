import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { APP_STORE_URL } from "@/lib/links";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 py-14 text-white">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <span className="text-2xl font-bold tracking-tight">Dutig</span>
            <p className="text-sm leading-relaxed text-white/60">{t("tagline")}</p>
          </div>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md text-sm font-medium text-blue-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
          >
            {t("getApp")}
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 text-sm text-white/40">
          © {year} Dutig · {t("rights")}
        </div>
      </Container>
    </footer>
  );
}
