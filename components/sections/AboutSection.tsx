import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { ZhText } from "@/components/ui/ZhText";

type AboutSectionProps = {
  content: HyperContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="bg-[#F5F7FA] py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative min-h-[400px] overflow-hidden rounded-lg border border-[#E6EAF0] bg-[#050B14] shadow-[0_12px_34px_rgba(15,23,42,0.06)]">
            <Image
              src="/images/generated/building.png"
              alt="Hyper AI Force company reference visual"
              fill
              className="object-cover object-[50%_82%] opacity-78"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#050B14]/85 via-[#050B14]/35 to-cyan-950/50" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
            <ZhText>{content.about.eyebrow}</ZhText>
          </p>
          <h2 className="zh-title mt-4 text-3xl font-bold tracking-normal text-slate-950 md:text-5xl">
            {content.about.title.split("\n").map((line, index) => (
              <span key={line + "-" + index} className="block">
                <ZhText>{line}</ZhText>
              </span>
            ))}
          </h2>
          <p className="zh-copy mt-6 text-base leading-8 text-slate-600"><ZhText>{content.about.copy}</ZhText></p>
          <div className="mt-8 grid gap-3">
            {content.about.bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                <ZhText>{bullet}</ZhText>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
