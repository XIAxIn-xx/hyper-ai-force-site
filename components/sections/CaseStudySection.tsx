import { ArrowRight } from "lucide-react";

import type { HyperContent } from "@/data/hyper";
import { CaseStudyMedia } from "@/components/sections/CaseStudyMedia";
import { Reveal } from "@/components/sections/Reveal";
import { ZhText } from "@/components/ui/ZhText";

type CaseStudySectionProps = {
  content: HyperContent;
};

export function CaseStudySection({ content }: CaseStudySectionProps) {
  const { caseStudy } = content;

  return (
    <section
      id="case-study"
      aria-labelledby="case-study-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#071019] text-white"
    >
      <CaseStudyMedia alt={caseStudy.mediaAlt} className="inset-x-0 top-0 h-[360px] md:inset-0 md:h-full" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[#020910]/45 md:inset-0 md:h-full md:bg-[#020910]/50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[linear-gradient(180deg,rgba(3,10,16,0.18)_0%,rgba(3,10,16,0.42)_68%,rgba(3,10,16,0.88)_100%)] md:inset-0 md:h-full md:bg-[linear-gradient(90deg,rgba(3,10,16,0.94)_0%,rgba(3,10,16,0.76)_34%,rgba(3,10,16,0.32)_66%,rgba(3,10,16,0.12)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#050B14] via-[#050B14]/70 to-transparent" />

      <div className="relative z-10 section-shell flex min-h-0 flex-col justify-end pb-12 pt-[312px] md:min-h-[680px] md:pb-6 md:pt-20 lg:min-h-[720px]">
        <Reveal className="w-full">
          <div className="max-w-[600px]">
            <p className="zh-eyebrow flex items-center gap-3 !text-[13px] !font-semibold !tracking-normal text-cyan-200 sm:!text-sm">
              <span aria-hidden="true" className="h-px w-8 bg-cyan-300/80" />
              <ZhText>{caseStudy.eyebrow}</ZhText>
            </p>
            <h2
              id="case-study-title"
              className="zh-title zh-section-title mt-4 max-w-[600px] !text-[clamp(2.25rem,4vw,3.25rem)] !font-semibold !leading-[1.08] tracking-[-0.025em] text-white"
            >
              {caseStudy.title.split("\n").map((line, index) => (
                <span key={line + "-" + index} className="zh-title-line">
                  <ZhText>{line}</ZhText>
                </span>
              ))}
            </h2>
            <p className="zh-copy mt-5 max-w-[560px] !text-[16px] !leading-7 text-white/85 md:mt-4 md:!text-[16px] md:!leading-6">
              <ZhText>{caseStudy.intro}</ZhText>
            </p>

            <div className="mt-5 grid max-w-[600px] gap-5 border-t border-white/15 pt-5 sm:grid-cols-2 sm:gap-6 md:mt-4 md:pt-4">
              <div>
                <h3 className="text-[13px] font-semibold tracking-wide text-cyan-200">
                  <ZhText>{caseStudy.labels.background}</ZhText>
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-slate-200/80 md:text-sm md:leading-[1.55]">
                  <ZhText>{caseStudy.background}</ZhText>
                </p>
              </div>
              <div className="sm:border-l sm:border-white/15 sm:pl-7">
                <h3 className="text-[13px] font-semibold tracking-wide text-cyan-200">
                  <ZhText>{caseStudy.labels.solution}</ZhText>
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-slate-200/80 md:text-sm md:leading-[1.55]">
                  <ZhText>{caseStudy.solution}</ZhText>
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-md border border-cyan-200/50 bg-cyan-300 px-5 py-2 text-sm font-semibold text-[#06121b] transition hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071019] md:mt-4"
            >
              <ZhText>{caseStudy.cta}</ZhText>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 w-full md:mt-4">
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
            {caseStudy.metrics.map((metric) => (
              <div
                key={metric.value + metric.label}
                className="group rounded-2xl border border-white/15 bg-[#06131d]/70 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/30"
              >
                <p className="text-4xl font-semibold tracking-[-0.03em] text-cyan-200 md:text-5xl">
                  <ZhText>{metric.value}</ZhText>
                </p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  <ZhText>{metric.label}</ZhText>
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
