"use client";

import { useRouter } from "next/navigation";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { buildContactMailto, parseContactForm } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { ContentCard } from "@/components/ui/ContentCard";
import { Input, Select, Textarea } from "@/components/ui/Field";

type ContactFormProps = {
  defaultService?: string;
};

export function ContactForm({ defaultService = "" }: ContactFormProps) {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = parseContactForm(event.currentTarget);
    const mailto = buildContactMailto(values);
    // Mailto opens the client without unloading the page in most browsers;
    // then land on the dedicated thank-you route (agency absolute rule).
    window.location.href = mailto;
    window.setTimeout(() => {
      router.push("/merci");
    }, 400);
  }

  return (
    <ContentCard>
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
        <Select label="Type de prestation" name="service" defaultValue={defaultService || ""}>
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
          placeholder="Logement, régie, date de remise des clés, ce qui compte pour vous…"
        />
        <Button type="submit">Envoyer la demande</Button>
        <p className="text-sm text-muted">
          Ou écrivez-nous directement :{" "}
          <a href={`mailto:${company.email}`} className="hover:text-accent">
            {company.email}
          </a>
        </p>
      </form>
    </ContentCard>
  );
}
