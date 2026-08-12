import {
  BadgeCheck,
  Building2,
  ClipboardList,
  MessageSquareText,
  Package,
  PhoneCall,
  ShieldCheck,
  Timer,
  Truck,
  Wallet,
  Wrench,
} from "lucide-react";
import { categories, services } from "@/data/services";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/contact-links";
import type { TrustPoint } from "@/data/site";
import type { LucideIcon } from "lucide-react";

export const routes = {
  home: "/",
  services: "/services",
  whyChooseUs: "/why-choose-us",
  contact: "/contact",
} as const;

export function serviceHref(slug: string): string {
  return `/services/${slug}`;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavCategoryGroup {
  label: string;
  links: NavLink[];
}

/**
 * Desktop "Services" dropdown is grouped by brochure categories.
 * Derived from the centralized services catalog.
 */
export const servicesNavGroups: NavCategoryGroup[] = categories.map(
  (category) => ({
    label: category.title,
    links: category.serviceSlugs.map((slug) => {
      const service = services.find((item) => item.slug === slug);
      return {
        label: service?.title ?? slug,
        href: serviceHref(slug),
      };
    }),
  })
);

export const primaryNav: NavLink[] = [
  { label: "Home", href: routes.home },
  { label: "Services", href: routes.services },
  { label: "Why Choose Us", href: routes.whyChooseUs },
  { label: "Contact", href: routes.contact },
];

export const cta = {
  getAQuote: { label: "Get a Quote", href: routes.contact },
  callNow: { label: "Call Now", href: site.phoneHref },
  exploreServices: { label: "Explore Services", href: routes.services },
} as const;

export const hero = {
  eyebrow: "VIDYA INFOTECH",
  title: "Office Solutions. IT Support. One Reliable Partner.",
  description:
    "Vidya Infotech provides professional office interior works and IT solutions — computer repair, CCTV installation, and office maintenance services for workplaces in Mumbai.",
  primaryCta: cta.getAQuote,
  secondaryCta: { label: `Call ${site.phone}`, href: site.phoneHref },
  localityLine: "ANDHERI EAST \u00b7 MUMBAI",
} as const;

export const home = {
  solutionsSection: {
    eyebrow: "Our Services",
    title: "Solutions for Modern Workplaces",
    description:
      "Three pillars of service — computer & IT solutions, security solutions, and office maintenance for modern workplaces.",
  },
  featuredServices: {
    eyebrow: "Service Catalogue",
    title: "Featured Services",
    description:
      "Repair, security, and maintenance services delivered by Vidya Infotech.",
  },
  whyUs: {
    eyebrow: "Why Us",
    title: "Why Vidya Infotech?",
    description:
      "Company-stated benefits built around reliable service and trusted support.",
  },
  process: {
    eyebrow: "Getting Started",
    title: "Start With a Service Request",
    description:
      "This is how to get started through the website — not an internal company procedure.",
  },
  ctaSection: {
    title: "Need a reliable service for your workplace?",
    description:
      "Reach out to the Vidya Infotech team for a quote for your office in Andheri East, Mumbai.",
  },
  contactPreview: {
    title: "Contact Vidya Infotech",
    description:
      "Speak directly with the team about any of our services.",
  },
} as const;

export const processSteps = [
  {
    title: "Choose a Service",
    description: "Browse our services and pick the one you need.",
    icon: ClipboardList,
  },
  {
    title: "Contact the Team",
    description: "Reach out by phone, WhatsApp, or the enquiry form.",
    icon: PhoneCall,
  },
  {
    title: "Discuss Your Requirement",
    description: "Share the details of your requirement with the team.",
    icon: MessageSquareText,
  },
  {
    title: "Arrange the Service",
    description: "Schedule and arrange the service at your convenience.",
    icon: Building2,
  },
] satisfies { title: string; description: string; icon: LucideIcon }[];

export const trustPoints: TrustPoint[] = [
  {
    title: "Certified Engineers",
    description: "Skilled engineers for your repair and service requirements.",
    icon: BadgeCheck,
  },
  {
    title: "Genuine Spare Parts",
    description: "Quality spare parts used for repairs.",
    icon: Package,
  },
  {
    title: "On-site Support",
    description: "Support available at your location.",
    icon: Wrench,
  },
  {
    title: "Pickup & Delivery",
    description: "Convenient pickup and delivery of devices.",
    icon: Truck,
  },
  {
    title: "Corporate IT Support",
    description: "IT support designed for corporate environments.",
    icon: Building2,
  },
  {
    title: "Affordable Pricing",
    description: "Pricing that works for businesses.",
    icon: Wallet,
  },
  {
    title: "Warranty Support",
    description: "Warranty support on repairs.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Turnaround Time",
    description: "Quick service completion.",
    icon: Timer,
  },
];

export const headerTrustPoints = trustPoints.filter((point) =>
  ["Certified Engineers", "Genuine Spare Parts", "On-site Support", "Fast Turnaround Time"].includes(
    point.title
  )
);

export const whatsAppEnquiryHref = whatsappLink;

/**
 * Secondary teaser for future workplace services (e.g. Office Interior).
 * Kept deliberately below the documented service pillars.
 */
export const comingSoonTeaser = {
  eyebrow: "More Workplace Solutions",
  description: "Additional office solutions are coming soon.",
  badge: "Coming Soon",
} as const;