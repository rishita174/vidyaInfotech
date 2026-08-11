import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategory, getServiceBySlug, services } from "@/data/services";
import { buildPageMetadata } from "@/lib/seo";
import { servicePageLabel } from "@/lib/service-label";
import { ServiceMasterPage } from "@/components/services/ServiceMasterPage";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildPageMetadata({
    title: servicePageLabel(service.title),
    description: `${service.tagline} ${service.title.toLowerCase()} service by Vidya Infotech in Andheri East, Mumbai.`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const category = getCategory(service.category);

  return <ServiceMasterPage service={service} category={category} />;
}
