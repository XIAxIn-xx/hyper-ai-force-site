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
    <section id="collaboration" className="relative overflow-hidden titanium-section py-20 md:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
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
              const descriptionItems = item.description
                .split(/[;；]/)
                .map((part) => part.trim())
                .filter(Boolean);
              return (
                <article key={item.label} className="titanium-card group relative min-h-[190px] overflow-hidden rounded-xl p-6 transition-colors duration-300">
                  <div className="relative flex items-start justify-between gap-4">
                    <Icon className="h-10 w-10 text-slate-600" />
                    <span className="font-mono text-xs tracking-[0.2em] text-slate-600">0{index + 1}</span>
                  </div>
                  <h3 className="zh-title zh-card-title relative mt-7 text-xl font-bold text-slate-950">
                    <ZhText>{item.label}</ZhText>
                  </h3>
                  <ul className="zh-copy relative mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-600 marker:text-[var(--brand-link-light)]">
                    {descriptionItems.map((part) => (
                      <li key={part}><ZhText>{part}</ZhText></li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
