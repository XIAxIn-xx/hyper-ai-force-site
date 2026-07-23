import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type ApplicationsSectionProps = {
  content: HyperContent;
};

export function ApplicationsSection({ content }: ApplicationsSectionProps) {
  return (
    <section id="applications" className="relative isolate min-h-[680px] overflow-hidden bg-[#050B14] py-28 text-white md:py-36">
      <div className="absolute inset-0 bg-[url('/images/generated/building.png')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,20,0.42)_0%,rgba(5,11,20,0.98)_100%)]" />
      <div className="section-shell relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.applications.eyebrow}
            title={content.applications.title}
            align="center"
            light
            className="max-w-5xl"
          />
        </Reveal>
        <div className="mt-20 grid border-t border-white/25 sm:grid-cols-2 lg:grid-cols-4">
          {content.applications.items.map((item, index) => {
            return (
              <Reveal key={item.label} delay={index * 0.04}>
                <div className="border-b border-white/15 py-7 sm:border-r sm:px-6 sm:first:pl-0 lg:border-b-0 lg:last:border-r-0">
                  <span className="text-xs font-semibold tracking-[0.2em] text-cyan-200">0{index + 1}</span>
                  <h3 className="zh-title mt-4 text-xl font-bold text-white"><ZhText>{item.label}</ZhText></h3>
                  <p className="zh-copy mt-3 text-sm leading-7 text-slate-300"><ZhText>{item.detail}</ZhText></p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
