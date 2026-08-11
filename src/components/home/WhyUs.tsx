import { trustPoints, home } from "@/lib/site-config";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function WhyUs() {
  return (
    <section className="bg-navy-950">
      <div className="container-site py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow={home.whyUs.eyebrow}
            title={home.whyUs.title}
            description={home.whyUs.description}
            align="center"
            onDark
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={index * 0.04}>
                <div className="h-full rounded-lg border border-navy-800 bg-navy-900 p-6 transition-colors duration-200 hover:border-navy-600 hover:bg-navy-800/60">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy-800 text-accent-400">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}