import { GoogleReviewCard } from "@/components/content/GoogleReviewCard";
import { googleReviews as defaultReviews, type GoogleReview } from "@/data/google-reviews";
import { cn } from "@/lib/utils";

type GoogleReviewsListProps = {
  reviews?: GoogleReview[];
  className?: string;
};

export function GoogleReviewsList({
  reviews = defaultReviews,
  className,
}: GoogleReviewsListProps) {
  if (reviews.length === 0) return null;

  return (
    <ul className={cn("mx-auto flex w-full max-w-[760px] flex-col gap-6", className)}>
      {reviews.map((review) => (
        <li key={review.id} className="list-none">
          <GoogleReviewCard review={review} />
        </li>
      ))}
    </ul>
  );
}
