"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { buildContactMailto, parseContactForm } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Field";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = parseContactForm(event.currentTarget);
    const mailto = buildContactMailto(values);
    window.location.href = mailto;
    setOpened(true);
  }

  if (opened) {
    return (
      <div className="border border-border bg-surface p-8">
        <p className="font-medium text-foreground">Votre client mail va s&apos;ouvrir.</p>
        <p className="mt-2 text-muted">
          Envoyez le message pour transmettre votre demande à {company.email}. Nous vous
          répondons sous 24 heures.
        </p>
        <p className="mt-6 text-sm text-muted">
          Le message ne s&apos;est pas ouvert ?{" "}
          <a href={`mailto:${company.email}`} className="font-medium text-foreground hover:text-accent">
            Écrivez-nous directement
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Input label="Prénom" name="firstName" required autoComplete="given-name" />
        <Input label="Nom" name="lastName" required autoComplete="family-name" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Input label="E-mail" name="email" type="email" required autoComplete="email" />
        <Input label="Téléphone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <Input label="Localité" name="city" autoComplete="address-level2" />
      <Select label="Type de prestation" name="service" defaultValue="">
        <option value="" disabled>
          Sélectionner
        </option>
        {services.map((service) => (
          <option key={service.slug} value={service.slug}>
            {service.title}
          </option>
        ))}
        <option value="autre">Autre</option>
      </Select>
      <Textarea
        label="Décrivez votre besoin"
        name="message"
        required
        rows={5}
        placeholder="Surface, fréquence, délai souhaité…"
      />
      <Button type="submit">Envoyer la demande</Button>
      <p className="text-sm text-muted">
        Ou écrivez-nous directement :{" "}
        <a href={`mailto:${company.email}`} className="hover:text-accent">
          {company.email}
        </a>
      </p>
    </form>
  );
}
