import { AlertTriangle, CheckCircle2 } from "lucide-react";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type MarketSectionProps = {
  content: HyperContent;
};

export function MarketSection({ content }: MarketSectionProps) {
  return (
    <section className="bg-[#050B14] py-24 text-white">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow={content.market.eyebrow}
            title={content.market.title}
            copy={content.market.copy}
            light
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-4">
            {content.market.points.map((point, index) => (
              <div
                key={point}
                className="flex gap-5 rounded-lg border border-white/10 bg-white/[0.06] p-5"
              >
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cyan-300/12 text-cyan-200">
                  {index === 0 ? (
                    <AlertTriangle className="h-5 w-5" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5" />
                  )}
                </div>
                <p className="zh-copy text-lg leading-8 text-slate-300 [word-break:normal] [overflow-wrap:break-word]"><ZhText>{point}</ZhText></p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
