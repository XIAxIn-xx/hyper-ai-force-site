import { getIcon } from "@/data/hyper";
import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type ServiceNetworkSectionProps = {
  content: HyperContent;
};

export function ServiceNetworkSection({ content }: ServiceNetworkSectionProps) {
  const serviceItems = content.service.items as ReadonlyArray<{
    icon: Parameters<typeof getIcon>[0];
    label: string;
    description: string;
  }>;

  return (
    <section id="service" className="bg-[#F5F7FA] py-20 md:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={content.service.eyebrow}
            title={content.service.title}
            copy={content.service.copy}
            align="center"
            className="max-w-4xl"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-[1008px] gap-6 md:grid-cols-3">
            {serviceItems.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <article key={item.label} className="group relative min-h-[190px] overflow-hidden rounded-xl border border-[#DDE4EC] bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_18px_42px_rgba(34,211,238,0.14)]">
                  <div className="rail-scan pointer-events-none absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                  <div className="relative flex items-start justify-between gap-4">
                    <Icon className="h-10 w-10 text-cyan-600 transition duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                    <span className="font-mono text-xs tracking-[0.2em] text-slate-300">0{index + 1}</span>
                  </div>
                  <h3 className="zh-title zh-card-title relative mt-7 text-xl font-bold text-slate-950">
                    <ZhText>{item.label}</ZhText>
                  </h3>
                  <p className="zh-copy relative mt-3 text-sm leading-7 text-slate-600">
                    <ZhText>{item.description}</ZhText>
                  </p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
