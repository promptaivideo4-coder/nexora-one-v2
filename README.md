# Nexora One

A focused, bilingual information website for salon owners, customers and investors.

The first-time journey is **Home → For Salons / For Customers → Demo → Pricing questions → Contact**. Investors have a separate short brief. Food, real estate and adjacent networks belong to the roadmap rather than the homepage pitch.

## Run and verify

Use Node.js 24 LTS and npm.

```bash
npm ci
npm run dev
npm run lint
npm test
npm run build
```

`npm run lint` performs TypeScript checking. `npm test` checks financial units and React user journeys in JSDOM. DOM tests do not verify visual layout, external demo applications or email delivery. Production output is in `dist/`. Vercel SPA rewrites are configured in `vercel.json`.

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Explain the product, choose a user journey, try a sample workflow |
| `/for-salons` | Salon workflow, interactive sample and external SalonOS demo |
| `/for-customers` | Booking journey and external customer demo |
| `/pricing` | Questions to confirm before joining; no invented price plans |
| `/contact?interest=salon` | Prepare an email enquiry; also supports customer, pricing, investor, partner and support |
| `/investors` | Product proof, evidence status, model, acquisition, team and funding questions |
| `/products` | Demo links and status, with the core beauty products first |
| `/about` | Founder and product focus |
| `/verticals` | Beauty-first roadmap |
| `/investor-guide` | Optional financial definitions and pitch sequence |
| `/market-research` | Existing dated research snapshot, not a continuously updated competitor audit |
| `/policies` | Existing policies; individual policy URLs are retained |

Old ecosystem, beauty, benefits, vision and insights URLs redirect to the relevant journey. Legal aliases remain available. Unknown URLs show a recovery page instead of silently displaying Home.

## Honest enquiry behavior

This is a static website. There is **no server-side enquiry inbox or database** in this repository. Contact prepares a `mailto:` draft and offers a clipboard fallback. A visitor must send the email in their email application; the website never reports that a message was received. No enquiry is persisted by the site and no new external service credentials are required.

If a server-side submission feature is added later, report success only after durable acceptance and include validation, spam protection, privacy handling and a support fallback. Do not reintroduce a timer-based success message.

## Financial content

`src/data/financialModel.ts` is the single source for the investor scenario. Both the investor brief and the optional resource use the same component.

- 1,000 salons × ₹30,000 monthly GMV × 12 = **₹36 crore annual GMV**.
- 10% modeled commission = **₹3.6 crore**.
- ₹1 lakh assumed monthly advertising × 12 = **₹12 lakh**.
- Total modeled revenue = **₹3.72 crore**, before costs and taxes.
- The assumed 25% reservation advance is collection, not additional company revenue.

The arithmetic in the original GMV scenario was correct. The change makes the assumptions and units explicit and calculates every amount from shared inputs. These are not actual results or a launch-year forecast. The scenario assumes the full 1,000 salons for the entire year. No investor monthly payout, payback period or profit is promised.

## Evidence and commercial readiness

Product statuses come from the existing repository product data. External demos have not been certified as commercial deployments. Verified active salons, completed bookings, revenue, retention, final customer pricing, the current funding ask and company documents must be confirmed by the founder before publishing them as verified facts. Do not equate unavailable evidence with zero activity.

## Implementation

- React 19, TypeScript, Vite, Tailwind, React Router and i18next.
- Main journey pages use English/Hindi copy via `useCopy`; the language selector uses i18next persistence.
- Research and policy pages load separately. The shared layout has one SEO owner, accessible navigation and a footer on mobile and desktop.
- The interactive walkthrough uses sample state in memory only. It does not make bookings or send reminders.
- Retained research/policy content is primarily English; selecting Hindi does not translate those legacy documents.
- Generated legacy artwork remains in the repository to preserve existing research/policy assets. It is not evidence of a working product.

To regenerate canonical URLs after changing routes:

```bash
node scripts/generate-sitemap.mjs
```

Before production release, visually review desktop/mobile layouts and test external product links, customer onboarding and email handoff in real browsers.
