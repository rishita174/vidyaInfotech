import { Phone, ShieldCheck } from "lucide-react";
import { categories, getServicesByCategory } from "@/data/services";
import { site } from "@/data/site";
import { hero } from "@/lib/site-config";
import { CTAButton } from "@/components/shared/CTAButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-light opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-navy-800/40 blur-3xl"
      />
      <div className="relative container-site py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href={hero.primaryCta.href} withArrow>
                {hero.primaryCta.label}
              </CTAButton>
              <CTAButton href={hero.secondaryCta.href} variant="light">
                {hero.secondaryCta.label}
              </CTAButton>
            </div>
            <a
              href={site.phoneHref}
              className="mt-8 inline-flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-accent-400"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy-700 bg-navy-900">
                <Phone aria-hidden="true" className="h-5 w-5" />
              </span>
              {site.phone}
            </a>
          </div>

          {/* Three service pillars */}
          <div aria-hidden="true" className="relative">
            <div className="relative overflow-hidden rounded-lg border border-navy-700 bg-navy-900">
              <div className="absolute inset-0 bg-grid-light opacity-40" />
              <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-navy-800/60 blur-2xl" />
              <div className="relative p-8">
                <div className="flex items-center justify-between border-b border-navy-700 pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Service Pillars
                    </p>
                    <p className="mt-1 text-2xl font-bold text-white">
                      Three Areas of Work
                    </p>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent-500 text-navy-950">
                    <ShieldCheck aria-hidden="true" className="h-6 w-6" />
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {categories.map((category, index) => {
                    const Icon = category.icon;
                    const count = getServicesByCategory(category.key).length;
                    return (
                      <div
                        key={category.key}
                        className="flex items-center gap-4 rounded-md border border-navy-700 bg-navy-950/40 px-4 py-3"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-800 text-accent-400">
                          <Icon aria-hidden="true" className="h-5 w-5" />
                        </span>
                        <span className="flex-1 text-sm font-medium text-slate-200">
                          {category.title}
                        </span>
                        <span className="text-xl font-bold text-accent-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-slate-400">
                          {count} {count === 1 ? "service" : "services"}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-md border border-navy-700 bg-navy-950/40 px-4 py-3">
                  <p className="text-sm font-medium text-slate-200">{site.tagline}</p>
                  <span className="text-3xl font-bold text-accent-400">07</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}