import type messages from "../../messages/en.json";
import type { locales } from "@/i18n/routing";

// next-intl v4 type augmentation: gives `useTranslations` / `getTranslations`
// autocomplete + compile-time key safety, and types `locale` everywhere.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof locales)[number];
    Messages: typeof messages;
  }
}
