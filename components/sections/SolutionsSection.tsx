import type { HyperContent } from "@/data/hyper";
import { getIcon } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

type SolutionsSectionProps = {
  content: HyperContent;
};

export function SolutionsSection({ content }: SolutionsSectionProps) {
  return (
    <section id="solutions" className="bg-[#F5F7FA] py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={content.solutions.eyebrow}
            title={content.solutions.title}
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {content.solutions.items.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-lg border border-[#E6EAF0] bg-white p-7 shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-glow lg:p-8">
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-[#050B14] text-cyan-200">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-2xl font-bold text-slate-950 [word-break:normal]">{item.title}</h3>
                      <div className="mt-5 grid gap-4 text-base leading-8 text-slate-600 [word-break:normal] [overflow-wrap:break-word]">
                        <p><span className="font-bold text-slate-950">{content.solutions.labels.problem}: </span>{item.problem}</p>
                        <p><span className="font-bold text-slate-950">{content.solutions.labels.solution}: </span>{item.solution}</p>
                        <p><span className="font-bold text-slate-950">{content.solutions.labels.value}: </span>{item.value}</p>
                      </div>
                    </div>
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
