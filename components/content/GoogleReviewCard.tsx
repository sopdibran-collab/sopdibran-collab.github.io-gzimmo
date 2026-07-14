import { StarRating } from "@/components/ui/StarRating";
import type { GoogleReview } from "@/data/google-reviews";
import { cn } from "@/lib/utils";

type GoogleReviewCardProps = {
  review: GoogleReview;
  className?: string;
  "aria-hidden"?: boolean;
};

export function GoogleReviewCard({ review, className, "aria-hidden": ariaHidden }: GoogleReviewCardProps) {
  return (
    <article
      aria-hidden={ariaHidden}
      className={cn(
        "rounded-md border border-border/70 bg-surface px-8 py-10 shadow-[0_8px_32px_rgba(30,34,39,0.04)] sm:px-12 sm:py-14",
        className,
      )}
    >
      <header className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-3 py-1 text-xs font-medium text-foreground">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-success" />
          Avis Google
          <span className="sr-only">, vérifié</span>
        </span>
        <StarRating rating={review.rating} className="text-sm tracking-[0.14em] text-accent" />
      </header>

      <div className="mt-8">
        <span
          aria-hidden="true"
          className="font-display text-5xl leading-none text-accent/15 sm:text-6xl"
        >
          &ldquo;
        </span>
        <blockquote className="-mt-4">
          <p className="font-display text-lg leading-[1.75] text-foreground sm:text-xl sm:leading-[1.8]">
            {review.text}
          </p>
        </blockquote>
      </div>

      <footer className="mt-10 space-y-2 border-t border-border/60 pt-8">
        <a
          href={review.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent underline decoration-accent/30 underline-offset-[3px] transition-colors hover:text-accent-hover hover:decoration-accent"
        >
          Voir l&apos;avis sur Google Maps
        </a>
        {review.contextLabel ? (
          <p className="text-sm text-muted">Avis client — {review.contextLabel}</p>
        ) : null}
      </footer>
    </article>
  );
}
