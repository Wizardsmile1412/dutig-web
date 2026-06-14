import { setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AccountRoles } from "@/components/sections/account-roles";
import { UseCases } from "@/components/sections/use-cases";
import { AppShowcase } from "@/components/sections/app-showcase";
import { GetTheApp } from "@/components/sections/get-the-app";
import { SiteFooter } from "@/components/sections/site-footer";
import type { Locale } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} />
      <main className="flex flex-col">
        <Hero />
        <Pillars />
        <HowItWorks />
        <AccountRoles />
        <UseCases />
        <AppShowcase />
        <GetTheApp />
      </main>
      <SiteFooter />
    </div>
  );
}
