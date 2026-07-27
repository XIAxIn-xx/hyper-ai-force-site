"use client";

import { ArrowRight } from "lucide-react";

import type { HyperContent, Locale } from "@/data/hyper";
import { getIcon } from "@/data/hyper";
import { Reveal } from "@/components/sections/Reveal";
import { PatrolMap } from "@/components/sections/PatrolMap";
import { PatrolStatusCard } from "@/components/sections/PatrolStatusCard";
import { RspControlPanel } from "@/components/sections/RspControlPanel";
import { usePatrolTimeline } from "@/components/sections/usePatrolTimeline";
import { ZhText } from "@/components/ui/ZhText";

type RspPatrolClosedLoopProps = {
  locale: Locale;
  steps: HyperContent["overview"]["steps"];
};

export function RspPatrolClosedLoop({ locale, steps }: RspPatrolClosedLoopProps) {
  const { sectionRef, snapshot, reducedMotion, isRunning } = usePatrolTimeline();
  const isChinese = locale !== "en";
  const phaseCopy = isChinese
    ? {
        ready: "任务准备中",
        dispatch: "RSP 正在下发任务",
        patrol: "机器狗自主巡检中",
        exception: "发现异常，远程接管已触发",
        return: "巡检数据正在回传",
        complete: "巡检闭环已完成"
      }
    : {
        ready: "Task preparation",
        dispatch: "RSP dispatching patrol task",
        patrol: "Robot dog performing autonomous patrol",
        exception: "Exception found, remote takeover triggered",
        return: "Inspection data returning to RSP",
        complete: "Inspection loop complete"
      };

  return (
    <div ref={sectionRef} className="mt-14" data-patrol-running={isRunning}>
      <div
        className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#06111b] shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
        aria-label={isChinese ? "RSP 平台控制机器狗自主巡检闭环动画" : "RSP platform robot dog autonomous inspection closed-loop animation"}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(33,94,119,0.16),transparent_55%)]" />
        <div className="relative aspect-[1.56] min-h-[340px] w-full sm:aspect-[1.95] sm:min-h-[390px] lg:aspect-[2.28] lg:min-h-[470px]">
          <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: snapshot.visualOpacity }}>
            <PatrolMap locale={locale} snapshot={snapshot} />
          </div>
          <RspControlPanel locale={locale} snapshot={snapshot} />
          <PatrolStatusCard locale={locale} snapshot={snapshot} />
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-[#06111b]/80 px-2.5 py-1 text-[9px] tracking-[0.08em] text-slate-400 backdrop-blur-md sm:bottom-5 sm:left-5">
            <span className={`h-1.5 w-1.5 rounded-full ${snapshot.anomaly ? "bg-[#ef7654]" : snapshot.complete ? "bg-emerald-300" : "bg-[#72d6ff]"}`} />
            {snapshot.anomaly ? (isChinese ? "异常事件" : "EXCEPTION EVENT") : snapshot.complete ? (isChinese ? "闭环完成" : "LOOP COMPLETE") : "RSP / LIVE DIGITAL TWIN"}
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {phaseCopy[snapshot.phase]}
      </p>

      <Reveal delay={0.08}>
        <ol className="mt-12 flex flex-col md:flex-row md:items-start">
          {steps.map((step, index) => {
            const Icon = getIcon(step.icon);
            const isLast = index === steps.length - 1;
            const isCurrent = index === snapshot.activeStage;
            const isComplete = index < snapshot.activeStage || snapshot.complete;

            return (
              <li key={step.label} className="relative flex min-w-0 flex-1 md:items-start" data-patrol-step={index} data-patrol-state={isCurrent ? "current" : isComplete ? "complete" : "pending"}>
                {!isLast ? (
                  <span aria-hidden="true" className={`absolute bottom-[-22px] left-5 top-12 w-px md:bottom-auto md:left-auto md:right-[-16px] md:top-7 md:h-px md:w-8 ${isComplete ? "bg-orange-300/60" : "bg-white/15"}`} />
                ) : null}
                <div className="flex min-w-0 gap-4 md:block md:w-full md:text-center">
                  <span className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border bg-white/[0.06] backdrop-blur-md transition-all duration-500 md:mx-auto ${isCurrent ? "border-orange-200 bg-orange-300/15 text-orange-100 shadow-[0_0_34px_rgba(249,115,22,0.3)]" : isComplete ? "border-orange-300/55 text-orange-200 shadow-[0_0_26px_rgba(249,115,22,0.14)]" : "border-orange-300/25 text-orange-200/75"}`}>
                    <Icon className={`h-6 w-6 transition-transform duration-500 ${isCurrent ? "scale-110" : ""}`} aria-hidden="true" />
                  </span>
                  <p className={`zh-copy self-center pb-6 text-base font-semibold leading-7 transition-colors duration-500 md:mt-5 md:px-2 md:pb-0 ${isCurrent ? "text-white" : isComplete ? "text-slate-200" : "text-slate-100"}`}>
                    <ZhText>{step.label}</ZhText>
                  </p>
                </div>
                {!isLast ? <ArrowRight aria-hidden="true" className={`absolute bottom-[-29px] left-[13px] h-4 w-4 transition-colors duration-500 md:bottom-auto md:left-auto md:right-[-5px] md:top-[21px] ${isComplete ? "text-orange-300/80" : "text-orange-300/45"}`} /> : null}
              </li>
            );
          })}
        </ol>
      </Reveal>

      {reducedMotion ? <p className="mt-4 text-center text-xs text-slate-400">{isChinese ? "已启用减少动态效果，展示完整闭环状态。" : "Reduced motion enabled; complete loop state shown."}</p> : null}
    </div>
  );
}
