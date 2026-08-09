export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Zones", href: "/zones" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

/** Bottom bar mobile — 4 liens + Appel = 5 slots max (style app native). */
export const mobileBottomNav = [
  { label: "Accueil", href: "/", icon: "home" },
  { label: "Services", href: "/services", icon: "services" },
  { label: "Réalisations", href: "/realisations", icon: "work" },
  { label: "Contact", href: "/contact", icon: "contact" },
] as const;

export type MobileBottomNavIcon = (typeof mobileBottomNav)[number]["icon"];

export const footerNav = {
  pages: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Zones d'intervention", href: "/zones" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Avis clients", href: "/avis" },
    { label: "À propos", href: "/a-propos" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
