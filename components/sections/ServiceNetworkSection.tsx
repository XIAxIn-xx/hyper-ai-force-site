import { getIcon } from "@/data/hyper";
import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type ServiceNetworkSectionProps = {
  content: HyperContent;
};

export function ServiceNetworkSection({ content }: ServiceNetworkSectionProps) {
  return (
    <section id="service" className="bg-[#F5F7FA] py-24">
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
            <div className="grid gap-4 sm:grid-cols-2">
              {content.service.items.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <div key={item.label} className="flex items-center gap-4 rounded-lg border border-[#E6EAF0] bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.05)]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-orange-100 text-orange-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="zh-copy font-bold text-slate-950"><ZhText>{item.label}</ZhText></p>
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
