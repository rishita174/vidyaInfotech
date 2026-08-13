import Image from "next/image";
import { CTAButton } from "@/components/shared/CTAButton";
import { cta } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[600px] overflow-hidden bg-espresso-950 lg:min-h-[680px]">
      {/* Background image — full-width, positioned to keep the person visible */}
      <Image
        src="/hero banner vidya infotech.png"
        alt="Vidya Infotech professional scanning barcodes in a technology workspace with barcode printers and warehouse shelving"
        fill
        sizes="100vw"
        className="object-cover object-[70%_center] sm:object-[60%_center] lg:object-center"
        priority
        quality={90}
      />

      {/* Gradient overlay — heavier on the left for text readability, lighter on the right to show the image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-espresso-950 via-espresso-950/85 to-espresso-950/20 lg:via-espresso-950/70 lg:to-transparent"
      />

      {/* Subtle bottom fade for visual polish */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-espresso-950/60 to-transparent"
      />

      {/* Content */}
      <div className="relative container-site flex items-center py-20 sm:py-28 lg:py-32">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Headline */}
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Smart Technology.
            <br />
            <span className="text-rosewood-300">Reliable Solutions.</span>
            <br />
            For Your Business.
          </h1>

          {/* Supporting text */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            AIDC, CCTV, IT infrastructure and networking solutions for businesses across Mumbai.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton href={cta.getAQuote.href} withArrow>
              Get a Quote
            </CTAButton>
            <CTAButton href="/products" variant="light">
              Browse Products
            </CTAButton>
          </div>

        </div>
      </div>
    </section>
  );
}
