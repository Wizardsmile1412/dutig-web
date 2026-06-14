import { defineRouting } from "next-intl/routing";

// Single source of truth for next-intl routing. Thai is the default (primary
// market); English is the secondary toggle. `localePrefix: "always"` keeps a
// leading /th or /en on every URL.
export const routing = defineRouting({
  locales: ["th", "en"],
  defaultLocale: "th",
  localePrefix: "always",
});

// Convenience re-exports so callers don't reach into `routing.*` everywhere.
export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export type Locale = (typeof routing.locales)[number];
