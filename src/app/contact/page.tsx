import type { Metadata } from "next";
import { Mail, MapPin, Navigation, Phone } from "lucide-react";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";
import { googleMapsDirectionsHref } from "@/lib/contact-links";
import { PageHeader } from "@/components/shared/PageHeader";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: `Contact Vidya Infotech for a quote: ${site.phone}, ${site.email}, or visit us in Andheri East, Mumbai.`,
  path: "/contact",
});

interface ContactPageProps {
  searchParams: Promise<{ service?: string }>;
}

const contactDetails = [
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    icon: Phone,
  },
  {
    label: "Email",
    value: site.email,
    href: site.emailHref,
    icon: Mail,
  },
];

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service } = await searchParams;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a Quote"
        description="Call, WhatsApp, or send an enquiry and the Vidya Infotech team will get back to you."
      />
      <section className="bg-slate-50">
        <div className="container-site py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold tracking-tight text-navy-950">
                Send an Enquiry
              </h2>
              <p className="mt-2 text-slate-600">
                Fill in the form below. Our team will get in touch to discuss
                your requirement.
              </p>
              <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
                <EnquiryForm defaultService={service} />
              </div>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-navy-950">
                  Contact Information
                </h2>
                <p className="mt-2 text-slate-600">
                  Reach us directly by phone or email.
                </p>
              </div>

              <div className="space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-navy-300"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block font-semibold break-words text-navy-950">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <div className="bg-navy-950 px-6 py-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                    Find Us
                  </h3>
                </div>
                <div className="p-6">
                  <div aria-hidden="true" className="flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-100 text-accent-700">
                      <MapPin aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <address className="not-italic text-slate-600">
                      {site.address.unit}, {site.address.building},{" "}
                      {site.address.locality}
                    </address>
                  </div>
                  <div className="mt-6">
                    <CTAButton
                      href={googleMapsDirectionsHref()}
                      variant="outline"
                      className="w-full"
                      withArrow
                    >
                      <Navigation aria-hidden="true" className="h-4 w-4" />
                      Get Directions
                    </CTAButton>
                  </div>
                  <p className="mt-3 text-xs text-slate-500">
                    Opens Google Maps with the office address as the destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}