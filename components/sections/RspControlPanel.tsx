"use client";

import type { Locale } from "@/data/hyper";
import type { PatrolSnapshot } from "@/components/sections/usePatrolTimeline";

type RspControlPanelProps = {
  locale: Locale;
  snapshot: PatrolSnapshot;
};

export function RspControlPanel({ locale, snapshot }: RspControlPanelProps) {
  const isChinese = locale !== "en";
  const copy = isChinese
    ? {
        task: "园区设备巡检",
        online: "在线",
        network: "网络连接",
        progress: "任务进度",
        dispatch: "任务已下发",
        ready: "任务准备中",
        remote: "已触发远程接管"
      }
    : {
        task: "Park equipment patrol",
        online: "ONLINE",
        network: "NETWORK",
        progress: "TASK PROGRESS",
        dispatch: "TASK DISPATCHED",
        ready: "TASK READY",
        remote: "REMOTE TAKEOVER TRIGGERED"
      };

  const progress = Math.round(snapshot.routeProgress * 100);

  return (
    <aside className="rsp-control-panel absolute left-3 top-3 z-10 w-[clamp(164px,22vw,236px)] rounded-xl border border-[#4f91b1]/45 bg-[#081522]/90 p-3 text-white shadow-[0_16px_36px_rgba(0,0,0,0.28)] backdrop-blur-md sm:left-5 sm:top-5 sm:p-4">
      <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-2.5">
        <div>
          <p className="font-mono text-[11px] font-bold tracking-[0.28em] text-[#7fd8ff]">RSP</p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-slate-400">Robot Scheduling Platform</p>
        </div>
        <span className="flex items-center gap-1 text-[9px] font-semibold tracking-[0.08em] text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          {copy.online}
        </span>
      </div>

      <p className="mt-3 text-[11px] font-semibold leading-4 text-slate-100">{copy.task}</p>
      <div className="mt-2 grid grid-cols-2 gap-2 text-[9px] text-slate-400">
        <span>{isChinese ? "机器狗电量" : "ROBOT BATTERY"}</span>
        <span className="text-right text-slate-200">86%</span>
        <span>{copy.network}</span>
        <span className="text-right text-emerald-300">{isChinese ? "稳定" : "STABLE"}</span>
      </div>

      <div className="mt-3">
        <div className="flex justify-between text-[9px] uppercase tracking-[0.08em] text-slate-400">
          <span>{copy.progress}</span>
          <span className="text-[#bdefff]">{progress}%</span>
        </div>
        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full rounded-full bg-[#65d4ff] transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className={`mt-3 border-l-2 pl-2 text-[9px] font-semibold tracking-[0.08em] ${snapshot.anomaly ? "border-[#ee7753] text-[#ffad82]" : "border-[#e49a56] text-[#ffc17e]"}`}>
        {snapshot.anomaly ? copy.remote : snapshot.phase === "ready" ? copy.ready : copy.dispatch}
      </div>
    </aside>
  );
}
