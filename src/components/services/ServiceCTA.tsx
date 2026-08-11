import { Phone } from "lucide-react";
import { site } from "@/data/site";
import {
  serviceWhatsAppMessage,
  whatsappLink,
} from "@/lib/contact-links";
import { cta } from "@/lib/site-config";
import { CTAButton } from "@/components/shared/CTAButton";
import type { Service } from "@/types/service";

interface ServiceCTAProps {
  service: Service;
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <CTAButton
        href={`${cta.getAQuote.href}?service=${service.slug}`}
        withArrow
      >
        Request This Service
      </CTAButton>
      <CTAButton href={whatsappLink(serviceWhatsAppMessage(service.title))}>
        WhatsApp Enquiry
      </CTAButton>
      <CTAButton href={site.phoneHref} variant="light">
        <Phone aria-hidden="true" className="h-4 w-4" />
        Call Now
      </CTAButton>
    </div>
  );
}
