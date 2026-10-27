"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ZhText } from "@/components/ui/ZhText";
import { localizedPath } from "@/lib/site";
import type { HyperContent } from "@/data/hyper";

type HeroSectionProps = {
  content: HyperContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playback, setPlayback] = useState<"auto" | "play" | "pause">("auto");
  const [playing, setPlaying] = useState(false);
  const playbackLabel = content.lang === "en"
    ? playing ? "Pause background video" : "Play background video"
    : content.lang === "zh-CN"
      ? playing ? "暂停背景视频" : "播放背景视频"
      : playing ? "暫停背景影片" : "播放背景影片";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    const sync = () => {
      if (!inView || document.hidden || playback === "pause" || (playback === "auto" && reducedMotion.matches)) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    }, { threshold: 0.05 });
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    reducedMotion.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reducedMotion.removeEventListener("change", sync);
      video.pause();
    };
  }, [playback]);

  return (
    <section className="relative min-h-[960px] overflow-hidden bg-[#050B14] pt-20 text-white md:min-h-[1040px]">
      <video
        ref={videoRef}
        src="/videos/haiforce-hero.mp4"
        poster="/videos/haiforce-hero-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.98)_0%,rgba(5,11,20,0.82)_36%,rgba(5,11,20,0.28)_72%,rgba(5,11,20,0.55)_100%)]" />
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#050B14] to-transparent" />

      <div className="section-shell relative z-10 flex min-h-[880px] items-center md:min-h-[960px]">
        <div className="max-w-[840px] py-24">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="zh-eyebrow text-lg font-semibold uppercase tracking-[0.16em] text-orange-200/90 md:text-xl"
          >
            <ZhText>{content.hero.eyebrow}</ZhText>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={
              content.lang === "en"
                ? "zh-title relative mt-7 max-w-[840px] text-5xl font-black leading-[1.02] tracking-normal md:-left-5 md:text-7xl"
                : "zh-title zh-hero-title mt-7 max-w-[700px]"
            }
          >
            {content.hero.title.split("\n").map((line) => (
              <span key={line} className="zh-title-line">
                <ZhText>{line}</ZhText>
              </span>
            ))}
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="zh-copy zh-hero-copy mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            <ZhText>{content.hero.subtitle}</ZhText>
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <a href={localizedPath(content.lang === "en" ? "en" : content.lang === "zh-CN" ? "zh-cn" : "zh-hk", "contact")} data-analytics-event="inquiry_click">
                {content.hero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={localizedPath(content.lang === "en" ? "en" : content.lang === "zh-CN" ? "zh-cn" : "zh-hk", "technology")}>{content.hero.secondaryCta}</a>
            </Button>
          </motion.div>
        </div>
      </div>
      <button
        type="button"
        aria-label={playbackLabel}
        onClick={() => setPlayback(videoRef.current?.paused ? "play" : "pause")}
        className="absolute bottom-6 right-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#050B14]/70 text-white hover:border-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300 md:right-8"
      >
        {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
      </button>
    </section>
  );
}
