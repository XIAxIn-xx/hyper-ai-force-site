"use client";

import { useEffect, useRef, useState } from "react";

// Do not attach a video URL until it is near the viewport. Keep the poster visible
// until the first frame is decoded, and pause work in hidden tabs/offscreen.
export function BackgroundVideo({ src, poster, className, label }: {
  src: string; poster?: string; className?: string; label?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    let nearby = false;
    let visible = false;
    const sync = () => {
      if (nearby && !motion.matches && !connection?.saveData) setLoaded(true);
      if (visible && !document.hidden && !motion.matches && !connection?.saveData && video.currentSrc) {
        void video.play().catch(() => {});
      } else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      nearby = entry.isIntersecting;
      sync();
    }, { rootMargin: "200px" });
    const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(video);
    visibility.observe(video);
    video.addEventListener("loadedmetadata", sync);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    return () => {
      observer.disconnect(); visibility.disconnect(); video.pause();
      video.removeEventListener("loadedmetadata", sync);
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, [src]);
  return <video ref={ref} src={loaded && !failed ? src : undefined} poster={poster}
    muted loop playsInline preload={loaded ? "metadata" : "none"} aria-hidden={label ? undefined : true} aria-label={label}
    className={className} style={{ opacity: ready && !failed ? 1 : 0 }}
    onLoadedData={() => setReady(true)} onError={() => setFailed(true)} />;
}
