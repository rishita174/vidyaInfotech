import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { hero } from "@/lib/site-config";
import { imagery } from "@/data/imagery";
import { CTAButton } from "@/components/shared/CTAButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-espresso-950">
      <div className="relative container-site py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rosewood-400">
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {hero.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTAButton href={hero.primaryCta.href} withArrow>
                {hero.primaryCta.label}
              </CTAButton>
              <CTAButton href={hero.secondaryCta.href} variant="light">
                <Phone aria-hidden="true" className="h-4 w-4" />
                {hero.secondaryCta.label}
              </CTAButton>
            </div>
            <p className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              {hero.localityLine}
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-espresso-700/70">
              <Image
                src={imagery.hero.src}
                alt={imagery.hero.alt}
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
