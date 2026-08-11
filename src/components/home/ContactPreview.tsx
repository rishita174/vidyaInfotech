import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { home, routes } from "@/lib/site-config";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const contactItems = [
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    icon: Phone,
  },
  {
    label: "Email",
    value: site.email,
    href: site.emailHref,
    icon: Mail,
  },
  {
    label: "Address",
    value: `${site.address.unit}, ${site.address.building}, ${site.address.locality}`,
    href: undefined,
    icon: MapPin,
  },
];

export function ContactPreview() {
  return (
    <section className="bg-white">
      <div className="container-site py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title={home.contactPreview.title}
              description={home.contactPreview.description}
            />
            <Link
              href={routes.contact}
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
            >
              View Contact Page
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-7 transition-colors duration-200 hover:border-navy-200"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy-900 text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-lg font-semibold break-words text-navy-950 transition-colors hover:text-accent-600"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 break-words text-lg font-semibold text-navy-950">
                      {item.value}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}