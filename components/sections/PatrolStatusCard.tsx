"use client";

import type { Locale } from "@/data/hyper";
import type { PatrolSnapshot } from "@/components/sections/usePatrolTimeline";

type PatrolStatusCardProps = {
  locale: Locale;
  snapshot: PatrolSnapshot;
};

export function PatrolStatusCard({ locale, snapshot }: PatrolStatusCardProps) {
  const isChinese = locale !== "en";
  const copy = isChinese
    ? {
        eyebrow: "巡检记录",
        title: "巡检任务已完成",
        points: "巡检点位",
        anomaly: "异常事件",
        archived: "数据已归档",
        remote: "远程接管已完成"
      }
    : {
        eyebrow: "INSPECTION RECORD",
        title: "Inspection complete",
        points: "PATROL POINTS",
        anomaly: "ANOMALIES",
        archived: "DATA ARCHIVED",
        remote: "REMOTE TAKEOVER COMPLETE"
      };

  return (
    <aside
      className={`rsp-status-card absolute right-3 top-3 z-10 w-[clamp(144px,20vw,218px)] rounded-xl border border-white/15 bg-[#0a1925]/90 p-3 text-white shadow-[0_16px_36px_rgba(0,0,0,0.28)] backdrop-blur-md transition-opacity duration-500 sm:right-5 sm:top-5 sm:p-4 ${snapshot.recordVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      aria-hidden={!snapshot.recordVisible}
    >
      <p className="font-mono text-[9px] tracking-[0.2em] text-[#8fdcff]">{copy.eyebrow}</p>
      <p className="mt-2 text-[12px] font-semibold leading-4 text-slate-100">{copy.title}</p>
      <div className="mt-3 space-y-2 text-[9px] text-slate-400">
        <div className="flex items-center justify-between"><span>{copy.points}</span><strong className="text-slate-100">6/6</strong></div>
        <div className="flex items-center justify-between"><span>{copy.anomaly}</span><strong className="text-[#ff9a72]">1</strong></div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 border-t border-white/10 pt-2 text-[9px] font-semibold text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
        {snapshot.complete ? copy.archived : copy.remote}
      </div>
    </aside>
  );
}
