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
  heading: string;
  places: InterventionPlace[];
};

export const interventionCantons: InterventionCanton[] = [
  {
    id: "fribourg",
    canton: "Fribourg",
    heading: "Canton de Fribourg",
    places: [
      { name: "Romont", href: "/seo/nettoyage-romont" },
      { name: "Fribourg", href: "/seo/nettoyage-fribourg" },
      { name: "Estavayer", href: "/seo/nettoyage-estavayer" },
      { name: "Vuisternens-devant-Romont", href: "/seo/nettoyage-vuisternens-devant-romont" },
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
    heading: "Canton de Neuchâtel",
    places: [{ name: "Neuchâtel", href: "/seo/nettoyage-neuchatel" }],
  },
];

export const extraSchemaCities: { name: string; cantonName: string }[] = [
  { name: "Crissier", cantonName: "Vaud" },
  { name: "Bex", cantonName: "Vaud" },
  { name: "Vevey", cantonName: "Vaud" },
  { name: "Montreux", cantonName: "Vaud" },
  { name: "Chexbres", cantonName: "Vaud" },
  { name: "Oron-la-Ville", cantonName: "Vaud" },
  { name: "Palézieux", cantonName: "Vaud" },
];
