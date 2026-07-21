import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const countryCodePattern = /^\+\d{1,4}$/;
const phonePattern = /^[0-9\s().-]+$/;

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  countryCode?: unknown;
  phone?: unknown;
  interest?: unknown;
  message?: unknown;
  privacyConsent?: unknown;
  turnstileToken?: unknown;
  locale?: unknown;
  website?: unknown;
};

type EmailCopy = {
  inquirySubject: string;
  inquiryTitle: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  autoReplySubject: string;
  autoReplyGreeting: string;
  autoReplyBody: string;
  autoReplyReference: string;
};

function readField(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function readSingleLine(value: unknown, maxLength: number) {
  return readField(value, maxLength).replace(/[\r\n]+/g, " ");
}

function getEmailCopy(locale: string): EmailCopy {
  if (locale === "zh-CN") {
    return {
      inquirySubject: "网站咨询",
      inquiryTitle: "新的网站咨询",
      name: "姓名",
      company: "公司",
      email: "电邮",
      phone: "电话",
      interest: "感兴趣的产品 / 方案",
      message: "需求描述",
      autoReplySubject: "我们已收到您的咨询",
      autoReplyGreeting: "您好，感谢您联系超流智能。",
      autoReplyBody: "我们已收到您的信息，团队会尽快与您联系。",
      autoReplyReference: "您提交的需求如下："
    };
  }

  if (locale === "zh-HK") {
    return {
      inquirySubject: "網站查詢",
      inquiryTitle: "新的網站查詢",
      name: "姓名",
      company: "公司",
      email: "電郵",
      phone: "電話",
      interest: "感興趣的產品 / 方案",
      message: "需求描述",
      autoReplySubject: "我們已收到您的查詢",
      autoReplyGreeting: "您好，多謝您聯絡超流智能。",
      autoReplyBody: "我們已收到您的資料，團隊會盡快與您聯絡。",
      autoReplyReference: "您提交的需求如下："
    };
  }

  return {
    inquirySubject: "Website inquiry",
    inquiryTitle: "New website inquiry",
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    interest: "Interest / Product category",
    message: "Message",
    autoReplySubject: "We received your inquiry",
    autoReplyGreeting: "Hello, thank you for contacting Hyper AIForce.",
    autoReplyBody: "We have received your information and our team will get back to you soon.",
    autoReplyReference: "Your submitted inquiry:"
  };
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
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

  const name = readSingleLine(payload.name, 120);
  const company = readSingleLine(payload.company, 160);
  const email = readSingleLine(payload.email, 254);
  const countryCode = readSingleLine(payload.countryCode, 8);
  const phone = readSingleLine(payload.phone, 60);
  const phoneDigits = phone.replace(/\D/g, "");
  const interest = readSingleLine(payload.interest, 120);
  const message = readField(payload.message, 4000);
  const turnstileToken = readField(payload.turnstileToken, 2048);
  const locale = readSingleLine(payload.locale, 10);
  const privacyConsent =
    payload.privacyConsent === true ||
    readField(payload.privacyConsent, 10) === "on" ||
    readField(payload.privacyConsent, 10) === "true";

  if (
    !name ||
    !company ||
    !email ||
    !emailPattern.test(email) ||
    !countryCodePattern.test(countryCode) ||
    !phone ||
    !phonePattern.test(phone) ||
    phoneDigits.length < 6 ||
    phoneDigits.length > 15 ||
    !message ||
    !privacyConsent
  ) {
    return NextResponse.json({ error: "Please complete required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "contact@haiforce.ai";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail || !turnstileSecret) {
    console.error("Contact form email or captcha configuration is missing");
    return NextResponse.json({ error: "Contact form is not configured" }, { status: 503 });
  }

  if (!turnstileToken) {
    return NextResponse.json({ error: "Security verification is required" }, { status: 400 });
  }

  const turnstileResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: turnstileSecret, response: turnstileToken })
  });
  const turnstileResult = (await turnstileResponse.json()) as { success?: boolean; "error-codes"?: string[] };

  if (!turnstileResponse.ok || !turnstileResult.success) {
    console.error("Turnstile verification failed", turnstileResult["error-codes"] || []);
    return NextResponse.json({ error: "Security verification failed" }, { status: 400 });
  }

  const copy = getEmailCopy(locale);
  const fullPhone = `${countryCode} ${phone}`;
  const inquiryText = [
    copy.inquiryTitle,
    "",
    `${copy.name}: ${name}`,
    `${copy.company}: ${company}`,
    `${copy.email}: ${email}`,
    `${copy.phone}: ${fullPhone}`,
    `${copy.interest}: ${interest || "-"}`,
    "",
    `${copy.message}:`,
    message
  ].join("\n");

  const inquiryResponse = await sendEmail(apiKey, {
    from: fromEmail,
    to: [toEmail],
    reply_to: email,
    subject: `${copy.inquirySubject}: ${name}`,
    text: inquiryText
  });

  if (!inquiryResponse.ok) {
    console.error("Resend contact submission failed", await inquiryResponse.text());
    return NextResponse.json({ error: "Unable to send message" }, { status: 502 });
  }

  const autoReplyResponse = await sendEmail(apiKey, {
    from: fromEmail,
    to: [email],
    reply_to: toEmail,
    subject: copy.autoReplySubject,
    text: [copy.autoReplyGreeting, "", copy.autoReplyBody, "", copy.autoReplyReference, "", message].join("\n")
  });

  if (!autoReplyResponse.ok) {
    console.error("Resend auto-reply failed", await autoReplyResponse.text());
  }

  return NextResponse.json({ ok: true });
}
