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
    <div
      className={cn(
        "relative text-center md:text-left",
        inverse && "md:px-8 md:first:pl-0 md:last:pr-0",
      )}
    >
      <p
        className={cn(
          "font-display text-display-xl font-semibold tracking-tight",
          inverse ? "text-white" : "text-foreground",
        )}
      >
        <span>{value}</span>
      </p>
      <p
        className={cn(
          "mt-4 max-w-[14rem] text-base font-medium leading-snug md:mx-0 md:max-w-none",
          inverse ? "mx-auto text-white/75" : "text-muted",
        )}
      >
        {label}
      </p>
    </div>
  );
}
