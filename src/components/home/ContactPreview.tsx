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
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-rosewood-600 transition-colors hover:text-rosewood-700"
            >
              View Contact Page
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <div className="grid gap-3 py-7 sm:grid-cols-12 sm:gap-6">
                    <div className="sm:col-span-3">
                      <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                        {item.label}
                      </p>
                    </div>
                    <div className="sm:col-span-8">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="inline-flex items-start gap-3 font-semibold break-words text-espresso-950 transition-colors hover:text-rosewood-600"
                        >
                          <Icon
                            aria-hidden="true"
                            className="mt-0.5 h-5 w-5 shrink-0 text-rosewood-600"
                          />
                          {item.value}
                        </a>
                      ) : (
                        <p className="inline-flex items-start gap-3 break-words text-espresso-950">
                          <Icon
                            aria-hidden="true"
                            className="mt-0.5 h-5 w-5 shrink-0 text-rosewood-600"
                          />
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}