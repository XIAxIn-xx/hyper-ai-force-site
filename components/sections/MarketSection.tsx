import Image from "next/image";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type MarketSectionProps = {
  content: HyperContent;
};

export function MarketSection({ content }: MarketSectionProps) {
  return (
    <section className="relative isolate min-h-[700px] overflow-hidden bg-[#050B14] py-28 text-white md:py-36">
      <Image
        src="/images/generated/glp-warehouse-patrol-1.png"
        alt="Night-time robotic security patrol in a logistics park"
        fill
        className="object-cover object-center opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.97)_0%,rgba(5,11,20,0.72)_52%,rgba(5,11,20,0.38)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,20,0.2)_0%,rgba(5,11,20,0.95)_100%)]" />
      <div className="section-shell relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.market.eyebrow}
            title={content.market.title}
            copy={content.market.copy}
            light
            className="max-w-4xl"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mt-20 grid border-t border-white/25 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rail-scan pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
            {content.market.points.map((point, index) => (
              <div key={point} className="group relative overflow-hidden border-b border-white/15 py-6 transition-colors duration-300 hover:border-orange-200/50 sm:border-r sm:px-6 sm:first:pl-0 lg:border-b-0 lg:last:border-r-0">
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-orange-300/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-orange-200">
                  <span className="h-1.5 w-1.5 bg-orange-200 transition-transform duration-300 group-hover:scale-150" />
                  0{index + 1}
                </span>
                <p className="zh-copy relative mt-3 text-base leading-7 text-slate-100 transition-colors duration-300 group-hover:text-white"><ZhText>{point}</ZhText></p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
