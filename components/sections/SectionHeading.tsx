import { ZhText } from "@/components/ui/ZhText";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  light = false,
  className = ""
}: SectionHeadingProps) {
  return (
    <div className={`zh-section-heading ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      <p className={light ? "zh-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300" : "zh-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700"}>
        {eyebrow}
      </p>
      <h2 className={light ? "zh-title zh-section-title mt-4 text-3xl font-bold tracking-normal text-white md:text-5xl" : "zh-title zh-section-title mt-4 text-3xl font-bold tracking-normal text-slate-950 md:text-5xl"}>
        {title.split("\n").map((line, index) => (
          <span key={line + "-" + index} className="zh-title-line">
            <ZhText>{line}</ZhText>
          </span>
        ))}
      </h2>
      {copy ? (
        <p className={light ? "zh-copy mt-5 text-base leading-8 text-slate-300 [word-break:normal] [overflow-wrap:break-word]" : "zh-copy mt-5 text-base leading-8 text-slate-600 [word-break:normal] [overflow-wrap:break-word]"}>
          <ZhText>{copy}</ZhText>
        </p>
      ) : null}
    </div>
  );
}
