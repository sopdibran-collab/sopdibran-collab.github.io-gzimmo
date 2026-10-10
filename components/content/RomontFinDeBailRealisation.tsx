import Link from "next/link";
import { cn } from "@/lib/utils";

type Photo = {
  label: string;
  alt: string;
  base: string;
  width: number;
  height: number;
  /** Cadre 4:5 pour la paire avant / après. */
  frame?: "pair" | "natural";
};

const pair: Photo[] = [
  {
    label: "Avant",
    alt: "Paroi de douche en verre avant détartrage, traces de calcaire sur le verre, fin de bail à Romont",
    base: "romont-douche-avant",
    width: 800,
    height: 1000,
    frame: "pair",
  },
  {
    label: "Après",
    alt: "Paroi vitrée de la douche après détartrage, fin de bail à Romont",
    base: "romont-douche-apres",
    width: 800,
    height: 1000,
    frame: "pair",
  },
];

const gallery: Photo[] = [
  {
    label: "Stores",
    alt: "Stores à lamelles lavés devant une fenêtre, fin de bail à Romont",
    base: "romont-stores",
    width: 800,
    height: 1067,
  },
  {
    label: "Vitrage",
    alt: "Vitrage et cadre de fenêtre nettoyés, fin de bail à Romont",
    base: "romont-vitrage",
    width: 800,
    height: 600,
  },
];

function PhotoFrame({ photo }: { photo: Photo }) {
  const src800 = `/images/realisations/${photo.base}-800.webp`;
  const src1600 = `/images/realisations/${photo.base}-1600.webp`;
  const pairFrame = photo.frame === "pair";

  return (
    <figure>
      <figcaption className="text-sm font-medium text-foreground">{photo.label}</figcaption>
      <div
        className={cn(
          "mt-2 overflow-hidden rounded-xl border border-border/80 bg-surface",
          pairFrame && "aspect-[4/5]",
        )}
      >
        <picture>
          <source
            media="(min-width: 640px)"
            srcSet={`${src800} 800w, ${src1600} 1600w`}
            sizes={pairFrame ? "(min-width: 1024px) 32rem, 45vw" : "(min-width: 1024px) 28rem, 45vw"}
          />
          {/* WebP srcset explicite : 800 px sous 640 px, 1600 px au-dessus. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src800}
            srcSet={`${src800} 800w`}
            sizes="100vw"
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            loading="lazy"
            decoding="async"
            className={cn("w-full", pairFrame ? "h-full object-cover" : "h-auto")}
          />
        </picture>
      </div>
    </figure>
  );
}

export function RomontFinDeBailRealisation({ className }: { className?: string }) {
  return (
    <section className={cn("border-t border-border/80 pt-16", className)} aria-labelledby="realisation-romont">
      <h2 id="realisation-romont" className="font-display text-display-sm text-foreground">
        Nettoyage de fin de bail à Romont
      </h2>
      <p className="mt-4 max-w-2xl text-reading text-muted">
        Nous avons nettoyé cet appartement de Romont avant sa remise à la gérance. Le four et les
        plaques ont été dégraissés, les fenêtres nettoyées avec leurs encadrements et leurs rails,
        les stores lavés lamelle par lamelle, et le balcon et les vitrages faits. Dans la salle de
        bain, nous avons détartré la paroi de douche, la robinetterie et les joints. La remise des
        clés s&apos;est bien passée : le locataire comme la gérance étaient très satisfaits.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {pair.map((photo) => (
          <PhotoFrame key={photo.base} photo={photo} />
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">Fin de bail à Romont : paroi de douche détartrée</p>

      <ul className="mt-8 grid list-none gap-6 sm:grid-cols-2">
        {gallery.map((photo) => (
          <li key={photo.base}>
            <PhotoFrame photo={photo} />
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-2xl text-reading text-foreground">
        Vous déménagez dans la région de Romont ?{" "}
        <Link
          href="/contact?service=nettoyage-fin-de-bail&ville=Romont"
          className="font-medium text-accent-ink underline decoration-accent/40 underline-offset-4 transition-colors duration-200 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Demandez votre devis gratuit.
        </Link>
      </p>
    </section>
  );
}
