import { notFound } from "next/navigation";

/** Docs internes — jamais exposées sur le site public. */
export default function DocsBlockedPage() {
  notFound();
}
