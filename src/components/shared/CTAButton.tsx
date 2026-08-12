import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type CTAButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "light";

interface CTAButtonProps {
  href: string;
  variant?: CTAButtonVariant;
  className?: string;
  children: ReactNode;
  withArrow?: boolean;
}

const variantClasses: Record<CTAButtonVariant, string> = {
  primary:
    "bg-rosewood-700 text-cream-50 hover:bg-rosewood-600 focus-visible:outline-rosewood-700",
  secondary:
    "bg-espresso-900 text-white hover:bg-espresso-800 focus-visible:outline-espresso-900",
  outline:
    "border border-espresso-200 bg-white text-espresso-900 hover:border-espresso-400 hover:bg-espresso-50 focus-visible:outline-espresso-900",
  ghost: "text-espresso-900 hover:bg-espresso-50 focus-visible:outline-espresso-900",
  light:
    "bg-white text-espresso-900 hover:bg-espresso-50 focus-visible:outline-white",
};

function isInternalHref(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

export function CTAButton({
  href,
  variant = "primary",
  className,
  children,
  withArrow = false,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      ) : null}
    </>
  );

  if (isInternalHref(href)) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}