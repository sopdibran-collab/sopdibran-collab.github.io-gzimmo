import type { FaqContent, FaqItem } from "@/data/faq";
import { faq, getFaqsByIds } from "@/data/faq";
import { finDeBailPriceFaqs } from "@/data/fin-de-bail-faq";
import { featuredGoogleReview, googleReviews } from "@/data/google-reviews";
import { getServicePath } from "@/lib/service-paths";

export type ServiceLanding = {
  slug: string;
  h1: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  /** Titre absolu (sans suffixe Gzimmo). */
  absoluteTitle?: boolean;
  intro: string;
  audienceHeading?: string;
  whyHeading?: string;
  faqHeading?: string;
  sections?: { id?: string; title: string; body: string; points?: string[]; href?: string }[];
  inclusionHeading?: string;
  zonesHeading?: string;
  zonesNote?: string;
  /** Cartes courtes plutôt que paragraphes empilés. */
  sectionLayout?: "stack" | "grid";
  inclusionGroups?: { title: string; items: string[] }[];
  schemaServiceTypes?: string[];
  /** Place the checklist before the audience block (fin de chantier → publics). */
  processBeforeAudience?: boolean;
  /**
   * Rythme WHITE → SOFT → … → DARK (hero + CTA) → BRAND (footer).
   * Une surface par unité d’information, sans couleur nouvelle.
   */
  visualRhythm?: boolean;
  priceSection?: { id?: string; title: string; body: string; factors: string[] };
  forWho: { profile: string; situation: string }[];
  guarantee?: { title: string; paragraphs: string[] };
  process: { id?: string; title: string; items: string[]; numbered?: boolean };
  whyGzimmo: { title: string; description: string }[];
  faqs: readonly (FaqItem | FaqContent)[];
  relatedServiceSlugs: string[];
  relatedLocalLinks: { label: string; href: string }[];
  testimonials: { quote: string; author: string; url?: string }[];
  proofLink?: { label: string; href: string; detail: string };
  /**
   * Clarification d’intention (ex. appartements « entre deux locataires »
   * → fin de bail). Rendu sous l’intro, sans nouveau H2.
   */
  relatedNote?: { text: string; linkLabel: string; href: string };
  heroCtaLabel?: string;
  showPriceQuote?: boolean;
  showInterventionZones?: boolean;
  useFinDeBailFaq?: boolean;
  preferCallCta?: boolean;
};

const sharedWhy = [
  {
    title: "Produits professionnels fournis",
    description:
      "Gzimmo fournit l'ensemble des produits, exclusivement professionnels, adaptés à chaque type de surface et de matériau.",
  },
  {
    title: "Réactivité depuis Romont",
    description:
      "Basés Route de Raboud 8 à Romont, nous intervenons dans les cantons de Fribourg, de Vaud et de Neuchâtel. Devis sous 24 h.",
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
    h1: "Nettoyage fin de bail avec garantie d'état des lieux",
    subtitle:
      "Appelez-nous, expliquez le logement et la date de remise des clés : devis gratuit, sur mesure, garantie d'état des lieux auprès de votre régie.",
    metaTitle: "Nettoyage fin de bail | Garantie d'état des lieux — Gzimmo",
    metaDescription:
      "Nettoyage fin de bail Gzimmo : devis gratuit, garantie d'état des lieux et remise des clés. Fribourg, Vaud, Neuchâtel. 076 214 23 42.",
    absoluteTitle: true,
    heroCtaLabel: "Demander un devis gratuit",
    showPriceQuote: true,
    showInterventionZones: true,
    useFinDeBailFaq: true,
    preferCallCta: false,
    audienceHeading: "Locataires, régies et propriétaires",
    whyHeading: "Pourquoi les régies valident nos fins de bail",
    faqHeading: "Prix, devis et garantie de remise de bail",
    schemaServiceTypes: [
      "Nettoyage fin de bail",
      "Nettoyage de fin de bail",
      "Nettoyage après déménagement",
      "Remise d'appartement",
    ],
    intro:
      "Vous déménagez en Suisse romande ? Confiez-nous le nettoyage de fin de bail : checklist régie, état des lieux, remise des clés. Gzimmo Sàrl couvre les cantons de Fribourg, Vaud et Neuchâtel. Pour Romont ou Fribourg ville, des pages locales détaillent l'intervention près de chez vous.",
    sections: [
      {
        title: "Prix d'un nettoyage de fin de bail : un devis après l'échange",
        body: "Le prix dépend de la surface, de l'état du logement et de ce que votre régie exige à l'état des lieux, pas d'un forfait unique en ligne. Appelez-nous : vous décrivez la situation, nous établissons un devis gratuit et détaillé. Le tarif convenu est le tarif final, avant la remise des clés.",
      },
      {
        title: "Pour les régies : checklist, état des lieux, remise des clés",
        body: "Nous travaillons pour des locataires et directement pour des régies : sorties de bail, appartements à remettre en location. La checklist suit les points qui bloquent le plus souvent une restitution (joints, four, traces sur vitres) pour limiter les reprises le jour de l'état des lieux.",
      },
    ],
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
        "Gzimmo connaît ces exigences. Nous travaillons avec des régies dans les cantons de Fribourg, de Vaud et de Neuchâtel. Checklist adaptée, devis clair avant intervention.",
        "Si un point n'est pas conforme aux attentes de la régie, nous intervenons à nouveau sans frais supplémentaires dans le cadre de notre garantie de remise de bail.",
      ],
    },
    process: {
      title: "Checklist de remise de bail (état des lieux)",
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
          "Nous connaissons les standards de restitution des régies fribourgeoises, vaudoises et neuchâteloises. Pas de mauvaise surprise à l'état des lieux.",
      },
      ...sharedWhy,
    ],
    faqs: finDeBailPriceFaqs,
    relatedServiceSlugs: [
      "nettoyage-apres-chantier",
      "nettoyage-appartements",
      "entretien-locaux",
    ],
    relatedLocalLinks: [
      { label: "Nettoyage fin de bail à Romont", href: "/nettoyage-fin-de-bail-romont" },
      { label: "Nettoyage fin de bail à Fribourg", href: "/nettoyage-fin-de-bail-fribourg" },
      { label: "Entreprise de nettoyage à Romont (siège)", href: "/seo/nettoyage-romont" },
      { label: "Nettoyage à Lausanne et agglomération", href: "/seo/nettoyage-lausanne" },
    ],
    testimonials: [],
  },
  {
    slug: "nettoyage-apres-chantier",
    h1: "Nettoyage après rénovation, chantier et travaux",
    subtitle:
      "Poussière fine, voile de ciment, traces de peinture : nous remettons le lieu en état pour que vous puissiez emménager ou livrer.",
    metaTitle: "Nettoyage après rénovation et chantier | Gzimmo",
    metaDescription:
      "Devis gratuit sous 24 h pour retirer la poussière fine après rénovation ou chantier. Gzimmo, Romont — Fribourg, Vaud, Neuchâtel.",
    absoluteTitle: true,
    heroCtaLabel: "Demander un devis gratuit",
    preferCallCta: false,
    showInterventionZones: true,
    processBeforeAudience: true,
    visualRhythm: true,
    audienceHeading: "Particuliers, promoteurs et régies",
    whyHeading: "Pourquoi Gzimmo",
    faqHeading: "Questions fréquentes",
    inclusionHeading: "Checklist d'intervention : ce qui est inclus",
    zonesHeading: "Nos zones d'intervention en Suisse romande",
    zonesNote:
      "Depuis Romont (FR), nous intervenons dans les cantons de Fribourg, de Vaud et de Neuchâtel : Bulle, Fribourg, Lausanne, Nyon et Yverdon, ainsi que les communes listées ci-dessous. Siège : Route de Raboud 8.",
    schemaServiceTypes: [
      "Nettoyage après chantier",
      "Nettoyage après rénovation",
      "Nettoyage après travaux",
      "Nettoyage après construction",
      "Nettoyage de fin de chantier",
    ],
    intro:
      "Le devis est gratuit et clair sous 24 h. Depuis Romont, nous intervenons dans les cantons de Fribourg, de Vaud et de Neuchâtel. Téléphone : 076 214 23 42.",
    relatedNote: {
      text: "Travaux dans un logement loué, puis état des lieux de sortie : la checklist régie est une autre prestation.",
      linkLabel: "Nettoyage de fin de bail",
      href: "/nettoyage-fin-de-bail",
    },
    sectionLayout: "stack",
    sections: [
      {
        id: "renovation-interieur",
        title: "Remise en état après rénovation d'intérieur (particuliers)",
        body: "Vous venez de rénover un appartement ou une villa et vous voulez emménager sans poussière fine. Cuisine, salle de bain, peinture ou pose de carrelage laissent des résidus qu'un ménage habituel ne retire pas.",
        points: [
          "Cuisine : dégraissage, voile de ciment et laitance sur le carrelage neuf.",
          "Salle de bain : traces de silicone, joints et sanitaires après la pose.",
          "Peinture : projections sur sols, châssis, prises et interrupteurs.",
          "Poussière de plâtre dans les placards, les radiateurs et les aérations.",
        ],
      },
      {
        id: "fin-de-chantier-pro",
        title: "Nettoyage de fin de chantier et construction neuve (promoteurs et régies)",
        body: "La réception d'un chantier neuf, la livraison d'un lot ou le passage avant un état des lieux demandent des finitions présentables. Promoteurs, entreprises générales et régies calent ce nettoyage sur la date de livraison.",
        points: [
          "Réception de chantier neuf et livraison de lots.",
          "Remise en état après travaux locatifs, avant une relocation.",
          "Vitres, châssis, sols et sanitaires repris avant la visite.",
        ],
      },
    ],
    inclusionGroups: [
      {
        title: "Sols",
        items: [
          "Décapage des sols (carrelage, parquet, béton ciré)",
          "Laitance de carrelage et voile de ciment",
          "Dégraissage des surfaces grasses",
          "Plinthes",
        ],
      },
      {
        title: "Vitres et châssis",
        items: [
          "Vitres intérieures et extérieures",
          "Châssis, rails et encadrements",
          "Projections et traces de peinture",
          "Résidus de silicone",
        ],
      },
      {
        title: "Équipements",
        items: [
          "Sanitaires et robinetterie",
          "Radiateurs",
          "Prises et interrupteurs",
          "Intérieurs de placards",
          "Cuisine : plans de travail et évier",
        ],
      },
      {
        title: "Dépoussiérage fin",
        items: [
          "Poussière fine de plâtre",
          "Sciure de bois",
          "Aérations, bouches de VMC et conduits accessibles",
          "Menuiseries et surfaces en hauteur",
        ],
      },
    ],
    forWho: [
      {
        profile: "Particulier",
        situation:
          "Cuisine, salle de bain ou appartement rénové : vous emménagez dès que la poussière fine est partie.",
      },
      {
        profile: "Promoteur",
        situation:
          "Vous livrez un lot et présentez des finitions propres à la réception. Les entreprises générales qui mandatent le passage final suivent le même calendrier.",
      },
      {
        profile: "Régie",
        situation:
          "Remise en état après travaux locatifs, avant une relocation. L'état des lieux de fin de bail, lui, suit la checklist régie.",
      },
    ],
    process: {
      id: "fin-de-chantier",
      title: "Comment se passe le passage",
      items: [
        "Vous décrivez le chantier au 076 214 23 42. Devis gratuit et clair sous 24 h.",
        "Le passage est calé sur la date de réception, si le planning le permet.",
        "Sols, résidus et équipements sont traités sans abîmer les finitions neuves.",
        "Les déchets de nettoyage partent en fin d'intervention.",
      ],
    },
    priceSection: {
      id: "prix",
      title: "Combien coûte un nettoyage après rénovation ou chantier ?",
      body: "Il n'y a pas de forfait fixe au mètre carré. Le devis est gratuit, clair, établi sous 24 h, selon le niveau de poussière fine et le type de résidus. Le tarif convenu est le tarif final.",
      factors: [
        "Niveau de poussière fine laissé par les artisans",
        "Résidus : voile de ciment, laitance de carrelage, peinture, silicone, sciure",
        "Surface du logement ou du lot, et date de réception",
      ],
    },
    whyGzimmo: [
      {
        title: "Poussière fine de rénovation",
        description:
          "Le passage vise les endroits où le plâtre, la peinture et la coupe restent : radiateurs, prises, joints, placards, aérations.",
      },
      {
        title: "Avis Google après rénovation",
        description:
          "Des clients ont décrit sur Google le résultat après rénovation et fin de chantier : lieu prêt à être utilisé, détails soignés.",
      },
      {
        title: "Date de réception",
        description:
          "Le passage se cale sur la livraison ou l'état des lieux, lorsque la date est connue et que le planning le permet.",
      },
      {
        title: "Produits professionnels fournis",
        description:
          "Gzimmo amène les produits, choisis selon le matériau. Vous n'avez rien à fournir.",
      },
    ],
    faqs: [
      faq(
        "menage-vs-renovation",
        "qualite",
        "Quelle différence entre un ménage classique et un nettoyage après rénovation ?",
        "Un ménage classique enlève la poussière du quotidien. Après rénovation ou chantier, la poussière fine de plâtre se loge dans les radiateurs, les joints, les prises et les placards. Sans dépoussiérage ciblé, elle revient dès qu'on aère ou qu'on chauffe.",
      ),
      faq(
        "inclus-apres-chantier",
        "prestations",
        "Que comprend un passage après chantier ?",
        "Sols, y compris la laitance et le voile de ciment sur un carrelage neuf, vitres, châssis, rails et encadrements, sanitaires, radiateurs, prises, placards, et le dépoussiérage des aérations accessibles. Le devis précise le périmètre selon les résidus.",
      ),
      faq(
        "delai-devis-chantier",
        "delais",
        "Sous quel délai recevons-nous le devis ?",
        "Sous 24 h, gratuit, sans engagement. Appelez le 076 214 23 42 et décrivez le logement ou le lot, le type de travaux et la date de réception.",
      ),
      faq(
        "zones-apres-chantier",
        "zone",
        "Dans quels cantons intervenez-vous après un chantier ?",
        "Fribourg, Vaud et Neuchâtel, depuis Romont, Route de Raboud 8. Le devis est gratuit.",
      ),
      faq(
        "passage-avant-reception",
        "delais",
        "Pouvez-vous passer avant la réception ?",
        "Oui, quand la date est connue et que le planning le permet. Prévenez-nous dès que le jour est fixé.",
      ),
      faq(
        "garantie-vs-chantier",
        "qualite",
        "Si la régie tique, revenez-vous sans frais après un chantier ?",
        "Cette garantie concerne le nettoyage de fin de bail. Après chantier, le devis décrit le passage convenu. Si un état des lieux de sortie suit des travaux dans un logement loué, c'est la prestation fin de bail.",
      ),
    ],
    relatedServiceSlugs: ["nettoyage-fin-de-bail", "conciergerie", "nettoyage-vitres"],
    relatedLocalLinks: [
      { label: "Romont", href: "/seo/nettoyage-romont" },
      { label: "Fribourg", href: "/seo/nettoyage-fribourg" },
      { label: "Bulle", href: "/seo/nettoyage-bulle" },
      { label: "Lausanne", href: "/seo/nettoyage-lausanne" },
      { label: "Nyon", href: "/seo/nettoyage-nyon" },
      { label: "Yverdon", href: "/seo/nettoyage-yverdon-les-bains" },
      { label: "Payerne", href: "/seo/nettoyage-payerne" },
      { label: "Morges", href: "/seo/nettoyage-morges" },
      { label: "Neuchâtel", href: "/seo/nettoyage-neuchatel" },
    ],
    testimonials: [
      {
        quote: featuredGoogleReview.quote,
        author: featuredGoogleReview.author,
        url: featuredGoogleReview.url,
      },
      {
        quote: googleReviews.find((review) => review.id === "review-fin-de-chantier")!.text,
        author: "Avis Google",
        url: googleReviews.find((review) => review.id === "review-fin-de-chantier")!.url,
      },
    ],
    proofLink: {
      label: "Réalisation à Morges",
      href: "/realisations",
      detail: "Promoteur — poussières fines après rénovation d'un immeuble, livraison dans les délais.",
    },
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
      { label: "Entreprise de nettoyage à Fribourg", href: "/seo/nettoyage-fribourg" },
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
      { profile: "Locaux d'activité", situation: "Vous avez besoin d'un entretien régulier de vos locaux techniques." },
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
    relatedNote: {
      text: "Vous quittez un logement et avez besoin d'une remise en état pour l'état des lieux ? Consultez notre service de",
      linkLabel: "nettoyage fin de bail",
      href: "/nettoyage-fin-de-bail",
    },
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
    faqs: [
      faq(
        "inclus-appartement",
        "prestations",
        "Que comprend un nettoyage d'appartement ?",
        "Pièce par pièce : séjour, chambres, cuisine, sanitaires. Sols selon le revêtement, cuisine et sanitaires dégraissés, surfaces, plinthes et interrupteurs. Les vitres intérieures sont faites si le devis les prévoit.",
      ),
      faq(
        "delai-appartement",
        "delais",
        "Quel délai pour un nettoyage d'appartement ?",
        "Devis sous 24 h. Le jour du passage dépend du planning et de la date indiquée. Il est confirmé avant l'intervention.",
      ),
      faq(
        "appartement-vs-fin-de-bail",
        "prestations",
        "Quelle différence avec une fin de bail ?",
        "Le nettoyage d'appartement remet le logement en ordre. La fin de bail prépare l'état des lieux et la remise des clés, selon la checklist de la régie. Si la régie tique, on revient sans frais : cette garantie vaut pour la fin de bail.",
      ),
      faq(
        "devis-appartement",
        "tarifs",
        "Le devis est-il gratuit ?",
        "Oui, sans engagement. Téléphone 076 214 23 42 ou info@gzimmo.ch. Le devis dépend du logement.",
      ),
      faq(
        "zones-appartement",
        "zone",
        "Où intervenez-vous ?",
        "Dans les cantons de Fribourg, de Vaud et de Neuchâtel, depuis Romont, Route de Raboud 8.",
      ),
      faq(
        "etat-des-lieux-appartement",
        "qualite",
        "Ce nettoyage suffit-il pour un état des lieux ?",
        "Non. Pour quitter un logement, prenez la fin de bail : elle est prévue pour l'état des lieux. Le nettoyage d'appartement ne reprend pas la garantie de remise de bail.",
      ),
    ],
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
    relatedServiceSlugs: ["nettoyage-apres-chantier", "entretien-locaux", "nettoyage-bureaux"],
    relatedLocalLinks: [
      { label: "Entreprise de nettoyage à Romont", href: "/seo/nettoyage-romont" },
    ],
    testimonials: [],
  },
  {
    slug: "conciergerie",
    h1: "Services de conciergerie pour régies et immeubles",
    subtitle:
      "Un interlocuteur unique pour l'entretien des parties communes, la coordination sur site et la réactivité au quotidien, à Fribourg, en Vaud et à Neuchâtel.",
    metaTitle: "Conciergerie pour régies — Fribourg & Vaud",
    metaDescription:
      "Conciergerie pour régies et immeubles : parties communes, coordination, réactivité. Fribourg, Vaud et Neuchâtel, depuis Romont. 076 214 23 42.",
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
        title: "Basés à Romont, actifs en Suisse romande",
        description:
          "Proximité en Glâne, à Fribourg et dans le canton de Vaud. Neuchâtel est couvert aussi.",
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
