/**
 * Villes qui ont une page. Footer et accueil lisent cette liste.
 * Yverdon entre avec la page /nettoyage-yverdon.
 */
export const publishedCities = [
  {
    label: "Romont",
    homeLabel: "Entreprise de nettoyage à Romont",
    href: "/nettoyage-romont",
    note: "Siège",
  },
  {
    label: "Bulle",
    homeLabel: "Nettoyage à Bulle",
    href: "/nettoyage-bulle",
  },
  {
    label: "Fribourg",
    homeLabel: "Nettoyage à Fribourg",
    href: "/nettoyage-fribourg",
  },
  {
    label: "Lausanne",
    homeLabel: "Nettoyage à Lausanne",
    href: "/nettoyage-lausanne",
  },
  {
    label: "Vevey",
    homeLabel: "Nettoyage à Vevey et Montreux",
    href: "/nettoyage-vevey-montreux",
  },
  {
    label: "Yverdon",
    homeLabel: "Nettoyage à Yverdon-les-Bains",
    href: "/nettoyage-yverdon",
  },
] as const;
