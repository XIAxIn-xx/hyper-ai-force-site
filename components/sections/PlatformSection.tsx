import Image from "next/image";
import { Check } from "lucide-react";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

type PlatformSectionProps = {
  content: HyperContent;
};

export function PlatformSection({ content }: PlatformSectionProps) {
  return (
    <section id="technology" className="overflow-hidden bg-[#F5F7FA] py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow={content.technology.eyebrow}
            title={content.technology.title}
            copy={content.technology.copy}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.technology.capabilities.map((capability) => (
              <div key={capability} className="flex items-center gap-3 rounded-md border border-[#E6EAF0] bg-white p-3 text-sm font-medium text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cyan-100 text-cyan-700">
                  <Check className="h-4 w-4" />
                </span>
                {capability}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-[#E6EAF0] bg-[#050B14] shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/generated/hyper-dog.png"
              alt="Hyper AI Force reference interface and robotics scenes"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(34,211,238,0.3),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.15),rgba(2,6,23,0.88))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Multi-robot Mission Layer
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                Mission planning, robot telemetry, abnormal-event alerts and operator supervision in one deployable workflow.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
