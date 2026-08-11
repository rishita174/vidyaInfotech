import { site } from "@/data/site";
import { servicePageLabel } from "@/lib/service-label";
import type { Service, ServiceCategory } from "@/types/service";

interface ServiceOverviewProps {
  service: Service;
  category?: ServiceCategory;
}

/**
 * Concise introduction directly below the hero. Uses the existing
 * service description and tagline — no unsupported claims.
 */
export function ServiceOverview({
  service,
  category,
}: ServiceOverviewProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-site py-12 sm:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
              Service Overview
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl">
              {servicePageLabel(service.title)}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {service.description}
            </p>
            <p className="mt-3 text-slate-600">{service.tagline}</p>
          </div>
          <div className="lg:col-span-2">
            <dl>
              <div className="border-t-2 border-navy-900 py-4">
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Service
                </dt>
                <dd className="mt-1.5 font-semibold text-navy-950">
                  {service.title}
                </dd>
              </div>
              <div className="border-t border-slate-200 py-4">
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Category
                </dt>
                <dd className="mt-1.5 text-slate-700">
                  {category?.title ?? "Service"}
                </dd>
              </div>
              <div className="border-t border-slate-200 py-4">
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Coverage
                </dt>
                <dd className="mt-1.5 text-slate-700">
                  {site.locality}, {site.city}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
