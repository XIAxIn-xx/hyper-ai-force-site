"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

// Load only on request. Always expose playback controls, including save-data users.
export function BackgroundVideo({ src, poster, className, label = "GLP" }: {
  src: string; poster?: string; className?: string; label?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const pause = () => { if (document.hidden) video.pause(); };
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) video.pause(); });
    observer.observe(video);
    document.addEventListener("visibilitychange", pause);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", pause); };
  }, []);
  return <>
    <video ref={ref} src={active ? src : undefined} poster={poster}
      muted playsInline controls={active} autoPlay={active} preload="none" aria-label={label}
      className={className}
      onPlay={(event) => {
        setFailed(false);
        document.querySelectorAll("video").forEach(video => { if (video !== event.currentTarget) video.pause(); });
      }} onError={() => { setFailed(true); setActive(false); }} />
    {!active && <button type="button" aria-label={`${label} · Play`}
      onClick={() => { setFailed(false); setActive(true); }}
      className="absolute right-5 top-5 z-30 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/60 bg-black/70 px-5 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300">
      <Play size={20} aria-hidden="true" /><span>{failed ? "Retry / 重试" : "Play / 播放"}</span>
    </button>}
  </>;
}
