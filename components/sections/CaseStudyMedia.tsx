"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CaseStudyMediaProps = {
  alt: string;
  className?: string;
};

const posterSrc = "/images/generated/glp-robot-inspection-poster.jpg";

export function CaseStudyMedia({ alt, className = "" }: CaseStudyMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion !== false || videoFailed) return;

    void video.play().catch(() => setVideoFailed(true));
  }, [reducedMotion, videoFailed]);

  return (
    <div className={`absolute overflow-hidden bg-[#071019] ${className}`}>
      <Image
        src={posterSrc}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover object-[42%_center] brightness-110 contrast-105 md:object-center"
        priority={false}
      />
      {reducedMotion === false && !videoFailed ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-[42%_center] brightness-110 contrast-105 md:object-center"
        >
          <source src="/videos/glp-robot-inspection.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
