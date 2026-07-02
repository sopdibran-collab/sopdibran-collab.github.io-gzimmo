import { featuredGoogleReview, googleReviewsProfileUrl } from "@/data/google-reviews";
import { company } from "@/data/company";
import { FadeIn } from "@/components/ui/FadeIn";
import { StarRating } from "@/components/ui/StarRating";

type TestimonialProps = {
  quote?: string;
  author?: string;
  location?: string;
  reviewUrl?: string;
};

export function Testimonial({
  quote = featuredGoogleReview.quote,
  author = featuredGoogleReview.author,
  location = featuredGoogleReview.location,
  reviewUrl = featuredGoogleReview.url,
}: TestimonialProps) {
  return (
    <FadeIn>
      <figure className="relative mx-auto max-w-3xl rounded-2xl border border-border/80 bg-white/80 px-8 py-12 text-center shadow-[0_16px_48px_rgba(30,34,39,0.06)] md:px-14 md:py-16">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          {featuredGoogleReview.rating ? (
            <StarRating
              rating={featuredGoogleReview.rating}
              className="text-sm tracking-[0.12em]"
            />
          ) : null}
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white px-3 py-1 text-xs font-medium text-foreground">
            Avis Google
          </span>
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted transition-colors hover:text-accent"
          >
            Voir l&apos;avis sur Google →
          </a>
        </div>
        <div
          aria-hidden="true"
          className="font-display h-20 text-6xl leading-5 tracking-[0.2px] text-accent/20 md:text-7xl"
        >
          «
        </div>
        <blockquote className="-mt-6">
          <p className="whitespace-pre-line font-display text-lg leading-relaxed text-foreground md:text-xl">
            {quote}
          </p>
        </blockquote>
        <figcaption className="mt-8 text-sm font-medium text-muted">
          {author}
          {location ? (
            <>
              <span className="mx-2 text-border">·</span>
              {location}
            </>
          ) : null}
        </figcaption>
        <div className="mt-6">
          <a
            href={googleReviewsProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Tous les avis {company.name} sur Google →
          </a>
        </div>
      </figure>
    </FadeIn>
  );
}
