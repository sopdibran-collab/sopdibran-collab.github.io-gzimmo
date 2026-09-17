import { Resend } from "resend";
import { NextResponse } from "next/server";
import { company } from "@/data/company";
import {
  buildDevisHtmlBody,
  buildDevisSubject,
  buildDevisTextBody,
  parseDevisBody,
} from "@/lib/contact";
import { checkRateLimit, pruneRateLimitBuckets } from "@/lib/rate-limit";

export const runtime = "nodejs";

const DEFAULT_FROM = "Gzimmo <onboarding@resend.dev>";

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  pruneRateLimitBuckets();

  const limited = checkRateLimit(`devis:${clientKey(request)}`);
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: "Trop de demandes. Réessayez dans une minute." },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      },
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  const parsed = parseDevisBody(raw);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  // Honeypot filled → pretend success without sending
  if (parsed.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[devis] RESEND_API_KEY manquante");
    return NextResponse.json(
      {
        ok: false,
        error:
          "L'envoi est temporairement indisponible. Appelez-nous ou écrivez à info@gzimmo.ch.",
      },
      { status: 503 },
    );
  }

  const from = process.env.EMAIL_FROM?.trim() || DEFAULT_FROM;
  const data = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [company.email],
      replyTo: data.email,
      subject: buildDevisSubject(data),
      text: buildDevisTextBody(data),
      html: buildDevisHtmlBody(data),
    });

    if (error) {
      console.error("[devis] Resend error:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "L'envoi a échoué. Réessayez ou contactez-nous par téléphone.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[devis] Unexpected error:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Une erreur est survenue. Réessayez ou appelez-nous.",
      },
      { status: 500 },
    );
  }
}
