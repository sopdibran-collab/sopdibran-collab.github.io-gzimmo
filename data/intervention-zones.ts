/**
 * Zones d'intervention — Fribourg, Vaud, Neuchâtel.
 * Lien vers une page locale existante, sinon libellé sans lien.
 */

export type InterventionPlace = {
  name: string;
  href?: string;
};

export type InterventionCanton = {
  id: string;
  canton: string;
  /** Abréviation cantonale, utile pour scanner les cartes. */
  code: string;
  heading: string;
  description: string;
  places: InterventionPlace[];
};

export const interventionCantons: InterventionCanton[] = [
  {
    id: "fribourg",
    canton: "Fribourg",
    code: "FR",
    heading: "Canton de Fribourg",
    description: "Siège à Romont. Nettoyage et entretien dans le canton et les communes listées.",
    places: [
      { name: "Romont", href: "/seo/nettoyage-romont" },
      { name: "Fribourg", href: "/seo/nettoyage-fribourg" },
      { name: "Bulle", href: "/seo/nettoyage-bulle" },
      { name: "Estavayer" },
      { name: "Vuisternens-devant-Romont" },
      { name: "Ursy" },
      { name: "Châtel-Saint-Denis" },
    ],
  },
  {
    id: "vaud",
    canton: "Vaud",
    code: "VD",
    heading: "Canton de Vaud — de Bex à Nyon",
    description: "Interventions dans le canton, y compris les communes listées ci-dessous.",
    places: [
      { name: "Lausanne", href: "/seo/nettoyage-lausanne" },
      { name: "Yverdon-les-Bains" },
      { name: "Morges" },
      { name: "Nyon" },
      { name: "Payerne" },
      { name: "Crissier" },
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
    code: "NE",
    heading: "Canton de Neuchâtel",
    description: "Intervention à Neuchâtel, depuis Romont.",
    places: [{ name: "Neuchâtel", href: "/seo/nettoyage-neuchatel" }],
  },
];

export const extraSchemaCities: { name: string; cantonName: string }[] = [
  { name: "Estavayer", cantonName: "Fribourg" },
  { name: "Vuisternens-devant-Romont", cantonName: "Fribourg" },
  { name: "Ursy", cantonName: "Fribourg" },
  { name: "Châtel-Saint-Denis", cantonName: "Fribourg" },
  { name: "Yverdon-les-Bains", cantonName: "Vaud" },
  { name: "Morges", cantonName: "Vaud" },
  { name: "Nyon", cantonName: "Vaud" },
  { name: "Payerne", cantonName: "Vaud" },
  { name: "Crissier", cantonName: "Vaud" },
  { name: "Bex", cantonName: "Vaud" },
  { name: "Vevey", cantonName: "Vaud" },
  { name: "Montreux", cantonName: "Vaud" },
  { name: "Chexbres", cantonName: "Vaud" },
  { name: "Oron-la-Ville", cantonName: "Vaud" },
  { name: "Palézieux", cantonName: "Vaud" },
];
