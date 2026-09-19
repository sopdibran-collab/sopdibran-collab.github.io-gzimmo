import { notFound } from "next/navigation";

/** Route Cursor / agent — jamais exposée sur le site public. */
export default function CursorBlockedPage() {
  notFound();
}
