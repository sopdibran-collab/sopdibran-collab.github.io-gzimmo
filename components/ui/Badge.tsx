import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-label font-semibold uppercase text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <hr
      aria-hidden="true"
      className={cn("h-px w-full border-0 bg-border", className)}
    />
  );
}

export function AccentLine({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("h-px w-16 bg-accent opacity-40", className)}
    />
  );
}
