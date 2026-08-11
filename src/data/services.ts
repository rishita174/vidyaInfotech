import {
  Armchair,
  Cctv,
  Laptop,
  Layers,
  Monitor,
  Plug,
  Wrench,
} from "lucide-react";
import type {
  Service,
  ServiceCategory,
  ServiceCategoryKey,
} from "@/types/service";

/**
 * Single source of truth for all service content.
 * Every field below is derived from the supplied Vidya Infotech brochure.
 * No services, sub-services, or claims have been added beyond the brochure.
 */
export const services: Service[] = [
  {
    slug: "laptop-repair",
    title: "Laptop Repair",
    category: "it",
    tagline: "Expert solutions. Quality parts. Reliable performance.",
    description:
      "Expert solutions with quality parts for reliable performance on your laptop.",
    groups: [
      {
        label: "Hardware",
        items: [
          "Screen Replacement",
          "Battery",
          "Hinge",
          "Touchpad",
          "Fan",
          "Speaker",
          "Keyboard",
        ],
      },
      {
        label: "Software",
        items: [
          "Windows Installation",
          "Office Installation",
          "Antivirus",
          "Driver Support",
        ],
      },
    ],
    benefits: [
      {
        title: "Expert Solutions",
        description: "Expert solutions for your laptop issues.",
      },
      {
        title: "Quality Parts",
        description: "Quality parts for dependable repair.",
      },
      {
        title: "Reliable Performance",
        description: "Reliable performance after service.",
      },
    ],
    icon: Laptop,
    image: "/images/placeholder-service.svg",
  },
  {
    slug: "desktop-repair",
    title: "Desktop Repair",
    category: "it",
    tagline: "Reliable systems begin with expert repair and trusted support.",
    description:
      "Reliable desktop systems begin with expert repair and trusted support.",
    groups: [
      {
        label: "Components",
        items: [
          "Motherboard",
          "SMPS",
          "SSD/HDD",
          "Processor",
          "BIOS",
          "Graphics Card",
          "RAM",
        ],
      },
      {
        label: "Services",
        items: [
          "Windows Installation",
          "Formatting",
          "Driver Installation",
          "Performance Optimization",
        ],
      },
    ],
    benefits: [
      {
        title: "Expert Solutions",
        description: "Expert solutions for your desktop issues.",
      },
      {
        title: "Quality Parts",
        description: "Quality parts for dependable repair.",
      },
      {
        title: "Reliable Performance",
        description: "Reliable performance after service.",
      },
    ],
    icon: Monitor,
    image: "/images/placeholder-service.svg",
  },
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    category: "security",
    tagline: "Professional installation. Reliable security. Always on.",
    description:
      "Professional CCTV installation with reliable security that stays on.",
    groups: [
      {
        label: "Installation",
        items: [
          "Home CCTV",
          "Office CCTV",
          "Apartment CCTV",
          "Warehouse",
        ],
      },
      {
        label: "Services",
        items: ["DVR", "NVR", "IP Camera", "Mobile Monitoring"],
      },
    ],
    benefits: [
      {
        title: "Professional Installation",
        description: "Professional installation for your premises.",
      },
      {
        title: "Reliable Security",
        description: "Reliable security coverage.",
      },
      {
        title: "Always On",
        description: "Systems that stay operational.",
      },
    ],
    icon: Cctv,
    image: "/images/placeholder-service.svg",
  },
  {
    slug: "office-electrical-work",
    title: "Office Electrical Work",
    category: "maintenance",
    tagline: "Safe, reliable electrical solutions for modern workplaces.",
    description:
      "Safe, reliable electrical solutions for modern workplaces.",
    groups: [
      {
        label: "Electrical Services",
        items: [
          "Wiring & Rewiring",
          "Switchboard Repair",
          "Lighting Installation",
          "Socket Replacement",
          "Circuit Troubleshooting",
          "UPS/Inverter Support",
        ],
      },
    ],
    benefits: [
      {
        title: "Safety First",
        description: "Work performed to the highest safety standards.",
      },
      {
        title: "Reliable Systems",
        description: "Stable, efficient, and long-lasting electrical setups.",
      },
      {
        title: "Expert Electricians",
        description: "Skilled professionals with office electrical expertise.",
      },
      {
        title: "Quick Response",
        description: "Timely support to minimize downtime.",
      },
      {
        title: "Quality Assured",
        description: "High-quality materials and trusted workmanship.",
      },
    ],
    icon: Plug,
    image: "/images/placeholder-service.svg",
  },
  {
    slug: "office-furniture-repair",
    title: "Office Furniture Repair",
    category: "maintenance",
    tagline: "Professional repair and restoration for modern workplaces.",
    description:
      "Professional repair and restoration for modern workplaces.",
    groups: [
      {
        label: "Furniture Services",
        items: [
          "Chair Repair",
          "Desk Repair",
          "Cabinet Repair",
          "Workstation Repair",
          "Reupholstery",
          "Hardware Replacement",
        ],
      },
    ],
    benefits: [
      {
        title: "Extend Furniture Life",
        description: "Restore furniture to safe, comfortable use.",
      },
      {
        title: "Improve Safety",
        description: "Fix broken mechanisms and structural issues.",
      },
      {
        title: "Enhance Appearance",
        description: "A refreshed and professional look.",
      },
      {
        title: "Cost-Effective Solutions",
        description: "Value through repair rather than replacement.",
      },
    ],
    icon: Armchair,
    image: "/images/placeholder-service.svg",
  },
  {
    slug: "office-plumbing",
    title: "Office Plumbing Service",
    category: "maintenance",
    tagline: "Reliable plumbing support for modern workspaces.",
    description: "Reliable plumbing support for modern workspaces.",
    groups: [
      {
        label: "Plumbing Services",
        items: [
          "Leak Repair",
          "Pipe Fitting",
          "Drainage Maintenance",
          "Sink Repair",
          "Water Supply Fixes",
          "Preventive Inspection",
        ],
      },
    ],
    benefits: [
      {
        title: "Prevent Disruptions",
        description: "Minimize downtime and maintain smooth operations.",
      },
      {
        title: "Ensure Hygiene",
        description: "Clean, safe, and reliable plumbing for healthy spaces.",
      },
      {
        title: "Expert Technicians",
        description: "Skilled professionals with the right tools and experience.",
      },
      {
        title: "Quick Response",
        description: "Timely support to resolve issues efficiently.",
      },
      {
        title: "Cost-Effective",
        description: "Smart solutions that save costs in the long run.",
      },
    ],
    icon: Wrench,
    image: "/images/placeholder-service.svg",
  },
  {
    slug: "office-carpet-flooring",
    title: "Office Carpet Flooring",
    category: "maintenance",
    tagline: "Durable, stylish, and low-maintenance flooring for workspaces.",
    description:
      "Durable, stylish, and low-maintenance flooring for workspaces.",
    groups: [
      {
        label: "Flooring Services",
        items: [
          "Carpet Installation",
          "Carpet Replacement",
          "Carpet Tiles",
          "Stain Removal",
          "Edge Repair",
          "Underlay Support",
          "Maintenance",
        ],
      },
    ],
    benefits: [
      {
        title: "Long-Lasting Durability",
        description: "High-quality materials built to withstand daily wear.",
      },
      {
        title: "Professional Finish",
        description: "Neat installation and seamless results for your workspace.",
      },
      {
        title: "Easy to Maintain",
        description: "Low-maintenance solutions for cleaner, healthier offices.",
      },
      {
        title: "Comfort & Quiet",
        description: "Reduces noise and adds comfort for a productive environment.",
      },
      {
        title: "Sustainable Choice",
        description: "Eco-friendly options for modern, responsible workplaces.",
      },
    ],
    icon: Layers,
    image: "/images/placeholder-service.svg",
  },
];

export const categories: ServiceCategory[] = [
  {
    key: "it",
    title: "Computer & IT Solutions",
    description: "Laptop and desktop repair services.",
    icon: Monitor,
    serviceSlugs: ["laptop-repair", "desktop-repair"],
  },
  {
    key: "security",
    title: "Security Solutions",
    description: "CCTV installation for homes, offices, apartments, and warehouses.",
    icon: Cctv,
    serviceSlugs: ["cctv-installation"],
  },
  {
    key: "maintenance",
    title: "Office Maintenance Services",
    description: "Electrical, furniture, plumbing, and carpet flooring services.",
    icon: Wrench,
    serviceSlugs: [
      "office-electrical-work",
      "office-furniture-repair",
      "office-plumbing",
      "office-carpet-flooring",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getCategory(key: ServiceCategoryKey): ServiceCategory | undefined {
  return categories.find((category) => category.key === key);
}

export function getServicesByCategory(key: ServiceCategoryKey): Service[] {
  const category = getCategory(key);
  if (!category) return [];
  return category.serviceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is Service => Boolean(service));
}
