import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { RspPatrolClosedLoop } from "@/components/sections/RspPatrolClosedLoop";
import { SectionHeading } from "@/components/sections/SectionHeading";

type StackOverviewSectionProps = {
  content: HyperContent;
};

export function StackOverviewSection({ content }: StackOverviewSectionProps) {
  const { overview } = content;

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[var(--surface-steel)] py-24 text-white"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={overview.eyebrow}
            title={overview.title}
            copy={overview.copy}
            light
            className="max-w-4xl"
          />
        </Reveal>

        <RspPatrolClosedLoop
          locale={content.lang === "en" ? "en" : content.lang === "zh-CN" ? "zh-cn" : "zh-hk"}
          steps={overview.steps}
        />
      </div>
    </section>
  );
}
