import { homepageTestimonial } from "@/data/testimonials";
import { FadeIn } from "@/components/ui/FadeIn";

export function Testimonial() {
  return (
    <FadeIn>
      <figure className="relative mx-auto max-w-3xl rounded-2xl border border-border/80 bg-white/80 px-8 py-12 text-center shadow-[0_16px_48px_rgba(30,34,39,0.06)] md:px-14 md:py-16">
        <div
          aria-hidden="true"
          className="font-display h-20 text-6xl leading-5 tracking-[0.2px] text-accent/20 md:text-7xl"
        >
          «
        </div>
        <blockquote className="-mt-6">
          <p className="font-display text-display-sm leading-snug text-foreground md:text-[1.65rem]">
            {homepageTestimonial.quote}
          </p>
        </blockquote>
        <figcaption className="mt-8 text-sm font-medium text-muted">
          {homepageTestimonial.author}
          <span className="mx-2 text-border">·</span>
          {homepageTestimonial.location}
        </figcaption>
      </figure>
    </FadeIn>
  );
}
