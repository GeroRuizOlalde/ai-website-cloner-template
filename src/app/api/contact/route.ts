import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "cpn.mrodriguez@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "GPI Consultores <onboarding@resend.dev>";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  /** Honeypot: hidden field, must stay empty for real humans. */
  website?: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "El servicio de email no está configurado." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  // Honeypot: a bot filled the hidden field. Drop silently but answer 200
  // so the bot believes it succeeded and doesn't retry.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!firstName || !email || !phone) {
    return NextResponse.json(
      { error: "Nombre, email y teléfono son obligatorios." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  const fullName = [firstName, lastName].filter(Boolean).join(" ");
  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <h2>Nuevo mensaje desde el formulario de contacto</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
    ${
      message
        ? `<p><strong>Mensaje:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`
        : "<p><em>Sin mensaje.</em></p>"
    }
  `;

  const text = [
    "Nuevo mensaje desde el formulario de contacto",
    `Nombre: ${fullName}`,
    `Email: ${email}`,
    `Teléfono: ${phone}`,
    message ? `\nMensaje:\n${message}` : "Sin mensaje.",
  ].join("\n");

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: email,
    subject: `Nuevo contacto web — ${fullName}`,
    html,
    text,
  });

  if (error) {
    return NextResponse.json(
      { error: "No pudimos enviar el mensaje. Intentá de nuevo más tarde." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
