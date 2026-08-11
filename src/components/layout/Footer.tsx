import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { cta, routes, servicesNavGroups } from "@/lib/site-config";
import { CTAButton } from "@/components/shared/CTAButton";
import { categories } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="container-site py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link href={routes.home} className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent-500 text-sm font-bold text-navy-950">
                V
              </span>
              <span className="text-lg font-bold text-white">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{site.tagline}</p>
            <div className="mt-6">
              <CTAButton href={cta.getAQuote.href}>{cta.getAQuote.label}</CTAButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </p>
            <div className="mt-5 grid gap-8 sm:grid-cols-3">
              {categories.map((category) => {
                const group = servicesNavGroups.find(
                  (g) => g.label === category.title
                );
                return (
                  <div key={category.key}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {category.title}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm">
                      {group?.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="transition-colors hover:text-white"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <Link href={routes.home} className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href={routes.services} className="transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={routes.whyChooseUs}
                  className="transition-colors hover:text-white"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href={routes.contact} className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <p className="text-xs uppercase tracking-wide text-slate-500">Phone</p>
                <a
                  href={site.phoneHref}
                  className="mt-1 flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                  {site.phone}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
                <a
                  href={site.emailHref}
                  className="mt-1 flex items-center gap-2 break-all transition-colors hover:text-white"
                >
                  <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-wide text-slate-500">Address</p>
                <address className="mt-1 flex items-start gap-2 not-italic">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  {site.address.unit}, {site.address.building},{" "}
                  {site.address.locality}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-navy-800 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:justify-between sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Andheri East, Mumbai</p>
        </div>
      </div>
    </footer>
  );
}