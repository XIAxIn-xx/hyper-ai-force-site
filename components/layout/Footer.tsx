import type { HyperContent } from "@/data/hyper";
import { ZhText } from "@/components/ui/ZhText";

type FooterProps = {
  content: HyperContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-[#050B14] py-10 text-white">
      <div className="section-shell flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-base font-bold"><ZhText>{content.footerCompany}</ZhText></div>
          <p className="zh-copy mt-2 max-w-xl text-sm text-slate-400"><ZhText>{content.footer}</ZhText></p>
        </div>
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} <ZhText>{content.footerCompany}</ZhText>. <ZhText>{content.footerRights}</ZhText>
        </div>
      </div>
    </footer>
  );
}
