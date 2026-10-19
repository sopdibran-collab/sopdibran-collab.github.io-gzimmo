import { company, formatAddress, teamExperienceLabel } from "@/data/company";
import { faq, getFaqsByIds, type FaqItem } from "@/data/faq";

const { phoneDisplay, email, legalName, ide } = company;

export const aboutIdentityTitle = "L'entreprise";

export const aboutIdentityParagraphs = [
  `${legalName} est une entreprise de nettoyage et d'entretien, pas une régie immobilière. Le siège est ${formatAddress()}. IDE : ${ide}. ${teamExperienceLabel()}. Nous intervenons dans les cantons de Fribourg et de Vaud.`,
  `Le devis est gratuit, sans engagement. Réponse sous 24 h. Téléphone ${phoneDisplay}, e-mail ${email}. Les communes desservies et les pages villes sont sur la page Zones.`,
];

export const aboutServicesTitle = "Les huit prestations";

export const aboutServicesLead =
  "Chaque prestation a une page : périmètre, public et demande de devis. Les trois demandes les plus fréquentes sont le nettoyage de fin de bail, le nettoyage après chantier et l'entretien de locaux.";

export const aboutMethodTitle = "Comment se passe le travail";

export const aboutMethodParagraphs = [
  "Vous décrivez le logement, le local ou le chantier — téléphone, e-mail ou formulaire. Le devis est gratuit sous 24 h. Le tarif convenu est le tarif final ; la date du passage y figure. Les horaires se conviennent avec vous. Nous apportons les produits professionnels (parquet, carrelage, inox, verre).",
  "Fin de bail : checklist de la régie. Si un point est refusé à l'état des lieux, nous revenons sans frais. Cette garantie ne s'applique pas à l'après-chantier, où le passage vise poussières fines, laitance, sols et vitres. Entretien de locaux et bureaux : régulier ou ponctuel. Conciergerie : parties communes pour régies et immeubles.",
];

export const aboutClientsTitle = "Pour qui nous travaillons";

export const aboutClientsParagraphs = [
  "Particuliers et locataires : sortie de bail, appartement ou maison à remettre en ordre, vitres, grand nettoyage. Régies immobilières, propriétaires et agences : états des lieux, relocations, immeubles. Promoteurs et entreprises générales : fin de chantier et livraison. PME, commerces, cabinets et coworkings : bureaux et locaux. Syndics et PPE : parties communes.",
  "Les réalisations publiées illustrent ce travail : une fin de bail à Fribourg pour une régie, un entretien de bureaux à Lausanne, un après-rénovation à Morges, des vitres à Romont. Les avis sont sur la page Avis.",
];

export const aboutZonesTitle = "Où nous intervenons";

export const aboutZonesParagraphs = [
  "Les zones principales sont les cantons de Fribourg et de Vaud, dans les communes listées sur la page Zones. Pages villes : Romont, Bulle, Fribourg, Lausanne, Vevey et Montreux, Yverdon-les-Bains, Morat (Murten). Nous n'intervenons pas à Neuchâtel, à Genève ni en Valais.",
];

export const aboutPageFaqs: FaqItem[] = [
  faq(
    "apropos-qui",
    "qualite",
    "Qui est Gzimmo ?",
    `${legalName} est une entreprise de nettoyage et d'entretien basée à Romont (${formatAddress()}). IDE ${ide}. ${teamExperienceLabel()}. Particuliers, régies et entreprises, dans les cantons de Fribourg et de Vaud. ${phoneDisplay} · ${email}`,
  ),
  faq(
    "apropos-methode",
    "delais",
    "Comment se déroule une intervention ?",
    "Vous décrivez le travail. Nous envoyons un devis gratuit sous 24 h. Le tarif convenu est le tarif final ; la date figure dans le devis. Nous apportons les produits. Pour une fin de bail, si la régie refuse un point, nous revenons sans frais.",
  ),
  ...getFaqsByIds(["regies-entreprises", "devis-gratuit"]),
];
