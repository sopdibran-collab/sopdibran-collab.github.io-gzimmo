import type { FaqContent, FaqItem } from "@/data/faq";
import { faq, getFaqById, getFaqsByIds } from "@/data/faq";
import { featuredGoogleReview } from "@/data/google-reviews";
import { getServicePath } from "@/lib/service-paths";

export type ServiceLanding = {
  slug: string;
  h1: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  forWho: { profile: string; situation: string }[];
  guarantee?: { title: string; paragraphs: string[] };
  process: { title: string; items: string[] };
  whyGzimmo: { title: string; description: string }[];
  faqs: readonly (FaqItem | FaqContent)[];
  relatedServiceSlugs: string[];
  relatedLocalLinks: { label: string; href: string }[];
  testimonials: { quote: string; author: string }[];
};

const sharedWhy = [
  {
    title: "Produits professionnels fournis",
    description:
      "Gzimmo fournit l'ensemble des produits — exclusivement professionnels, adaptés à chaque type de surface et de matériau.",
  },
  {
    title: "Réactivité depuis Romont",
    description:
      "Basés Route de Raboud 8 à Romont, nous intervenons en priorité en Glâne, dans le canton de Fribourg et le canton de Vaud. Devis sous 24 h.",
  },
  {
    title: "Devis transparent avant intervention",
    description:
      "Chaque prestation fait l'objet d'un devis détaillé et gratuit. Le tarif convenu est le tarif final.",
  },
];

const sharedFaqs = getFaqsByIds(["zone-suisse-romande", "produits-fournis", "devis-gratuit"]);

export const serviceLandings: ServiceLanding[] = [
  {
    slug: "nettoyage-fin-de-bail",
    h1: "Nettoyage de fin de bail avec garantie en Suisse romande",
    subtitle:
      "Vous déménagez ? Laissez-nous nous occuper du nettoyage pendant que vous avancez. Service conforme aux exigences des régies immobilières.",
    metaTitle: "Nettoyage fin de bail Romont–Fribourg | Garantie régie",
    metaDescription:
      "Fin de bail conforme régies (FR/VD). Checklist, devis sous 24 h, garantie reprise. Gzimmo Romont — 076 214 23 42.",
    intro:
      "Un déménagement, c'est déjà assez de stress. Confiez-nous le nettoyage de fin de bail : Gzimmo Sàrl intervient depuis Romont (FR) avec une checklist rigoureuse, adaptée aux standards des régies fribourgeoises et vaudoises. Sanitaires impeccables, cuisines dégraissées, sols lessivés, vitres sans traces — pendant que vous finalisez votre installation, nous préparons la remise des clés.",
    forWho: [
      {
        profile: "Locataires",
        situation:
          "Vous quittez un appartement ou une maison et souhaitez récupérer votre garantie sans stress.",
      },
      {
        profile: "Régies immobilières",
        situation:
          "Vous gérez un parc locatif et avez besoin d'un prestataire fiable, réactif et conforme à vos standards.",
      },
      {
        profile: "Propriétaires",
        situation: "Vous préparez un logement pour un nouveau locataire ou une vente.",
      },
      {
        profile: "Agences immobilières",
        situation: "Vous mandatez des nettoyages de fin de bail pour vos mandats de gestion.",
      },
    ],
    guarantee: {
      title: "Garantie de remise de bail",
      paragraphs: [
        "Le nettoyage de fin de bail en Suisse requiert une rigueur absolue. Les régies immobilières appliquent des standards de restitution stricts : un oubli sur les joints de salle de bain, un four mal dégraissé ou des vitres laissées avec des traces peut entraîner une retenue sur la garantie locative.",
        "Gzimmo connaît ces exigences. Nous travaillons régulièrement avec des régies du canton de Fribourg, du Vaud et de Genève. Checklist rigoureuse adaptée à votre régie, devis clair établi avant toute intervention, engagement sur un résultat irréprochable.",
        "Si un point n'est pas conforme aux attentes de la régie, nous intervenons à nouveau sans frais supplémentaires dans le cadre de notre garantie de remise de bail.",
      ],
    },
    process: {
      title: "Notre processus de nettoyage complet inclut :",
      items: [
        "Nettoyage minutieux et détartrage des sanitaires et salles de bain (joints, robinetterie, parois de douche).",
        "Dégraissage en profondeur des cuisines, fours, plaques de cuisson et hottes.",
        "Lessivage des sols, plinthes et murs selon les matériaux (carrelage, parquet, stratifié).",
        "Nettoyage des vitres intérieures et extérieures sans rayures.",
        "Dépoussiérage des radiateurs, prises, interrupteurs et plinthes électriques.",
        "Nettoyage des placards intérieurs et extérieurs, des portes et chambranles.",
        "Aspiration et lavage des surfaces en hauteur (luminaires, corniches).",
        "Évacuation des déchets de nettoyage en fin d'intervention.",
      ],
    },
    whyGzimmo: [
      {
        title: "Expertise des régies immobilières",
        description:
          "Nous connaissons les standards de restitution appliqués par les régies fribourgeoises, vaudoises et genevoises. Pas de mauvaise surprise à l'état des lieux.",
      },
      ...sharedWhy,
    ],
    faqs: [
      ...sharedFaqs,
      faq(
        "garantie-regie",
        "qualite",
        "Que se passe-t-il si la régie n'est pas satisfaite ?",
        "Gzimmo applique une garantie de remise de bail. Si un point ne correspond pas aux exigences de la régie lors de l'état des lieux, nous revenons corriger sans frais supplémentaires. Notre objectif est un état des lieux validé du premier coup.",
      ),
      getFaqById("cout-fin-de-bail")!,
      faq(
        "delai-fin-bail",
        "delais",
        "Combien de temps à l'avance dois-je vous contacter ?",
        "Idéalement 1 à 2 semaines avant la date de l'état des lieux. En cas d'urgence, contactez-nous — nous faisons notre maximum pour intervenir dans les délais.",
      ),
      faq(
        "regies-partenaires",
        "zone",
        "Travaillez-vous directement avec les régies immobilières ?",
        "Oui. Nous collaborons régulièrement avec des régies et agences immobilières en Suisse romande pour des nettoyages de fin de bail, d'entretien régulier et de remise en état après travaux.",
      ),
    ],
    relatedServiceSlugs: [
      "nettoyage-apres-chantier",
      "nettoyage-appartements",
      "entretien-locaux",
    ],
    relatedLocalLinks: [
      { label: "Nettoyage fin de bail à Romont", href: "/nettoyage-fin-de-bail-romont" },
      { label: "Nettoyage fin de bail à Fribourg", href: "/nettoyage-fin-de-bail-fribourg" },
      { label: "Entreprise de nettoyage à Romont", href: "/seo/nettoyage-romont" },
    ],
    testimonials: [],
  },
  {
    slug: "nettoyage-apres-chantier",
    h1: "Nettoyage après chantier, rénovation ou travaux — Fribourg & Vaud",
    subtitle:
      "Poussières fines, résidus de plâtre et traces de chantier : on remet l'espace prêt à livrer ou à habiter — depuis Romont.",
    metaTitle: "Nettoyage après chantier & rénovation | Fribourg–Vaud",
    metaDescription:
      "Nettoyage après chantier, après rénovation ou après travaux à Romont, Fribourg et Vaud. Poussières fines, sols, vitres. Devis gratuit — 076 214 23 42.",
    intro:
      "En une phrase : après rénovation ou chantier, Gzimmo élimine poussières fines et résidus pour rendre l'espace livrable — depuis Romont (FR), sur Fribourg et Vaud. Les poussières de plâtre et de coupe s'infiltrent dans les radiateurs, joints et menuiseries : un passage ménage classique ne suffit pas. Notre équipe (plus de 15 ans d'expérience cumulée dans le nettoyage) applique une checklist chantier, des produits professionnels et un planning calé sur votre réception.",
    forWho: [
      {
        profile: "Particuliers",
        situation:
          "Vous venez de rénover cuisine, salle de bain ou appartement et voulez habiter sans poussière fine.",
      },
      {
        profile: "Promoteurs & directions de travaux",
        situation:
          "Vous livrez un lot et devez présenter des finitions propres à la réception.",
      },
      {
        profile: "Artisans & entreprises générales",
        situation:
          "Vous mandatez le nettoyage final avant état des lieux ou remise des clés.",
      },
      {
        profile: "Régies & propriétaires",
        situation:
          "Remise en état après travaux locatifs avant remise en location.",
      },
    ],
    process: {
      title: "Checklist typique après chantier / rénovation",
      items: [
        "Aspiration et élimination des poussières fines (plâtre, sciure, ciment) sur sols et surfaces hautes.",
        "Lessivage des sols selon matériau (carrelage, parquet, béton ciré) sans abîmer les finitions neuves.",
        "Vitres intérieures / extérieures sans voile ni résidus de silicone ou de joints.",
        "Sanitaires et cuisines débarrassés des traces de travaux (calcaire de chantier, projections).",
        "Plinthes, radiateurs, prises, interrupteurs, chambranles et menuiseries.",
        "Évacuation des déchets de nettoyage en fin d'intervention.",
      ],
    },
    whyGzimmo: [
      {
        title: "Spécialistes de la poussière de rénovation",
        description:
          "Ce n'est pas un ménage standard : on traite les zones où la poussière fine reste après les artisans.",
      },
      {
        title: "Avis Google après chantier",
        description:
          "Des clients ont noté notre intervention après rénovation sur Google Maps — détail et lieu prêt à être utilisé.",
      },
      {
        title: "Planning calé sur la livraison",
        description:
          "On intervient selon votre réception, pas « quand on peut ». Devis sous 24 h depuis Romont.",
      },
      ...sharedWhy,
    ],
    faqs: [
      ...sharedFaqs,
      faq(
        "apres-renovation-vs-chantier",
        "services",
        "Nettoyage après rénovation ou après chantier : est-ce la même chose ?",
        "Oui pour l'essentiel : poussières fines, résidus et surfaces à protéger. « Après rénovation », « après travaux » et « après construction » décrivent le même besoin. On adapte la checklist au type de travaux (plâtrerie, peinture, carrelage, etc.).",
      ),
      faq(
        "poussiere-fine",
        "qualite",
        "Pourquoi un ménage classique ne suffit-il pas après travaux ?",
        "La poussière de plâtre et de coupe se loge dans les radiateurs, joints, prises et textiles. Sans aspiration ciblée et lessivage adapté, elle réapparaît dès qu'on ouvre une fenêtre ou qu'on chauffe.",
      ),
      faq(
        "delai-livraison-chantier",
        "delais",
        "Pouvez-vous intervenir juste avant une livraison ou un état des lieux ?",
        "Oui, si le planning le permet. Prévenez-nous dès que la date de réception est connue — idéalement quelques jours à l'avance. En urgence, contactez le 076 214 23 42.",
      ),
      getFaqById("apres-chantier")!,
    ],
    relatedServiceSlugs: ["nettoyage-fin-de-bail", "entretien-locaux", "nettoyage-vitres"],
    relatedLocalLinks: [
      { label: "Entreprise de nettoyage à Romont", href: "/seo/nettoyage-romont" },
      { label: "Entreprise de nettoyage à Fribourg", href: "/seo/nettoyage-fribourg" },
      { label: "Nettoyage fin de bail Fribourg", href: "/nettoyage-fin-de-bail-fribourg" },
    ],
    testimonials: [
      {
        quote: featuredGoogleReview.quote,
        author: featuredGoogleReview.author,
      },
    ],
  },
  {
    slug: "nettoyage-bureaux",
    h1: "Nettoyage de bureaux pour entreprises en Suisse romande",
    subtitle:
      "Des espaces de travail propres, intervention discrète, horaires flexibles — pour des équipes qui méritent un environnement sain.",
    metaTitle: "Nettoyage de bureaux en Suisse romande",
    metaDescription:
      "Nettoyage de bureaux et espaces de travail en Suisse romande. Horaires flexibles, discrétion, devis gratuit. Gzimmo Sàrl, Romont. 076 214 23 42.",
    intro:
      "Un bureau propre améliore le bien-être des équipes et l'image de votre entreprise. Gzimmo assure l'entretien de vos espaces de travail avec discrétion, en dehors de vos heures d'activité si nécessaire.",
    forWho: [
      { profile: "PME", situation: "Vous souhaitez un entretien régulier sans gérer le personnel de nettoyage." },
      { profile: "Grandes entreprises", situation: "Vous cherchez un prestataire fiable pour plusieurs sites." },
      { profile: "Coworkings", situation: "Vous devez maintenir des espaces communs impeccables au quotidien." },
      { profile: "Cabinets professionnels", situation: "Vous accueillez des clients et exigez des finitions soignées." },
    ],
    process: {
      title: "Notre prestation bureaux inclut :",
      items: [
        "Nettoyage des sols et tapis selon les matériaux.",
        "Sanitaires et espaces communs.",
        "Surfaces de travail, poignées et interrupteurs.",
        "Vidage des corbeilles et remplacement des sacs.",
        "Vitres intérieures sur demande.",
        "Planning adapté à vos horaires (matin, soir, week-end).",
      ],
    },
    whyGzimmo: [
      {
        title: "Confidentialité et discrétion",
        description: "Nos équipes interviennent avec professionnalisme dans des environnements sensibles.",
      },
      ...sharedWhy,
    ],
    faqs: sharedFaqs,
    relatedServiceSlugs: ["entretien-locaux", "nettoyage-vitres", "nettoyage-fin-de-bail"],
    relatedLocalLinks: [
      { label: "Entreprise de nettoyage à Lausanne", href: "/seo/nettoyage-lausanne" },
      { label: "Entreprise de nettoyage à Genève", href: "/seo/nettoyage-geneve" },
    ],
    testimonials: [],
  },
  {
    slug: "entretien-locaux",
    h1: "Entretien de locaux professionnels en Suisse romande",
    subtitle:
      "Un entretien planifié, discret et rigoureux pour des espaces commerciaux et professionnels impeccables au quotidien.",
    metaTitle: "Entretien de locaux professionnels en Suisse romande",
    metaDescription:
      "Entretien régulier de locaux professionnels et commerciaux en Suisse romande. Planning flexible, devis gratuit. Gzimmo Sàrl, Romont.",
    intro:
      "Commerces, cabinets, locaux d'activité — un entretien régulier évite l'accumulation et préserve l'image de votre établissement. Gzimmo planifie des passages adaptés à votre activité.",
    forWho: [
      { profile: "Commerces", situation: "Vous accueillez du public et devez maintenir des locaux irréprochables." },
      { profile: "Régies", situation: "Vous gérez des parties communes et espaces partagés." },
      { profile: "Professions libérales", situation: "Vous souhaitez un entretien discret entre les consultations." },
      { profile: "Industries légères", situation: "Vous avez besoin d'un entretien régulier de vos locaux techniques." },
    ],
    process: {
      title: "Notre entretien de locaux inclut :",
      items: [
        "Nettoyage des sols et surfaces de passage.",
        "Sanitaires et espaces communs.",
        "Dépoussiérage des surfaces accessibles.",
        "Vidage des corbeilles.",
        "Finitions soignées à chaque passage.",
        "Planning hebdomadaire, bi-mensuel ou mensuel selon vos besoins.",
      ],
    },
    whyGzimmo: sharedWhy,
    faqs: sharedFaqs,
    relatedServiceSlugs: ["nettoyage-bureaux", "nettoyage-apres-chantier", "nettoyage-vitres"],
    relatedLocalLinks: [
      { label: "Entreprise de nettoyage à Romont", href: "/seo/nettoyage-romont" },
    ],
    testimonials: [],
  },
  {
    slug: "nettoyage-appartements",
    h1: "Nettoyage d'appartements en Suisse romande",
    subtitle:
      "Un nettoyage complet et minutieux, pièce par pièce — pour particuliers et régies qui exigent un résultat visible.",
    metaTitle: "Nettoyage d'appartements en Suisse romande",
    metaDescription:
      "Nettoyage complet d'appartements pour particuliers et régies en Suisse romande. Devis gratuit, intervention depuis Romont. 076 214 23 42.",
    intro:
      "Que ce soit pour une remise en état ponctuelle ou un entretien approfondi, Gzimmo traite chaque pièce avec méthode : sols, sanitaires, cuisine, surfaces et détails.",
    forWho: [
      { profile: "Particuliers", situation: "Vous souhaitez un appartement remis en ordre sans y consacrer vos week-ends." },
      { profile: "Régies", situation: "Vous mandatez des nettoyages entre deux locataires." },
      { profile: "Propriétaires", situation: "Vous préparez un bien avant mise en location." },
    ],
    process: {
      title: "Notre nettoyage d'appartement inclut :",
      items: [
        "Nettoyage pièce par pièce (séjour, chambres, cuisine, sanitaires).",
        "Sols lessivés selon le revêtement.",
        "Cuisine et sanitaires dégraissés et désinfectés.",
        "Surfaces, plinthes et interrupteurs dépoussiérés.",
        "Vitres intérieures sur demande.",
      ],
    },
    whyGzimmo: sharedWhy,
    faqs: sharedFaqs,
    relatedServiceSlugs: ["nettoyage-fin-de-bail", "nettoyage-maisons", "nettoyage-vitres"],
    relatedLocalLinks: [
      { label: "Entreprise de nettoyage à Lausanne", href: "/seo/nettoyage-lausanne" },
    ],
    testimonials: [],
  },
  {
    slug: "nettoyage-maisons",
    h1: "Nettoyage de maisons en Suisse romande",
    subtitle:
      "Un service complet pour des intérieurs qui respirent la clarté — du rez-de-chaussée aux espaces de vie.",
    metaTitle: "Nettoyage de maisons en Suisse romande",
    metaDescription:
      "Nettoyage de maisons individuelles en Suisse romande. Tous volumes, matériaux respectés. Devis gratuit. Gzimmo Sàrl, Romont.",
    intro:
      "Les maisons demandent une approche adaptée aux volumes, aux matériaux et aux espaces spécifiques (escaliers, caves, terrasses). Gzimmo prend en charge l'ensemble avec la même exigence de finition.",
    forWho: [
      { profile: "Propriétaires", situation: "Vous souhaitez un grand nettoyage saisonnier ou avant une vente." },
      { profile: "Familles", situation: "Vous manquez de temps pour entretenir tous les volumes de la maison." },
      { profile: "Régies", situation: "Vous gérez des maisons locatives nécessitant un entretien ponctuel." },
    ],
    process: {
      title: "Notre nettoyage de maison inclut :",
      items: [
        "Tous les niveaux et pièces de vie.",
        "Sols, escaliers et paliers.",
        "Cuisine, sanitaires et buanderie.",
        "Surfaces, menuiseries et détails.",
        "Attention particulière aux matériaux (parquet, pierre, carrelage).",
      ],
    },
    whyGzimmo: sharedWhy,
    faqs: sharedFaqs,
    relatedServiceSlugs: ["nettoyage-appartements", "nettoyage-fin-de-bail", "nettoyage-vitres"],
    relatedLocalLinks: [
      { label: "Entreprise de nettoyage à Fribourg", href: "/seo/nettoyage-fribourg" },
    ],
    testimonials: [],
  },
  {
    slug: "nettoyage-vitres",
    h1: "Nettoyage de vitres en Suisse romande",
    subtitle:
      "Des vitres impeccables, sans traces — intérieur et extérieur, pour particuliers et professionnels.",
    metaTitle: "Nettoyage de vitres en Suisse romande",
    metaDescription:
      "Nettoyage de vitres intérieures et extérieures en Suisse romande. Techniques professionnelles, accès sécurisé. Devis gratuit. 076 214 23 42.",
    intro:
      "Vitres intérieures, façades vitrées, baies vitrées — Gzimmo utilise des techniques professionnelles pour un résultat net et durable, sans rayures ni traces.",
    forWho: [
      { profile: "Particuliers", situation: "Vous souhaitez retrouver une luminosité maximale chez vous." },
      { profile: "Commerces", situation: "Vos vitrines doivent rester impeccables pour vos clients." },
      { profile: "Bureaux", situation: "Des baies vitrées propres améliorent le confort des équipes." },
      { profile: "Régies", situation: "Vous mandatez des nettoyages de parties communes vitrées." },
    ],
    process: {
      title: "Notre nettoyage de vitres inclut :",
      items: [
        "Vitres intérieures et extérieures accessibles.",
        "Cadres et rebords nettoyés.",
        "Techniques sans rayures ni traces.",
        "Accès sécurisé en hauteur selon la configuration.",
        "Intervention ponctuelle ou régulière.",
      ],
    },
    whyGzimmo: sharedWhy,
    faqs: sharedFaqs,
    relatedServiceSlugs: ["entretien-locaux", "nettoyage-bureaux", "nettoyage-fin-de-bail"],
    relatedLocalLinks: [
      { label: "Entreprise de nettoyage à Romont", href: "/seo/nettoyage-romont" },
    ],
    testimonials: [],
  },
  {
    slug: "conciergerie",
    h1: "Services de conciergerie pour régies et immeubles",
    subtitle:
      "Un interlocuteur unique pour l'entretien des parties communes, la coordination sur site et la réactivité au quotidien en Fribourg et Vaud.",
    metaTitle: "Conciergerie pour régies — Fribourg & Vaud",
    metaDescription:
      "Conciergerie pour régies et immeubles : parties communes, coordination, réactivité. Gzimmo Sàrl, Romont — devis gratuit. 076 214 23 42.",
    intro:
      "Les régies et propriétaires d'immeubles ont besoin d'un prestataire fiable, réactif et discret. Gzimmo propose des services de conciergerie complémentaires au nettoyage : entretien des espaces communs, coordination des interventions, suivi des besoins du bâtiment et point de contact unique pour vos locataires et concierges.",
    forWho: [
      {
        profile: "Régies immobilières",
        situation:
          "Vous gérez un ou plusieurs immeubles et cherchez un partenaire pour l'entretien courant et la coordination.",
      },
      {
        profile: "Syndics et PPE",
        situation: "Vous souhaitez externaliser le suivi des parties communes avec un prestataire local.",
      },
      {
        profile: "Propriétaires institutionnels",
        situation: "Vous avez besoin d'une présence régulière et d'un interlocuteur unique sur site.",
      },
    ],
    process: {
      title: "Notre accompagnement conciergerie inclut :",
      items: [
        "Entretien planifié des halls, cages d'escalier et espaces communs.",
        "Coordination avec les autres corps de métier et prestataires du bâtiment.",
        "Remontée des besoins et interventions ponctuelles selon votre planning.",
        "Discrétion et respect des consignes de la régie.",
        "Devis transparent et facturation claire.",
      ],
    },
    whyGzimmo: [
      {
        title: "Basés à Romont, actifs en Fribourg et Vaud",
        description:
          "Proximité avec les immeubles de la Glâne, de Fribourg et du canton de Vaud — réactivité et suivi de proximité.",
      },
      ...sharedWhy,
    ],
    faqs: [
      ...sharedFaqs,
      {
        question: "Proposez-vous la conciergerie en complément du nettoyage ?",
        answer:
          "Oui. La conciergerie peut être combinée à l'entretien de locaux, au nettoyage des parties communes ou à des prestations ponctuelles selon votre immeuble.",
      },
      {
        question: "Intervenez-vous pour des régies à Fribourg et dans le canton de Vaud ?",
        answer:
          "Oui. Notre priorité géographique est le canton de Fribourg (Romont, Glâne, Fribourg) et le canton de Vaud (Lausanne, Morges, Yverdon et agglomérations).",
      },
    ],
    relatedServiceSlugs: ["entretien-locaux", "nettoyage-bureaux", "nettoyage-fin-de-bail"],
    relatedLocalLinks: [
      { label: "Entreprise de nettoyage à Romont", href: "/seo/nettoyage-romont" },
      { label: "Nettoyage à Fribourg", href: "/seo/nettoyage-fribourg" },
      { label: "Nettoyage à Lausanne", href: "/seo/nettoyage-lausanne" },
    ],
    testimonials: [],
  },
];

export function getServiceLanding(slug: string) {
  return serviceLandings.find((landing) => landing.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return slugs
    .map((slug) => serviceLandings.find((l) => l.slug === slug))
    .filter((l): l is ServiceLanding => Boolean(l))
    .map((l) => ({ title: l.h1.split(" en ")[0] ?? l.h1, href: getServicePath(l.slug) }));
}
