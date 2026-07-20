import type { HyperContent } from "@/data/hyper";
import { getIcon } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type ApplicationsSectionProps = {
  content: HyperContent;
};

export function ApplicationsSection({ content }: ApplicationsSectionProps) {
  return (
    <section id="applications" className="bg-[#050B14] py-24 text-white">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={content.applications.eyebrow}
            title={content.applications.title}
            align="center"
            light
            className="max-w-5xl"
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {content.applications.items.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.label} delay={index * 0.04}>
                <div className="group flex min-h-32 flex-col items-center justify-center gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-6 text-center transition hover:border-cyan-300/60 hover:bg-cyan-300/10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-cyan-300/12 text-cyan-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="zh-title zh-card-title text-center text-xl font-bold text-white"><ZhText>{item.label}</ZhText></h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
