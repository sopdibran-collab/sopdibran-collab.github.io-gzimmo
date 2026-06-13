import { homepageTestimonial } from "@/data/testimonials";
import { FadeIn } from "@/components/ui/FadeIn";

export function Testimonial() {
  return (
    <FadeIn>
      <figure className="mx-auto max-w-3xl text-center">
        <blockquote>
          <p className="font-display text-display-sm leading-snug text-foreground">
            « {homepageTestimonial.quote} »
          </p>
        </blockquote>
        <figcaption className="mt-8 text-sm text-muted">
          — {homepageTestimonial.author}, {homepageTestimonial.location}
        </figcaption>
      </figure>
    </FadeIn>
  );
}
