"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { site } from "@/data/site";
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

  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={routes.home}
          className="flex items-center"
          aria-label={`${site.nameDisplay} home`}
        >
          <Logo height={36} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <Link
            href={routes.home}
            aria-current={isActive(routes.home) ? "page" : undefined}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive(routes.home)
                ? "text-espresso-950"
                : "text-slate-700 hover:bg-slate-100 hover:text-espresso-950"
            )}
          >
            Home
          </Link>
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
          {primaryNav
            .filter(
              (link) =>
                link.href !== routes.home && link.label !== "Services"
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

        <div className="hidden items-center gap-2 lg:flex">
          <CTAButton href={cta.callNow.href} variant="ghost">
            <Phone aria-hidden="true" className="h-4 w-4" />
            Call Now
          </CTAButton>
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