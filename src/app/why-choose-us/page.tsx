import type { Metadata } from "next";
import { trustPoints } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactStrip } from "@/components/shared/ContactStrip";

export const metadata: Metadata = buildPageMetadata({
  title: "Why Choose Us",
  description:
    "Why choose Vidya Infotech: certified engineers, genuine spare parts, on-site support, pickup & delivery, corporate IT support, affordable pricing, warranty support, and fast turnaround time.",
  path: "/why-choose-us",
});

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Choose Us"
        title="Reliable Service. Trusted Support."
        description="Results that keep you moving — company-stated benefits from the Vidya Infotech service promise."
      />
      <section className="border-b border-slate-200 bg-white">
        <div className="container-site py-16 sm:py-24">
          <SectionHeading title="Our Benefits" />
          <ul className="mt-12 grid gap-x-12 gap-y-8 border-t border-slate-200 pt-2 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point) => (
              <li key={point.title} className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-semibold text-espresso-950">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {point.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}