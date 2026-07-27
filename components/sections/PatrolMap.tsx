"use client";

import type { Locale } from "@/data/hyper";
import type { PatrolSnapshot } from "@/components/sections/usePatrolTimeline";

type Point = { x: number; y: number };

export const ROUTE_POINTS: Point[] = [
  { x: 110, y: 430 },
  { x: 110, y: 350 },
  { x: 260, y: 350 },
  { x: 260, y: 210 },
  { x: 440, y: 210 },
  { x: 440, y: 330 },
  { x: 610, y: 330 },
  { x: 610, y: 155 },
  { x: 820, y: 155 },
  { x: 820, y: 315 },
  { x: 1030, y: 315 }
];

export const CHECKPOINTS = [
  { ...ROUTE_POINTS[0], label: "P1", kind: "vision" },
  { ...ROUTE_POINTS[2], label: "P2", kind: "thermal" },
  { ...ROUTE_POINTS[3], label: "P3", kind: "vision" },
  { ...ROUTE_POINTS[5], label: "P4", kind: "radar" },
  { ...ROUTE_POINTS[7], label: "P5", kind: "thermal" },
  { ...ROUTE_POINTS[9], label: "P6", kind: "vision" }
] as const;

const SEGMENTS = ROUTE_POINTS.slice(1).map((point, index) => {
  const start = ROUTE_POINTS[index];
  return { start, point, length: Math.hypot(point.x - start.x, point.y - start.y) };
});
const TOTAL_LENGTH = SEGMENTS.reduce((total, segment) => total + segment.length, 0);
const ROUTE_PATH = `M ${ROUTE_POINTS.map(({ x, y }) => `${x} ${y}`).join(" L ")}`;

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

export function getRoutePoint(progress: number): Point {
  let distance = clamp(progress) * TOTAL_LENGTH;

  for (const segment of SEGMENTS) {
    if (distance <= segment.length) {
      const ratio = segment.length === 0 ? 0 : distance / segment.length;
      return {
        x: segment.start.x + (segment.point.x - segment.start.x) * ratio,
        y: segment.start.y + (segment.point.y - segment.start.y) * ratio
      };
    }
    distance -= segment.length;
  }

  return ROUTE_POINTS[ROUTE_POINTS.length - 1];
}

function getRouteAngle(progress: number) {
  const point = getRoutePoint(progress);
  const next = getRoutePoint(Math.min(progress + 0.01, 1));
  return (Math.atan2(next.y - point.y, next.x - point.x) * 180) / Math.PI;
}

function getConnectorPoint(progress: number) {
  const start = { x: 160, y: 78 };
  const end = getRoutePoint(0.76);
  const eased = clamp(progress);
  return {
    x: start.x + (end.x - start.x) * eased,
    y: start.y + (end.y - start.y) * eased + Math.sin(eased * Math.PI) * 30
  };
}

type PatrolMapProps = {
  locale: Locale;
  snapshot: PatrolSnapshot;
};

export function PatrolMap({ locale, snapshot }: PatrolMapProps) {
  const isChinese = locale !== "en";
  const dog = getRoutePoint(snapshot.routeProgress);
  const connectorDot = getConnectorPoint(snapshot.dataFlowProgress);
  const currentPoint = snapshot.activePoint >= 0 ? CHECKPOINTS[snapshot.activePoint] : null;

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 520"
      preserveAspectRatio="none"
      role="img"
      aria-label={isChinese ? "物流园区数字孪生巡检地图" : "Digital twin inspection map of a logistics park"}
    >
      <defs>
        <pattern id="rsp-map-grid" width="42" height="42" patternUnits="userSpaceOnUse">
          <path d="M 42 0 L 0 0 0 42" fill="none" stroke="rgba(87,132,164,0.13)" strokeWidth="1" />
        </pattern>
        <linearGradient id="rsp-map-glow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#183246" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0d1d2c" stopOpacity="0.45" />
        </linearGradient>
        <filter id="rsp-soft-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1200" height="520" fill="#07131e" />
      <rect width="1200" height="520" fill="url(#rsp-map-grid)" />

      <g fill="none" stroke="#43667b" strokeOpacity="0.28" strokeWidth="2">
        <path d="M 36 78 H 1140" />
        <path d="M 36 470 H 1140" />
        <path d="M 74 34 V 488" />
        <path d="M 1124 34 V 488" />
        <path d="M 320 64 V 462" strokeDasharray="7 10" />
        <path d="M 950 64 V 462" strokeDasharray="7 10" />
      </g>

      <g className="rsp-map-buildings" fill="url(#rsp-map-glow)" stroke="#3b6680" strokeOpacity="0.64" strokeWidth="2">
        <path d="M 180 104 H 445 L 470 130 V 178 H 180 Z" />
        <path d="M 500 90 H 742 V 178 H 500 Z" />
        <path d="M 780 94 H 1015 V 190 H 780 Z" />
        <path d="M 165 248 H 360 V 452 H 165 Z" />
        <path d="M 400 390 H 640 V 472 H 400 Z" />
        <path d="M 675 250 H 1000 V 445 H 675 Z" />
      </g>

      <g className="rsp-map-building-lines" fill="none" stroke="#6d9bb4" strokeOpacity="0.34" strokeWidth="1.5">
        <path d="M 206 122 H 420 M 206 144 H 420 M 206 166 H 420" />
        <path d="M 530 110 H 712 M 530 135 H 712 M 530 160 H 712" />
        <path d="M 812 116 H 984 M 812 143 H 984 M 812 170 H 984" />
        <path d="M 192 274 H 334 M 192 300 H 334 M 192 326 H 334 M 192 352 H 334 M 192 378 H 334 M 192 404 H 334" />
        <path d="M 430 414 H 610 M 430 440 H 610" />
        <path d="M 710 278 H 966 M 710 306 H 966 M 710 334 H 966 M 710 362 H 966 M 710 390 H 966 M 710 418 H 966" />
      </g>

      <g className="rsp-map-equipment" fill="#7db0c1" fillOpacity="0.28" stroke="#8bc8d8" strokeOpacity="0.6" strokeWidth="1.5">
        <rect x="218" y="278" width="38" height="18" rx="3" />
        <rect x="278" y="278" width="38" height="18" rx="3" />
        <rect x="446" y="414" width="30" height="18" rx="3" />
        <rect x="490" y="414" width="30" height="18" rx="3" />
        <rect x="534" y="414" width="30" height="18" rx="3" />
        <rect x="734" y="280" width="42" height="22" rx="3" />
        <rect x="790" y="280" width="42" height="22" rx="3" />
        <rect x="846" y="280" width="42" height="22" rx="3" />
        <rect x="902" y="280" width="42" height="22" rx="3" />
      </g>

      <g fill="none" stroke="#7bb3c7" strokeOpacity="0.42" strokeWidth="2">
        <path d="M 132 116 C 154 138 154 196 132 222" />
        <path d="M 1040 200 C 1082 216 1082 260 1040 278" />
        <path d="M 352 208 C 378 228 378 360 352 382" />
      </g>

      <g className="rsp-map-labels" fill="#8eaaba" fontFamily="Inter, Arial, sans-serif" fontSize="12" letterSpacing="1.2">
        <text x="196" y="196">WAREHOUSE</text>
        <text x="536" y="197">UTILITY</text>
        <text x="816" y="210">EQUIPMENT ZONE</text>
        <text x="190" y="468">CHARGING BAY</text>
        <text x="728" y="466">STORAGE</text>
      </g>

      <path d={ROUTE_PATH} fill="none" stroke="#1d3445" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d={ROUTE_PATH}
        pathLength="1"
        fill="none"
        stroke="#e37b2c"
        strokeOpacity="0.88"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1"
        strokeDashoffset={1 - snapshot.routeReveal}
      />
      <path
        d={ROUTE_PATH}
        pathLength="1"
        fill="none"
        stroke="#7bd6ff"
        strokeOpacity="0.96"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1"
        strokeDashoffset={1 - snapshot.routeProgress}
      />

      <g className="rsp-map-checkpoints">
        {CHECKPOINTS.map((point, index) => {
          const isCurrent = snapshot.activePoint === index;
          const isComplete = snapshot.routeProgress > (index + 0.5) / CHECKPOINTS.length;
          const isAnomaly = snapshot.anomaly && index === 4;
          const color = isAnomaly ? "#f06c4f" : isCurrent ? "#f6a15c" : isComplete ? "#63c9f4" : "#7090a3";

          return (
            <g key={point.label} transform={`translate(${point.x} ${point.y})`}>
              <circle r={isCurrent || isAnomaly ? 14 : 9} fill={color} fillOpacity={isCurrent || isAnomaly ? 0.16 : 0.1} />
              {isCurrent || isAnomaly ? <circle r="17" fill="none" stroke={color} strokeOpacity="0.55" strokeWidth="1.5" className="rsp-point-pulse" /> : null}
              <circle r="5" fill="#08141f" stroke={color} strokeWidth="2" />
              <circle r="2" fill={color} />
              <rect x="-18" y="-31" width="36" height="16" rx="4" fill="#081722" stroke={color} strokeOpacity="0.75" />
              <text x="0" y="-20" textAnchor="middle" fill="#d7e8ef" fontSize="9" fontFamily="Inter, Arial, sans-serif">
                {point.label}
              </text>
            </g>
          );
        })}
      </g>

      {currentPoint && snapshot.phase === "patrol" ? (
        <g transform={`translate(${currentPoint.x} ${currentPoint.y})`} className="rsp-scan-layer">
          {snapshot.activePoint % 3 === 0 ? (
            <path d="M 0 0 L 56 -28 A 63 63 0 0 1 56 28 Z" fill="#62d2fa" fillOpacity="0.12" stroke="#62d2fa" strokeOpacity="0.72" strokeWidth="1.5" />
          ) : null}
          {snapshot.activePoint % 3 === 1 ? (
            <>
              <circle r="28" fill="none" stroke="#84d8ff" strokeOpacity="0.45" strokeDasharray="4 5" />
              <circle r="42" fill="none" stroke="#84d8ff" strokeOpacity="0.24" strokeDasharray="2 8" className="rsp-radar-ring" />
            </>
          ) : null}
          {snapshot.activePoint % 3 === 2 ? (
            <>
              <rect x="-31" y="-24" width="62" height="48" fill="none" stroke="#f4b36d" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="5 4" />
              <path d="M -31 -15 H -24 M -31 -15 V -8 M 31 15 H 24 M 31 15 V 8" fill="none" stroke="#f4b36d" strokeWidth="2" />
            </>
          ) : null}
        </g>
      ) : null}

      {snapshot.anomaly ? (
        <g transform="translate(820 155)">
          <circle r="24" fill="#ed704c" fillOpacity="0.13" className="rsp-anomaly-pulse" />
          <path d="M 0 -12 L 11 9 H -11 Z" fill="#ed704c" fillOpacity="0.9" />
          <text x="0" y="5" textAnchor="middle" fill="#1d0e0a" fontWeight="700" fontSize="12">!</text>
        </g>
      ) : null}

      {snapshot.dataFlowProgress > 0 ? (
        <>
          <path d="M 160 78 C 248 110 276 184 335 242 C 380 286 430 300 530 302" fill="none" stroke="#8bdcff" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="5 8" />
          <circle cx={connectorDot.x} cy={connectorDot.y} r="3" fill="#d7f6ff" filter="url(#rsp-soft-glow)" />
          <circle cx={connectorDot.x} cy={connectorDot.y} r="7" fill="none" stroke="#71d8ff" strokeOpacity="0.36" />
        </>
      ) : null}

      <g transform={`translate(${dog.x} ${dog.y}) rotate(${getRouteAngle(snapshot.routeProgress)})`}>
        <ellipse cx="0" cy="16" rx="24" ry="6" fill="#000" fillOpacity="0.36" />
        <g transform={`translate(0 ${Math.sin(snapshot.time * 8) * 1.4})`}>
          <image href="/images/generated/robot-dog.svg" x="-24" y="-24" width="48" height="48" preserveAspectRatio="xMidYMid meet" />
          <circle cx="15" cy="-6" r="2" fill="#f6a15c" />
        </g>
      </g>

      <g transform="translate(88 452)">
        <rect x="-18" y="-15" width="44" height="26" rx="5" fill="#0c2633" stroke="#6bb8c9" strokeOpacity="0.8" />
        <path d="M -8 -4 H 16 M -8 3 H 10" stroke="#75d5e5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="-4" r="3" fill="#7de0bd" />
        <text x="34" y="3" fill="#a9c3ce" fontSize="10" fontFamily="Inter, Arial, sans-serif">HOME</text>
      </g>
    </svg>
  );
}
