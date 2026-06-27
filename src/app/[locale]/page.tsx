import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
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
      {/* Header + hero share one photo band, darkened toward the text side. */}
      <div className="relative isolate overflow-hidden text-white">
        <Image
          src="/security-guard-monitoring-in-control-room.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_8%] sm:object-[85%_25%]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
        <div className="absolute inset-0 bg-linear-to-b from-navy-950/80 via-transparent to-navy-950/70" />
        <div className="relative z-10">
          <SiteHeader locale={locale} />
          <Hero />
        </div>
      </div>

      <main className="flex flex-col">
        <Pillars />
        <HowItWorks />

        {/* Roles + use-cases share one photo band: a continuous dark/building backdrop. */}
        <div className="relative isolate overflow-hidden text-white">
          <Image
            src="/office-building.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
          <div className="relative z-10">
            <AccountRoles />
            <UseCases />
          </div>
        </div>

        <AppShowcase />
        <GetTheApp />
      </main>

      <SiteFooter />
    </div>
  );
}
