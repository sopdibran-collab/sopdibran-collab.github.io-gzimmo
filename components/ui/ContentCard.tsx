import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function ContentCard({
  children,
  className,
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/80 bg-white/85 shadow-[0_8px_32px_rgba(30,34,39,0.05)]",
        padded && "p-8 md:p-10",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionDivider({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-t border-border/80 pt-16", className)}>
      <h2 className="font-display text-display-sm text-foreground">{title}</h2>
      <div className="mt-8">{children}</div>
    </div>
  );
}
