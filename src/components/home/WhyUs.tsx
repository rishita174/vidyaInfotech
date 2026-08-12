import { trustPoints, home } from "@/lib/site-config";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function WhyUs() {
  return (
    <section className="bg-espresso-950">
      <div className="container-site py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow={home.whyUs.eyebrow}
                title={home.whyUs.title}
                description={home.whyUs.description}
                onDark
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <li
                    key={point.title}
                    className="border-t border-espresso-800 pt-5"
                  >
                    <h3 className="font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {point.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}