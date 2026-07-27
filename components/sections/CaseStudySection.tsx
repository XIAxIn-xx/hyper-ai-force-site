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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[#020910]/18 md:inset-0 md:h-full md:bg-[#020910]/12" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[linear-gradient(180deg,rgba(3,10,16,0.08)_0%,rgba(3,10,16,0.2)_68%,rgba(3,10,16,0.55)_100%)] md:inset-0 md:h-full md:bg-[linear-gradient(90deg,rgba(3,10,16,0.72)_0%,rgba(3,10,16,0.48)_34%,rgba(3,10,16,0.15)_66%,rgba(3,10,16,0.05)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent" />

      <div className="relative z-10 section-shell flex min-h-0 flex-col justify-end pb-12 pt-[312px] md:min-h-[680px] md:pb-6 md:pt-20 lg:min-h-[720px]">
        <Reveal className="w-full lg:-translate-x-4">
          <div className="max-w-[600px]">
            <p className="zh-eyebrow flex items-center gap-3 !text-[13px] !font-semibold !tracking-normal text-orange-200 sm:!text-sm">
              <span aria-hidden="true" className="h-px w-8 bg-orange-300/80" />
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

          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 w-full lg:-translate-x-4 md:mt-4">
          <div className="mx-0 grid max-w-[840px] gap-3 sm:grid-cols-3 sm:gap-4">
            {caseStudy.metrics.map((metric) => (
              <div
                key={metric.value + metric.label}
                className="group rounded-xl border border-orange-200/35 bg-[#0D1721]/80 p-3.5 text-white shadow-[0_0_28px_rgba(249,115,22,0.1)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/75 hover:bg-[#132231]"
              >
                <p className="text-3xl font-semibold tracking-[-0.03em] text-orange-300 md:text-4xl">
                  <ZhText>{metric.value}</ZhText>
                </p>
                <p className="mt-1.5 text-sm leading-6 text-orange-100/85">
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
