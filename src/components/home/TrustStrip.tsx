import { headerTrustPoints } from "@/lib/site-config";

export function TrustStrip() {
  return (
    <section
      aria-label="Company benefits"
      className="border-b border-slate-200 bg-white"
    >
      <div className="container-site">
        <ul className="-mx-2 grid grid-cols-2 gap-y-6 py-8 sm:mx-0 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {headerTrustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <li key={point.title} className="flex items-center gap-3 px-2 lg:px-6 lg:first:pl-0">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-950">{point.title}</p>
                  <p className="mt-0.5 hidden text-xs text-slate-500 sm:block">
                    {point.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}