import type { HyperContent } from "@/data/hyper";

type FooterProps = {
  content: HyperContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-[#050B14] py-10 text-white">
      <div className="section-shell flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-base font-bold">Hyper AI Force Limited</div>
          <p className="mt-2 max-w-xl text-sm text-slate-400">{content.footer}</p>
        </div>
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} Hyper AI Force Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
