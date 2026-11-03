import { imageSrc } from "@/lib/media";
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
    <section id="about" className="titanium-section light-copy py-16 md:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[46fr_54fr] lg:items-stretch lg:gap-12">
        <Reveal>
          <div className="metallic-edge relative mx-auto w-full max-w-[400px] overflow-hidden rounded-[var(--card-radius)] border border-white/10 shadow-[0_18px_42px_rgba(0,0,0,0.28)]">
            <Image unoptimized
              src={imageSrc("/images/hyper/cyberport.png")}
              alt="Cyberport Entrepreneurship Centre"
              width={711}
              height={1008}
              sizes="(max-width: 767px) calc(100vw - 32px), 400px"
              className="block h-auto w-full"
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
