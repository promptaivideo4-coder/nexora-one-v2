<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Nexora One — Connected Digital Ecosystem

Nexora One connects **customers, businesses, professionals, growth partners, brands and distributors** through one growing digital ecosystem.

This repository is the **complete export of the Google AI Studio app** — every page, component, data file, locale, image asset, config and lockfile is committed here, so the project can be cloned and run end‑to‑end outside AI Studio.

- **View the app in AI Studio:** https://ai.studio/apps/6f9d251c-3a03-4cda-88d1-81c111a0e233
- **Canonical production URL:** https://nexora.one/

---

## Tech stack

| Layer | Technology |
| --- | --- |
| UI | React 19 + TypeScript |
| Build tool | Vite 8 (Rolldown) |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Routing | react-router-dom 7 (`BrowserRouter`, SPA rewrites) |
| Animation | framer-motion / motion |
| Charts | recharts 3 |
| i18n | i18next + react-i18next + browser language detector (English / हिंदी) |
| SEO/meta | react-helmet-async |
| Icons | lucide-react |
| Hosting | Vercel (`vercel.json`) — any static host works |

## Run locally

**Prerequisites:** Node.js 20+ (tested on Node 22) and npm.

```bash
# 1. Install dependencies
npm install

# 2. (Optional) create your local env file
cp .env.example .env.local
#    Set GEMINI_API_KEY only if you enable server-side Gemini calls.
#    The site itself is fully static and renders without any API key.

# 3. Start the dev server (http://localhost:3000)
npm run dev
```

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server on port `3000`, bound to `0.0.0.0` (proxy/preview friendly) |
| `npm run build` | Production build into `dist/` with manual vendor chunking |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Type-check the whole project (`tsc --noEmit`) |
| `npm run clean` | Remove `dist/` and a generated `server.js` |
| `node scripts/generate-sitemap.mjs` | Regenerate `public/sitemap.xml` for https://nexora.one |

## Project structure

```
.
├── index.html                  # App shell: SEO meta, JSON-LD, fonts, icon links
├── metadata.json               # AI Studio app metadata (capabilities, name, description)
├── vercel.json                 # SPA rewrites + immutable asset caching headers
├── vite.config.ts              # React + Tailwind plugins, "@" -> src alias, vendor chunks
├── scripts/
│   └── generate-sitemap.mjs    # Route-aware sitemap generator
├── public/
│   ├── assets/                 # Optimised .webp art + legacy /assets/images/*.jpg
│   ├── favicon.*, robots.txt, sitemap.xml
│   └── src/assets/images/      # Fallback copy used by InteractiveImage.tsx at runtime
└── src/
    ├── App.tsx                 # Router, page transitions, providers
    ├── main.tsx                # React root + i18n bootstrap
    ├── i18n.ts                 # i18next config (en / hi resources)
    ├── locales/                # en.json, hi.json translation bundles
    ├── components/
    │   ├── common/             # Button, GlassCard, SEO, Lightbox, InteractiveImage, …
    │   ├── home/               # Homepage sections
    │   ├── insights/           # Ecosystem charts (recharts)
    │   ├── investors/          # Investment projection chart
    │   └── layout/             # Header, footer, mobile dock, language selector
    ├── pages/                  # 12 route-level pages
    ├── data/                   # All site content as typed TS modules
    │   ├── ecosystem.ts  insights.ts  navigation.ts  products.ts
    │   ├── research.ts   seo.ts       stakeholders.ts verticals.ts  vision.ts
    ├── config/seo.ts           # Per-route SEO metadata
    ├── contexts/               # LanguageContext
    ├── hooks/                  # useFadeInOnScroll
    └── utils/                  # prefetchRoutes, section17Validation
```

### Routes

`/` · `/vision-mission` · `/ecosystem` · `/who-benefits` · `/beauty-ecosystem` · `/verticals` · `/products` · `/market-research` · `/about` · `/insights` (`/investor-guide`) · `/investors` · `/policies` (`/legal`, `/privacy-policy`, `/terms-and-conditions`, `/cookie-policy`, `/refund-cancellation-policy`, `/disclaimer`, `/grievance-support`, `/support`)

Unknown paths redirect to `/`.

## Content & assets

- **All copy lives in code**, not in a CMS: `src/data/*.ts` holds the ecosystem, products, verticals, stakeholders, research and insights content, while `src/locales/{en,hi}.json` holds the translated UI strings.
- **All generated artwork is committed** under `public/assets/` (optimised `.webp`) and `public/assets/images/` (original `.jpg`). `src/assets/images/` keeps the same originals next to the source tree.
- `src/components/common/InteractiveImage.tsx` automatically falls back between `/src/assets/images/…` and `/assets/images/…`, so both paths resolve in dev and in the built site.

> ⚠️ Because every AI Studio–generated image version is committed, the repo is image-heavy (≈100 MB packed). If you want a lean clone, the duplicated originals in `src/assets/images/` and `public/src/assets/images/` can be pruned — nothing imports them directly; they only serve the runtime fallback described above.

## Environment variables

See [`.env.example`](.env.example). `.env*` files are git-ignored (the example file is not).

| Variable | Required | Purpose |
| --- | --- | --- |
| `GEMINI_API_KEY` | No | Only for server-side Gemini API calls (`MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API` in `metadata.json`). The static site does not call it. |
| `DISABLE_HMR` | No | Set to `true` inside AI Studio to stop HMR/file watching during agent edits. |

## Deploy

The app is a static SPA:

```bash
npm run build   # -> dist/
```

- **Vercel:** already configured via `vercel.json` (framework `vite`, output `dist`, SPA rewrite for all non-asset paths, `Cache-Control: immutable` for `/assets/*`).
- **Any static host:** upload `dist/` and add a catch-all rewrite to `index.html`.

## Notes for maintainers

- `npm run lint` is a pure type-check — keep it green before pushing; the build fails on unresolved imports.
- After adding or renaming a route, update `scripts/generate-sitemap.mjs` and regenerate `public/sitemap.xml`.
- New hero/section art should be added as `.webp` under `public/assets/` and referenced with an absolute path (`/assets/…`).
