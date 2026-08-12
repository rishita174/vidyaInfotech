import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, getServicesByCategory } from "@/data/services";
import { serviceImage } from "@/data/imagery";
import { routes, serviceHref } from "@/lib/site-config";
import { Reveal } from "@/components/shared/Reveal";
import type { Service } from "@/types/service";

function ViewAllLink({ className }: { className?: string }) {
  return (
    <Link
      href={routes.services}
      className={`inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-rosewood-600 transition-colors hover:text-rosewood-700 ${className ?? ""}`}
    >
      View All Services
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}

/**
 * Computer & IT Solutions — large alternating photo-and-text rows.
 */
function ITStation({ services }: { services: Service[] }) {
  const category = categories.find((c) => c.key === "it");
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-site py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-rosewood-600">
                {category?.title ?? "Computer & IT Solutions"}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso-950 sm:text-4xl">
                Laptop & Desktop Repair
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                {category?.description}
              </p>
            </div>
            <ViewAllLink />
          </div>
        </Reveal>

        <div className="mt-14 space-y-20">
          {services.map((service, index) => {
            const image = serviceImage(service.slug);
            return (
              <Reveal key={service.slug} delay={0.05}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div
                    className={
                      index % 2 === 1 ? "lg:order-2" : undefined
                    }
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-espresso-950 sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-slate-600">
                      {service.tagline}
                    </p>
                    <p className="mt-3 text-slate-600">{service.description}</p>
                    {service.groups[0] ? (
                      <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                        {service.groups[0].items.slice(0, 6).map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <span
                              aria-hidden="true"
                              className="h-1.5 w-1.5 shrink-0 rounded-full bg-rosewood-500"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <Link
                      href={serviceHref(service.slug)}
                      className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-espresso-900 transition-colors hover:text-rosewood-600"
                    >
                      View {service.title}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Security Solutions — image-led band for CCTV installation.
 */
function SecurityStation({ services }: { services: Service[] }) {
  const category = categories.find((c) => c.key === "security");
  const service = services[0];
  const image = service ? serviceImage(service.slug) : undefined;

  return (
    <section className="relative overflow-hidden bg-espresso-950">
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          aria-hidden="true"
        />
      ) : null}
      <div className="relative container-site py-20 sm:py-28">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-rosewood-400">
              {category?.title ?? "Security Solutions"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {service?.title ?? "CCTV Installation"}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              {category?.description}
            </p>
            {service ? (
              <Link
                href={serviceHref(service.slug)}
                className="mt-8 inline-flex items-center gap-1.5 rounded-md bg-rosewood-700 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-rosewood-600"
              >
                View {service.title}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Office Maintenance Services — compact editorial list.
 */
function MaintenanceStation({ services }: { services: Service[] }) {
  const category = categories.find((c) => c.key === "maintenance");
  return (
    <section className="border-b border-slate-200 bg-cream-100">
      <div className="container-site py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-rosewood-600">
                {category?.title ?? "Office Maintenance Services"}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso-950 sm:text-4xl">
                Keep Your Office Running
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                {category?.description}
              </p>
            </div>
            <ViewAllLink />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {services.map((service) => {
              const image = serviceImage(service.slug);
              return (
                <li key={service.slug}>
                  <Link
                    href={serviceHref(service.slug)}
                    className="group grid gap-6 py-8 sm:grid-cols-12 sm:items-center sm:gap-8"
                  >
                    <div className="sm:col-span-3">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 640px) 25vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <h3 className="text-xl font-bold tracking-tight text-espresso-950">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-slate-600">{service.tagline}</p>
                    </div>
                    <div className="sm:col-span-3 sm:text-right">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-espresso-900 transition-colors group-hover:text-rosewood-600">
                        View Service
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeServices() {
  const itServices = getServicesByCategory("it");
  const securityServices = getServicesByCategory("security");
  const maintenanceServices = getServicesByCategory("maintenance");

  return (
    <>
      <ITStation services={itServices} />
      <SecurityStation services={securityServices} />
      <MaintenanceStation services={maintenanceServices} />
    </>
  );
}