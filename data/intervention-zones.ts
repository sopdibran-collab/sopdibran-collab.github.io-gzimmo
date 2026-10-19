/**
 * Bassins publiés. Aucune durée de route.
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
    note: "Romont, notre siège, se trouve dans le district de la Glâne, comme Vuisternens-devant-Romont, Ursy, Mézières et Massonnens. Estavayer-le-Lac est dans la Broye fribourgeoise ; Moudon, Oron et Payerne sont des communes vaudoises. Plus de détails sur la page Romont.",
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
    note: "Bulle, Riaz, Vuadens et Broc sont en Gruyère, Châtel-Saint-Denis en Veveyse. Toutes ces communes sont fribourgeoises. Voir la page Bulle.",
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
    note: "Fribourg, Matran, Marly, Villars-sur-Glâne et Givisiez sont en Sarine, Düdingen (Guin) en Singine. Voir la page Fribourg.",
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
    note: "Lausanne, ainsi que Renens et Crissier dans l'Ouest lausannois. Voir la page Lausanne.",
    places: [
      { name: "Lausanne", href: "/nettoyage-lausanne" },
      { name: "Renens" },
      { name: "Crissier" },
    ],
  },
  {
    id: "riviera-chablais",
    timeLabel: "Riviera et Chablais",
    note: "Vevey et Montreux sont sur la Riviera, Aigle dans le Chablais. Montreux est présenté sur la page Vevey.",
    places: [
      { name: "Vevey", href: "/nettoyage-vevey-montreux" },
      { name: "Montreux" },
      { name: "Aigle" },
    ],
  },
  {
    id: "nord-vaudois",
    timeLabel: "Nord vaudois",
    note: "Yverdon-les-Bains est la commune listée. Pour une commune voisine, appelez-nous et nous verrons ensemble si nous pouvons venir.",
    places: [{ name: "Yverdon-les-Bains", href: "/nettoyage-yverdon" }],
  },
  {
    id: "lac",
    timeLabel: "Lac",
    note: "Morat (Murten en allemand) est une commune fribourgeoise du district du Lac. Sa page est en français uniquement.",
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
