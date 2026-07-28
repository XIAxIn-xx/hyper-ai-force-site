"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { ZhText } from "@/components/ui/ZhText";

type Capability = HyperContent["capabilities"][number];

type CapabilitySystemSectionProps = {
  content: HyperContent;
};

function CapabilityMedia({ item }: { item: Capability }) {
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  const mediaImage = item.mediaSrc ? { src: item.mediaSrc, alt: item.mediaAlt } : null;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const showVideo = item.mediaType === "video" && reducedMotion === false;

  return (
    <div
      data-media-key={item.resourceKey}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#071019] shadow-[0_18px_50px_rgba(0,0,0,0.36)] ${
        item.mediaType === "image" ? "aspect-[16/9]" : "min-h-[320px] lg:min-h-[440px]"
      }`}
    >
      {item.mediaType === "image" && mediaImage ? (
        <Image
          src={mediaImage.src}
          alt={mediaImage.alt}
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover"
        />
      ) : null}

      {item.mediaType === "video" && item.poster ? (
        <Image
          src={item.poster}
          alt={item.mediaAlt}
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover"
        />
      ) : null}

      {showVideo && item.mediaSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={item.poster ?? undefined}
          aria-label={item.mediaAlt}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={item.mediaSrc} type="video/mp4" />
        </video>
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02070d]/85 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-5">
        <p className="text-xs font-medium tracking-[0.08em] text-white/75">
          <ZhText>{item.mediaNote}</ZhText>
        </p>
        {item.mediaSlots.length ? (
          <div className="flex flex-wrap justify-end gap-2">
            {item.mediaSlots.map((slot) => (
              <span key={slot} className="border border-white/20 bg-[#06131d]/75 px-2.5 py-1 text-[11px] text-white/75 backdrop-blur-sm">
                <ZhText>{slot}</ZhText>
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function CapabilitySystemSection({ content }: CapabilitySystemSectionProps) {
  const { capabilities } = content;

  return (
    <section id="technology" className="bg-[#071019] text-white">
      <div>
        {capabilities.map((item, index) => {
          const mediaLeft = item.layout === "media-left";
          const sectionBackground = index % 2 === 0 ? "bg-[#071019]" : "bg-[#0B1520]";

          return (
            <article key={item.number} className={`border-t border-white/10 ${sectionBackground}`}>
              <div className="section-shell grid gap-x-14 py-16 lg:min-h-[600px] lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-center lg:py-24">
                <header className={`order-1 lg:row-start-1 ${mediaLeft ? "lg:col-start-2" : "lg:col-start-1"}`}>
                  <p className="zh-eyebrow mt-0 text-base font-semibold text-slate-300">
                    <ZhText>{item.label}</ZhText>
                  </p>
                  <h3 className="zh-title mt-4 max-w-xl text-[clamp(1.9rem,3vw,3rem)] font-bold leading-[1.14] tracking-[-0.02em] text-slate-50">
                    <ZhText>{item.title}</ZhText>
                  </h3>
                </header>

                <div className={`order-2 mt-9 lg:row-start-1 lg:row-span-2 lg:mt-0 ${mediaLeft ? "lg:col-start-1" : "lg:col-start-2"}`}>
                  <CapabilityMedia item={item} />
                </div>

                <div className={`order-3 mt-8 lg:row-start-2 lg:mt-8 lg:self-start ${mediaLeft ? "lg:col-start-2" : "lg:col-start-1"}`}>
                  <p className="zh-copy max-w-xl text-base leading-8 text-slate-300">
                    <ZhText>{item.description}</ZhText>
                  </p>
                  <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {item.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-3 border-t border-white/10 pt-3 text-sm font-medium leading-6 text-slate-200">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-orange-300" aria-hidden="true" />
                        <ZhText>{capability}</ZhText>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
