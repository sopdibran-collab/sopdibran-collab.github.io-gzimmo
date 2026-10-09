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
        "border-t-2 border-accent",
        padded && "pt-8",
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
