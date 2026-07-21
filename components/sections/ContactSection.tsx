"use client";

import { useState, type FormEvent } from "react";
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

export function ContactSection({ content }: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const isChinese = content.lang !== "en";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      if (!response.ok) {
        throw new Error("Contact submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[#050B14] py-24 text-white">
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
          <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-[#E6EAF0] bg-white p-5 text-slate-950 shadow-[0_18px_50px_rgba(2,6,23,0.18)] md:p-7">
            <div className="grid gap-4 md:grid-cols-2">
              <Input name="name" required placeholder={content.contact.fields.name} aria-label={content.contact.fields.name} />
              <Input name="company" placeholder={content.contact.fields.company} aria-label={content.contact.fields.company} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Input name="email" type="email" required placeholder={content.contact.fields.email} aria-label={content.contact.fields.email} />
              <Input name="phone" placeholder={content.contact.fields.phone} aria-label={content.contact.fields.phone} />
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
            <Textarea name="message" required placeholder={content.contact.fields.message} aria-label={content.contact.fields.message} />
            <Input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
            />
            <Button type="submit" disabled={status === "submitting"} variant="dark" size="lg" className="mt-2 w-full md:w-fit">
              {status === "submitting"
                ? isChinese ? "发送中…" : "Sending…"
                : content.contact.button}
            </Button>
            <p aria-live="polite" className="text-sm" role="status">
              {status === "success" && (isChinese ? "提交成功，我们会尽快联系您。" : "Thanks — we will get back to you soon.")}
              {status === "error" && (isChinese ? "提交失败，请稍后重试或直接发送邮件。" : "Submission failed. Please try again or email us directly.")}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
