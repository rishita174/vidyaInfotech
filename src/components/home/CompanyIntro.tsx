import {
  Cpu,
  Cctv,
  Server,
  Network,
  MonitorSmartphone,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const solutionAreas = [
  { label: "AIDC", icon: Cpu },
  { label: "CCTV", icon: Cctv },
  { label: "IT Infrastructure", icon: Server },
  { label: "Networking", icon: Network },
  { label: "Digital Solutions", icon: MonitorSmartphone },
] as const;

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
                  Vidya Infotech is a technology solutions provider offering end-to-end AIDC, CCTV, IT Infrastructure, Networking and Digital Solutions for businesses across industries.
                </p>
                <p>
                  We provide Barcode &amp; Data Capture, RFID, Mobile Computing, Barcode Printing, CCTV Surveillance, Networking, IT Hardware, Security Solutions and System Integration, supported by leading OEM technologies and professional service expertise.
                </p>
                <p>
                  Our focus is to deliver reliable, scalable and cost-effective technology solutions that improve security, operational efficiency, accuracy and productivity.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Solution areas — visual highlight strip */}
        <Reveal delay={0.08}>
          <div className="mt-14 border-t border-slate-200 pt-10">
            <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {solutionAreas.map(({ label, icon: Icon }) => (
                <li key={label} className="group flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rosewood-50 text-rosewood-600 transition-colors group-hover:bg-rosewood-100">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-espresso-950">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Closing tagline */}
        <Reveal delay={0.12}>
          <p className="mt-12 border-l-2 border-rosewood-500 pl-5 text-lg font-medium text-espresso-800">
            Vidya Infotech — Smart Technology. Secure Operations. Better Business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
