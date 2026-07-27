"use client";

import { useEffect, useRef, useState } from "react";

export const PATROL_TIMELINE = {
  duration: 14,
  taskReadyEnd: 1.2,
  routeDispatchEnd: 2.4,
  patrolEnd: 7,
  exceptionEnd: 9,
  recordEnd: 11.5,
  fadeStart: 13
} as const;

export type PatrolPhase = "ready" | "dispatch" | "patrol" | "exception" | "return" | "complete";

export type PatrolSnapshot = {
  time: number;
  phase: PatrolPhase;
  activeStage: number;
  routeReveal: number;
  routeProgress: number;
  activePoint: number;
  anomaly: boolean;
  recordVisible: boolean;
  complete: boolean;
  dataFlowProgress: number;
  visualOpacity: number;
};

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const easeOut = (value: number) => 1 - (1 - value) ** 3;

export function getPatrolSnapshot(elapsed: number): PatrolSnapshot {
  const time = ((elapsed % PATROL_TIMELINE.duration) + PATROL_TIMELINE.duration) % PATROL_TIMELINE.duration;
  const { taskReadyEnd, routeDispatchEnd, patrolEnd, exceptionEnd, recordEnd, fadeStart } = PATROL_TIMELINE;

  let phase: PatrolPhase = "ready";
  let activeStage = 0;

  if (time >= taskReadyEnd && time < routeDispatchEnd) {
    phase = "dispatch";
    activeStage = 1;
  } else if (time >= routeDispatchEnd && time < 4.6) {
    phase = "patrol";
    activeStage = 2;
  } else if (time >= 4.6 && time < patrolEnd) {
    phase = "patrol";
    activeStage = 3;
  } else if (time >= patrolEnd && time < exceptionEnd) {
    phase = "exception";
    activeStage = 4;
  } else if (time >= exceptionEnd && time < recordEnd) {
    phase = "return";
    activeStage = 5;
  } else if (time >= recordEnd) {
    phase = "complete";
    activeStage = 5;
  }

  const routeReveal =
    time < taskReadyEnd
      ? 0
      : time < routeDispatchEnd
        ? easeOut((time - taskReadyEnd) / (routeDispatchEnd - taskReadyEnd))
        : 1;

  const routeProgress =
    time < routeDispatchEnd
      ? 0
      : time < patrolEnd
        ? easeOut((time - routeDispatchEnd) / (patrolEnd - routeDispatchEnd)) * 0.92
        : time < exceptionEnd
          ? 0.92 + ((time - patrolEnd) / (exceptionEnd - patrolEnd)) * 0.08
          : 1;

  const activePoint =
    time < routeDispatchEnd
      ? -1
      : Math.min(5, Math.floor(clamp((routeProgress - 0.04) / 0.92) * 6));

  const dataFlowProgress = time < exceptionEnd ? 0 : clamp((time - exceptionEnd) / (recordEnd - exceptionEnd));
  const visualOpacity = Math.min(
    time < 0.8 ? clamp(time / 0.8) : 1,
    time >= fadeStart ? clamp(PATROL_TIMELINE.duration - time) : 1
  );

  return {
    time,
    phase,
    activeStage,
    routeReveal,
    routeProgress,
    activePoint,
    anomaly: phase === "exception",
    recordVisible: time >= exceptionEnd,
    complete: time >= recordEnd,
    dataFlowProgress,
    visualOpacity
  };
}

export function usePatrolTimeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const elapsedRef = useRef<number>(PATROL_TIMELINE.recordEnd);
  const rafRef = useRef<number | null>(null);
  const [snapshot, setSnapshot] = useState(() => getPatrolSnapshot(PATROL_TIMELINE.recordEnd));
  const [isInView, setIsInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    const updatePageVisibility = () => setPageVisible(document.visibilityState === "visible");

    updateMotionPreference();
    updatePageVisibility();
    mediaQuery.addEventListener("change", updateMotionPreference);
    document.addEventListener("visibilitychange", updatePageVisibility);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
      document.removeEventListener("visibilitychange", updatePageVisibility);
    };
  }, []);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "120px 0px", threshold: 0.08 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      setSnapshot(getPatrolSnapshot(PATROL_TIMELINE.recordEnd));
      return;
    }

    if (!isInView || !pageVisible) {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      return;
    }

    let lastFrame = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(now - lastFrame, 100);
      lastFrame = now;
      elapsedRef.current = (elapsedRef.current + delta / 1000) % PATROL_TIMELINE.duration;
      setSnapshot(getPatrolSnapshot(elapsedRef.current));
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [isInView, pageVisible, reducedMotion]);

  return { sectionRef, snapshot, reducedMotion, isRunning: isInView && pageVisible && !reducedMotion };
}
