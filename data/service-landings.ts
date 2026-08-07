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
      "Basés Route de Raboud 8 à Romont, nous intervenons rapidement en Glâne, en Fribourg et dans toute la Suisse romande. Devis sous 24 h.",
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
    h1: "Vous déménagez ? On s'occupe du nettoyage de fin de bail",
    subtitle:
      "Cartons, dates, stress… Le grand ménage, c'est nous. Vous nous donnez la date d'état des lieux — on vous ramène un logement prêt pour la régie.",
    metaTitle: "Nettoyage fin de bail — devis gratuit | Vous déménagez ?",
    metaDescription:
      "Vous déménagez ? Gzimmo s'occupe de votre fin de bail en Suisse romande. Devis gratuit sous 24 h, checklist régie, garantie pour votre caution. Romont — 076 214 23 42.",
    intro:
      "Honnêtement : entre les cartons, le nouvel appart et le boulot, le nettoyage de fin de bail est la dernière chose dont vous avez envie. Et pourtant, c'est souvent là que la régie chipote — et que la garantie locative trinque. Chez Gzimmo, on le sait. Vous nous dites juste la surface, l'état et la date : on vous envoie un devis clair, on passe pendant que vous avancez ailleurs, et on vise un état des lieux validé du premier coup. Simple, humain, local — depuis Romont.",
    forWho: [
      {
        profile: "Vous quittez votre appart",
        situation:
          "Vous voulez récupérer votre garantie sans y passer trois soirs. On s'adapte à votre planning — même serré.",
      },
      {
        profile: "Vous déménagez en famille",
        situation:
          "École, travail, cartons : vous n'avez plus une minute. On prend le relais sur le nettoyage, vous gardez l'énergie pour le reste.",
      },
      {
        profile: "Vous êtes proprio particulier",
        situation:
          "Vous remettez un logement en location ou à la vente. Vous voulez un résultat nickel, sans y consacrer le week-end.",
      },
      {
        profile: "Votre régie est pointilleuse",
        situation:
          "Joints, four, vitres, placards… On connaît la chanson. On ne « passe un coup » : on prépare vraiment l'état des lieux.",
      },
    ],
    guarantee: {
      title: "Votre garantie locative, on y tient autant que vous",
      paragraphs: [
        "Un oubli (joint, four, traces sur les vitres) et hop — retenue sur la caution. Frustrant, surtout quand vous avez tout bien fait le reste. On est là pour éviter ça.",
        "Avant : devis transparent, posé avec vous. Pendant : checklist complète, pensée pour les régies fribourgeoises et vaudoises. Après : si un point juste coince à l'état des lieux, on revient le corriger — garantie de remise de bail, sans frais en plus.",
        "Vous gardez la main : devis avant, résultat à l'arrivée, et un vrai numéro si besoin. Pas de plateforme anonyme.",
      ],
    },
    process: {
      title: "Concrètement, chez vous, on fait :",
      items: [
        "Salles de bain et WC : détartrage, joints, robinetterie, douche.",
        "Cuisine : four, plaques, hotte — le vrai dégraissage.",
        "Sols et plinthes, selon le type de sol.",
        "Vitres (intérieur, et extérieur si on peut y accéder).",
        "Les détails qui font la différence : radiateurs, prises, placards, portes.",
        "On repart avec les déchets du nettoyage — vous ne gardez rien.",
      ],
    },
    whyGzimmo: [
      {
        title: "Une vraie équipe à Romont, pas un standard",
        description:
          "Vous parlez à des gens du coin. Réponse sous 24 h, devis expliqué clairement, date fixée avec vous.",
      },
      {
        title: "On se met à votre place",
        description:
          "Déménagement + état des lieux le même week-end ? On connaît. On s'organise autour de votre calendrier.",
      },
      ...sharedWhy,
    ],
    faqs: [
      ...sharedFaqs,
      faq(
        "garantie-regie",
        "qualite",
        "Et si la régie n'est pas contente ?",
        "On a une garantie de remise de bail. Point juste non validé ? On revient le corriger, sans vous facturer à nouveau. Le but : que vous récupériez votre garantie.",
      ),
      getFaqById("cout-fin-de-bail")!,
      faq(
        "delai-fin-bail",
        "delais",
        "J'ai l'état des lieux bientôt — trop tard ?",
        "Idéalement 1–2 semaines à l'avance. Mais si c'est pour bientôt : appelez quand même. On fait tout pour vous caser.",
      ),
      faq(
        "fin-bail-particulier",
        "prestations",
        "C'est bien pour les particuliers, pas seulement les régies ?",
        "Oui — et c'est même la majorité de nos fins de bail. La régie fixe le niveau d'exigence ; vous, vous voulez juste un logement rendu propre sans y laisser votre week-end. On fait le lien.",
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
    h1: "Nettoyage après chantier, rénovation et travaux pour les professionnels",
    subtitle:
      "Fin de chantier, après rénovation, après construction : prestation structurée, délais respectés, espaces prêts à la réception. Gzimmo Sàrl — Romont (FR).",
    metaTitle: "Nettoyage après chantier & rénovation — entreprises | Suisse romande",
    metaDescription:
      "Nettoyage après chantier, après rénovation, après travaux et fin de chantier en Suisse romande. Prestataire pour entreprises, promoteurs et artisans. Devis sous 24 h — 076 214 23 42.",
    intro:
      "À l'approche de la réception, chaque jour compte. Poussières fines, résidus de joints, sols à reprendre, menuiseries marquées : un nettoyage de fin de chantier insuffisant retarde la livraison et expose votre image auprès du maître d'ouvrage ou du client final. Gzimmo Sàrl intervient auprès des entreprises générales, promoteurs, artisans et gestionnaires de sites en Suisse romande — nettoyage après chantier, après rénovation, après travaux ou nettoyage de clôture de chantier — selon un planning coordonné avec vos équipes et un devis formalisé avant intervention.",
    forWho: [
      {
        profile: "Entreprises générales et promoteurs",
        situation:
          "Livraison d'immeubles, logements ou locaux tertiaires. Vous exigez un prestataire fiable pour le nettoyage après construction ou la fin de chantier, sans compromettre la date de réception.",
      },
      {
        profile: "Artisans et corps de métier",
        situation:
          "Peinture, carrelage, menuiserie : vous souhaitez présenter un ouvrage propre avant visite client. Nous intervenons en nettoyage après travaux, sur créneau convenu.",
      },
      {
        profile: "Entreprises et facility management",
        situation:
          "Réaménagement de bureaux après travaux : intervention discrète, éventuellement hors heures d'activité, afin de permettre une reprise d'exploitation sans friction.",
      },
      {
        profile: "Partenariats et marchés récurrents",
        situation:
          "Volume régulier de chantiers : nous pouvons formaliser un cadre de collaboration (interlocuteur dédié, délais de réponse, conditions tarifaires).",
      },
    ],
    guarantee: {
      title: "Engagement qualité et conditions de collaboration",
      paragraphs: [
        "Un nettoyage après rénovation ou après travaux insuffisant se constate immédiatement et engage votre responsabilité perçue auprès du client final. Notre rôle est de sécuriser cette étape critique de la livraison.",
        "Gzimmo Sàrl intervient comme prestataire professionnel : devis détaillé préalable, fournitures professionnelles incluses, respect des autres corps de métier présents sur site, évacuation des déchets liés au nettoyage. L'objectif est un local apte à l'occupation ou à la visite de réception.",
        "Pour un partenariat durable (cantons de Fribourg et de Vaud, Suisse romande), nous sommes ouverts à la définition d'un accord-cadre : priorisation du planning, conditions annoncées, même niveau d'exigence sur chaque intervention.",
      ],
    },
    process: {
      title: "Périmètre type — nettoyage après chantier / fin de chantier",
      items: [
        "Aspiration et élimination des poussières fines, y compris après rénovation.",
        "Traitement des sols (carrelage, parquet, béton) selon le matériau et l'état du site.",
        "Vitres et menuiseries : intérieur et extérieur selon accès, sans résidus.",
        "Sanitaires et cuisines encrassés par les travaux.",
        "Plinthes, radiateurs, appareillages électriques et boîtiers.",
        "Nettoyage de clôture de chantier avant réception ou livraison.",
        "Coordination possible avec le chef de chantier ou le conducteur de travaux.",
      ],
    },
    whyGzimmo: [
      {
        title: "Alignement sur vos délais de livraison",
        description:
          "L'intervention est planifiée selon votre calendrier de réception. Les urgences de fin de chantier sont examinées au cas par cas.",
      },
      {
        title: "Cadre B2B clair",
        description:
          "Devis sous 24 h, facturation transparente, interlocuteur identifiable. Adapté aux entreprises générales, promoteurs et artisans recherchant un prestataire récurrent.",
      },
      ...sharedWhy,
    ],
    faqs: [
      ...sharedFaqs,
      getFaqById("apres-chantier")!,
      faq(
        "apres-renovation",
        "prestations",
        "Couvrez-vous également le nettoyage après rénovation et après travaux ?",
        "Oui. Après rénovation, après travaux, fin de chantier ou nettoyage de clôture de chantier : même exigence de résultat (poussières, sols, vitres, sanitaires). Le devis est adapté à l'état réel du site.",
      ),
      faq(
        "partenariat-entreprises",
        "zone",
        "Proposez-vous des partenariats aux entreprises et artisans ?",
        "Oui. Nous collaborons déjà avec des professionnels du bâtiment et de l'immobilier en Suisse romande. Pour un volume régulier, un cadre peut être défini (délais, conditions, zones prioritaires Fribourg et Vaud). Contactez-nous pour en discuter.",
      ),
      faq(
        "delai-fin-chantier",
        "delais",
        "Quel délai faut-il prévoir pour un nettoyage de fin de chantier ?",
        "Dès que la date de réception est connue, nous recommandons de nous en informer. Un délai de 48 à 72 heures suffit souvent à planifier ; les urgences sont étudiées individuellement. Devis gratuit sous 24 h.",
      ),
    ],
    relatedServiceSlugs: ["nettoyage-fin-de-bail", "entretien-locaux", "nettoyage-vitres"],
    relatedLocalLinks: [
      { label: "Entreprise de nettoyage à Romont", href: "/seo/nettoyage-romont" },
      { label: "Entreprise de nettoyage à Fribourg", href: "/seo/nettoyage-fribourg" },
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
