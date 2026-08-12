import { headerTrustPoints } from "@/lib/site-config";

export function TrustStrip() {
  return (
    <section
      aria-label="Company benefits"
      className="border-b border-slate-200 bg-cream-100"
    >
      <div className="container-site">
        <ul className="grid grid-cols-1 gap-y-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {headerTrustPoints.map((point) => (
            <li key={point.title} className="px-0 lg:px-6 lg:first:pl-0">
              <p className="text-sm font-semibold text-espresso-950">
                {point.title}
              </p>
              <p className="mt-0.5 hidden text-xs text-slate-600 sm:block">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}