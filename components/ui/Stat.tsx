import { cn } from "@/lib/utils";

export function Stat({
  value,
  label,
  inverse = false,
}: {
  value: string;
  label: string;
  inverse?: boolean;
}) {
  return (
    <div className="text-center md:text-left">
      <p
        className={cn(
          "font-display text-display-lg font-semibold tracking-tight",
          inverse ? "text-white" : "text-foreground",
        )}
      >
        {value}
      </p>
      <p className={cn("mt-2 text-sm", inverse ? "text-white/60" : "text-muted")}>
        {label}
      </p>
    </div>
  );
}
