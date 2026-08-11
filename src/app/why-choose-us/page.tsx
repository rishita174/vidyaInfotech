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
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading title="Our Benefits" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="rounded-lg border border-slate-200 bg-white p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-navy-900 text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-navy-950">{point.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}
