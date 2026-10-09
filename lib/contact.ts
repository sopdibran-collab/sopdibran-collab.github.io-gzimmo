export const PRESTATION_OPTIONS = [
  { value: "fin-de-bail", label: "Fin de bail" },
  { value: "apres-chantier", label: "Après chantier" },
  { value: "entretien", label: "Entretien" },
  { value: "vitres", label: "Vitres" },
  { value: "autre", label: "Autre" },
] as const;

export type PrestationValue = (typeof PRESTATION_OPTIONS)[number]["value"];

export type DevisFormValues = {
  nom: string;
  telephone: string;
  email: string;
  prestation: PrestationValue | "";
  commune: string;
  message: string;
  /** Honeypot — must stay empty */
  website: string;
};

export type DevisPayload = {
  nom: string;
  telephone: string;
  email: string;
  prestation: PrestationValue;
  commune: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_CHARS_RE = /^[+0-9\s().-]{6,30}$/;

export const DEVIS_FIELD_ORDER = [
  "nom",
  "telephone",
  "email",
  "prestation",
  "commune",
  "message",
] as const;

export type DevisFieldName = (typeof DEVIS_FIELD_ORDER)[number];
export type DevisFieldErrors = Partial<Record<DevisFieldName, string>>;

const SERVICE_SLUG_TO_PRESTATION: Record<string, PrestationValue> = {
  "nettoyage-fin-de-bail": "fin-de-bail",
  "nettoyage-apres-chantier": "apres-chantier",
  "entretien-locaux": "entretien",
  "nettoyage-bureaux": "entretien",
  "nettoyage-appartements": "entretien",
  "nettoyage-maisons": "entretien",
  conciergerie: "entretien",
  "nettoyage-vitres": "vitres",
  autre: "autre",
};

export function mapServiceSlugToPrestation(slug?: string): PrestationValue | "" {
  if (!slug) return "";
  return SERVICE_SLUG_TO_PRESTATION[slug] ?? "autre";
}

export function getPrestationLabel(value: string): string {
  return PRESTATION_OPTIONS.find((o) => o.value === value)?.label ?? value;
}

function trim(value: unknown): string {
  return String(value ?? "").trim();
}

export function isValidPhone(value: string): boolean {
  if (!PHONE_CHARS_RE.test(value)) return false;
  const digits = value.replace(/\D/g, "").length;
  return digits >= 8 && digits <= 15;
}

export function validateDevisFields(values: {
  nom: string;
  telephone: string;
  email: string;
  prestation: string;
  commune: string;
  message: string;
}): DevisFieldErrors {
  const errors: DevisFieldErrors = {};
  const nom = values.nom.trim();
  const telephone = values.telephone.trim();
  const email = values.email.trim().toLowerCase();
  const prestation = values.prestation.trim();
  const commune = values.commune.trim();
  const message = values.message.trim();

  if (nom.length < 2 || nom.length > 120) {
    errors.nom = "Indiquez votre nom (2 caractères minimum).";
  }
  if (!isValidPhone(telephone)) {
    errors.telephone = "Indiquez un numéro de téléphone valide.";
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    errors.email = "Indiquez une adresse e-mail valide.";
  }
  if (!PRESTATION_OPTIONS.some((option) => option.value === prestation)) {
    errors.prestation = "Sélectionnez un type de prestation.";
  }
  if (commune.length < 2 || commune.length > 120) {
    errors.commune = "Indiquez la commune d'intervention.";
  }
  if (message.length > 4000) {
    errors.message = "Le message est trop long (4 000 caractères max).";
  }
  return errors;
}

export function firstDevisField(errors: DevisFieldErrors): DevisFieldName | undefined {
  return DEVIS_FIELD_ORDER.find((name) => errors[name]);
}

export function parseDevisBody(raw: unknown):
  | { ok: true; data: DevisPayload; honeypot: boolean }
  | { ok: false; error: string; fields?: DevisFieldErrors } {
  if (!raw || typeof raw !== "object") {
    return { ok: false, error: "Données invalides." };
  }

  const body = raw as Record<string, unknown>;
  const website = trim(body.website);
  const nom = trim(body.nom);
  const telephone = trim(body.telephone);
  const email = trim(body.email).toLowerCase();
  const prestation = trim(body.prestation);
  const commune = trim(body.commune);
  const message = trim(body.message);

  if (website) {
    return { ok: true, honeypot: true, data: placeholderPayload() };
  }

  const fields = validateDevisFields({ nom, telephone, email, prestation, commune, message });
  const first = firstDevisField(fields);
  if (first && fields[first]) {
    return { ok: false, error: fields[first], fields };
  }

  return {
    ok: true,
    honeypot: false,
    data: {
      nom,
      telephone,
      email,
      prestation: prestation as PrestationValue,
      commune,
      message,
    },
  };
}

function placeholderPayload(): DevisPayload {
  return {
    nom: "",
    telephone: "",
    email: "honeypot@invalid.local",
    prestation: "autre",
    commune: "",
    message: "",
  };
}

export function buildDevisSubject(data: DevisPayload): string {
  const type = getPrestationLabel(data.prestation);
  return `[Devis Gzimmo] ${type} — ${data.commune}`;
}

export function buildDevisTextBody(data: DevisPayload): string {
  const lines = [
    "Nouvelle demande de devis via gzimmo.ch",
    "",
    `Nom : ${data.nom}`,
    `Téléphone : ${data.telephone}`,
    `E-mail : ${data.email}`,
    `Prestation : ${getPrestationLabel(data.prestation)}`,
    `Commune : ${data.commune}`,
    "",
    "Message :",
    data.message || "(aucun)",
  ];
  return lines.join("\n");
}

export function buildDevisHtmlBody(data: DevisPayload): string {
  const rows: [string, string][] = [
    ["Nom", escapeHtml(data.nom)],
    ["Téléphone", escapeHtml(data.telephone)],
    ["E-mail", escapeHtml(data.email)],
    ["Prestation", escapeHtml(getPrestationLabel(data.prestation))],
    ["Commune", escapeHtml(data.commune)],
  ];

  const table = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#1e2227;">${value}</td></tr>`,
    )
    .join("");

  const messageBlock = data.message
    ? `<p style="margin:16px 0 4px;color:#555;">Message</p><p style="margin:0;white-space:pre-wrap;color:#1e2227;">${escapeHtml(data.message)}</p>`
    : `<p style="margin:16px 0 0;color:#888;">Aucun message.</p>`;

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5;color:#1e2227;">
<p style="margin:0 0 16px;">Nouvelle demande de devis via <strong>gzimmo.ch</strong></p>
<table style="border-collapse:collapse;">${table}</table>
${messageBlock}
</body></html>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
