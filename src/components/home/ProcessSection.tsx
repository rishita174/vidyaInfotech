import { home, processSteps } from "@/lib/site-config";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function ProcessSection() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-site py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow={home.process.eyebrow}
            title={home.process.title}
            description={home.process.description}
            align="center"
          />
        </Reveal>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <li className="flex h-full flex-col bg-slate-50 p-7">
                <span className="text-sm font-bold tabular-nums tracking-widest text-rosewood-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-semibold text-espresso-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
          This is a website enquiry flow to help you get started — not an
          internal company procedure.
        </p>
      </div>
    </section>
  );
}