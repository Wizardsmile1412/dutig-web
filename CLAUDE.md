# Dutig — Landing Page

Marketing landing page for **Dutig** (`dutig.co.th`), a hardware-free mobile
security app that connects everyone in a managed area into one "security
community." Core message = three pillars: **Enhance · Connect · Verify**.

> Brand name is **Dutig** (per logo + domain). Not "Dugit".

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript (strict)
- Tailwind CSS v4 (config-less; tokens live in `src/app/globals.css` `@theme`)
- next-intl v4 — bilingual **TH (default) / EN**
- lucide-react · class-variance-authority · clsx · tailwind-merge

## Commands

```bash
npm run dev     # http://localhost:3000 → redirects to /th
npm run build   # production build (needs network for Google Fonts, see below)
npm run lint    # eslint
```

## Conventions (follow these)

- **No hardcoded UI text.** All copy lives in `messages/th.json` + `messages/en.json`
  and is read via `useTranslations` / `getTranslations`. Keep both files in sync;
  `en.json` is the source of truth for the message-key types (`src/types/i18n.ts`).
- **i18n routing** is defined once in `src/i18n/routing.ts` (`defineRouting`).
  Middleware is `src/proxy.ts` (Next 16 renamed `middleware.ts` → `proxy.ts`).
- Every locale layout/page calls `setRequestLocale(locale)` so routes prerender
  **static** (SSG). Keep it that way — don't introduce request-time APIs that
  force dynamic rendering.
- **Design tokens** (navy/blue) are Tailwind utilities from `globals.css` `@theme`
  (`bg-navy-900`, `text-blue-600`, …). Don't hardcode hex in components.
- **Reusable primitives** live in `src/components/ui/`: `Container`, `Section`
  (tone + spacing), `SectionHeading`, `Card`, `Badge`, `Button`/`buttonVariants`.
  Build sections from these, don't re-implement layout.
- Quality floor: responsive to 320px, visible `focus-visible` rings, semantic
  landmarks, single `<h1>` per page.

## Fonts

`src/lib/fonts.ts` loads **IBM Plex Sans Thai** via `next/font/google` and is wired
into `src/app/[locale]/layout.tsx`. This fetches from Google Fonts at build time —
works on a normal machine / Vercel, but fails in network-restricted sandboxes.

## Status & plan

- ✅ **Phase 1** — scaffold, bilingual i18n, brand tokens, static SSG, placeholder hero.
- ✅ **Phase 2** — design-system primitives + `DESIGN.md`.
- ▶️ **Next: Phases 3 + 4, done together per section.** Phase 3 (content) and
  Phase 4 (UI) are interleaved: for each section, write its TH + EN copy into
  `messages/*.json` **and** build the component from the primitives in the same
  pass. Section order: Hero → Pillars (Enhance · Connect · Verify) → How it works →
  Account Roles → Use cases → App showcase → Get the app → Footer.
  Build one section at a time and keep `lint` + `build` green after each.

**Read these for full context:**
- `DESIGN.md` — design direction, tokens, type scale, and the **signature element**
  (account roles as access-credential cards).
- `docs/PROJECT-PLAN.md` — full product brief, IA, SEO strategy, roadmap.
- `docs/content-source.md` — **source material for Phase 3 copy** (Thai from the
  company profile + official English from the App Store, organized per section).
  Write `messages/*.json` from this; don't go hunting the original PDF.

## Assets (not in this repo)

Logo, app screenshots, demo video, company profile, and reference designs live in
the sibling `../Docs/` folder (kept out of the repo — large binaries).
App Store: https://apps.apple.com/th/app/dutig/id1623325508 · Google Play: not live yet.
