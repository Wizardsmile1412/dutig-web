/*
  IBM Plex Sans Thai — ready to enable.

  `next/font/google` downloads the font at build time. This sandbox blocks
  Google Fonts, so it is NOT imported by default. On your machine or Vercel
  (where fonts.googleapis.com is reachable) enable it in two steps:

    1. In `src/app/[locale]/layout.tsx`, import this and add
       `${sans.variable}` to the <html> className.
    2. Rebuild — the font stack in globals.css already prefers
       `--font-ibm-plex-sans-thai`, so it will pick up automatically.
*/
import { IBM_Plex_Sans_Thai } from "next/font/google";

export const sans = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-thai",
  display: "swap",
});
