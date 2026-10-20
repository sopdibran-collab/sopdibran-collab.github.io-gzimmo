import Image from "next/image";

type HeroPhotoBackdropProps = {
  src: string;
  alt: string;
  position?: string;
  priority?: boolean;
};

/**
 * Full-bleed décor photo shared by HomeHero and image PageHero.
 * Overlay values are the site-wide photo-hero contract.
 */
export function HeroPhotoBackdrop({
  src,
  alt,
  position,
  priority = true,
}: HeroPhotoBackdropProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="hero-photo-media"
        style={position ? { objectPosition: position } : undefined}
      />
      <div aria-hidden="true" className="hero-photo-overlay" />
      <div aria-hidden="true" className="hero-copy-veil" />
    </>
  );
}
