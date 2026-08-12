import type { ServiceGroup } from "@/types/service";
import { Reveal } from "@/components/shared/Reveal";

interface ServiceScopeProps {
  groups: ServiceGroup[];
}

interface CatalogueRowProps {
  item: string;
  rowClass: string;
}

function CatalogueRow({ item, rowClass }: CatalogueRowProps) {
  return (
    <li className="group border-b border-slate-200 transition-colors first:border-t first:border-slate-200 hover:bg-white">
      <div className={rowClass}>
        <span
          aria-hidden="true"
          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rosewood-500"
        />
        <span className="flex-1 font-medium text-espresso-950">{item}</span>
      </div>
    </li>
  );
}

/**
 * Editorial catalogue layout for the service scope.
 * Typography, dividers and a subtle accent carry the design — no per-row
 * icons and no numbering.
 *
 * Adapts to the service structure:
 *  - Two or more groups  → first group is the dominant column,
 *    subsequent groups are complementary side columns.
 *  - A single group      → full-width catalogue (two columns on large screens).
 */
export function ServiceScope({ groups }: ServiceScopeProps) {
  const [dominant, ...complementary] = groups;
  if (!dominant) return null;

  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="container-site py-12 sm:py-14">
        {complementary.length > 0 ? (
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
            <div className="lg:col-span-3">
              <Reveal>
                <div className="border-b-2 border-espresso-900 pb-3">
                  <h2 className="text-2xl font-bold tracking-tight text-espresso-950">
                    {dominant.label}
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <ol className="mt-2">
                  {dominant.items.map((item) => (
                    <CatalogueRow
                      key={item}
                      item={item}
                      rowClass="flex items-start gap-4 px-2 py-3 sm:px-3"
                    />
                  ))}
                </ol>
              </Reveal>
            </div>

            <div className="space-y-10 lg:col-span-2">
              {complementary.map((group, groupIndex) => (
                <div key={group.label}>
                  <Reveal delay={0.1 + groupIndex * 0.05}>
                    <div className="border-b border-espresso-300 pb-3">
                      <h2 className="text-xl font-bold tracking-tight text-espresso-950">
                        {group.label}
                      </h2>
                    </div>
                  </Reveal>
                  <Reveal delay={0.15 + groupIndex * 0.05}>
                    <ol className="mt-2">
                      {group.items.map((item) => (
                        <CatalogueRow
                          key={item}
                          item={item}
                          rowClass="flex items-start gap-4 py-2.5"
                        />
                      ))}
                    </ol>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <Reveal>
              <div className="border-b-2 border-espresso-900 pb-3">
                <h2 className="text-2xl font-bold tracking-tight text-espresso-950">
                  {dominant.label}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <ol className="mt-2 gap-x-10 sm:grid sm:grid-cols-2">
                {dominant.items.map((item) => (
                  <CatalogueRow
                    key={item}
                    item={item}
                    rowClass="flex items-start gap-4 px-2 py-3 sm:px-3"
                  />
                ))}
              </ol>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}