import { home, processSteps } from "@/lib/site-config";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function ProcessSection() {
  return (
    <section className="bg-white">
      <div className="container-site py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow={home.process.eyebrow}
            title={home.process.title}
            description={home.process.description}
            align="center"
          />
        </Reveal>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <li className="relative h-full rounded-lg border border-slate-200 bg-slate-50 p-6 transition-colors duration-200 hover:border-navy-300">
                  <span className="absolute right-5 top-5 text-4xl font-bold leading-none tracking-tight text-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy-900 text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-semibold text-navy-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
          This is a website enquiry flow to help you get started — not an
          internal company procedure.
        </p>
      </div>
    </section>
  );
}