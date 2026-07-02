import { company } from "@/data/company";

export type GoogleReview = {
  quote: string;
  author: string;
  location?: string;
  /** Lien direct vers l'avis sur Google Maps */
  url: string;
  /** Note sur 5, si connue */
  rating?: number;
};

/** Avis mis en avant — Google Business Profile (nettoyage après chantier). */
export const featuredGoogleReview: GoogleReview = {
  quote: `Nous avons fait appel à cette entreprise pour un nettoyage après rénovation. Après les travaux il restait beaucoup de poussière fine et de traces sur plusieurs surfaces. L'équipe est intervenue rapidement et le résultat final était vraiment propre.

Ce que nous avons apprécié, c'est le soin apporté aux détails et le fait que le lieu soit réellement prêt à être utilisé après leur passage. Communication simple et intervention efficace.

Très bonne expérience pour un nettoyage après chantier, nous referons appel à eux si besoin.`,
  author: "Client Google",
  location: "Suisse romande",
  url: "https://maps.app.goo.gl/DiW8HsFLSv5CMwuk6",
  rating: 5,
};

export const googleReviewsProfileUrl = company.googleMapsUrl;
