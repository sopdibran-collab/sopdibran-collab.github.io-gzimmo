"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import {
  firstDevisField,
  mapServiceSlugToPrestation,
  PRESTATION_OPTIONS,
  validateDevisFields,
  type DevisFieldErrors,
  type DevisFieldName,
  type PrestationValue,
} from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { ContentCard } from "@/components/ui/ContentCard";
import { Input, Select, Textarea } from "@/components/ui/Field";
import { GarantieRemiseBail } from "@/components/ui/GarantieRemiseBail";

type ContactFormProps = {
  defaultService?: string;
  defaultCommune?: string;
};

type FormStatus = "idle" | "submitting" | "error";

export function ContactForm({ defaultService = "", defaultCommune = "" }: ContactFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<DevisFieldErrors>({});
  const defaultPrestation = mapServiceSlugToPrestation(defaultService);

  function focusField(name: DevisFieldName) {
    requestAnimationFrame(() => {
      document.getElementById(name)?.focus();
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      nom: String(data.get("nom") ?? ""),
      telephone: String(data.get("telephone") ?? ""),
      email: String(data.get("email") ?? ""),
      prestation: String(data.get("prestation") ?? "") as PrestationValue | "",
      commune: String(data.get("commune") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    const clientErrors = validateDevisFields(payload);
    const firstInvalid = firstDevisField(clientErrors);
    if (firstInvalid) {
      setStatus("idle");
      setErrors(clientErrors);
      focusField(firstInvalid);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string; fields?: DevisFieldErrors | null }
        | null;

      if (!response.ok || !result?.ok) {
        const serverFields = result?.fields ?? {};
        const serverFirst = firstDevisField(serverFields);
        setStatus("error");
        setErrors(serverFields);
        setErrorMessage(
          result?.error ||
            "L'envoi a échoué. Réessayez ou contactez-nous par téléphone.",
        );
        if (serverFirst) focusField(serverFirst);
        return;
      }

      form.reset();
      router.push("/merci");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Impossible de joindre le serveur. Vérifiez votre connexion ou appelez-nous.",
      );
    }
  }

  return (
    <ContentCard>
      <GarantieRemiseBail variant="inline" className="mb-6" />
      <form onSubmit={handleSubmit} className="relative space-y-6" noValidate>
        {/* Honeypot anti-spam — hidden from users */}
        <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Site web</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        <Input
          label="Nom"
          name="nom"
          required
          autoComplete="name"
          error={errors.nom}
          onChange={() => setErrors((current) => ({ ...current, nom: undefined }))}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Téléphone"
            name="telephone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            error={errors.telephone}
            onChange={() => setErrors((current) => ({ ...current, telephone: undefined }))}
          />
          <Input
            label="E-mail"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            required
            error={errors.email}
            onChange={() => setErrors((current) => ({ ...current, email: undefined }))}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Select
            label="Type de prestation"
            name="prestation"
            required
            defaultValue={defaultPrestation || ""}
            error={errors.prestation}
            onChange={() => setErrors((current) => ({ ...current, prestation: undefined }))}
          >
            <option value="" disabled>
              Sélectionner
            </option>
            {PRESTATION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <Input
            label="Commune"
            name="commune"
            required
            autoComplete="address-level2"
            defaultValue={defaultCommune}
            error={errors.commune}
            onChange={() => setErrors((current) => ({ ...current, commune: undefined }))}
          />
        </div>
        <Textarea
          label="Message"
          name="message"
          rows={5}
          placeholder="Logement, régie, date de remise des clés… (facultatif)"
          error={errors.message}
          onChange={() => setErrors((current) => ({ ...current, message: undefined }))}
        />

        {status === "error" && errorMessage ? (
          <p
            role="alert"
            className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground"
          >
            {errorMessage}{" "}
            <a
              href={formatPhoneHref(company.phone)}
              className="font-medium text-accent-ink transition-colors duration-200 hover:text-accent-hover"
            >
              {company.phoneDisplay}
            </a>
          </p>
        ) : null}

        <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "Envoi en cours…" : "Envoyer la demande"}
        </Button>
        <p className="text-sm text-muted">
          Préférez le téléphone ?{" "}
          <a
            href={formatPhoneHref(company.phone)}
            className="font-medium text-foreground transition-colors duration-200 hover:text-accent-ink"
          >
            {company.phoneDisplay}
          </a>
          {" · "}
          <a
            href={`mailto:${company.email}`}
            className="transition-colors duration-200 hover:text-accent-ink"
          >
            {company.email}
          </a>
        </p>
      </form>
    </ContentCard>
  );
}
