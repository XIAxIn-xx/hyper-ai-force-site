import { Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

type ContactSectionProps = {
  content: HyperContent;
};

export function ContactSection({ content }: ContactSectionProps) {
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
              contact@hyperaiforce.com
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-cyan-300" />
              Hong Kong
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form className="grid gap-4 rounded-lg border border-[#E6EAF0] bg-white p-5 text-slate-950 shadow-[0_18px_50px_rgba(2,6,23,0.18)] md:p-7">
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder={content.contact.fields.name} aria-label={content.contact.fields.name} />
              <Input placeholder={content.contact.fields.company} aria-label={content.contact.fields.company} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Input type="email" placeholder={content.contact.fields.email} aria-label={content.contact.fields.email} />
              <Input placeholder={content.contact.fields.phone} aria-label={content.contact.fields.phone} />
            </div>
            <Select aria-label={content.contact.fields.interest} defaultValue="">
              <option value="" disabled>
                {content.contact.fields.interest}
              </option>
              {content.contact.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <Textarea placeholder={content.contact.fields.message} aria-label={content.contact.fields.message} />
            <Button type="button" variant="dark" size="lg" className="mt-2 w-full md:w-fit">
              {content.contact.button}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
