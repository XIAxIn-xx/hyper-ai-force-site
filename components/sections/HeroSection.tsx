"use client";

import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ZhText } from "@/components/ui/ZhText";
import type { HyperContent } from "@/data/hyper";

type HeroSectionProps = {
  content: HyperContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#050B14] pt-20 text-white">
      <Image
        src="/images/generated/hyper-hero-robotics.png"
        alt="Autonomous quadruped inspection robot in an industrial facility"
        fill
        priority
        className="object-cover object-center opacity-88"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.98)_0%,rgba(5,11,20,0.82)_36%,rgba(5,11,20,0.28)_72%,rgba(5,11,20,0.55)_100%)]" />
      <div className="absolute inset-0 bg-grid-fade tech-grid opacity-45" />
      <div className="pointer-events-none absolute inset-0 opacity-55">
        <DotField
          dotRadius={1.4}
          dotSpacing={16}
          bulgeStrength={44}
          glowRadius={180}
          gradientFrom="rgba(103, 232, 249, 0.32)"
          gradientTo="rgba(59, 130, 246, 0.18)"
          glowColor="rgba(34, 211, 238, 0.32)"
        />
      </div>
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#050B14] to-transparent" />

      <div className="section-shell relative z-10 flex min-h-[690px] items-center">
        <div className="max-w-[840px] py-24">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="zh-eyebrow text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200/90"
          >
            <ZhText>{content.hero.eyebrow}</ZhText>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={
              content.lang === "en"
                ? "zh-title mt-7 max-w-[840px] text-5xl font-black leading-[1.02] tracking-normal md:text-7xl"
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
              <a href="#contact">
                {content.hero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#technology">{content.hero.secondaryCta}</a>
            </Button>
          </motion.div>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32 }}
            className="mx-auto mt-12 grid max-w-[680px] gap-4 sm:grid-cols-2"
          >
            {content.hero.stats.map((stat) => (
              <div key={stat.label} className="min-h-[132px] rounded-lg border border-white/12 bg-white/[0.06] p-5 backdrop-blur">
                <div className="zh-card-title flex items-center gap-2 text-2xl font-black text-cyan-200">
                  <ShieldCheck className="h-5 w-5" />
                  <ZhText>{stat.value}</ZhText>
                </div>
                <p className="zh-copy mt-2 text-sm leading-6 text-slate-400"><ZhText>{stat.label}</ZhText></p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type DotFieldProps = {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
};

const TWO_PI = Math.PI * 2;

const DotField = memo(function DotField({
  dotRadius = 1.5,
  dotSpacing = 14,
  cursorRadius = 500,
  cursorForce = 0.1,
  bulgeOnly = true,
  bulgeStrength = 67,
  glowRadius = 160,
  sparkle = false,
  waveAmplitude = 0,
  gradientFrom = "rgba(168, 85, 247, 0.35)",
  gradientTo = "rgba(180, 151, 207, 0.25)",
  glowColor = "#120F17"
}: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glowRef = useRef<SVGCircleElement | null>(null);
  const dotsRef = useRef<
    Array<{ ax: number; ay: number; sx: number; sy: number; vx: number; vy: number; x: number; y: number }>
  >([]);
  const mouseRef = useRef({ x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 });
  const rafRef = useRef<number | null>(null);
  const sizeRef = useRef({ w: 0, h: 0, offsetX: 0, offsetY: 0 });
  const glowOpacity = useRef(0);
  const engagement = useRef(0);
  const propsRef = useRef({
    dotRadius,
    dotSpacing,
    cursorRadius,
    cursorForce,
    bulgeOnly,
    bulgeStrength,
    sparkle,
    waveAmplitude,
    gradientFrom,
    gradientTo
  });
  const rebuildRef = useRef<(() => void) | null>(null);
  const glowIdRef = useRef(`dot-field-glow-${Math.random().toString(36).slice(2, 9)}`);

  propsRef.current = {
    dotRadius,
    dotSpacing,
    cursorRadius,
    cursorForce,
    bulgeOnly,
    bulgeStrength,
    sparkle,
    waveAmplitude,
    gradientFrom,
    gradientTo
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const glowEl = glowRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const activeCanvas = canvas;
    const activeCtx = ctx;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let resizeTimer: ReturnType<typeof setTimeout>;

    function buildDots(w: number, h: number) {
      const p = propsRef.current;
      const step = p.dotRadius + p.dotSpacing;
      const cols = Math.floor(w / step);
      const rows = Math.floor(h / step);
      const padX = (w % step) / 2;
      const padY = (h % step) / 2;
      const dots = new Array(rows * cols);
      let idx = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          dots[idx++] = { ax, ay, sx: ax, sy: ay, vx: 0, vy: 0, x: ax, y: ay };
        }
      }

      dotsRef.current = dots;
    }

    function doResize() {
      const rect = activeCanvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      const w = rect.width;
      const h = rect.height;

      activeCanvas.width = w * dpr;
      activeCanvas.height = h * dpr;
      activeCanvas.style.width = `${w}px`;
      activeCanvas.style.height = `${h}px`;
      activeCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = {
        w,
        h,
        offsetX: rect.left + window.scrollX,
        offsetY: rect.top + window.scrollY
      };

      buildDots(w, h);
    }

    function resize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doResize, 100);
    }

    function onMouseMove(e: MouseEvent) {
      const s = sizeRef.current;
      mouseRef.current.x = e.pageX - s.offsetX;
      mouseRef.current.y = e.pageY - s.offsetY;
    }

    function updateMouseSpeed() {
      const m = mouseRef.current;
      const dx = m.prevX - m.x;
      const dy = m.prevY - m.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      m.speed += (dist - m.speed) * 0.5;
      if (m.speed < 0.001) m.speed = 0;
      m.prevX = m.x;
      m.prevY = m.y;
    }

    const speedInterval = setInterval(updateMouseSpeed, 20);
    let frameCount = 0;

    function tick() {
      frameCount++;
      const dots = dotsRef.current;
      const m = mouseRef.current;
      const { w, h } = sizeRef.current;
      const p = propsRef.current;
      const t = frameCount * 0.02;
      const targetEngagement = Math.min(m.speed / 5, 1);

      engagement.current += (targetEngagement - engagement.current) * 0.06;
      if (engagement.current < 0.001) engagement.current = 0;

      glowOpacity.current += (engagement.current - glowOpacity.current) * 0.08;

      if (glowEl) {
        glowEl.setAttribute("cx", String(m.x));
        glowEl.setAttribute("cy", String(m.y));
        glowEl.style.opacity = String(glowOpacity.current);
      }

      activeCtx.clearRect(0, 0, w, h);

      const grad = activeCtx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, p.gradientFrom);
      grad.addColorStop(1, p.gradientTo);
      activeCtx.fillStyle = grad;
      activeCtx.beginPath();

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const dx = m.x - d.ax;
        const dy = m.y - d.ay;
        const distSq = dx * dx + dy * dy;

        if (distSq < p.cursorRadius * p.cursorRadius && engagement.current > 0.01) {
          const dist = Math.sqrt(distSq);
          if (p.bulgeOnly) {
            const pull = (1 - dist / p.cursorRadius) ** 2 * p.bulgeStrength * engagement.current;
            const angle = Math.atan2(dy, dx);
            d.sx += (d.ax - Math.cos(angle) * pull - d.sx) * 0.15;
            d.sy += (d.ay - Math.sin(angle) * pull - d.sy) * 0.15;
          } else {
            const angle = Math.atan2(dy, dx);
            const move = (500 / Math.max(dist, 1)) * (m.speed * p.cursorForce);
            d.vx += Math.cos(angle) * -move;
            d.vy += Math.sin(angle) * -move;
          }
        } else if (p.bulgeOnly) {
          d.sx += (d.ax - d.sx) * 0.1;
          d.sy += (d.ay - d.sy) * 0.1;
        }

        if (!p.bulgeOnly) {
          d.vx *= 0.9;
          d.vy *= 0.9;
          d.x = d.ax + d.vx;
          d.y = d.ay + d.vy;
          d.sx += (d.x - d.sx) * 0.1;
          d.sy += (d.y - d.sy) * 0.1;
        }

        const drawX = d.sx + (p.waveAmplitude > 0 ? Math.cos(d.ay * 0.03 + t * 0.7) * p.waveAmplitude * 0.5 : 0);
        const drawY = d.sy + (p.waveAmplitude > 0 ? Math.sin(d.ax * 0.03 + t) * p.waveAmplitude : 0);
        const rad = p.sparkle && ((((i * 2654435761) ^ (frameCount >> 3)) >>> 0) % 100) < 3 ? p.dotRadius * 0.9 : p.dotRadius / 2;

        activeCtx.moveTo(drawX + rad, drawY);
        activeCtx.arc(drawX, drawY, rad, 0, TWO_PI);
      }

      activeCtx.fill();
      rafRef.current = requestAnimationFrame(tick);
    }

    doResize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    rebuildRef.current = () => {
      const { w, h } = sizeRef.current;
      if (w > 0 && h > 0) buildDots(w, h);
    };

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearInterval(speedInterval);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    rebuildRef.current?.();
  }, [dotRadius, dotSpacing]);

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id={glowIdRef.current}>
            <stop offset="0%" stopColor={glowColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle ref={glowRef} cx="-9999" cy="-9999" r={glowRadius} fill={`url(#${glowIdRef.current})`} style={{ opacity: 0 }} />
      </svg>
    </div>
  );
});
