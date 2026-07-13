type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
  label?: string;
};

export function StarRating({ rating, max = 5, className, label }: StarRatingProps) {
  const stars = Array.from({ length: max }, (_, index) => index < rating);

  return (
    <span
      className={className}
      role="img"
      aria-label={label ?? `${rating} sur ${max} étoiles`}
    >
      {stars.map((filled, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={filled ? "text-accent" : "text-border"}
        >
          ★
        </span>
      ))}
    </span>
  );
}
