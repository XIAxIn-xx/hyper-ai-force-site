"use client";

import { useEffect, useRef, useState } from "react";

export const PATROL_TIMELINE = {
  duration: 26,
  taskReadyEnd: 5,
  routeDispatchEnd: 8,
  sensingStart: 14,
  patrolEnd: 17,
  exceptionEnd: 21,
  recordEnd: 24,
  fadeStart: 25
} as const;

export const PATROL_STAGE_TIMES = [
  0,
  PATROL_TIMELINE.taskReadyEnd,
  PATROL_TIMELINE.routeDispatchEnd,
  PATROL_TIMELINE.sensingStart,
  PATROL_TIMELINE.patrolEnd,
  PATROL_TIMELINE.exceptionEnd
] as const;

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
  const { taskReadyEnd, routeDispatchEnd, sensingStart, patrolEnd, exceptionEnd, recordEnd, fadeStart } = PATROL_TIMELINE;

  let phase: PatrolPhase = "ready";
  let activeStage = 0;

  if (time >= taskReadyEnd && time < routeDispatchEnd) {
    phase = "dispatch";
    activeStage = 1;
  } else if (time >= routeDispatchEnd && time < sensingStart) {
    phase = "patrol";
    activeStage = 2;
  } else if (time >= sensingStart && time < patrolEnd) {
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
    time < taskReadyEnd ? easeOut(time / taskReadyEnd) : 1;

  const routeProgress =
    time < routeDispatchEnd
      ? 0
      : time < sensingStart
        ? easeOut((time - routeDispatchEnd) / (sensingStart - routeDispatchEnd)) * 0.56
        : time < patrolEnd
          ? 0.56 + easeOut((time - sensingStart) / (patrolEnd - sensingStart)) * 0.2
          : time < exceptionEnd
            ? 0.76
            : time < recordEnd
              ? 0.76 + easeOut((time - exceptionEnd) / (recordEnd - exceptionEnd)) * 0.24
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

  const seekToStage = (stage: number) => {
    const stageIndex = Math.min(Math.max(Math.floor(stage), 0), PATROL_STAGE_TIMES.length - 1);
    const targetTime = PATROL_STAGE_TIMES[stageIndex];
    elapsedRef.current = targetTime;
    setSnapshot(getPatrolSnapshot(targetTime));
  };

  return {
    sectionRef,
    snapshot,
    reducedMotion,
    isRunning: isInView && pageVisible && !reducedMotion,
    seekToStage
  };
}
