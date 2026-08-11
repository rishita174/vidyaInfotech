import { Check } from "lucide-react";
import type { ServiceBenefit } from "@/types/service";

interface ServiceBenefitsProps {
  benefits: ServiceBenefit[];
}

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit) => (
        <li
          key={benefit.title}
          className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4"
        >
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
            <Check aria-hidden="true" className="h-4 w-4" />
          </span>
          <div>
            <p className="font-semibold text-navy-950">{benefit.title}</p>
            {benefit.description ? (
              <p className="mt-1 text-sm text-slate-600">{benefit.description}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
