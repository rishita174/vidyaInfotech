"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Phone, X } from "lucide-react";
import {
  cta,
  primaryNav,
  routes,
  servicesNavGroups,
} from "@/lib/site-config";
import { site } from "@/data/site";
import { CTAButton } from "@/components/shared/CTAButton";
import { Logo } from "@/components/shared/Logo";
import { whatsappLink } from "@/lib/contact-links";
import { cn } from "@/lib/cn";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          <div
            className="absolute inset-0 bg-espresso-950/60"
            onClick={onClose}
            aria-hidden="true"
          />
          <MobileMenuDrawer onClose={onClose} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function MobileMenuDrawer({ onClose }: { onClose: () => void }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={reduceMotion ? { duration: 0 } : { type: "tween", duration: 0.25 }}
      className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto bg-white shadow-xl"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <span className="flex items-center">
          <Logo height={32} />
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-espresso-950 transition-colors hover:bg-slate-100"
        >
          <X aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 px-5 py-4">
        <ul className="space-y-1">
          {primaryNav
            .filter((link) => link.label !== "Services")
            .map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-espresso-950"
                >
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>

        <div className="mt-4">
          <button
            type="button"
            onClick={() => setServicesExpanded((expanded) => !expanded)}
            aria-expanded={servicesExpanded}
            className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-espresso-950"
          >
            Services
            <ChevronDown
              aria-hidden="true"
              className={cn(
                "h-5 w-5 transition-transform",
                servicesExpanded && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {servicesExpanded ? (
              <motion.div
                initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-1 border-l-2 border-espresso-100 pl-3">
                  {servicesNavGroups.map((group) => (
                    <div key={group.label} className="mb-4">
                      <p className="px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {group.label}
                      </p>
                      <ul className="mt-1 space-y-0.5">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={onClose}
                              className="block rounded-md px-2 py-2 text-base text-slate-600 transition-colors hover:bg-slate-100 hover:text-espresso-950"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </nav>

      <div className="space-y-3 border-t border-slate-200 px-5 py-4">
        <CTAButton href={cta.getAQuote.href} className="w-full">
          {cta.getAQuote.label}
        </CTAButton>
        <div className="grid grid-cols-2 gap-3">
          <CTAButton
            href={site.phoneHref}
            variant="outline"
            className="w-full"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            Call Now
          </CTAButton>
          <CTAButton
            href={whatsappLink()}
            variant="outline"
            className="w-full"
          >
            WhatsApp
          </CTAButton>
        </div>
        <Link
          href={routes.services}
          onClick={onClose}
          className="block rounded-md px-3 py-2 text-center text-sm font-semibold text-espresso-900 underline-offset-2 hover:underline"
        >
          View all services
        </Link>
      </div>
    </motion.div>
  );
}