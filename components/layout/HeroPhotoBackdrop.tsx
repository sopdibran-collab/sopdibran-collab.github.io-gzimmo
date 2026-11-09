import Image from "next/image";

type HeroPhotoBackdropProps = {
  src: string;
  alt: string;
  position?: string;
  priority?: boolean;
  /**
   * `decor`: blurred backdrop + site-wide veil (inner pages).
   * `photo`: sharp validated photo, veil only behind the copy column.
   */
  treatment?: "decor" | "photo";
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
  treatment = "decor",
}: HeroPhotoBackdropProps) {
  const isPhoto = treatment === "photo";
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        /* Photo: cover crops a 16:9 source into taller frames, so request enough pixels. */
        sizes={isPhoto ? "(max-width: 767px) 280vw, (max-width: 1023px) 200vw, 100vw" : "100vw"}
        className={isPhoto ? "hero-photo-media-sharp" : "hero-photo-media"}
        style={position ? { objectPosition: position } : undefined}
      />
      {isPhoto ? (
        <>
          <div aria-hidden="true" className="hero-copy-veil-photo" />
          <div aria-hidden="true" className="hero-header-veil-photo" />
        </>
      ) : (
        <>
          <div aria-hidden="true" className="hero-photo-overlay" />
          <div aria-hidden="true" className="hero-copy-veil" />
        </>
      )}
    </>
  );
}
