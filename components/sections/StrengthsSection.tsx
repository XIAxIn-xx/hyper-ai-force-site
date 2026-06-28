import type { HyperContent } from "@/data/hyper";
import { getIcon } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

type StrengthsSectionProps = {
  content: HyperContent;
};

export function StrengthsSection({ content }: StrengthsSectionProps) {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={content.strengths.eyebrow}
            title={content.strengths.title}
            align="center"
            className="max-w-5xl"
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.strengths.items.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="h-full min-h-[280px] rounded-lg border border-[#E6EAF0] bg-white p-7 shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-glow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#050B14] text-cyan-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-950 [word-break:normal]">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600 [word-break:normal] [overflow-wrap:break-word]">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
