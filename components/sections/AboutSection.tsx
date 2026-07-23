import Image from "next/image";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { ZhText } from "@/components/ui/ZhText";

type AboutSectionProps = {
  content: HyperContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="relative isolate min-h-[680px] overflow-hidden bg-[#050B14] py-28 text-white md:py-40">
      <Image
        src="/images/generated/building.png"
        alt="Hyper AI Force physical security operations reference"
        fill
        className="object-cover object-[50%_64%] opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.98)_0%,rgba(5,11,20,0.78)_46%,rgba(5,11,20,0.3)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,20,0.2)_0%,rgba(5,11,20,0.92)_100%)]" />
      <div className="section-shell relative z-10">
        <Reveal>
          <p className="zh-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
            <ZhText>{content.about.eyebrow}</ZhText>
          </p>
          <h2 className="zh-title mt-5 max-w-5xl text-4xl font-black leading-[1.08] tracking-tight text-white md:text-7xl">
            {content.about.title.split("\n").map((line, index) => (
              <span key={line + "-" + index} className="zh-title-line">
                <ZhText>{line}</ZhText>
              </span>
            ))}
          </h2>
          <p className="zh-copy mt-8 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            <ZhText>{content.about.copy}</ZhText>
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-20 grid border-t border-white/25 sm:grid-cols-3">
            {content.about.bullets.map((bullet, index) => (
              <div key={bullet} className="border-b border-white/15 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
                <span className="text-xs font-semibold tracking-[0.2em] text-cyan-200">0{index + 1}</span>
                <p className="zh-copy mt-3 text-base font-semibold text-white"><ZhText>{bullet}</ZhText></p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
