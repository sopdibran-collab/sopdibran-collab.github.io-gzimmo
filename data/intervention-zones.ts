/**
 * Villes GSC + couverture demandée (VD, FR, NE, Valais jusqu'à Martigny).
 * Pas de landing dupliquée : lien vers page existante, sinon ancre locale.
 */

export type InterventionPlace = {
  name: string;
  href?: string;
  fromGsc?: boolean;
};

export type InterventionCanton = {
  id: string;
  canton: string;
  heading: string;
  places: InterventionPlace[];
};

/** Extraits du CSV (villes / cantons nommés), hors bruit (Berne, Genève 1 imp., Winterthur). */
export const gscNamedPlaces = [
  "Sion",
  "Fribourg",
  "Crissier",
  "Romont",
  "Estavayer",
  "Vuisternens-devant-Romont",
  "Vaud",
] as const;

export const interventionCantons: InterventionCanton[] = [
  {
    id: "fribourg",
    canton: "Fribourg",
    heading: "Canton de Fribourg",
    places: [
      { name: "Romont", href: "/seo/nettoyage-romont", fromGsc: true },
      { name: "Fribourg", href: "/seo/nettoyage-fribourg", fromGsc: true },
      { name: "Estavayer", href: "/seo/nettoyage-estavayer", fromGsc: true },
      { name: "Vuisternens-devant-Romont", href: "/seo/nettoyage-vuisternens-devant-romont", fromGsc: true },
      { name: "Bulle", href: "/seo/nettoyage-bulle" },
      { name: "Ursy", href: "/seo/nettoyage-ursy" },
      { name: "Châtel-Saint-Denis", href: "/seo/nettoyage-chatel-saint-denis" },
    ],
  },
  {
    id: "vaud",
    canton: "Vaud",
    heading: "Canton de Vaud — de Bex à Nyon",
    places: [
      { name: "Lausanne", href: "/seo/nettoyage-lausanne" },
      { name: "Yverdon-les-Bains", href: "/seo/nettoyage-yverdon-les-bains" },
      { name: "Morges", href: "/seo/nettoyage-morges" },
      { name: "Nyon", href: "/seo/nettoyage-nyon" },
      { name: "Payerne", href: "/seo/nettoyage-payerne" },
      { name: "Crissier", fromGsc: true },
      { name: "Bex" },
      { name: "Vevey" },
      { name: "Montreux" },
      { name: "Chexbres" },
      { name: "Oron-la-Ville" },
      { name: "Palézieux" },
    ],
  },
  {
    id: "neuchatel",
    canton: "Neuchâtel",
    heading: "Canton de Neuchâtel",
    places: [{ name: "Neuchâtel", href: "/seo/nettoyage-neuchatel" }],
  },
  {
    id: "valais",
    canton: "Valais",
    heading: "Valais jusqu'à Martigny",
    places: [
      { name: "Sion", fromGsc: true },
      { name: "Martigny" },
    ],
  },
];

export const extraSchemaCities: { name: string; cantonName: string }[] = [
  { name: "Sion", cantonName: "Valais" },
  { name: "Martigny", cantonName: "Valais" },
  { name: "Crissier", cantonName: "Vaud" },
  { name: "Bex", cantonName: "Vaud" },
  { name: "Vevey", cantonName: "Vaud" },
  { name: "Montreux", cantonName: "Vaud" },
  { name: "Chexbres", cantonName: "Vaud" },
  { name: "Oron-la-Ville", cantonName: "Vaud" },
  { name: "Palézieux", cantonName: "Vaud" },
];
