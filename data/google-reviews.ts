import { company } from "@/data/company";

/**
 * Note publique Google Business Profile (vérifiée 2026-09-13).
 * `reviewCount` doit rester aligné sur le nombre d’avis Maps affichés ci-dessous.
 */
export const googleBusinessPublicRating = {
  ratingValue: "5.0",
  reviewCount: 4,
  bestRating: 5,
} as const;

/** Avis mis en avant (composant Testimonial / accueil). */
export type FeaturedGoogleReview = {
  quote: string;
  author: string;
  location?: string;
  /** Lien direct vers l'avis sur Google Maps */
  url: string;
  /** Note sur 5, si connue */
  rating?: number;
};

export type GoogleReview = {
  id: string;
  rating: number;
  text: string;
  url: string;
  /** Nom de l’auteur sur Google, si connu */
  author?: string;
  contextLabel?: string;
};

/** Avis mis en avant — Patrick Eigenmann (nettoyage après rénovation / après chantier). */
export const featuredGoogleReview: FeaturedGoogleReview = {
  quote: `Nous avons fait appel à cette entreprise pour un nettoyage après rénovation. Après les travaux il restait beaucoup de poussière fine et de traces sur plusieurs surfaces. L'équipe est intervenue rapidement et le résultat final était vraiment propre.

Ce que nous avons apprécié, c'est le soin apporté aux détails et le fait que le lieu soit réellement prêt à être utilisé après leur passage. Communication simple et intervention efficace.

Très bonne expérience pour un nettoyage après chantier, nous referons appel à eux si besoin.`,
  author: "Patrick Eigenmann",
  location: "Suisse romande",
  url: "https://maps.app.goo.gl/DiW8HsFLSv5CMwuk6",
  rating: 5,
};

/** Avis Google affichés sur le site (textes verbatim Maps). */
export const googleReviews: GoogleReview[] = [
  {
    id: "review-demenagement-express",
    rating: 5,
    author: "Henrique Costa",
    // Texte verbatim Google Maps (2026-09-13) — orthographe d’origine conservée
    text: "Suite à un déménagement de dernière minute j'ai fait appel à Gzimmo pour un nettoyage express de qualité! En moins de une journée l'appartement était niquel prêt à accueillir des nouveau locataire!!",
    url: company.googleMapsUrl,
    contextLabel: "Nettoyage express après déménagement",
  },
  {
    id: "review-appartements-commercial",
    rating: 5,
    author: "Arbis Mueller",
    text: "Une équipe au top ! J'ai fait appel à eux pour le nettoyage de plusieurs appartements ainsi que d'un local commercial, et à chaque fois le résultat était irréprochable. Rigueur, ponctualité et sens du détail sont au rendez-vous. Un grand merci pour leur sérieux et leur professionnalisme, je recommande vivement !",
    url: "https://maps.app.goo.gl/mw5wBmZGKsnvQZj89",
    contextLabel: "Nettoyage appartements & local commercial",
  },
  {
    id: "review-apres-renovation",
    rating: 5,
    author: featuredGoogleReview.author,
    text: featuredGoogleReview.quote,
    url: featuredGoogleReview.url,
    contextLabel: "Nettoyage après rénovation / après chantier",
  },
  {
    id: "review-fin-de-chantier",
    rating: 5,
    // Texte verbatim Google Maps — lien Maps public
    text: "Service de nettoyage exceptionnel ! Ponctuels, minutieux et très professionnels. Leurs services ont été rendus pour un nettoyage de fin de chantier, et le résultat est impeccable, chaque détail est soigné. Une équipe sérieuse et sympathique, que je recommande sans hésiter.",
    url: "https://maps.app.goo.gl/JUgNKLN95Ee9iVkV8",
    contextLabel: "Nettoyage fin de chantier",
  },
];

export const googleReviewsProfileUrl = company.googleMapsUrl;
