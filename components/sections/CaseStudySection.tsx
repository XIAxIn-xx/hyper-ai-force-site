import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";

type CaseStudySectionProps = {
  content: HyperContent;
};

export function CaseStudySection({ content }: CaseStudySectionProps) {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-[#E6EAF0] bg-white shadow-[0_12px_34px_rgba(15,23,42,0.06)]">
            <Image
              src="/images/generated/glp-warehouse-patrol-2.png"
              alt="Reference case study for robotic inspection"
              fill
              className="object-cover object-[50%_58%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/15 bg-[#050B14]/75 p-5 text-white backdrop-blur">
              <p className="text-sm font-semibold text-cyan-200">
                {content.caseStudy.imageTitle}
              </p>
              <p className="mt-2 text-sm text-slate-300">
                {content.caseStudy.imageText}
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
            {content.caseStudy.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-normal text-slate-950 md:text-5xl">
            {content.caseStudy.title}
          </h2>
          <div className="mt-7 grid gap-5 text-base leading-8 text-slate-600">
            <p>
              <span className="font-bold text-slate-950">{content.caseStudy.labels.challenge}: </span>
              {content.caseStudy.challenge}
            </p>
            <p>
              <span className="font-bold text-slate-950">{content.caseStudy.labels.solution}: </span>
              {content.caseStudy.solution}
            </p>
          </div>
          <div className="mt-8 grid gap-3">
            {content.caseStudy.outcomes.map((outcome) => (
              <div key={outcome} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                {outcome}
              </div>
            ))}
          </div>
          <a href="#contact" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:text-cyan-600">
            {content.caseStudy.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
