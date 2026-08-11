import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { cta } from "@/lib/site-config";
import {
  serviceWhatsAppMessage,
  whatsappLink,
} from "@/lib/contact-links";
import { CTAButton } from "@/components/shared/CTAButton";
import type { Service, ServiceCategory } from "@/types/service";

interface ServiceHeroProps {
  service: Service;
  category?: ServiceCategory;
}

/**
 * Service detail hero with a restrained editorial service index.
 * No photography, no floating decoration — navy, grid, and typography.
 */
export function ServiceHero({ service, category }: ServiceHeroProps) {
  const Icon = service.icon;

  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-light opacity-50"
      />
      <div className="relative container-site py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              {category?.title ?? "Our Services"}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton
                href={`${cta.getAQuote.href}?service=${service.slug}`}
                withArrow
              >
                Request This Service
              </CTAButton>
              <CTAButton
                href={whatsappLink(serviceWhatsAppMessage(service.title))}
                variant="light"
              >
                WhatsApp Enquiry
              </CTAButton>
            </div>
            <a
              href={site.phoneHref}
              className="mt-8 inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-accent-400"
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-slate-400" />
              Call {site.phone}
            </a>
          </div>

          {/* Editorial service index */}
          <div aria-hidden="true" className="relative">
            <div className="relative overflow-hidden border border-navy-700 bg-navy-900">
              <div className="absolute inset-0 bg-grid-light opacity-30" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-navy-700 px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Service Index
                  </p>
                  <Icon className="h-5 w-5 text-navy-500" />
                </div>
                <dl className="px-6 py-3">
                  {service.groups.map((group) => (
                    <div
                      key={group.label}
                      className="flex items-baseline justify-between gap-6 py-2.5"
                    >
                      <dt className="text-sm font-medium uppercase tracking-widest text-slate-300">
                        {group.label}
                      </dt>
                      <dd className="text-2xl font-bold tabular-nums leading-none text-white">
                        {String(group.items.length).padStart(2, "0")}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-navy-700 px-6 py-5">
                  <p className="text-base font-semibold text-white">
                    {service.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {service.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
