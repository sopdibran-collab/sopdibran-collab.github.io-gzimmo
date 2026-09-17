"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import {
  mapServiceSlugToPrestation,
  PRESTATION_OPTIONS,
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

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({ defaultService = "", defaultCommune = "" }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const defaultPrestation = mapServiceSlugToPrestation(defaultService);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
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

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        setStatus("error");
        setErrorMessage(
          result?.error ||
            "L'envoi a échoué. Réessayez ou contactez-nous par téléphone.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Impossible de joindre le serveur. Vérifiez votre connexion ou appelez-nous.",
      );
    }
  }

  if (status === "success") {
    return (
      <ContentCard>
        <div role="status" className="space-y-4">
          <p className="font-display text-xl text-foreground">Demande envoyée</p>
          <p className="text-muted leading-relaxed">
            Merci. Nous avons bien reçu votre demande de devis et vous répondons sous 24 h.
            Pour une urgence, appelez-nous.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <Button href={formatPhoneHref(company.phone)} external>
              Appeler {company.phoneDisplay}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setStatus("idle");
                setErrorMessage("");
              }}
            >
              Envoyer une autre demande
            </Button>
          </div>
        </div>
      </ContentCard>
    );
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

        <Input label="Nom" name="nom" required autoComplete="name" />
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Téléphone"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
          />
          <Input label="E-mail" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Select
            label="Type de prestation"
            name="prestation"
            required
            defaultValue={defaultPrestation || ""}
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
          />
        </div>
        <Textarea
          label="Message"
          name="message"
          rows={5}
          placeholder="Logement, régie, date de remise des clés… (facultatif)"
        />

        {status === "error" && errorMessage ? (
          <p
            role="alert"
            className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground"
          >
            {errorMessage}{" "}
            <a
              href={formatPhoneHref(company.phone)}
              className="font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
            >
              {company.phoneDisplay}
            </a>
          </p>
        ) : null}

        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Envoi en cours…" : "Envoyer la demande"}
        </Button>
        <p className="text-sm text-muted">
          Préférez le téléphone ?{" "}
          <a
            href={formatPhoneHref(company.phone)}
            className="font-medium text-foreground transition-colors duration-200 hover:text-accent"
          >
            {company.phoneDisplay}
          </a>
          {" · "}
          <a
            href={`mailto:${company.email}`}
            className="transition-colors duration-200 hover:text-accent"
          >
            {company.email}
          </a>
        </p>
      </form>
    </ContentCard>
  );
}
