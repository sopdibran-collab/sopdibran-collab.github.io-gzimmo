import { notFound } from "next/navigation";

/** Brand Book — usage interne uniquement ; jamais exposé sur le site public. */
export default function BrandBookBlockedPage() {
  notFound();
}
