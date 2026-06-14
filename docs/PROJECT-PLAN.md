# Dutig Landing Page — Project Plan

> A bilingual (TH/EN), SEO-optimized, single-page marketing site for the **Dutig** mobile security app, built with Next.js. Goal: educate visitors about the product and convert them into app downloads.

> **Brand name:** **Dutig** (per the logo wordmark and `dutig.co.th`). Not "Dugit."

---

## 1. Product Summary (from the company profile)

**Dutig** is a **mobile security application** (`dutig.co.th`) that upgrades physical security for managed areas — *without any hardware*. Instead of cameras and devices, it connects everyone inside an area into a controlled **"security community"** so the people in the space actively participate in keeping it safe.

**Three pillars** (the core message — the spine of the site):

| Pillar | Meaning |
|--------|---------|
| **Enhance** | Raise the efficiency and standard of existing security work — without changing existing procedures. |
| **Connect** | Link every type of person in the area into one coordinated community. |
| **Verify** | Screen and verify people, vehicles, and assets entering/leaving the area. |

**Who it's for:** villages, condos, warehouses, factories, offices — and the people in them (juristic person/management, safety officers (จป.), guards (รปภ.), residents/staff).

**Account roles** (great "feature" content — note the clever `-tig` naming):

- **Manatig** — top-level admin who designs & controls all security operations. *Must be the first account registered.* Splits into Manatig I (industrial) / Manatig II (residential).
- **Asst. Manatig** — delegated manager; can review data/stats and approve entry, but can't redesign operations.
- **Guardig** — security guard; patrol, scheduled incident reporting.
- **Guardig+** — guard at screening points; issues gate passes, checks permission requests + all base guard functions.
- **Residentig** — resident; visitor approval, plus Home Automation / Home Security (*in development*).

**Distribution:** Google Play + App Store, Line OA, YouTube.

---

## 2. Goals & Success Criteria

1. **Educate** — a visitor understands what Dutig is and why it's different within ~30 seconds of scrolling.
2. **SEO** — ranks for Thai security/security-app terms; technically excellent (Lighthouse SEO 100, fast LCP).
3. **Convert** — clear, repeated path to the App Store / Google Play download.

**Definition of done:** Lighthouse ≥ 95 across Performance / Accessibility / Best Practices / SEO on mobile, both languages, no console errors, responsive 320px → 1440px+.

---

## 3. Design Direction — "Bolder Corporate"

Chosen direction: the **bolder corporate** look of the reference pages (SkyStructure / Alpha Digital / BlueHome) — deep navy hero with photographic background + dark overlay, a bright-blue accent, overlapping cards, icon feature grids, phone mockups, stats, testimonials, contact band. Applied through the **frontend-design skill** approach: deliberate, non-templated choices with one signature element, grounded in Dutig's world (access control, gate passes, community security) rather than generic stock.

### Design tokens (derived from the real logo + app)

```
--navy-950:  #0F1E40   /* deepest navy, footer / overlays */
--navy-900:  #16264D   /* brand navy — logo color, hero background */
--navy-800:  #1E3A6E   /* cards on navy, gradients */
--blue-600:  #2563EB   /* bright accent — primary CTA */
--blue-400:  #4F8BF0   /* hover / highlights / links */
--white:     #FFFFFF
--gray-100:  #F4F6FB   /* light section background */
--gray-500:  #6B7280   /* secondary text */
```

The actual app also uses a **periwinkle/slate** (`#6B7BA6`) and **soft blush** (`#F5CCCC`) for some UI. We may reuse these *sparingly* as secondary accents to visually tie the marketing site to the in-app experience — but the hero/CTA stay navy + bright blue.

### Typography (bilingual TH/EN)

A family that harmonizes Thai + Latin so headings look consistent across both languages:

- **Recommended:** `IBM Plex Sans Thai` (+ Latin sibling `IBM Plex Sans`) — clean, corporate, free on Google Fonts.
- Alternatives: `Noto Sans Thai` + `Inter`, or `LINE Seed` (popular in TH — check license).
- The app uses a bold, slightly condensed display for headlines ("Welcome, SIGN IN!") — we can echo that energy in the hero.

Load via `next/font/google` for zero layout shift + self-hosting.

---

## 4. Information Architecture (single page)

1. **Header / Nav** — logo, anchor links (Product · Pillars · Roles · Get the app), TH/EN toggle, sticky CTA.
2. **Hero** — headline + subhead, primary download buttons, app mockup over navy + overlay.
3. **Three Pillars** — Enhance · Connect · Verify, icon + short copy each.
4. **How it works** — "no hardware, just the app" — short visual explainer.
5. **Account Roles** — card grid for Manatig / Asst. Manatig / Guardig / Guardig+ / Residentig, with Industrial vs Residential badges/tabs.
6. **Use cases** — villages, condos, warehouses, factories, offices (icon row).
7. **App showcase** — phone mockups of the real screens. *Built to accept the demo video later* (video TBD).
8. **Social proof / trust** — placeholder testimonials or "trusted by" (real content later).
9. **Get the app** — CTA band: App Store + Google Play badges, QR codes, Line OA.
10. **Contact / Footer** — email, phone, socials, TH/EN toggle, copyright.

---

## 5. Tech Stack & Architecture

| Concern | Choice | Why |
|---------|--------|-----|
| Framework | **Next.js (App Router)** | SSG/SSR for great SEO, industry-standard React, room for a contact API later. |
| Language | **TypeScript** | Type safety = fewer bugs, better habits. |
| Styling | **Tailwind CSS** | Fast, consistent, token-friendly. |
| i18n | **next-intl** | Best modern App-Router i18n; `[locale]` routing. *(Matches your `near-changs-frontend` setup.)* |
| Fonts | **next/font** | Self-hosted Google fonts, no layout shift. |
| Icons | **lucide-react** | Clean, consistent icons. |
| Animation (optional) | **Framer Motion** | Subtle scroll/reveal — keep light. |
| Linting | **ESLint + Prettier** | Clean, consistent code. |
| Deploy | **Vercel** | Zero-config Next.js, free tier, preview deploys. |

### Where it lives & folder structure

Scaffold the app at **`dutig/web/`** (siblings: `dutig/Docs/` assets, `dutig/Dutig/` planning). Assets copied from `Docs/` into `web/public/`.

```
dutig/web/
├── messages/{th,en}.json      # i18n content (no hardcoded text in components)
├── public/images/             # logo, app screenshots, og-image
├── src/
│   ├── app/[locale]/
│   │   ├── layout.tsx          # fonts, metadata, providers
│   │   └── page.tsx            # assembles sections
│   ├── components/
│   │   ├── sections/           # Hero, Pillars, Roles, AppShowcase, ...
│   │   ├── ui/                 # Button, Card, Badge, Container
│   │   └── layout/            # Header, Footer, LangToggle
│   └── lib/                    # seo.ts, structured-data.ts, utils
├── tailwind.config.ts
└── next.config.ts
```

Principle: **one component = one responsibility**, all copy pulled from `messages/*.json` — clean *and* bilingual by design.

---

## 6. SEO Strategy (a primary goal — treat as first-class)

- **Per-locale metadata** via `generateMetadata` (title/description/OG/Twitter in TH + EN).
- **hreflang** tags linking `th` ↔ `en`.
- **JSON-LD structured data:** `MobileApplication` — name `DUTIG`, `applicationCategory: SecurityApplication`/Utilities, `operatingSystem: iOS` (+ Android when confirmed), `offers` price `0` THB (free), publisher `Charnpipop Buranasamut`, `installUrl` = App Store link. **No `aggregateRating`** (the store has too few ratings — don't fabricate one). Plus an `Organization` block.
- **Semantic HTML:** one `<h1>`, logical headings, descriptive `alt`, real `<nav>`/`<section>`/`<footer>`.
- **`sitemap.xml` + `robots.txt`** generated by Next.
- **Performance = SEO:** `next/image` (AVIF/WebP, lazy), font preload, minimal client JS (most sections server components).
- **Open Graph image** in brand style.

---

## 7. AI-Assisted Build Workflow (what you want to learn)

You act as **orchestrator/reviewer**; delegate small, verifiable units to Claude sub-agents and skills — the way senior engineers use AI, never one giant "build the whole site" prompt.

### Skills
- **frontend-design skill** — fetched and on hand. We *read it before* writing UI so output follows its conventions (distinctive palette/type, one signature element, a11y floor, restraint). To install it permanently: Settings → Capabilities.

### Sub-agents (focused, isolated tasks)
1. **Scaffold agent** — Next.js + TS + Tailwind + next-intl, lint config, folder structure (one-time).
2. **Section-implementation agent** — build one section at a time from spec + tokens.
3. **Content/i18n agent** — structure + translate copy into `th.json` / `en.json` from the profile.
4. **Code-review agent** — *separate* reviewer for each diff (cleanliness, a11y, token usage).
5. **QA/verification agent** — runs build, checks Lighthouse, tests responsiveness, reports issues.

**Rules to keep code clean while delegating:** give every agent the shared tokens + conventions up front; one source of truth (you review every diff); verify, don't trust (build + review pass after each agent); keep tasks small enough to read the whole diff.

---

## 8. Build Roadmap

- **Phase 0 — Assets & content** *(mostly done)*: ✅ logo, ✅ app screenshots + video, ✅ palette direction, ✅ brand name. Still needed: real store links, real contact info, domain confirmation.
- **Phase 1 — Scaffold**: Next.js project, Tailwind tokens, next-intl, fonts, lint; deploy blank page to Vercel.
- **Phase 2 — Design system**: Button, Card, Badge, Container, Section primitives + tokens.
- **Phase 3 — Content model**: write `th.json` / `en.json` from the profile.
- **Phase 4 — Sections**: build top-to-bottom (Header → Hero → … → Footer).
- **Phase 5 — SEO**: metadata, JSON-LD, sitemap, OG image, hreflang.
- **Phase 6 — Polish**: animation, responsive QA, accessibility.
- **Phase 7 — Verify & ship**: Lighthouse both locales, cross-device, deploy.

---

## 9. Assets on hand

- **Logo:** `dutig/Docs/logo/Dutig-01.png` (navy wordmark). *Ask friend for SVG if available.*
- **App screenshots:** `dutig/Docs/app-demo/pictures/` — 52 real screens (sign-in, statistics/gate-pass dashboard, "permission to leave the area," Residentig management, etc.). Good showcase candidates identified.
- **Demo video:** `dutig/Docs/app-demo/demo-app.MP4` — usage TBD; section built to accept it later.
- **Reference designs:** `dutig/Docs/ref/landing-page/` — the bolder-corporate look we're matching.
- **Company profile:** `dutig/Docs/Dutig-company-profile.pdf`.

### Verified App Store facts (live listing)

- **Link:** https://apps.apple.com/th/app/dutig/id1623325508 — ID `1623325508`.
- **Name / tagline:** DUTIG — "Enhance your security system".
- **Publisher:** Charnpipop Buranasamut. **Category:** Utilities. **Price:** Free + IAP. **Age:** 4+. **Size:** 20.8 MB. **Min OS:** iOS 12.4+ (also iPad / Mac M1 / Vision).
- **Versions:** 1.1 (2024-04-26), 1.0 (2023-11-01). Ratings: too few to display (no aggregate).
- **Official EN description** (use as EN copy seed): pillars stated as "Increase efficiency and enhance security measures / Connect individuals within the area / Verification and screening," followed by the full Dutig paragraph.
- **IAP (context):** Manatig 2 ฿1,490/yr; gate-pass packs ฿59–฿699/day; storage ฿199–฿1,490.
- **Dev public page:** Facebook `profile.php?id=61550594063904`. **Privacy policy:** pdpa.pro link.

## 10. Still to confirm (non-blocking)

1. ✅ **App Store link** — live (above). **Google Play** link still needed (the profile shows a Play badge — is there an Android build live?).
2. **Real contact info** — profile shows placeholders (012-345-6789 / +123-456-7890). Real phone/email for the site? (Facebook page is the only public contact found.)
3. **Domain** — deploy to `dutig.co.th` (or a subdomain) eventually?
4. **Logo SVG** — vector version for crisp rendering?

---

*Next step: scaffold the Next.js project at `dutig/web/` (Phase 1), then build section by section using the sub-agent workflow above.*
