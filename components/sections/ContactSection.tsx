"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type ContactSectionProps = {
  content: HyperContent;
};

type ErrorKey =
  | "name"
  | "company"
  | "email"
  | "countryCode"
  | "phone"
  | "privacy"
  | "captcha"
  | "form";

type Turnstile = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    }
  ) => string;
  reset: (widgetId?: string) => void;
  remove?: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9\s().-]+$/;

export function ContactSection({ content }: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, string>>>({});
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const messages =
    content.lang === "en"
      ? {
          required: "This field is required.",
          invalidEmail: "Enter a valid email address.",
          countryCode: "Select a country / region code.",
          invalidPhone: "Enter a valid phone number.",
          privacy: "Please accept the privacy consent.",
          captcha: "Complete the security verification.",
          captchaUnavailable: "Security verification is not configured.",
          sending: "Sending…",
          success: "Thanks — we will get back to you soon.",
          failed: "Submission failed. Please try again or email us directly."
        }
      : content.lang === "zh-HK"
        ? {
            required: "請填寫此欄位。",
            invalidEmail: "請輸入有效的電郵地址。",
            countryCode: "請選擇國家 / 地區號碼。",
            invalidPhone: "請輸入有效的電話號碼。",
            privacy: "請先同意私隱資料使用授權。",
            captcha: "請完成安全驗證。",
            captchaUnavailable: "安全驗證尚未配置。",
            sending: "發送中…",
            success: "提交成功，我們會盡快聯絡您。",
            failed: "提交失敗，請稍後重試或直接發送電郵。"
          }
        : {
            required: "请填写此字段。",
            invalidEmail: "请输入有效的电子邮箱地址。",
            countryCode: "请选择国家 / 地区号。",
            invalidPhone: "请输入有效的电话号码。",
            privacy: "请先同意隐私信息使用授权。",
            captcha: "请完成安全验证。",
            captchaUnavailable: "安全验证尚未配置。",
            sending: "发送中…",
            success: "提交成功，我们会尽快联系您。",
            failed: "提交失败，请稍后重试或直接发送邮件。"
          };

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileRef.current) return;

    const renderTurnstile = () => {
      if (!window.turnstile || !turnstileRef.current || turnstileWidgetId.current) {
        return Boolean(turnstileWidgetId.current);
      }

      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: turnstileSiteKey,
        callback: setTurnstileToken,
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken("")
      });
      return true;
    };

    if (!renderTurnstile()) {
      const intervalId = window.setInterval(renderTurnstile, 100);
      const timeoutId = window.setTimeout(() => window.clearInterval(intervalId), 10000);

      return () => {
        window.clearInterval(intervalId);
        window.clearTimeout(timeoutId);
        if (turnstileWidgetId.current) {
          window.turnstile?.remove?.(turnstileWidgetId.current);
        }
      };
    }

    return () => {
      if (turnstileWidgetId.current) {
        window.turnstile?.remove?.(turnstileWidgetId.current);
      }
    };
  }, [turnstileSiteKey]);

  function fieldError(key: ErrorKey) {
    const error = errors[key];
    return error ? (
      <p id={`${key}-error`} className="text-xs text-rose-600">
        {error}
      </p>
    ) : null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const countryCode = String(formData.get("countryCode") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const phoneDigits = phone.replace(/\D/g, "");
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: Partial<Record<ErrorKey, string>> = {};

    if (!name) nextErrors.name = messages.required;
    if (!company) nextErrors.company = messages.required;
    if (!email) nextErrors.email = messages.required;
    else if (!emailPattern.test(email)) nextErrors.email = messages.invalidEmail;
    if (!countryCode) nextErrors.countryCode = messages.countryCode;
    if (!phone) nextErrors.phone = messages.required;
    else if (!phonePattern.test(phone) || phoneDigits.length < 6 || phoneDigits.length > 15) {
      nextErrors.phone = messages.invalidPhone;
    }
    if (!message) nextErrors.form = messages.required;
    if (!privacyAccepted) nextErrors.privacy = messages.privacy;
    if (!turnstileSiteKey) nextErrors.captcha = messages.captchaUnavailable;
    else if (!turnstileToken) nextErrors.captcha = messages.captcha;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          countryCode,
          phone,
          interest: String(formData.get("interest") ?? "").trim(),
          message,
          privacyConsent: privacyAccepted,
          turnstileToken,
          locale: content.lang,
          website: String(formData.get("website") ?? "")
        })
      });

      if (!response.ok) throw new Error("Contact submission failed");

      form.reset();
      setPrivacyAccepted(false);
      setTurnstileToken("");
      if (turnstileWidgetId.current) window.turnstile?.reset(turnstileWidgetId.current);
      setStatus("success");
    } catch {
      setErrors({ form: messages.failed });
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[#050B14] py-24 text-white">
      {turnstileSiteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
      )}
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow={content.contact.eyebrow}
            title={content.contact.title}
            copy={content.contact.copy}
            light
          />
          <div className="mt-10 grid gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-cyan-300" />
              contact@haiforce.ai
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-cyan-300" />
              <ZhText>{content.contact.address}</ZhText>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form noValidate onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-[#E6EAF0] bg-white p-5 text-slate-950 shadow-[0_18px_50px_rgba(2,6,23,0.18)] md:p-7">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-1">
                <Input name="name" required placeholder={content.contact.fields.name} aria-label={content.contact.fields.name} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
                {fieldError("name")}
              </div>
              <div className="grid gap-1">
                <Input name="company" required placeholder={content.contact.fields.company} aria-label={content.contact.fields.company} aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "company-error" : undefined} />
                {fieldError("company")}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-1">
                <Input name="email" type="email" required placeholder={content.contact.fields.email} aria-label={content.contact.fields.email} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
                {fieldError("email")}
              </div>
              <div className="grid gap-1">
                <div className="flex gap-2">
                  <Select name="countryCode" required defaultValue="" aria-label={content.contact.fields.countryCode} className="w-[42%] shrink-0" aria-invalid={Boolean(errors.countryCode)} aria-describedby={errors.countryCode ? "countryCode-error" : undefined}>
                    <option value="" disabled>
                      {content.contact.fields.countryCode}
                    </option>
                    {content.contact.countryCodes.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </Select>
                  <Input name="phone" type="tel" inputMode="tel" required placeholder={content.contact.fields.phone} aria-label={content.contact.fields.phone} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
                </div>
                <div className="grid gap-1">
                  {fieldError("countryCode")}
                  {fieldError("phone")}
                </div>
              </div>
            </div>
            <Select name="interest" aria-label={content.contact.fields.interest} defaultValue="">
              <option value="" disabled>
                {content.contact.fields.interest}
              </option>
              {content.contact.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <div className="grid gap-1">
              <Textarea name="message" required placeholder={content.contact.fields.message} aria-label={content.contact.fields.message} aria-invalid={Boolean(errors.form)} />
              {fieldError("form")}
            </div>
            <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
              <input
                name="privacyConsent"
                type="checkbox"
                checked={privacyAccepted}
                onChange={(event) => setPrivacyAccepted(event.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-cyan-500"
              />
              <span>{content.contact.privacy}</span>
            </label>
            {fieldError("privacy")}
            <div className="grid gap-1">
              <p className="text-sm text-slate-600">{content.contact.captcha}</p>
              <div ref={turnstileRef} className="min-h-[65px]" />
              {fieldError("captcha")}
            </div>
            <Input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden opacity-0" />
            <Button type="submit" disabled={status === "submitting"} variant="dark" size="lg" className="mt-2 w-full md:w-fit">
              {status === "submitting" ? messages.sending : content.contact.button}
            </Button>
            <p aria-live="polite" className="text-sm" role="status">
              {status === "success" && messages.success}
              {status === "error" && errors.form}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
