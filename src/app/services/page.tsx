import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, getServicesByCategory } from "@/data/services";
import { serviceImage } from "@/data/imagery";
import { serviceHref } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactStrip } from "@/components/shared/ContactStrip";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore Vidya Infotech services: laptop repair, desktop repair, CCTV installation, office electrical work, furniture repair, plumbing, and carpet flooring in Andheri East, Mumbai.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Services"
        description="Computer & IT solutions, security systems, and office maintenance services for modern workplaces."
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="container-site py-14 sm:py-16 lg:py-20">
          <div className="space-y-16">
            {categories.map((category) => {
              const servicesInCategory = getServicesByCategory(category.key);
              const image = serviceImage(category.serviceSlugs[0]);
              return (
                <div
                  key={category.key}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-rosewood-600">
                      Service Category
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso-950 sm:text-4xl">
                      {category.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                      {category.description}
                    </p>
                    <ul className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
                      {servicesInCategory.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={serviceHref(service.slug)}
                            className="group flex items-center justify-between gap-4 py-5"
                          >
                            <span>
                              <span className="block font-semibold text-espresso-950">
                                {service.title}
                              </span>
                              <span className="mt-0.5 block text-sm text-slate-600">
                                {service.tagline}
                              </span>
                            </span>
                            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-espresso-900 transition-colors group-hover:text-rosewood-600">
                              View
                              <ArrowRight
                                aria-hidden="true"
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                              />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
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
              );
            })}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}