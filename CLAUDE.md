# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project context

Single-page event landing site for **Meadowmoore Boom 2026: Ragged Old Flag — The Pyromusical**, an annual backyard fireworks event in Pickerington, OH (June 27, 2026). Originally built on Lovable at `stars-stripes-gather.lovable.app`; this repo is the Next.js port deployed to Vercel from `jchaffins/boom` on GitHub. Auto-deploys on push to `main`.

## Commands

```bash
npm install            # first-time / after deps change
npm run dev            # Turbopack dev server at localhost:3000 with HMR
npm run build          # production build (Next 16 + Turbopack)
npm run start          # serve the production build locally
```

There is no lint script and no test suite. Do not invent commands.

## Stack

- **Next.js 16 App Router** with Turbopack (auto-upgraded from 14 mid-project for security; React 19 came along with it).
- **Tailwind v3** with shadcn-style HSL CSS variables — all design tokens live in `app/globals.css` and are exposed to Tailwind via `tailwind.config.ts`. Custom utility colors `navy`, `gold`, `red`, `cream` map to those vars.
- **TypeScript strict.** Path alias `@/*` maps to repo root.
- **lucide-react** for icons. No other UI libs (no shadcn/Radix).

## Architecture

### Page composition

The site is a single page at `app/page.tsx` composing seven sections in this order:

1. `Hero` — countdown + canvas fireworks animation + CTAs
2. `Tradition` — **renamed in UI to "What to Expect"; file name is historic, do not rename without intent**
3. `EventDetails` — date / arrival / location cards w/ map deep links
4. `Schedule` — timeline
5. `Funding` — fundraising section (progress bar, donor list, suggested amounts, Venmo CTA)
6. `FAQ` — accordion
7. `Highlights` — two YouTube embeds
8. `Footer` — flag stripe + "Made with ❤ in the USA"

### Server vs. client components

Default to server components. Only the following are `"use client"` and they must stay that way:

- `components/Fireworks.tsx` — canvas RAF animation
- `components/Countdown.tsx` — live `setInterval` countdown
- `components/FAQ.tsx` — accordion state via `useState`

`components/Funding.tsx` is an **async server component** that calls `getDonationTotals()` at build time. Do not convert it to a client component — that would force the sheet fetch into the browser and break the architecture below.

### Donation data flow (the only non-trivial subsystem)

- `lib/donations.ts` fetches a published Google Sheet CSV (`SHEET_URL` constant) using `fetch(..., { next: { revalidate: 300 } })`. Sheet columns: **A=Date, B=Donor name, C=Amount** (amount may include `$` and thousands commas — the parser handles both).
- Result: `{ raised: number, donors: Donor[] }` where `Donor = { name, amount }`.
- The page is statically generated with **5-minute ISR** — Vercel re-fetches the sheet in the background when a visitor hits the page after the window expires. There is no client-side sheet fetch and no API key.
- The sheet must be published to web as CSV (File → Share → Publish to web → CSV) for this URL to work. The editor URL won't.
- `Funding.tsx` renders a marquee donor list that **only animates when `donors.length > 8`** (constant `SCROLL_THRESHOLD`). The marquee uses the `marquee-y` keyframes defined in `tailwind.config.ts`; duration scales with donor count via inline `animationDuration`. Pause-on-hover is via `group-hover:[animation-play-state:paused]`.

### Configurable constants worth knowing

| Value | Location |
|---|---|
| Event date/time (countdown target) | `components/Countdown.tsx` (`TARGET`) |
| Address + map links | `components/EventDetails.tsx` (`ADDRESS`) |
| Phone for first-responder RSVPs | `components/Tradition.tsx` (inline `tel:` link) |
| Funding goal | `lib/donations.ts` (`FUNDING_GOAL`) |
| Donation sheet URL | `lib/donations.ts` (`SHEET_URL`) |
| Venmo username | `components/Funding.tsx` (`VENMO_USERNAME`) |
| Past-year YouTube IDs | `components/Highlights.tsx` |

## Conventions

- **Commits:** short imperative subject ("Update FAQ rain answer", "Add donor list scroll"). Body when helpful. Each commit ends with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`.
- **Sections on navy backgrounds** (Hero, EventDetails, Funding, Footer) use `bg-primary text-primary-foreground` and replace `text-muted-foreground` with `text-white/70` for body prose.
- **The site has no local images.** All visuals are canvas (fireworks), CSS gradients (star field, flag stripes), lucide icons, and YouTube embeds. Do not add image dependencies without a clear reason.
- **Responsive type:** the hero "Meadowmoore Boom" / "Ragged Old Flag" / "The Pyromusical" stack uses explicit `sm:` / `md:` / `lg:` breakpoints because long words overflow narrow viewports — preserve that pattern when editing hero typography.
- **Apostrophes/quotes in JSX:** use `&apos;`, `&rsquo;`, `&ldquo;`, `&rdquo;`, `&hellip;` to keep strict JSX/lint clean.

## Things that look like bugs but aren't

- `components/Tradition.tsx` exports a component that renders a section titled "What to Expect" — the filename is from an earlier copy version and was deliberately not renamed.
- `border-input` / `--input` show up in `globals.css` and `tailwind.config.ts` but no input components exist yet — leave them; they're shadcn-token convention and harmless.
- `lib/utils.ts` has a single `cn()` helper but isn't imported anywhere right now — keep it; it's the standard helper if any future component needs class composition.
