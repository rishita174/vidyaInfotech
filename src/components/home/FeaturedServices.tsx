import { services } from "@/data/services";
import { home } from "@/lib/site-config";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { Reveal } from "@/components/shared/Reveal";

export function FeaturedServices() {
  return (
    <section className="bg-white">
      <div className="container-site py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow={home.featuredServices.eyebrow}
            title={home.featuredServices.title}
            description={home.featuredServices.description}
            align="center"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14">
            <ServiceGrid services={services} numbered />
          </div>
        </Reveal>
      </div>
    </section>
  );
}