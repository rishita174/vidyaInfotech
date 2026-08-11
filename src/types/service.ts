import type { LucideIcon } from "lucide-react";

export type ServiceCategoryKey = "it" | "security" | "maintenance";

export interface ServiceGroup {
  label: string;
  items: string[];
}

export interface ServiceBenefit {
  title: string;
  description?: string;
}

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategoryKey;
  tagline: string;
  description: string;
  groups: ServiceGroup[];
  benefits: ServiceBenefit[];
  icon: LucideIcon;
  image: string;
}

export interface ServiceCategory {
  key: ServiceCategoryKey;
  title: string;
  description: string;
  icon: LucideIcon;
  serviceSlugs: string[];
}

export interface TrustPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}
