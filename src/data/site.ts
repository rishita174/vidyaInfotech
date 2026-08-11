import type { LucideIcon } from "lucide-react";

export const site = {
  name: "Vidya Infotech",
  nameDisplay: "Vidya Infotech",
  tagline: "Professional Office interior works and IT Solutions",
  phone: "+91 98920 79607",
  phoneHref: "tel:+919892079607",
  email: "support@vidyainfotechindia.com",
  emailHref: "mailto:support@vidyainfotechindia.com",
  whatsappNumber: "919892079607",
  address: {
    unit: "Commercial Unit No.102, 1st Floor, A Wing",
    building: "Building Silver Astra, J.B. Nagar",
    locality: "Village Kondivitta, Andheri East, Mumbai - 400059",
  },
  addressFull:
    "Commercial Unit No.102, 1st Floor, A Wing, Building Silver Astra, J.B. Nagar, Village Kondivitta, Andheri East, Mumbai - 400059",
  // Local SEO geography. Only these areas are supplied in the brochure.
  locality: "Andheri East",
  city: "Mumbai",
  region: "Maharashtra",
  postalCode: "400059",
} as const;

export type TrustPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};
