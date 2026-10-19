import { company } from "@/data/company";
import { faq, getFaqsByIds, type FaqItem } from "@/data/faq";

const { phoneDisplay, email, legalName, ide } = company;

export const aboutIdentityTitle = "L'entreprise";

export const aboutIdentityParagraphs = [
  `${legalName} est une entreprise de nettoyage et d'entretien, et non une régie immobilière. Notre siège se trouve Route de Raboud 8, 1680 Romont FR (IDE : ${ide}). Notre équipe a plus de 15 ans d'expérience dans le nettoyage professionnel. Nous intervenons dans les cantons de Fribourg et de Vaud.`,
  `Le devis est gratuit et sans engagement, et nous répondons sous 24 h. Vous pouvez nous joindre au ${phoneDisplay} ou à ${email}. La page Zones liste les communes desservies et renvoie vers les pages villes.`,
];

export const aboutServicesTitle = "Les huit prestations";

export const aboutServicesLead =
  "Chaque prestation a sa page, où vous trouverez ce qu'elle comprend et à qui elle s'adresse, et d'où vous pouvez demander un devis. Le nettoyage de fin de bail, le nettoyage après chantier et l'entretien de locaux font partie de cette liste.";

export const aboutMethodTitle = "Comment se passe le travail";

export const aboutMethodParagraphs = [
  "Vous nous décrivez le logement, le local ou le chantier par téléphone, par e-mail ou avec le formulaire. Nous vous répondons sous 24 h, et le devis est gratuit. Le tarif convenu dans le devis est le tarif final, et la date du passage y figure. Nous convenons des horaires avec vous et apportons des produits professionnels pour le parquet, le carrelage, l'inox et le verre.",
  "Pour une fin de bail, nous suivons la checklist de la régie. Si un point est refusé à l'état des lieux, nous revenons sans frais. Cette garantie ne couvre pas le nettoyage après chantier, qui porte sur les poussières fines, la laitance, les sols et les vitres. L'entretien de locaux et de bureaux peut être régulier ou ponctuel. La conciergerie couvre les parties communes, pour les régies et les immeubles.",
];

export const aboutClientsTitle = "Pour qui nous travaillons";

export const aboutClientsItems = [
  "Particuliers et locataires : sortie de bail, appartement ou maison à remettre en ordre, vitres, grand nettoyage.",
  "Régies immobilières, propriétaires et agences : états des lieux, relocations, immeubles.",
  "Promoteurs et entreprises générales : fin de chantier et livraison.",
  "PME, commerces, cabinets et coworkings : bureaux et locaux.",
  "Syndics et PPE : parties communes.",
];

export const aboutClientsAfter =
  "Parmi nos réalisations publiées : une fin de bail à Fribourg pour une régie, un entretien de bureaux à Lausanne, un nettoyage après rénovation à Morges et des vitres à Romont. Les avis sont regroupés sur la page Avis.";

export const aboutZonesTitle = "Où nous intervenons";

export const aboutZonesParagraphs = [
  "Nos zones principales sont les cantons de Fribourg et de Vaud, dans les communes listées sur la page Zones. Des pages villes présentent Romont, Bulle, Fribourg, Lausanne, Vevey et Montreux, Yverdon-les-Bains et Morat (Murten). Pour une commune hors liste, écrivez-nous : nous vous dirons si nous pouvons intervenir en Suisse romande si le mandat s'y prête.",
];

export const aboutPageFaqs: FaqItem[] = [
  faq(
    "apropos-qui",
    "qualite",
    "Qui est Gzimmo ?",
    `${legalName} est une entreprise de nettoyage et d'entretien basée à Romont (Route de Raboud 8, 1680 Romont FR, IDE ${ide}). Notre équipe a plus de 15 ans d'expérience dans le nettoyage professionnel. Nous travaillons pour des particuliers, des régies et des entreprises dans les cantons de Fribourg et de Vaud. ${phoneDisplay} · ${email}`,
  ),
  faq(
    "apropos-methode",
    "delais",
    "Comment se déroule une intervention ?",
    "Vous nous décrivez le travail, nous vous répondons sous 24 h et établissons un devis gratuit. Le tarif convenu est le tarif final, et la date du passage figure dans le devis. Nous apportons les produits. Pour une fin de bail, si la régie refuse un point, nous revenons sans frais.",
  ),
  ...getFaqsByIds(["regies-entreprises"]),
];
