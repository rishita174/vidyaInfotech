import { cn } from "@/lib/cn";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("relative overflow-hidden bg-espresso-950", className)}>
      <div className="relative container-site py-16 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-widest text-rosewood-400">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}