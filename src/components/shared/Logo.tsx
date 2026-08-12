import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  height?: number;
}

export function Logo({ variant = "dark", className, height = 40 }: LogoProps) {
  const src = variant === "light" ? "/logo-light.png" : "/logo.png";
  return (
    <Image
      src={src}
      alt="Vidya Infotech"
      width={420}
      height={208}
      style={{ height, width: "auto" }}
      className={cn("h-auto w-auto", className)}
      priority
    />
  );
}
