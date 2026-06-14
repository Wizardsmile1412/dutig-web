# Dutig — Design System

The visual language for the Dutig landing page. Every section should derive its
colors, type, and spacing from here so the site stays consistent.

## Direction

**Bolder corporate, grounded in access control.** Dutig's world is checkpoints,
gate passes, verification, and a community of roles (Manatig, Guardig,
Residentig…). The design leans into that: deep navy authority, a decisive blue
accent for action, and structure that reads like a credential system — not
generic SaaS. Deep navy hero with photographic depth, alternating navy/light
bands, disciplined cards. One bold idea, everything else quiet.

## Color tokens

Defined in `src/app/globals.css` under `@theme` (so they become Tailwind
utilities like `bg-navy-900`, `text-blue-600`).

| Token | Hex | Use |
|-------|-----|-----|
| `navy-950` | `#0F1E40` | deepest navy — footers, overlays |
| `navy-900` | `#16264D` | brand navy (logo color) — hero, dark bands |
| `navy-800` | `#1E3A6E` | cards/gradients on navy |
| `blue-600` | `#2563EB` | primary accent — CTAs, links |
| `blue-400` | `#4F8BF0` | hover, highlights, eyebrows on navy |
| white / `gray-50` / `gray-200` | — | light bands, borders, card surfaces |

Text on navy uses `white` with `white/70` for secondary; text on light uses
`navy-900` with `navy-900/70` for secondary.

## Typography

- **Display + body:** IBM Plex Sans Thai (`--font-sans`). Technical, corporate,
  bilingual (TH/EN harmonized). Display = bold/600–700, tight tracking; body =
  400 with relaxed line height.
- **Eyebrows / labels:** uppercase, `tracking-[0.18em]`, small, accent color —
  these *name a section's role*, they aren't decoration.
- Type scale (Tailwind): hero `text-4xl→6xl`, section titles `text-3xl→4xl`,
  body `text-base→lg`, eyebrow `text-xs`.
- *Candidate for later:* IBM Plex Mono for role-codes / data (credential feel) —
  evaluate in Phase 4, don't add prematurely.

## Spacing & shape

- Container: `max-w-6xl` + `px-6 lg:px-8` (the `Container` primitive).
- Section rhythm: `py-20 sm:py-28` (normal), `py-14 sm:py-20` (compact).
- Radii: cards `rounded-2xl`, pills/badges `rounded-full`, buttons `rounded-lg`.
- Borders: `gray-200` on light, `white/10` on navy.

## Signature element (the one memorable thing)

**Account roles as access credentials.** The role taxonomy is real structure, so
present Manatig / Asst. Manatig / Guardig / Guardig+ / Residentig as
credential/ID-badge cards — role code, a permission chip (Industrial · I /
Residential · II), and a verify mark. This is the page's distinctive moment and
ties directly to Dutig's access-control world. Build it in Phase 4; keep all
other sections quiet so this one carries the boldness.

Supporting motif: a thin "checkpoint" divider between sections (a hairline with a
small node) evoking a gate — used sparingly.

## Primitives (`src/components/ui/`)

| Component | Purpose |
|-----------|---------|
| `Container` | width + horizontal padding wrapper |
| `Section` | full-width band — `tone` (navy/light/muted) + `spacing` |
| `SectionHeading` | eyebrow + title + intro, `tone`-aware |
| `Card` | surface — `tone` (light/navy/outline) + `interactive` |
| `Badge` | pill label — `tone` (onNavy/onLight/solid) |
| `Button` / `buttonVariants` | actions; use `buttonVariants` on `<a>` for links |

## Quality floor (non-negotiable)

Responsive down to 320px · visible keyboard focus (`focus-visible` rings) ·
`prefers-reduced-motion` respected · semantic landmarks + single `<h1>` per page ·
sufficient contrast on both navy and light.
