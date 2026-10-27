import Link from "next/link";
import { labels, legalSections, localizedPath } from "@/lib/site";
import { PreferencesButton } from "@/components/site/CookiePreferences";
import type { HyperContent } from "@/data/hyper";
import { ZhText } from "@/components/ui/ZhText";

type FooterProps = {
  content: HyperContent;
};

export function Footer({ content }: FooterProps) {
  const locale = content.lang === "en" ? "en" : content.lang === "zh-CN" ? "zh-cn" : "zh-hk";
  const copy = labels[locale];
  const isChinese = content.lang !== "en";

  return (
    <footer className="bg-[var(--bg-dark)] py-10 text-white">
      <div className={`section-shell flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:justify-between ${isChinese ? "md:items-end" : "md:items-center"}`}>
        <div>
          <div className="text-base font-bold"><ZhText>{content.footerCompany}</ZhText></div>
          {content.footer ? <p className="zh-copy mt-2 max-w-xl text-sm text-slate-400"><ZhText>{content.footer}</ZhText></p> : null}
        </div>
        <div className={isChinese ? "text-base font-bold text-slate-400" : "text-sm text-slate-500"}>
          © {new Date().getFullYear()} <ZhText>{content.footerCompany}</ZhText>. <ZhText>{content.footerRights}</ZhText>
        </div>
      </div>
      <div className="section-shell mt-7 border-t border-white/10 pt-5">
        <nav aria-label={content.lang === "en" ? "Footer navigation" : content.lang === "zh-CN" ? "页脚导航" : "頁尾導覽"} className="flex flex-wrap items-center gap-x-6 gap-y-1">
          {(["resources", "contact", ...legalSections] as const).map(section => <Link key={section} href={localizedPath(locale, section)} className="inline-flex min-h-11 items-center text-sm text-slate-400 hover:text-orange-200">{copy[section]}</Link>)}
          <PreferencesButton>{copy.preferences}</PreferencesButton>
        </nav>
      </div>
    </footer>
  );
}
