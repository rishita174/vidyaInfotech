import { Phone } from "lucide-react";
import { home, cta } from "@/lib/site-config";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/contact-links";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";

export function CTASection() {
  return (
    <section className="border-b border-slate-200 bg-cream-100">
      <div className="container-site py-16 sm:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl bg-espresso-950 px-6 py-14 sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rosewood-700/20 blur-3xl"
            />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {home.ctaSection.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
                {home.ctaSection.description}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <CTAButton href={cta.getAQuote.href} withArrow>
                  {cta.getAQuote.label}
                </CTAButton>
                <CTAButton href={whatsappLink()} variant="light">
                  WhatsApp Enquiry
                </CTAButton>
                <CTAButton href={site.phoneHref} variant="light">
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  Call Now
                </CTAButton>
              </div>
              <p className="mt-6 text-sm text-slate-400">{site.phone}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}