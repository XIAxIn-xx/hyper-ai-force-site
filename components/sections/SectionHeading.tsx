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
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      <p className={light ? "text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300" : "text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700"}>
        {eyebrow}
      </p>
      <h2 className={light ? "mt-4 text-3xl font-bold tracking-normal text-white md:text-5xl" : "mt-4 text-3xl font-bold tracking-normal text-slate-950 md:text-5xl"}>
        {title}
      </h2>
      {copy ? (
        <p className={light ? "mt-5 text-base leading-8 text-slate-300" : "mt-5 text-base leading-8 text-slate-600"}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
