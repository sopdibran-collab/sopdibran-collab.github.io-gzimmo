import Link from "next/link";
import { cn } from "@/lib/utils";

/** Stable FAQ anchor — matches `id: "garantie-remise-bail"` in data/faq.ts */
export const GARANTIE_FAQ_HREF = "/faq#garantie-remise-bail";

export const GARANTIE_REMISE_BAIL_COPY =
  "Garantie de remise de bail : si la régie tique, on revient sans frais.";

type GarantieRemiseBailProps = {
  className?: string;
  /** Bandeau pleine largeur, ou encadré compact près des formulaires / CTA. */
  variant?: "band" | "inline";
  /** Lien vers la réponse FAQ sur le refus de régie. */
  showFaqLink?: boolean;
  /** Ton pour sections sombres (ContactCta). */
  tone?: "light" | "dark";
};

/**
 * Bandeau garantie de remise de bail (promesse déjà documentée dans la FAQ).
 */
export function GarantieRemiseBail({
  className,
  variant = "band",
  showFaqLink = true,
  tone = "light",
}: GarantieRemiseBailProps) {
  const isDark = tone === "dark";
  const isInline = variant === "inline";

  return (
    <aside
      className={cn(
        isInline
          ? "rounded-lg border px-4 py-3.5 sm:px-5"
          : "border-y",
        isDark
          ? "border-white/15 bg-white/[0.06]"
          : "border-border/80 bg-accent-muted/70",
        className,
      )}
      aria-label="Garantie de remise de bail"
    >
      <div
        className={cn(
          "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-8",
          isInline
            ? "min-w-0"
            : "mx-auto max-w-[1200px] min-w-0 px-container py-4",
        )}
      >
        <p
          className={cn(
            "min-w-0 text-[0.9375rem] leading-snug font-medium tracking-[-0.01em]",
            isDark ? "text-white/95" : "text-foreground",
          )}
        >
          <span
            className="mr-2.5 inline-block h-1.5 w-1.5 shrink-0 translate-y-[-1px] rounded-full bg-accent align-middle"
            aria-hidden="true"
          />
          {GARANTIE_REMISE_BAIL_COPY}
        </p>
        {showFaqLink ? (
          <Link
            href={GARANTIE_FAQ_HREF}
            className={cn(
              "shrink-0 text-sm font-medium transition-colors duration-200",
              isDark
                ? "text-white/70 hover:text-white"
                : "text-accent hover:text-accent-hover",
            )}
          >
            En savoir plus
            <span aria-hidden="true"> →</span>
          </Link>
        ) : null}
      </div>
    </aside>
  );
}
