import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { cta, routes } from "@/lib/site-config";
import { whatsappLink } from "@/lib/contact-links";
import { CTAButton } from "@/components/shared/CTAButton";
import { Logo } from "@/components/shared/Logo";

const solutions = [
  { label: "Computers & IT", href: routes.services },
  { label: "Security", href: routes.services },
  { label: "Office Maintenance", href: routes.services },
] as const;

const serviceLinks = [
  { label: "Computers & IT", href: routes.services },
  { label: "Security", href: routes.services },
  { label: "Office Maintenance", href: routes.services },
] as const;

const contactItems = [
  {
    label: "Phone",
    href: site.phoneHref,
    icon: Phone,
  },
  {
    label: "Email",
    href: site.emailHref,
    icon: Mail,
  },
] as const;

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-espresso-950 text-slate-400">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-6 sm:px-8 sm:py-8 lg:px-16 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,35fr)_minmax(0,21.67fr)_minmax(0,21.67fr)_minmax(0,21.67fr)] lg:gap-x-12">
          {/* Column 1 — Brand */}
          <div className="flex flex-col items-center">
            <Link href={routes.home} className="inline-block">
              <Logo variant="light" height={136} />
            </Link>
            <p className="mt-10 text-center text-sm leading-relaxed">{site.tagline}</p>
            <div className="mt-10">
              <CTAButton href={cta.getAQuote.href}>
                {cta.getAQuote.label}
              </CTAButton>
            </div>
          </div>

          {/* Column 2 — Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Solutions
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {solutions.map((link) => (
                <li key={link.label}>
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

          {/* Column 3 — Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
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

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-6 space-y-7 text-sm">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className="mt-1.5 flex items-center gap-2.5 transition-colors hover:text-white"
                    >
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-rosewood-400" />
                      {item.label === "Phone" ? site.phone : site.email}
                    </a>
                  </li>
                );
              })}
              <li>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Address
                </p>
                <address className="mt-1.5 flex items-start gap-2.5 not-italic">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-rosewood-400"
                  />
                  {site.addressFull}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white">
            Follow Us
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Vidya Infotech on WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-espresso-600 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5 hover:text-white"
            >
              <MessageCircle aria-hidden="true" className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/vidya-infotech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Vidya Infotech on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-espresso-600 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5 hover:text-white"
            >
              <LinkedInIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div className="mt-5 border-t border-espresso-800 pt-5 text-center">
          <p className="text-xs text-slate-500">
            &copy; 2026 {site.name}. All rights reserved.
          </p>
          <div className="mt-1.5 flex items-center justify-center gap-3">
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300 hover:underline"
            >
              Privacy Policy
            </Link>
            <span
              aria-hidden="true"
              className="h-3 w-px bg-espresso-700"
            />
            <Link
              href="/terms"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300 hover:underline"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}