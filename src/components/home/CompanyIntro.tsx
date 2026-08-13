import Link from "next/link";
import {
  Cpu,
  Cctv,
  Server,
  Network,
  MonitorSmartphone,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import type { LucideIcon } from "lucide-react";

interface SolutionArea {
  label: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const solutionAreas: SolutionArea[] = [
  {
    label: "AIDC",
    description: "Barcode, RFID & Data Capture",
    icon: Cpu,
    href: "/services",
  },
  {
    label: "CCTV",
    description: "Security & Surveillance",
    icon: Cctv,
    href: "/services/cctv-installation",
  },
  {
    label: "IT Infrastructure",
    description: "Hardware & Systems",
    icon: Server,
    href: "/services",
  },
  {
    label: "Networking",
    description: "Connectivity & Network Solutions",
    icon: Network,
    href: "/services",
  },
  {
    label: "Digital Solutions",
    description: "Technology & Business Solutions",
    icon: MonitorSmartphone,
    href: "/services",
  },
];

export function CompanyIntro() {
  return (
    <section className="bg-white" id="about">
      <div className="container-site py-16 sm:py-24">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left — heading & tagline */}
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rosewood-600">
                About Vidya Infotech
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-espresso-950 sm:text-4xl">
                Technology that keeps your business moving.
              </h2>
            </div>

            {/* Right — description paragraphs */}
            <div className="lg:col-span-7">
              <div className="space-y-5 text-[1.0625rem] leading-relaxed text-slate-600">
                <p>
                  Vidya Infotech is a technology solutions provider delivering AIDC, CCTV, IT infrastructure, networking and digital solutions for businesses across industries.
                </p>
                <p>
                  From barcode and RFID systems to surveillance, networking and IT hardware, we combine reliable products with professional technical expertise to help businesses operate securely and efficiently.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Solution areas — interactive category row */}
        <Reveal delay={0.08}>
          <div className="mt-14 border-t border-slate-200 pt-10">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {solutionAreas.map(({ label, description, icon: Icon, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-start gap-3.5 rounded-lg border border-slate-100 bg-white px-4 py-4 transition-all duration-200 hover:border-rosewood-200 hover:bg-rosewood-50/40 hover:shadow-sm lg:flex-col lg:items-start lg:gap-3 lg:px-5 lg:py-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rosewood-50 text-rosewood-600 transition-colors group-hover:bg-rosewood-100">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-espresso-950">
                        {label}
                      </span>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                        {description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
