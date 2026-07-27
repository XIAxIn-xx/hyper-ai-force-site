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
    <section id="collaboration" className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_20%,rgba(249,115,22,0.1),transparent_25%),#071019] py-20 text-white md:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            title={content.service.title}
            copy={content.service.copy}
            align="center"
            light
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
                <article key={item.label} className="group relative min-h-[190px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] p-6 text-white shadow-[0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-orange-300/70 hover:bg-white/[0.075] hover:shadow-[0_0_34px_rgba(249,115,22,0.14)]">
                  <div className="rail-scan pointer-events-none absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-orange-400/80 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-orange-300/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                  <div className="relative flex items-start justify-between gap-4">
                    <Icon className="h-10 w-10 text-orange-300 transition duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                    <span className="font-mono text-xs tracking-[0.2em] text-white/35">0{index + 1}</span>
                  </div>
                  <h3 className="zh-title zh-card-title relative mt-7 text-xl font-bold text-slate-50">
                    <ZhText>{item.label}</ZhText>
                  </h3>
                  <ul className="zh-copy relative mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300 marker:text-orange-300">
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
