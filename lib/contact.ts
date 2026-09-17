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
const PHONE_RE = /^[+0-9\s().-]{6,30}$/;

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

export function parseDevisBody(raw: unknown):
  | { ok: true; data: DevisPayload; honeypot: boolean }
  | { ok: false; error: string } {
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

  if (!nom || nom.length < 2 || nom.length > 120) {
    return { ok: false, error: "Indiquez votre nom (2 caractères minimum)." };
  }
  if (!telephone || !PHONE_RE.test(telephone)) {
    return { ok: false, error: "Indiquez un numéro de téléphone valide." };
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return { ok: false, error: "Indiquez une adresse e-mail valide." };
  }
  if (!PRESTATION_OPTIONS.some((o) => o.value === prestation)) {
    return { ok: false, error: "Sélectionnez un type de prestation." };
  }
  if (!commune || commune.length < 2 || commune.length > 120) {
    return { ok: false, error: "Indiquez la commune d'intervention." };
  }
  if (message.length > 4000) {
    return { ok: false, error: "Le message est trop long (4 000 caractères max)." };
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
