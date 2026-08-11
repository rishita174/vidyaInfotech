import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServicesByCategory } from "@/data/services";
import { serviceHref } from "@/lib/site-config";
import type { ServiceCategory } from "@/types/service";

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  number?: number;
}

export function ServiceCategoryCard({ category, number }: ServiceCategoryCardProps) {
  const Icon = category.icon;
  const servicesInCategory = getServicesByCategory(category.key);

  return (
    <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-navy-300 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy-900 text-white">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        {number ? (
          <span className="text-3xl font-bold leading-none tracking-tight text-slate-200">
            {String(number).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-navy-950">{category.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {category.description}
      </p>
      <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
        {servicesInCategory.map((service) => (
          <li key={service.slug}>
            <Link
              href={serviceHref(service.slug)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 transition-colors hover:text-accent-600"
            >
              {service.title}
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}