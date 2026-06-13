import { company } from "@/data/company";
import { services } from "@/data/services";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
};

function getServiceLabel(slug: string) {
  if (!slug) return "Non précisé";
  if (slug === "autre") return "Autre";
  return services.find((s) => s.slug === slug)?.title ?? slug;
}

export function buildContactMailto(values: ContactFormValues): string {
  const serviceLabel = getServiceLabel(values.service);

  const body = [
    `Bonjour,`,
    ``,
    `Je souhaite obtenir un devis pour les prestations suivantes.`,
    ``,
    `— Nom : ${values.firstName} ${values.lastName}`,
    `— E-mail : ${values.email}`,
    values.phone ? `— Téléphone : ${values.phone}` : null,
    values.city ? `— Localité : ${values.city}` : null,
    `— Prestation : ${serviceLabel}`,
    ``,
    `Message :`,
    values.message,
  ]
    .filter(Boolean)
    .join("\n");

  const params = new URLSearchParams({
    subject: `Demande de devis — ${values.city || "Gzimmo"}`,
    body,
  });

  return `mailto:${company.email}?${params.toString()}`;
}

export function parseContactForm(form: HTMLFormElement): ContactFormValues {
  const data = new FormData(form);
  return {
    firstName: String(data.get("firstName") ?? ""),
    lastName: String(data.get("lastName") ?? ""),
    email: String(data.get("email") ?? ""),
    phone: String(data.get("phone") ?? ""),
    city: String(data.get("city") ?? ""),
    service: String(data.get("service") ?? ""),
    message: String(data.get("message") ?? ""),
  };
}
