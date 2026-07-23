import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type ServiceNetworkSectionProps = {
  content: HyperContent;
};

export function ServiceNetworkSection({ content }: ServiceNetworkSectionProps) {
  return (
    <section id="service" className="bg-[#F5F7FA] py-28 md:py-36">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow={content.service.eyebrow}
              title={content.service.title}
              copy={content.service.copy}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid border-t border-slate-300 sm:grid-cols-3">
              {content.service.items.map((item, index) => {
                return (
                  <div key={item.label} className="border-b border-slate-300 py-6 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
                    <span className="text-xs font-semibold tracking-[0.2em] text-cyan-700">0{index + 1}</span>
                    <p className="zh-title mt-4 text-xl font-bold text-slate-950"><ZhText>{item.label}</ZhText></p>
                    <p className="zh-copy mt-3 text-sm leading-7 text-slate-600"><ZhText>{item.description}</ZhText></p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
