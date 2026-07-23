import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type DeploymentPathSectionProps = {
  content: HyperContent;
};

export function DeploymentPathSection({ content }: DeploymentPathSectionProps) {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={content.deployment.eyebrow}
            title={content.deployment.title}
            copy={content.deployment.copy}
            className="max-w-4xl"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="mt-16 grid border-t border-slate-300 md:grid-cols-5">
            {content.deployment.steps.map((step, index) => (
              <li key={step.title} className="border-b border-slate-300 py-7 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0">
                <span className="text-xs font-semibold tracking-[0.2em] text-cyan-700">0{index + 1}</span>
                <h3 className="zh-title mt-4 text-xl font-bold text-slate-950"><ZhText>{step.title}</ZhText></h3>
                <p className="zh-copy mt-3 text-sm leading-7 text-slate-600"><ZhText>{step.description}</ZhText></p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
