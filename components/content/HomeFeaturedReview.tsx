import { featuredGoogleReview, googleReviews } from "@/data/google-reviews";
import { StarRating } from "@/components/ui/StarRating";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextLink } from "@/components/ui/TextLink";

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 shrink-0">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
      />
    </svg>
  );
}

/** Avis home — mise en page mockup, contenu = avis Google existants. */
export function HomeFeaturedReview() {
  const review = googleReviews[1] ?? googleReviews[0];
  const rating = review?.rating ?? featuredGoogleReview.rating ?? 5;
  const quote = review?.text ?? featuredGoogleReview.quote;
  const url = review?.url ?? featuredGoogleReview.url;
  const meta = review?.contextLabel ?? featuredGoogleReview.location ?? "Google";

  return (
    <FadeIn>
      <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[7rem_minmax(0,1fr)_auto] lg:gap-14">
        <p className="font-display text-sm font-medium tracking-[0.12em] text-muted uppercase">
          Avis
        </p>

        <blockquote className="min-w-0 border-y border-border/80 py-10 text-center lg:border-y-0 lg:border-x lg:border-border/80 lg:px-14 lg:py-6">
          <div className="flex justify-center">
            <StarRating
              rating={rating}
              className="inline-flex text-base tracking-[0.18em] text-accent"
            />
          </div>
          <p className="mx-auto mt-6 max-w-3xl break-words font-display text-lg leading-relaxed text-foreground italic sm:text-xl sm:leading-[1.7]">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="mt-8 flex min-w-0 flex-wrap items-center justify-center gap-3 text-sm">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full min-w-0 items-center gap-3 font-medium text-foreground transition-colors duration-200 hover:text-accent"
            >
              <GoogleMark />
              <span className="min-w-0 break-words text-left">
                Avis Google
                <span className="text-muted"> · {meta}</span>
              </span>
            </a>
          </footer>
        </blockquote>

        <div className="lg:justify-self-end">
          <TextLink href="/avis">Tous les avis</TextLink>
        </div>
      </div>
    </FadeIn>
  );
}
