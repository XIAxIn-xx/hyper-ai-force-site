import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  interest?: unknown;
  message?: unknown;
  website?: unknown;
};

function readField(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (readField(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = readField(payload.name, 120);
  const company = readField(payload.company, 160);
  const email = readField(payload.email, 254);
  const phone = readField(payload.phone, 60);
  const interest = readField(payload.interest, 120);
  const message = readField(payload.message, 4000);

  if (!name || !email || !message || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Please complete required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "contact@haiforce.ai";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error("Contact form email configuration is missing");
    return NextResponse.json({ error: "Contact form is not configured" }, { status: 503 });
  }

  const emailText = [
    "New website inquiry",
    "",
    `Name: ${name}`,
    `Company: ${company || "-"}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Interest: ${interest || "-"}`,
    "",
    "Message:",
    message
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Website inquiry: ${name}`,
      text: emailText
    })
  });

  if (!resendResponse.ok) {
    console.error("Resend contact submission failed", await resendResponse.text());
    return NextResponse.json({ error: "Unable to send message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
