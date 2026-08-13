"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/contact-links";
import {
  cta,
  primaryNav,
  routes,
  servicesNavGroups,
} from "@/lib/site-config";
import { CTAButton } from "@/components/shared/CTAButton";
import { Logo } from "@/components/shared/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (href: string) =>
    mounted
      ? href === routes.home
        ? pathname === href
        : pathname.startsWith(href)
      : false;

  return (
    <header className="sticky top-0 z-50 border-b border-espresso-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={routes.home}
          className="flex shrink-0 items-center"
          aria-label={`${site.nameDisplay} home`}
        >
          <Logo height={36} />
        </Link>

        <nav aria-label="Primary" className="hidden flex-1 items-center justify-center gap-2 px-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href={routes.services}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((open) => !open)}
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(routes.services)
                  ? "text-espresso-950"
                  : "text-slate-700 hover:bg-slate-100 hover:text-espresso-950"
              )}
            >
              Services
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "h-4 w-4 transition-transform",
                  servicesOpen && "rotate-180"
                )}
              />
            </Link>
            <AnimatePresence>
              {servicesOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 rounded-lg border border-slate-200 bg-white p-5 shadow-xl"
                  role="menu"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {servicesNavGroups.map((group) => (
                      <div key={group.label}>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          {group.label}
                        </p>
                        <ul className="mt-3 space-y-1">
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                role="menuitem"
                                onClick={() => setServicesOpen(false)}
                                className="block rounded-md px-2 py-1.5 text-sm text-slate-700 transition-colors hover:bg-espresso-50 hover:text-espresso-950"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={routes.services}
                    onClick={() => setServicesOpen(false)}
                    className="mt-4 block rounded-md bg-espresso-50 px-3 py-2.5 text-sm font-semibold text-espresso-900 transition-colors hover:bg-espresso-100"
                  >
                    View all services
                  </Link>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
              onClick={() => setSolutionsOpen((open) => !open)}
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors text-slate-700 hover:bg-slate-100 hover:text-espresso-950"
              )}
            >
              Solutions
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "h-4 w-4 transition-transform",
                  solutionsOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {solutionsOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 rounded-lg border border-slate-200 bg-white p-5 shadow-xl"
                  role="menu"
                >
                  <div className="py-8 text-center text-sm text-slate-500">
                    Software products coming soon.
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          {primaryNav
            .filter(
              (link) =>
                link.href !== routes.home && link.label !== "Services" && link.label !== "Contact"
            )
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-espresso-950"
                    : "text-slate-700 hover:bg-slate-100 hover:text-espresso-950"
                )}
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          <div className="flex items-center gap-6 text-slate-700">
            <a
              href={cta.callNow.href}
              className="transition-colors hover:text-espresso-950"
              aria-label="Call Now"
            >
              <Phone aria-hidden="true" className="h-[18px] w-[18px]" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-espresso-950"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon aria-hidden="true" className="h-[26px] w-[26px] -ml-1" />
            </a>
          </div>
          <CTAButton href={cta.getAQuote.href}>{cta.getAQuote.label}</CTAButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-espresso-950 transition-colors hover:bg-slate-100 lg:hidden"
        >
          <Menu aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254.52a221.73 221.73 0 0029.78 111L32 480l118.25-30.87a221.71 221.71 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222.53A222.12 222.12 0 00414.73 97.1zM256.94 438.66h-.08a183.75 183.75 0 01-93.77-25.63l-6.73-4-69.73 18.2 18.52-68-4.39-7a183.68 183.68 0 01-28.06-97.68c.05-102.11 83.38-185.28 185.74-185.28a183.71 183.71 0 01131.33 54.2 184 184 0 0154.2 131.25c-.06 102.12-83.39 185.27-185.8 185.27zm101.69-138.82c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.52 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.53-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.52-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.43 37.63-26.4s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" />
    </svg>
  );
}