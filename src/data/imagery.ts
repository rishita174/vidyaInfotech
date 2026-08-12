const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export interface ServiceImage {
  src: string;
  alt: string;
}

/**
 * Photography used across the site.
 * Free-to-use Unsplash stock (see Unsplash License). Photos are
 * representative service imagery only — they are not Vidya Infotech
 * staff or premises. Replace by swapping the URLs below.
 */
export const imagery = {
  hero: {
    src: unsplash("photo-1497366216548-37526070297c"),
    alt: "Bright, modern office workspace in Mumbai with desks and computers",
  },
  contact: {
    src: unsplash("photo-1497366216548-37526070297c"),
    alt: "Vidya Infotech office workspace in Andheri East, Mumbai",
  },
} as const;

export const serviceImages: Record<string, ServiceImage> = {
  "laptop-repair": {
    src: unsplash("photo-1517336714731-489689fd1ca8"),
    alt: "Laptop computer on a desk",
  },
  "desktop-repair": {
    src: unsplash("photo-1498050108023-c5249f4df085"),
    alt: "Computer workstation with a monitor",
  },
  "cctv-installation": {
    src: unsplash("photo-1557597774-9d273605dfa9"),
    alt: "Security camera mounted for CCTV installation",
  },
  "office-electrical-work": {
    src: unsplash("photo-1621905251918-48416bd8575a"),
    alt: "Electrician working on an electrical panel",
  },
  "office-furniture-repair": {
    src: unsplash("photo-1586023492125-27b2c045efd7"),
    alt: "Modern office furniture and workstations",
  },
  "office-plumbing": {
    src: unsplash("photo-1581578731548-c64695cc6952"),
    alt: "Modern tap and plumbing fixture",
  },
  "office-carpet-flooring": {
    src: unsplash("photo-1524758631624-e2822e304c36"),
    alt: "Carpeted interior flooring",
  },
} as const;

const fallbackServiceImage: ServiceImage = {
  src: unsplash("photo-1497366216548-37526070297c"),
  alt: "Office workspace",
};

export function serviceImage(slug: string): ServiceImage {
  return serviceImages[slug] ?? fallbackServiceImage;
}
