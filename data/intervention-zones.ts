/**
 * Bassins publiés depuis Romont. Aucune durée de route.
 */

export type ZonePlace = {
  name: string;
  href?: string;
};

export type ZoneBand = {
  id: string;
  timeLabel: string;
  detail?: string;
  note?: string;
  places: ZonePlace[];
};

export const zoneBands: ZoneBand[] = [
  {
    id: "glane-broye",
    timeLabel: "Siège · Glâne et Broye",
    detail: "Route de Raboud 8, 1680 Romont",
    places: [
      { name: "Romont", href: "/nettoyage-romont" },
      { name: "Vuisternens-devant-Romont" },
      { name: "Ursy" },
      { name: "Mézières" },
      { name: "Massonnens" },
      { name: "Estavayer-le-Lac" },
      { name: "Moudon" },
      { name: "Oron" },
      { name: "Payerne" },
    ],
  },
  {
    id: "gruyere-veveyse",
    timeLabel: "Gruyère et Veveyse",
    places: [
      { name: "Bulle", href: "/nettoyage-bulle" },
      { name: "Riaz" },
      { name: "Vuadens" },
      { name: "Broc" },
      { name: "Châtel-Saint-Denis" },
    ],
  },
  {
    id: "sarine-singine",
    timeLabel: "Sarine et Singine",
    places: [
      { name: "Fribourg", href: "/nettoyage-fribourg" },
      { name: "Matran" },
      { name: "Marly" },
      { name: "Villars-sur-Glâne" },
      { name: "Givisiez" },
      { name: "Düdingen (Guin)" },
    ],
  },
  {
    id: "lausanne",
    timeLabel: "Lausanne et Ouest lausannois",
    places: [
      { name: "Lausanne", href: "/nettoyage-lausanne" },
      { name: "Renens" },
      { name: "Crissier" },
    ],
  },
  {
    id: "riviera-chablais",
    timeLabel: "Riviera et Chablais",
    places: [
      { name: "Vevey", href: "/nettoyage-vevey-montreux" },
      { name: "Montreux" },
      { name: "Aigle" },
    ],
  },
  {
    id: "nord-vaudois",
    timeLabel: "Nord vaudois",
    places: [{ name: "Yverdon-les-Bains", href: "/nettoyage-yverdon" }],
  },
  {
    id: "lac",
    timeLabel: "Lac",
    places: [{ name: "Morat (Murten)", href: "/nettoyage-morat" }],
  },
];

/** Communes réellement listées comme desservies. Pas les cantons entiers. */
export const servedCommunes: { name: string; cantonName: string }[] = [
  { name: "Romont", cantonName: "Fribourg" },
  { name: "Vuisternens-devant-Romont", cantonName: "Fribourg" },
  { name: "Ursy", cantonName: "Fribourg" },
  { name: "Mézières", cantonName: "Fribourg" },
  { name: "Massonnens", cantonName: "Fribourg" },
  { name: "Bulle", cantonName: "Fribourg" },
  { name: "Riaz", cantonName: "Fribourg" },
  { name: "Vuadens", cantonName: "Fribourg" },
  { name: "Broc", cantonName: "Fribourg" },
  { name: "Châtel-Saint-Denis", cantonName: "Fribourg" },
  { name: "Fribourg", cantonName: "Fribourg" },
  { name: "Matran", cantonName: "Fribourg" },
  { name: "Marly", cantonName: "Fribourg" },
  { name: "Villars-sur-Glâne", cantonName: "Fribourg" },
  { name: "Givisiez", cantonName: "Fribourg" },
  { name: "Düdingen", cantonName: "Fribourg" },
  { name: "Estavayer-le-Lac", cantonName: "Fribourg" },
  { name: "Moudon", cantonName: "Vaud" },
  { name: "Oron", cantonName: "Vaud" },
  { name: "Payerne", cantonName: "Vaud" },
  { name: "Lausanne", cantonName: "Vaud" },
  { name: "Renens", cantonName: "Vaud" },
  { name: "Crissier", cantonName: "Vaud" },
  { name: "Yverdon-les-Bains", cantonName: "Vaud" },
  { name: "Vevey", cantonName: "Vaud" },
  { name: "Montreux", cantonName: "Vaud" },
  { name: "Aigle", cantonName: "Vaud" },
  { name: "Morat", cantonName: "Fribourg" },
];
