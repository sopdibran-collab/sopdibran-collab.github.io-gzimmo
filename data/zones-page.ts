import { company } from "@/data/company";
import { faq, type FaqItem } from "@/data/faq";
import {
  federalCleaningNote,
  federalRestitution,
  vaudRulv,
  type SourceLink,
} from "@/data/locations";

const { phoneDisplay, email } = company;

export const zonesIntroTitle = "Communes desservies par bassin";

export const zonesIntroParagraphs = [
  "Gzimmo Sàrl a son siège à Romont, Route de Raboud 8, 1680 Romont. Nos zones principales sont les cantons de Fribourg et de Vaud. Les communes desservies sont regroupées ci-dessous par bassin. Sept d'entre elles ont leur propre page, accessible depuis la liste : Romont, Bulle, Fribourg, Lausanne, Vevey (avec Montreux), Yverdon-les-Bains et Morat (Murten).",
  "Votre commune n'est pas dans la liste ? Écrivez-nous à " +
    email +
    " ou appelez le " +
    phoneDisplay +
    " : nous vous dirons si nous pouvons intervenir, y compris ailleurs en Suisse romande si le mandat s'y prête. Nous répondons sous 24 h et le devis est gratuit.",
];

export const zonesCantonTitle =
  "Fin de bail : ce qui change d'un canton à l'autre";

export const zonesCantonBullets = [
  "Canton de Fribourg : Code des obligations, art. 267 — le locataire rend le logement dans l'état qui résulte d'un usage conforme au contrat, nettoyage compris.",
  "Canton de Vaud : règles et usages locatifs (art. 36 et 37) — locaux propres et vidés à midi le jour de l'échéance.",
];

export const zonesCantonParagraph =
  "Les règles de restitution d'un logement ne sont pas les mêmes dans le canton de Fribourg et dans le canton de Vaud. Les pages villes les détaillent, sources à l'appui. Dans les deux cantons, nous suivons la checklist de votre régie, et la date du nettoyage est fixée dans le devis. Dans le canton de Fribourg (Glâne, Broye fribourgeoise, Gruyère, Veveyse, Sarine, Singine, district du Lac), le bailleur signale immédiatement les défauts constatés à la sortie. Dans le canton de Vaud (Lausanne et Ouest lausannois, Riviera, Chablais, Nord vaudois, Moudon, Oron, Payerne), les sols doivent être contrôlables, et toutes les clés rendues, doubles compris. Selon le logement, le texte mentionne aussi le filtre de ventilation, les stores et les radiateurs. Près de la limite cantonale, vérifiez le canton de votre commune : Estavayer-le-Lac est fribourgeoise, alors que Payerne, Moudon et Oron sont vaudoises. Châtel-Saint-Denis, en Veveyse, est fribourgeoise comme Bulle, tout comme Morat (Murten), dans le district du Lac.";

export const zonesCantonSources: SourceLink[] = [
  federalRestitution,
  federalCleaningNote,
  vaudRulv,
];

export const zonesPageFaqs: FaqItem[] = [
  faq(
    "zone-ma-commune",
    "zone",
    "Intervenez-vous dans ma commune ?",
    `Oui, si elle figure dans les listes de cette page. Sinon, écrivez à ${email} ou appelez le ${phoneDisplay} : nous vous répondons sous 24 h pour vous dire si nous pouvons venir.`,
  ),
  faq(
    "zone-hors-fr-vd",
    "zone",
    "Intervenez-vous en dehors des cantons de Fribourg et de Vaud ?",
    `Nos zones principales sont les cantons de Fribourg et de Vaud, dans les communes listées sur cette page. Pour une commune hors liste, y compris ailleurs en Suisse romande, écrivez-nous ou appelez le ${phoneDisplay} : nous vous dirons si le mandat s'y prête.`,
  ),
  faq(
    "zone-pages-villes",
    "zone",
    "Pourquoi certaines communes ont-elles une page et d'autres non ?",
    "Sept communes ont leur propre page : Romont, Bulle, Fribourg, Lausanne, Vevey (avec Montreux), Yverdon-les-Bains et Morat (Murten). Les autres communes desservies sont présentées sur la page de leur bassin : par exemple Ursy sur la page Romont, Riaz sur la page Bulle et Renens sur la page Lausanne.",
  ),
  faq(
    "zone-fin-de-bail-cantons",
    "zone",
    "Les règles de fin de bail sont-elles les mêmes à Fribourg et en Vaud ?",
    "Non. Dans le canton de Fribourg, la restitution suit les art. 267 et 267a du Code des obligations : logement dans un état conforme au contrat, nettoyage compris, et défauts signalés tout de suite par le bailleur. Dans le canton de Vaud, les règles et usages locatifs (art. 36 et 37) prévoient une remise à midi, avec des locaux vidés, des sols contrôlables et toutes les clés, doubles compris. Dans les deux cas, nous nettoyons d'après la checklist de votre régie.",
  ),
];
