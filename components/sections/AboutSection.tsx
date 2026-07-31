import Image from "next/image";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { ZhText } from "@/components/ui/ZhText";

type AboutSectionProps = {
  content: HyperContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  const copyParagraphs = (Array.isArray(content.about.copy) ? content.about.copy : [content.about.copy]) as readonly string[];
  const isEnglish = content.lang === "en";

  return (
    <section id="about" className="bg-[#0B1520] py-16 text-white md:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[46fr_54fr] lg:items-start lg:gap-12">
        <Reveal>
          <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10 bg-[#050B14] shadow-[0_18px_42px_rgba(0,0,0,0.28)] ${isEnglish ? "lg:mt-9" : ""}`}>
            <Image
              src="/images/hyper/19w-building.webp"
              alt="Hyper AI Force headquarters at 19W"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="zh-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
            <ZhText>{content.about.eyebrow}</ZhText>
          </p>
          <h2 className="zh-title zh-section-title mt-4 text-3xl font-bold tracking-normal text-slate-50 md:text-5xl xl:w-[calc(100%+32px)] xl:max-w-none">
            {content.about.title.split("\n").map((line, index) => (
              <span key={line + "-" + index} className="zh-title-line">
                <ZhText>{line}</ZhText>
              </span>
            ))}
          </h2>
          <div className="zh-copy mt-6 max-w-[560px] space-y-4 text-base leading-8 text-slate-300">
            {copyParagraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph}`}><ZhText>{paragraph}</ZhText></p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
