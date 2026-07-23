import Image from "next/image";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type PlatformSectionProps = {
  content: HyperContent;
};

export function PlatformSection({ content }: PlatformSectionProps) {
  return (
    <section id="technology" className="relative isolate min-h-[700px] overflow-hidden bg-[#050B14] py-28 text-white md:py-36">
      <Image
        src="/images/generated/hyper-dog.png"
        alt="Robot scheduling platform reference interface"
        fill
        className="object-cover object-center opacity-38"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.98)_0%,rgba(5,11,20,0.82)_54%,rgba(5,11,20,0.48)_100%)]" />
      <div className="section-shell relative z-10">
        <Reveal>
          <SectionHeading eyebrow={content.technology.eyebrow} title={content.technology.title} copy={content.technology.copy} light className="max-w-5xl" />
          <div className="mt-10 text-[clamp(4rem,12vw,10rem)] font-black leading-none tracking-[-0.08em] text-cyan-200/20">RSP</div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 grid border-t border-white/25 sm:grid-cols-2 lg:grid-cols-4">
            {content.technology.capabilities.map((capability, index) => (
              <div key={capability} className="border-b border-white/15 py-6 sm:border-r sm:px-6 sm:first:pl-0 lg:border-b-0 lg:last:border-r-0">
                <span className="text-xs font-semibold tracking-[0.2em] text-cyan-200">0{index + 1}</span>
                <p className="zh-copy mt-3 text-base font-semibold text-white"><ZhText>{capability}</ZhText></p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
