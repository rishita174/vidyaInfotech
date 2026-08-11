import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { cta } from "@/lib/site-config";
import { whatsappLink } from "@/lib/contact-links";
import { CTAButton } from "@/components/shared/CTAButton";

/**
 * Persistent conversion bar shown at the bottom of the mobile viewport.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        <CTAButton href={site.phoneHref} variant="outline" className="px-2 py-2.5 text-xs">
          <Phone aria-hidden="true" className="h-4 w-4" />
          Call
        </CTAButton>
        <CTAButton href={whatsappLink()} className="px-2 py-2.5 text-xs">
          WhatsApp
        </CTAButton>
        <CTAButton href={cta.getAQuote.href} variant="secondary" className="px-2 py-2.5 text-xs">
          Get Quote
        </CTAButton>
      </div>
    </div>
  );
}
