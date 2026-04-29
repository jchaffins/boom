# Ragged Old Flag: The Pyromusical

Next.js + Tailwind recreation of the Lovable site at https://stars-stripes-gather.lovable.app/, ready to deploy on Vercel.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

1. Push this directory to a GitHub repository.
2. Go to https://vercel.com/new and import the repo. Vercel auto-detects Next.js — no config needed.
3. Click Deploy.

Or with the CLI:

```bash
npm i -g vercel
vercel
```

## What's here

- `app/` — Next.js App Router entry (layout, page, global CSS).
- `components/Hero.tsx` — title, countdown to 2026-06-27 7pm ET, fireworks canvas, CTAs.
- `components/Fireworks.tsx` — the canvas firework animation.
- `components/Countdown.tsx` — live countdown.
- `components/Tradition.tsx`, `EventDetails.tsx`, `Schedule.tsx`, `FAQ.tsx`, `Highlights.tsx`, `Footer.tsx` — page sections.

## Things to update before going live

- `GOFUNDME_URL` in `components/Hero.tsx` and `components/Footer.tsx` (currently `https://www.gofundme.com/placeholder`).
- Phone numbers in `components/Footer.tsx` (`Bill: xxx-xxx-xxxx`, `Jen: xxx-xxx-xxxx`).
- The OG/Twitter card image — `app/layout.tsx` doesn't currently set one. Drop a 1200×630 PNG into `public/og.png` and add `images: ["/og.png"]` to `metadata.openGraph` and `metadata.twitter`.
