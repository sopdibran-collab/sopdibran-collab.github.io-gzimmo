import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Animation CSS — plus fiable que framer-motion whileInView sur Safari. */
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn("animate-fade-in-up motion-reduce:animate-none", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
