import Image from "next/image";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { ZhText } from "@/components/ui/ZhText";

type AboutSectionProps = {
  content: HyperContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  const copyParagraphs = (Array.isArray(content.about.copy) ? content.about.copy : [content.about.copy]) as readonly string[];

  return (
    <section id="about" className="bg-[#FAF9F7] py-16 md:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[46fr_54fr] lg:items-start lg:gap-12">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#E6EAF0] bg-[#050B14] shadow-[0_12px_34px_rgba(15,23,42,0.06)]">
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
          <h2 className="zh-title zh-section-title mt-4 text-3xl font-bold tracking-normal text-slate-950 md:text-5xl xl:w-[calc(100%+32px)] xl:max-w-none">
            {content.about.title.split("\n").map((line, index) => (
              <span key={line + "-" + index} className="zh-title-line">
                <ZhText>{line}</ZhText>
              </span>
            ))}
          </h2>
          <div className="zh-copy mt-6 max-w-[560px] space-y-4 text-base leading-8 text-slate-600">
            {copyParagraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph}`}><ZhText>{paragraph}</ZhText></p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
