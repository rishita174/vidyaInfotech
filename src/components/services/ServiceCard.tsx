import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategory } from "@/data/services";
import { serviceHref } from "@/lib/site-config";
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
  number?: number;
}

export function ServiceCard({ service, number }: ServiceCardProps) {
  const Icon = service.icon;
  const category = service.category ? getCategory(service.category) : undefined;

  return (
    <Link
      href={serviceHref(service.slug)}
      className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-100 text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-white">
          <Icon aria-hidden="true" className="h-6 w-6" />
        </span>
        {number ? (
          <span className="text-4xl font-bold leading-none tracking-tight text-slate-200">
            {String(number).padStart(2, "0")}
          </span>
        ) : null}
      </div>

      {category ? (
        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent-600">
          {category.title}
        </p>
      ) : null}

      <h3 className="mt-1.5 text-lg font-semibold text-navy-950">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {service.tagline}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 border-t border-slate-100 pt-4 text-sm font-semibold text-navy-900 transition-colors group-hover:text-accent-600">
        Explore Service
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}