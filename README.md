# Elite Pressure Bros Website

Single-page Next.js 15 + TypeScript marketing site focused on local SEO and free-estimate conversion.

## Included

- App Router single-page layout with sections: Hero, Services, Why Us, Gallery, Testimonials, Estimate Form, Service Areas, FAQ, Footer
- Sticky mobile CTA and primary estimate CTA flow
- API route: `POST /api/estimate`
- Zod validation and honeypot spam protection
- Email delivery integration via Resend (`src/lib/email/sendEstimate.ts`)
- SEO metadata + OpenGraph + Twitter + `robots.ts` + `sitemap.ts`
- JSON-LD for `LocalBusiness`, `Service`, and `FAQPage`
- Placeholder contact data marked with TODO comments

## Theme Colors (Logo-Matched)

Palette sampled from `/public/images/ElitePressurePros_logo.jpg` and applied in `/src/app/globals.css`:

- `--epb-navy: #000020`
- `--epb-cyan: #00C8F8`
- `--epb-blue: #003098`
- `--epb-white: #F8F8F8`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env.local
```

3. Update TODO placeholders in `.env.local`.

4. Start dev server:

```bash
npm run dev
```

## Environment Variables

See `.env.example` for required values:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_BUSINESS_PHONE`
- `NEXT_PUBLIC_BUSINESS_SMS`
- `NEXT_PUBLIC_BUSINESS_EMAIL`
- `NEXT_PUBLIC_BUSINESS_ADDRESS`
- `RESEND_API_KEY`
- `ESTIMATE_TO_EMAIL`
- `ESTIMATE_FROM_EMAIL`

## Tests

```bash
npm run test
```

## Launch Checklist

- Replace placeholder contact info and testimonials.
- Validate `/sitemap.xml` and `/robots.txt`.
- Submit a live estimate form test and confirm email delivery.
- Run Lighthouse and verify SEO/accessibility/performance targets.
