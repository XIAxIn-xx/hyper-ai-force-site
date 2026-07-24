"use client";

import Image from "next/image";
import { useState } from "react";

import type { HyperContent } from "@/data/hyper";
import { getIcon } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type ApplicationsSectionProps = {
  content: HyperContent;
};

export function ApplicationsSection({ content }: ApplicationsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="applications" className="bg-[#050B14] py-24 text-white">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={content.applications.eyebrow}
            title={content.applications.title}
            align="center"
            light
            className="max-w-5xl"
          />
        </Reveal>
        <div
          className="mt-14 flex flex-col gap-3 md:h-[460px] md:flex-row"
          role="tablist"
          aria-label={content.applications.eyebrow}
        >
          {content.applications.items.map((item, index) => {
            const Icon = getIcon(item.icon);
            const isActive = activeIndex === index;

            return (
              <Reveal
                key={item.label}
                delay={index * 0.04}
                className={`min-w-0 transition-[flex] duration-500 ease-in-out ${isActive ? "md:flex-[5]" : "md:flex-[1]"}`}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex h-full min-h-[128px] w-full overflow-hidden rounded-2xl border text-left outline-none transition-[border-color,box-shadow] duration-500 ${
                    isActive
                      ? "border-cyan-200/55 shadow-[0_18px_50px_rgba(0,0,0,0.28)] focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                      : "border-white/12 focus-visible:border-cyan-300/60 focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 60vw"
                    className={`object-cover transition duration-700 ease-out ${isActive ? "scale-105 brightness-[0.72]" : "brightness-[0.42] group-hover:scale-105 group-hover:brightness-[0.56]"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02070d] via-[#02070d]/35 to-[#02070d]/5" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                    <div className="flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#06131d]/70 text-cyan-200 backdrop-blur-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className={`applications-card-title zh-title text-white transition-[font-size] duration-500 ${isActive ? "text-2xl font-semibold md:text-3xl" : "text-xl font-semibold"}`}>
                          <ZhText>{item.label}</ZhText>
                        </h3>
                        <div className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${isActive ? "mt-3 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}>
                          <div className="min-h-0 overflow-hidden">
                            <p className="zh-copy max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                              <ZhText>{item.description}</ZhText>
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.keywords.map((keyword) => (
                                <span key={keyword} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur-sm">
                                  <ZhText>{keyword}</ZhText>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className={`shrink-0 text-xs font-medium tracking-[0.2em] text-white/50 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
