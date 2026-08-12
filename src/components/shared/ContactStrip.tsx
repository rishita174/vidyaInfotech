import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/contact-links";
import { CTAButton } from "@/components/shared/CTAButton";

export function ContactStrip() {
  return (
    <section aria-label="Contact information" className="bg-slate-50">
      <div className="container-site py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-espresso-900 text-white">
              <Phone aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-espresso-950">Phone</p>
              <a
                href={site.phoneHref}
                className="text-slate-600 hover:text-espresso-900"
              >
                {site.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-espresso-900 text-white">
              <Mail aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-espresso-950">Email</p>
              <a
                href={site.emailHref}
                className="break-all text-slate-600 hover:text-espresso-900"
              >
                {site.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 md:col-span-2">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-espresso-900 text-white">
              <MapPin aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-espresso-950">Address</p>
              <address className="not-italic text-slate-600">
                {site.address.unit}, {site.address.building}, {site.address.locality}
              </address>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 border-t border-slate-200 pt-8">
          <CTAButton href={site.phoneHref} variant="outline">
            <Phone aria-hidden="true" className="h-4 w-4" />
            Call {site.phone}
          </CTAButton>
          <CTAButton href={whatsappLink()}>WhatsApp Enquiry</CTAButton>
        </div>
      </div>
    </section>
  );
}