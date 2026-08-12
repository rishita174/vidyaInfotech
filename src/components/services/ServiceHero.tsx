import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { serviceImage } from "@/data/imagery";
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

export function ServiceHero({ service, category }: ServiceHeroProps) {
  const image = serviceImage(service.slug);

  return (
    <section className="relative overflow-hidden bg-espresso-950">
      <div className="relative container-site py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-rosewood-400">
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
              className="mt-8 inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-rosewood-400"
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-slate-400" />
              Call {site.phone}
            </a>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-espresso-700/70">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}