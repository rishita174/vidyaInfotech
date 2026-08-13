import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { HomeServices } from "@/components/home/HomeServices";
import { WhyUs } from "@/components/home/WhyUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CTASection } from "@/components/home/CTASection";
import { ContactPreview } from "@/components/home/ContactPreview";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "AIDC, CCTV & Complete IT Solutions",
  description:
    "Vidya Infotech — your trusted technology partner for AIDC, CCTV, IT Infrastructure, Networking and Digital Solutions. Professional office & IT services in Andheri East, Mumbai.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <HomeServices />
      <WhyUs />
      <ProcessSection />
      <CTASection />
      <ContactPreview />
    </>
  );
}