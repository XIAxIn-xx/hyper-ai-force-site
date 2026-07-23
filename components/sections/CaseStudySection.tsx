import Image from "next/image";
import { ArrowRight } from "lucide-react";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { ZhText } from "@/components/ui/ZhText";

type CaseStudySectionProps = {
  content: HyperContent;
};

export function CaseStudySection({ content }: CaseStudySectionProps) {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-[#050B14] py-28 text-white md:py-36">
      <Image
        src="/images/generated/glp-warehouse-patrol-2.png"
        alt="Night-time robotic security patrol at a logistics park"
        fill
        className="object-cover object-[50%_58%] opacity-58"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.97)_0%,rgba(5,11,20,0.65)_58%,rgba(5,11,20,0.35)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,20,0.3)_0%,rgba(5,11,20,0.95)_100%)]" />
      <div className="section-shell relative z-10">
        <Reveal>
          <p className="zh-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200"><ZhText>{content.caseStudy.eyebrow}</ZhText></p>
          <h2 className="zh-title mt-5 max-w-5xl text-4xl font-black leading-[1.08] tracking-tight text-white md:text-7xl">
            {content.caseStudy.title.split("\n").map((line, index) => (
              <span key={line + "-" + index} className="zh-title-line"><ZhText>{line}</ZhText></span>
            ))}
          </h2>
          <div className="mt-8 grid max-w-5xl gap-8 text-base leading-8 text-slate-200 md:grid-cols-2">
            <p><span className="font-semibold text-cyan-200"><ZhText>{`${content.caseStudy.labels.challenge}: `}</ZhText></span><ZhText>{content.caseStudy.challenge}</ZhText></p>
            <p><span className="font-semibold text-cyan-200"><ZhText>{`${content.caseStudy.labels.solution}: `}</ZhText></span><ZhText>{content.caseStudy.solution}</ZhText></p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-20 grid border-t border-white/25 sm:grid-cols-3">
            {content.caseStudy.outcomes.map((outcome, index) => (
              <div key={outcome} className="border-b border-white/15 py-6 sm:border-r sm:px-6 sm:first:pl-0 lg:border-b-0 lg:last:border-r-0">
                <span className="text-xs font-semibold tracking-[0.2em] text-cyan-200">0{index + 1}</span>
                <p className="zh-copy mt-3 text-base font-semibold text-white"><ZhText>{outcome}</ZhText></p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-sm text-slate-300"><ZhText>{content.caseStudy.imageText}</ZhText></p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition-colors hover:text-white">
            <ZhText>{content.caseStudy.cta}</ZhText><ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
