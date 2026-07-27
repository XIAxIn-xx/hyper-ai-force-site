import { ArrowRight } from "lucide-react";

import type { HyperContent } from "@/data/hyper";
import { getIcon } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type StackOverviewSectionProps = {
  content: HyperContent;
};

export function StackOverviewSection({ content }: StackOverviewSectionProps) {
  const { overview } = content;

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_86%_15%,rgba(249,115,22,0.12),transparent_28%),linear-gradient(180deg,#0B1520_0%,#071019_100%)] py-24 text-white"
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

        <Reveal delay={0.08}>
          <ol className="mt-16 flex flex-col md:flex-row md:items-start">
            {overview.steps.map((step, index) => {
              const Icon = getIcon(step.icon);
              const isLast = index === overview.steps.length - 1;

              return (
                <li key={step.label} className="relative flex min-w-0 flex-1 md:items-start">
                  {!isLast ? (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-[-22px] left-5 top-12 w-px bg-white/15 md:bottom-auto md:left-auto md:right-[-16px] md:top-7 md:h-px md:w-8"
                    />
                  ) : null}
                  <div className="flex min-w-0 gap-4 md:block md:w-full md:text-center">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-orange-300/45 bg-white/[0.06] text-orange-200 shadow-[0_0_30px_rgba(249,115,22,0.14)] backdrop-blur-md md:mx-auto">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <p className="zh-copy self-center pb-6 text-base font-semibold leading-7 text-slate-100 md:mt-5 md:pb-0 md:px-2">
                      <ZhText>{step.label}</ZhText>
                    </p>
                  </div>
                  {!isLast ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute bottom-[-29px] left-[13px] h-4 w-4 text-orange-300/70 md:bottom-auto md:left-auto md:right-[-5px] md:top-[21px]"
                    />
                  ) : null}
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
