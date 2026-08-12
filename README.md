# Vidya Infotech — Website

Professional B2B website for **Vidya Infotech**, a Mumbai-based company providing
professional office interior works and IT solutions.

## Tech Stack

- **Next.js** (App Router, Server Components by default)
- **TypeScript**
- **Tailwind CSS** (v4, CSS-first config)
- **Lucide React** (icons)
- **Framer Motion** (subtle animations only)
- **Formspree** (free tier) for the contact/enquiry form

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `npm run dev`    | Start the development server   |
| `npm run build`  | Production build               |
| `npm run start`  | Serve the production build     |
| `npm run lint`   | Lint with ESLint               |

## Routes

| Route                          | Page                       |
| ------------------------------ | -------------------------- |
| `/`                            | Home                       |
| `/services`                    | Services hub               |
| `/services/laptop-repair`      | Laptop Repair              |
| `/services/desktop-repair`     | Desktop Repair             |
| `/services/cctv-installation`  | CCTV Installation          |
| `/services/office-electrical-work` | Office Electrical Work |
| `/services/office-furniture-repair` | Office Furniture Repair |
| `/services/office-plumbing`    | Office Plumbing Service    |
| `/services/office-carpet-flooring` | Office Carpet Flooring  |
| `/why-choose-us`               | Why Choose Us              |
| `/contact`                     | Contact                    |

## Project Structure

```
src/
├── app/                  # Next.js App Router routes
├── components/
│   ├── layout/           # Navbar, MobileMenu, Footer, MobileActionBar, WhatsAppButton
│   ├── home/             # Homepage sections
│   ├── services/         # Service cards, grids, benefits, CTAs
│   ├── shared/           # CTAButton, SectionHeading, PageHeader, ContactStrip
│   └── contact/          # EnquiryForm
├── data/
│   ├── services.ts       # Single source of truth for all service content
│   └── site.ts           # Company / contact configuration
├── lib/
│   ├── site-config.ts    # Navigation, CTAs, page copy
│   ├── contact-links.ts  # tel:, mailto:, WhatsApp helpers
│   ├── seo.ts            # Metadata + LocalBusiness JSON-LD
│   └── cn.ts             # Classname helper
└── types/
    └── service.ts        # Service data model types
```

## Content Rules

All company content is derived from the supplied Vidya Infotech brochure.
Do not add testimonials, client logos, statistics, certifications, pricing,
or unsupported services. **Office Interior** is shown as a teaser only
("More solutions coming soon") — it is not a published service page.

## Configuration Notes

- **Site URL**: set `NEXT_PUBLIC_SITE_URL` for canonical URLs / Open Graph.
  Defaults to `https://vidyainfotech.in` as a placeholder in `src/lib/seo.ts`.
- **Enquiry form**: wired to Formspree's free tier via the
  `NEXT_PUBLIC_FORMSPREE_FORM_ID` environment variable (see `.env.example`).
  Set it to enable submission (inbox: `support@vidyainfotechindia.com`).
  Until set, the form stays inert and falls back to Call / WhatsApp.
- **Images**: `/public/images/placeholder-service.svg` is a temporary
  placeholder referenced from `src/data/services.ts`. Replace with real imagery
  later.
