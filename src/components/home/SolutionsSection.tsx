import { ArrowRight } from "lucide-react";
import { categories, getServicesByCategory } from "@/data/services";
import { comingSoonTeaser, home, routes } from "@/lib/site-config";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import Link from "next/link";

export function SolutionsSection() {
  return (
    <section className="bg-slate-50">
      <div className="container-site py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow={home.solutionsSection.eyebrow}
            title={home.solutionsSection.title}
            description={home.solutionsSection.description}
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const count = getServicesByCategory(category.key).length;
            return (
              <Reveal key={category.key} delay={index * 0.08}>
                <div className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-white transition-colors group-hover:bg-accent-500 group-hover:text-navy-950">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <span className="text-4xl font-bold tracking-tight text-slate-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-navy-950">
                    {category.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {category.description}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-400">
                    {count} {count === 1 ? "service" : "services"}
                  </p>
                  <Link
                    href={routes.services}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
                  >
                    Explore Services
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-col items-start justify-between gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-100/60 px-6 py-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                {comingSoonTeaser.eyebrow}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {comingSoonTeaser.description}
              </p>
            </div>
            <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {comingSoonTeaser.badge}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}