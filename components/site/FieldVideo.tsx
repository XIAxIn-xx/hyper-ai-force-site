"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type Props = { file: "grass" | "stairs" | "obstacles"; label: string };

// Attach the media URL only after an explicit click.
export function FieldVideo({ file, label }: Props) {
  const [active, setActive] = useState(false);
  const poster = `/videos/field/${file}.jpg`;
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
      {active ? (
        <video controls autoPlay playsInline preload="none" poster={poster}
          src={`/videos/field/${file}.mp4`} aria-label={label}
          className="h-full w-full object-contain" />
      ) : (
        <button type="button" onClick={() => setActive(true)} aria-label={label}
          className="group relative block h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300">
          {/* Native lazy loading keeps below-the-fold posters out of the initial request. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt={label} loading="lazy" width={1280} height={720} className="h-full w-full object-contain" />
          <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-black/55 text-white"><Play className="h-6 w-6" aria-hidden="true" /></span>
          </span>
        </button>
      )}
    </div>
  );
}
