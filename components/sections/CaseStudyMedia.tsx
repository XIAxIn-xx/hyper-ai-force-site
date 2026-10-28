"use client";

import Image from "next/image";
import { imageSrc, videos } from "@/lib/media";
import { BackgroundVideo } from "@/components/site/BackgroundVideo";

const posterSrc = imageSrc("/images/generated/glp-robot-inspection-poster.jpg");
export function CaseStudyMedia({ alt, className = "" }: { alt: string; className?: string }) {
  return <div className={`absolute overflow-hidden bg-[var(--bg-dark)] ${className}`}>
    <Image src={posterSrc} alt={alt} fill unoptimized sizes="100vw"
      className="object-cover object-[42%_center] brightness-110 contrast-105 md:object-center" />
    <BackgroundVideo src={videos.caseStudy} poster={posterSrc}
      className="absolute inset-0 h-full w-full object-cover object-[42%_center] brightness-110 contrast-105 md:object-center" />
  </div>;
}
