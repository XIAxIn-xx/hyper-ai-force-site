import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type SolutionsSectionProps = {
  content: HyperContent;
};

export function SolutionsSection({ content }: SolutionsSectionProps) {
  return (
    <section id="solutions" className="bg-[#F5F7FA] py-28 md:py-36">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={content.solutions.eyebrow}
            title={content.solutions.title}
            align="center"
          />
        </Reveal>
        <div className="mt-16 border-t border-slate-300">
          {content.solutions.items.map((item, index) => {
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="grid gap-8 border-b border-slate-300 py-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.2em] text-cyan-700">0{index + 1}</span>
                    <h3 className="zh-title mt-4 text-2xl font-bold text-slate-950 md:text-3xl"><ZhText>{item.title}</ZhText></h3>
                    <p className="zh-copy mt-4 max-w-md text-base leading-7 text-slate-500"><ZhText>{item.problem}</ZhText></p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 md:gap-10">
                    <p className="zh-copy text-base leading-8 text-slate-700"><span className="font-semibold text-slate-950"><ZhText>{`${content.solutions.labels.solution}: `}</ZhText></span><ZhText>{item.solution}</ZhText></p>
                    <p className="zh-copy text-base leading-8 text-cyan-800"><span className="font-semibold"><ZhText>{`${content.solutions.labels.value}: `}</ZhText></span><ZhText>{item.value}</ZhText></p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
