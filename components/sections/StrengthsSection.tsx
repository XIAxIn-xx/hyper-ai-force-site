import Image from "next/image";
import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { ZhText } from "@/components/ui/ZhText";

type StrengthsSectionProps = {
  content: HyperContent;
};

export function StrengthsSection({ content }: StrengthsSectionProps) {
  return (
    <section className="relative isolate min-h-[700px] overflow-hidden bg-[#07111f] py-28 text-white md:py-36">
      <Image
        src="/images/generated/hyper-dog.png"
        alt="Robotic security operations reference"
        fill
        className="object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.98)_0%,rgba(7,17,31,0.78)_50%,rgba(7,17,31,0.4)_100%)]" />
      <div className="section-shell relative z-10">
        <Reveal>
          <p className="zh-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200"><ZhText>{content.strengths.eyebrow}</ZhText></p>
          <h2 className="zh-title mt-5 max-w-5xl text-4xl font-black leading-[1.08] tracking-tight text-white md:text-7xl">
            {content.strengths.title.split("\n").map((line, index) => (
              <span key={line + "-" + index} className="zh-title-line"><ZhText>{line}</ZhText></span>
            ))}
          </h2>
          <p className="zh-copy mt-8 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl"><ZhText>{content.strengths.copy}</ZhText></p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-20 grid border-t border-white/25 sm:grid-cols-2 lg:grid-cols-4">
            {content.strengths.items.map((item, index) => (
              <div key={item.title} className="border-b border-white/15 py-6 sm:border-r sm:px-6 sm:first:pl-0 lg:border-b-0 lg:last:border-r-0">
                <span className="text-xs font-semibold tracking-[0.2em] text-cyan-200">0{index + 1}</span>
                <h3 className="zh-title mt-4 text-xl font-bold text-white"><ZhText>{item.title}</ZhText></h3>
                <p className="zh-copy mt-3 text-sm leading-7 text-slate-300"><ZhText>{item.text}</ZhText></p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
