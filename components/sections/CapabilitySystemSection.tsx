"use client";

import Image from "next/image";
import { ArrowLeftRight, Check, CloudCog, RadioTower } from "lucide-react";
import { useEffect, useState } from "react";

import type { HyperContent } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ZhText } from "@/components/ui/ZhText";

type Capability = HyperContent["capabilities"][number];

type CapabilitySystemSectionProps = {
  content: HyperContent;
};

function CapabilityMedia({ item }: { item: Capability }) {
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  const mediaImages =
    "mediaImages" in item
      ? item.mediaImages
      : item.mediaSrc
        ? [{ src: item.mediaSrc, alt: item.mediaAlt }]
        : [];
  const hasCustomMediaLayout = "mediaImages" in item || "mediaFit" in item;
  const mediaFit = "mediaFit" in item && item.mediaFit === "contain" ? "object-contain" : "object-cover";

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
      className="relative min-h-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-[#071019] shadow-[0_18px_50px_rgba(15,23,42,0.1)] lg:min-h-[440px]"
    >
      {item.mediaType === "image" && mediaImages.length ? (
        hasCustomMediaLayout ? (
          <div className={`absolute inset-0 grid ${mediaImages.length > 1 ? "grid-cols-2 gap-3 p-3" : "grid-cols-1"}`}>
            {mediaImages.map((image) => (
              <div key={image.src} className="relative min-h-0 overflow-hidden rounded-xl bg-white">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className={mediaFit}
                />
              </div>
            ))}
          </div>
        ) : (
          <Image
            src={mediaImages[0]!.src}
            alt={mediaImages[0]!.alt}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        )
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

      {item.mediaType === "placeholder" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#071019_0%,#102231_100%)] p-6">
          <div className="w-full max-w-sm border border-dashed border-cyan-300/40 px-6 py-10 text-center">
            {item.resourceKey === "media.robox" ? (
              <RadioTower className="mx-auto h-9 w-9 text-cyan-200" aria-hidden="true" />
            ) : (
              <CloudCog className="mx-auto h-9 w-9 text-cyan-200" aria-hidden="true" />
            )}
            <p className="zh-title mt-5 text-lg font-semibold text-white">
              <ZhText>{item.mediaNote}</ZhText>
            </p>
            <p className="mt-3 break-words text-xs leading-6 text-slate-400">
              <span className="font-mono text-cyan-200/80">{item.resourceKey}</span>
              <br />
              <ZhText>{item.mediaPlaceholderText}</ZhText>
            </p>
          </div>
        </div>
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

function CapabilityConnection({ item }: { item: Capability }) {
  if (!item.connection) return null;

  return (
    <div className="mt-9 flex flex-wrap items-center gap-3 border-y border-slate-200 py-4 text-sm font-medium text-slate-700">
      <span><ZhText>{item.connection.start}</ZhText></span>
      <ArrowLeftRight className="h-4 w-4 text-cyan-700" aria-hidden="true" />
      <span className="border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-slate-950"><ZhText>{item.connection.center}</ZhText></span>
      <ArrowLeftRight className="h-4 w-4 text-cyan-700" aria-hidden="true" />
      <span><ZhText>{item.connection.end}</ZhText></span>
    </div>
  );
}

export function CapabilitySystemSection({ content }: CapabilitySystemSectionProps) {
  const { capabilityIntro, capabilities } = content;

  return (
    <section id="solutions" className="bg-white">
      <div className="section-shell py-24">
        <Reveal>
          <SectionHeading
            eyebrow={capabilityIntro.eyebrow}
            title={capabilityIntro.title}
            copy={capabilityIntro.copy}
            className="max-w-4xl"
          />
        </Reveal>
      </div>

      <div>
        {capabilities.map((item, index) => {
          const mediaLeft = item.layout === "media-left";
          const sectionBackground = index % 2 === 0 ? "bg-white" : "bg-[#F5F7FA]";

          return (
            <article key={item.number} className={`border-t border-slate-200 ${sectionBackground}`}>
              <div className="section-shell grid gap-x-14 py-16 lg:min-h-[600px] lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-center lg:py-24">
                <header className={`order-1 lg:row-start-1 ${mediaLeft ? "lg:col-start-2" : "lg:col-start-1"}`}>
                  <p className="text-sm font-semibold tracking-[0.24em] text-cyan-700">{item.number}</p>
                  <p className="zh-eyebrow mt-4 text-base font-semibold text-slate-600">
                    <ZhText>{item.label}</ZhText>
                  </p>
                  <h3 className="zh-title mt-4 max-w-xl text-[clamp(1.9rem,3vw,3rem)] font-bold leading-[1.14] tracking-[-0.02em] text-slate-950">
                    <ZhText>{item.title}</ZhText>
                  </h3>
                </header>

                <div className={`order-2 mt-9 lg:row-start-1 lg:row-span-2 lg:mt-0 ${mediaLeft ? "lg:col-start-1" : "lg:col-start-2"}`}>
                  <CapabilityMedia item={item} />
                </div>

                <div className={`order-3 mt-8 lg:row-start-2 lg:mt-8 ${mediaLeft ? "lg:col-start-2" : "lg:col-start-1"}`}>
                  <p className="zh-copy max-w-xl text-base leading-8 text-slate-600">
                    <ZhText>{item.description}</ZhText>
                  </p>
                  <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {item.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-3 border-t border-slate-200 pt-3 text-sm font-medium leading-6 text-slate-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                        <ZhText>{capability}</ZhText>
                      </li>
                    ))}
                  </ul>
                  <CapabilityConnection item={item} />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
