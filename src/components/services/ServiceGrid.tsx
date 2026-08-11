import { ServiceCard } from "@/components/services/ServiceCard";
import type { Service } from "@/types/service";

interface ServiceGridProps {
  services: Service[];
  numbered?: boolean;
}

export function ServiceGrid({ services, numbered }: ServiceGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          key={service.slug}
          service={service}
          number={numbered ? index + 1 : undefined}
        />
      ))}
    </div>
  );
}
