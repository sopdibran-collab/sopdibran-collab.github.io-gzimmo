"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GoogleReviewCard } from "@/components/content/GoogleReviewCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { googleReviews as defaultReviews, type GoogleReview } from "@/data/google-reviews";
import { googleReviewsLocalBusinessSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

type GoogleReviewsSliderProps = {
  reviews?: GoogleReview[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  withSchema?: boolean;
  className?: string;
};

const SWIPE_THRESHOLD_PX = 48;

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-5"
    >
      <path
        d={direction === "left" ? "M12.5 15L7.5 10L12.5 5" : "M7.5 15L12.5 10L7.5 5"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GoogleReviewsSlider({
  reviews = defaultReviews,
  autoPlay = true,
  autoPlayInterval = 7000,
  withSchema = false,
  className,
}: GoogleReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const reviewCount = reviews.length;

  const goTo = useCallback(
    (index: number) => {
      if (reviewCount === 0) return;
      const nextIndex = ((index % reviewCount) + reviewCount) % reviewCount;
      setCurrentIndex(nextIndex);
    },
    [reviewCount],
  );

  const goNext = useCallback(() => {
    if (reviewCount === 0) return;
    setCurrentIndex((prev) => (prev + 1) % reviewCount);
  }, [reviewCount]);

  const goPrev = useCallback(() => {
    if (reviewCount === 0) return;
    setCurrentIndex((prev) => (prev - 1 + reviewCount) % reviewCount);
  }, [reviewCount]);

  useEffect(() => {
    if (!autoPlay || isPaused || reviewCount <= 1) return;

    const timer = window.setInterval(goNext, autoPlayInterval);
    return () => window.clearInterval(timer);
  }, [autoPlay, autoPlayInterval, goNext, isPaused, reviewCount]);

  const handlePointerDown = (clientX: number) => {
    pointerStartX.current = clientX;
  };

  const handlePointerUp = (clientX: number) => {
    if (pointerStartX.current === null) return;
    const delta = clientX - pointerStartX.current;
    if (Math.abs(delta) >= SWIPE_THRESHOLD_PX) {
      if (delta < 0) goNext();
      else goPrev();
    }
    pointerStartX.current = null;
  };

  if (reviewCount === 0) return null;

  return (
    <>
      {withSchema ? <JsonLd data={googleReviewsLocalBusinessSchema(reviews)} /> : null}

      <div className={cn("mx-auto w-full max-w-[760px]", className)}>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Avis clients Google"
          className="outline-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
          onPointerDown={(event) => handlePointerDown(event.clientX)}
          onPointerUp={(event) => handlePointerUp(event.clientX)}
          onPointerCancel={() => {
            pointerStartX.current = null;
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              goPrev();
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              goNext();
            }
          }}
          tabIndex={0}
        >
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Avis {currentIndex + 1} sur {reviewCount}
          </p>

          <div className="overflow-hidden">
            {reviews.map((review, index) => (
              <GoogleReviewCard
                key={review.id}
                review={review}
                className={cn(
                  "transition-opacity duration-300",
                  index === currentIndex ? "opacity-100" : "hidden",
                )}
                aria-hidden={index !== currentIndex}
              />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Avis précédent"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-border/80 bg-background text-foreground transition-colors hover:border-border hover:text-accent focus-visible:outline-offset-4"
            >
              <ChevronIcon direction="left" />
            </button>

            <div
              className="flex items-center justify-center gap-2"
              role="tablist"
              aria-label="Sélection d'avis"
            >
              {reviews.map((review, index) => (
                <button
                  key={review.id}
                  type="button"
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Aller à l'avis ${index + 1}`}
                  onClick={() => goTo(index)}
                  className={cn(
                    "size-2.5 rounded-full transition-colors duration-200",
                    index === currentIndex
                      ? "bg-accent"
                      : "bg-border hover:bg-muted/50",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Avis suivant"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-border/80 bg-background text-foreground transition-colors hover:border-border hover:text-accent focus-visible:outline-offset-4"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
