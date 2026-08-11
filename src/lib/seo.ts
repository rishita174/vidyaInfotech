import type { Metadata } from "next";
import { site } from "@/data/site";

/**
 * Production domain placeholder. Replace with the real domain when known.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vidyainfotech.in";

export const defaultMetadata: Metadata = {
  title: {
    default: `${site.nameDisplay} | Professional Office & IT Solutions`,
    template: `%s | ${site.nameDisplay}`,
  },
  description:
    "Professional office interior works and IT solutions in Andheri East, Mumbai. Laptop repair, desktop repair, CCTV installation, electrical work, furniture repair, plumbing, and carpet flooring services.",
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: site.nameDisplay,
    locale: "en_IN",
  },
};

export interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetaOptions): Metadata {
  const url = new URL(path, SITE_URL);
  return {
    title,
    description,
    alternates: { canonical: url.toString() },
    openGraph: {
      title,
      description,
      url: url.toString(),
    },
  };
}

/**
 * LocalBusiness structured data.
 * Only brochure-supplied information is included — no ratings, reviews,
 * price ranges, or opening hours (none were supplied).
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.tagline,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Commercial Unit No.102, 1st Floor, A Wing, Silver Astra, J.B. Nagar",
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: "IN",
    },
    areaServed: site.locality,
  };
}
