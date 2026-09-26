import { company } from "@/data/company";

/**
 * Fiche maître Gzimmo — source de vérité de l’entité.
 *
 * Règle stricte : uniquement des faits commerciaux réels (site, avis Google
 * verbatim, réalisations). Champs non publiés (horaires, WhatsApp,
 * certifications, tarifs au m²) : marqués `null` et jamais émis — ni dans le
 * contenu, ni dans le schema.org.
 */

export const entityIdentity = {
  nomOfficiel: company.legalName,
  type: "Entreprise de nettoyage",
  adresse: "Route de Raboud 8, 1680 Romont FR",
  telephone: company.phoneDisplay,
  email: company.email,
  site: company.url,
  zonePrincipale: "Romont / Fribourg (siège)",
  zonesSecondaires: "Toute la Suisse romande, villes et villages inclus",
  /** Priorité documentée (pages locales et preuves) : FR, VD, NE. */
  prioriteDocumentee: "Fribourg, Vaud, Neuchâtel",
  experience: `Plus de ${company.teamExperienceYears} ans d'expérience cumulée dans le nettoyage`,
  devis: "Devis gratuit, réponse sous 24 h",
  langue: "français",
  /** Non publié : ne pas inventer, ne pas émettre. */
  whatsapp: null,
  /** Non publié : ne pas inventer, ne pas émettre. */
  horaires: null,
} as const;

/**
 * Définition sémantique de référence (usage interne — ne pas copier en bloc
 * sur le site). Chaque page doit pouvoir s’y rattacher.
 */
export const entityDefinition =
  "Gzimmo Sàrl est une entreprise de nettoyage et d’entretien basée à Romont, qui intervient dans toute la Suisse romande. Elle est spécialisée dans le nettoyage fin de bail, le nettoyage après chantier, l’entretien de locaux et la conciergerie, pour particuliers, régies, propriétaires et entreprises.";

export type EntityServiceEntry = {
  slug: string;
  service: string;
  /** Contextes réellement couverts — pas de pages artificielles par synonyme. */
  contextes: string[];
  clients: string[];
  zones: string[];
  /** Preuves réelles : avis Google (id) et réalisations (id + lieu). */
  preuves: { avis?: string[]; realisations?: { id: string; lieu: string }[] };
  /** Lien de clarification quand deux intentions se touchent. */
  renvoi?: { vers: string; motif: string };
};

/**
 * Matrice Service × Contexte × Client × Zone × Preuve.
 * Un seul service « après chantier » avec plusieurs contextes (pas de pages
 * par synonyme). « Après déménagement » est un contexte du fin de bail
 * (catégorie GBP + avis Costa verbatim), pas une prestation séparée.
 */
export const entityServices: EntityServiceEntry[] = [
  {
    slug: "nettoyage-apres-chantier",
    service: "Nettoyage après chantier",
    contextes: [
      "après construction",
      "après rénovation",
      "après travaux",
      "fin de chantier",
      "avant réception",
    ],
    clients: ["particuliers", "promoteurs", "entreprises générales", "régies"],
    zones: ["Suisse romande"],
    preuves: {
      avis: ["review-apres-renovation", "review-fin-de-chantier"],
      realisations: [{ id: "chantier-morges", lieu: "Morges" }],
    },
    renvoi: {
      vers: "/nettoyage-fin-de-bail",
      motif: "Avant la remise des clés : état des lieux et checklist régie.",
    },
  },
  {
    slug: "nettoyage-fin-de-bail",
    service: "Nettoyage fin de bail",
    contextes: [
      "état des lieux",
      "remise des clés",
      "après déménagement",
      "avant nouvelle entrée",
    ],
    clients: ["locataires", "régies", "propriétaires", "agences immobilières"],
    zones: ["Suisse romande"],
    preuves: {
      avis: ["review-demenagement-express"],
      realisations: [{ id: "fin-bail-fribourg", lieu: "Fribourg" }],
    },
  },
  {
    slug: "nettoyage-appartements",
    service: "Nettoyage d'appartements",
    contextes: ["remise en état", "entre deux locataires"],
    clients: ["particuliers", "régies", "propriétaires"],
    zones: ["Suisse romande"],
    preuves: { avis: ["review-appartements-commercial"] },
    renvoi: {
      vers: "/nettoyage-fin-de-bail",
      motif: "État des lieux avec checklist régie : prestation fin de bail distincte.",
    },
  },
  {
    slug: "nettoyage-maisons",
    service: "Nettoyage de maisons",
    contextes: ["grand nettoyage", "avant vente"],
    clients: ["propriétaires", "familles", "régies"],
    zones: ["Suisse romande"],
    preuves: {},
  },
  {
    slug: "nettoyage-bureaux",
    service: "Nettoyage de bureaux",
    contextes: ["entretien régulier", "espaces de travail"],
    clients: ["PME", "grandes entreprises", "coworkings", "cabinets professionnels"],
    zones: ["Suisse romande"],
    preuves: { realisations: [{ id: "bureaux-lausanne", lieu: "Lausanne" }] },
  },
  {
    slug: "entretien-locaux",
    service: "Entretien de locaux",
    contextes: ["entretien professionnel", "locaux commerciaux", "immeubles"],
    clients: ["commerces", "régies", "professions libérales"],
    zones: ["Suisse romande"],
    preuves: { avis: ["review-appartements-commercial"] },
  },
  {
    slug: "conciergerie",
    service: "Services de conciergerie",
    contextes: ["parties communes", "immeubles"],
    clients: ["régies immobilières", "syndics et PPE", "propriétaires institutionnels"],
    zones: ["Suisse romande"],
    preuves: {},
  },
  {
    slug: "nettoyage-vitres",
    service: "Nettoyage de vitres",
    contextes: ["vitrines", "baies vitrées", "façades vitrées"],
    clients: ["particuliers", "commerces", "bureaux", "régies"],
    zones: ["Suisse romande"],
    preuves: { realisations: [{ id: "vitres-romont", lieu: "Romont" }] },
  },
];

/** Termes `knowsAbout` — tous adossés à une page, un avis ou une réalisation. */
export const entityKnowsAbout: string[] = [
  "Nettoyage après rénovation",
  "Nettoyage après travaux",
  "Nettoyage après construction",
  "Nettoyage de fin de chantier",
  "Nettoyage après déménagement",
  "Nettoyage avant état des lieux",
  "État des lieux",
  "Remise des clés",
];

/**
 * Profils externes authentiques uniquement. Aucun annuaire, réseau ou
 * partenaire n’est avéré dans le dépôt à ce jour : seul Google Maps est émis.
 *
 * Les deux URLs désignent le même établissement (à vérifier humainement) :
 * - `googleMapsUrl` : lien court partagé de la fiche ;
 * - `googleMapsPlaceUrl` : même fiche via son CID (`company.googlePlaceCid`,
 *   cohérent avec l’embed `googleMapsEmbed` « Gzimmo Sàrl »).
 * Si le lien court ne résout pas vers ce CID, ne garder que l’URL CID.
 */
export const entitySameAs: string[] = [
  company.googleMapsUrl,
  company.googleMapsPlaceUrl,
];
