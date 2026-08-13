import type { Metadata } from "next";
import {
  Cpu,
  Cctv,
  Server,
  Network,
  Printer,
  ScanBarcode,
} from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactStrip } from "@/components/shared/ContactStrip";
import { CTAButton } from "@/components/shared/CTAButton";
import { cta } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Products",
  description:
    "Vidya Infotech supplies AIDC, CCTV, IT hardware, networking equipment, barcode printers, scanners, RFID systems and technology products for businesses across Mumbai.",
  path: "/products",
});

const productCategories = [
  {
    label: "AIDC Equipment",
    description: "Barcode scanners, RFID readers, mobile computers and data capture devices.",
    icon: Cpu,
  },
  {
    label: "CCTV & Surveillance",
    description: "IP cameras, DVRs, NVRs and complete surveillance systems.",
    icon: Cctv,
  },
  {
    label: "Barcode Printers",
    description: "Desktop, industrial and mobile barcode label printers.",
    icon: Printer,
  },
  {
    label: "Barcode Scanners",
    description: "Handheld, fixed-mount and wireless barcode scanners.",
    icon: ScanBarcode,
  },
  {
    label: "IT Hardware",
    description: "Desktops, laptops, servers, storage and computing infrastructure.",
    icon: Server,
  },
  {
    label: "Networking Equipment",
    description: "Switches, routers, access points and structured cabling solutions.",
    icon: Network,
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Technology Products for Your Business"
        description="Vidya Infotech supplies AIDC, CCTV, IT hardware, networking and technology products from leading brands."
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="container-site py-16 sm:py-24">
          {/* Coming soon message */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-rosewood-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rosewood-700">
              Product Catalogue Coming Soon
            </span>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-espresso-950 sm:text-3xl">
              Our full product catalogue is being prepared.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              In the meantime, get in touch with our team to discuss your product requirements. We supply technology products from leading OEM brands with competitive pricing and professional support.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CTAButton href={cta.getAQuote.href} withArrow>
                Get a Quote
              </CTAButton>
              <CTAButton href={cta.callNow.href} variant="outline">
                Call Now
              </CTAButton>
            </div>
          </div>

          {/* Product category preview */}
          <div className="mt-16 border-t border-slate-200 pt-12">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-rosewood-600">
              Product Categories
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {productCategories.map(({ label, description, icon: Icon }) => (
                <li
                  key={label}
                  className="rounded-lg border border-slate-100 bg-white px-5 py-5 transition-colors hover:border-slate-200 hover:bg-slate-50/50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-rosewood-50 text-rosewood-600">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-espresso-950">
                    {label}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
