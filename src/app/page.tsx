import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { WhyUs } from "@/components/home/WhyUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CTASection } from "@/components/home/CTASection";
import { ContactPreview } from "@/components/home/ContactPreview";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Professional Office & IT Solutions",
  description:
    "Vidya Infotech provides professional office interior works and IT solutions in Andheri East, Mumbai — laptop and desktop repair, CCTV installation, office electrical work, furniture repair, plumbing, and carpet flooring.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SolutionsSection />
      <FeaturedServices />
      <WhyUs />
      <ProcessSection />
      <CTASection />
      <ContactPreview />
    </>
  );
}