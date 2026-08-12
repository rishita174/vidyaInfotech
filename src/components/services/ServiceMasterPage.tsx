import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceScope } from "@/components/services/ServiceScope";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ContactStrip } from "@/components/shared/ContactStrip";
import { Reveal } from "@/components/shared/Reveal";
import type { Service, ServiceCategory } from "@/types/service";

interface ServiceMasterPageProps {
  service: Service;
  category?: ServiceCategory;
}

/**
 * Master service detail layout.
 * Composes hero → overview → scope catalogue → benefits → CTA → contact.
 */
export function ServiceMasterPage({
  service,
  category,
}: ServiceMasterPageProps) {
  return (
    <>
      <ServiceHero service={service} category={category} />

      <ServiceOverview service={service} category={category} />

      <ServiceScope groups={service.groups} />

      <section className="border-b border-slate-200 bg-white">
        <div className="container-site py-12 sm:py-14">
          <Reveal>
            <div className="border-b-2 border-espresso-900 pb-3">
              <h2 className="text-2xl font-bold tracking-tight text-espresso-950">
                Why This Service
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li key={benefit.title} className="border-t border-slate-200 pt-5">
                  <h3 className="text-xl font-semibold tracking-tight text-espresso-950">
                    {benefit.title}
                  </h3>
                  {benefit.description ? (
                    <p className="mt-2 max-w-xl text-slate-600">
                      {benefit.description}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-espresso-950">
        <div className="relative container-site py-14 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need {service.title}?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300">
              Contact the Vidya Infotech team to arrange {service.title} for
              your workplace.
            </p>
            <div className="mt-8">
              <ServiceCTA service={service} />
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
