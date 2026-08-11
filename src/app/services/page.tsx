import type { Metadata } from "next";
import { categories, services } from "@/data/services";
import { comingSoonTeaser } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ServiceCategoryCard } from "@/components/services/ServiceCategoryCard";
import { ContactStrip } from "@/components/shared/ContactStrip";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore Vidya Infotech services: laptop repair, desktop repair, CCTV installation, office electrical work, furniture repair, plumbing, and carpet flooring in Andheri East, Mumbai.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Services"
        description="Computer & IT solutions, security systems, and office maintenance services for modern workplaces."
      />
      <section className="bg-slate-50">
        <div className="container-site py-14 sm:py-16">
          <SectionHeading title="Service Categories" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {categories.map((category, index) => (
              <ServiceCategoryCard
                key={category.key}
                category={category}
                number={index + 1}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-slate-200 bg-white">
        <div className="container-site py-14 sm:py-16">
          <SectionHeading title="All Services" />
          <div className="mt-8">
            <ServiceGrid services={services} numbered />
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-100/60 px-6 py-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                {comingSoonTeaser.eyebrow}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {comingSoonTeaser.description}
              </p>
            </div>
            <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {comingSoonTeaser.badge}
            </span>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}