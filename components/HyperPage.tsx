import Link from "next/link";
import { labels, localizedPath, type Section } from "@/lib/site";
import { AboutSection } from "@/components/sections/AboutSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CapabilitySystemSection } from "@/components/sections/CapabilitySystemSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceNetworkSection } from "@/components/sections/ServiceNetworkSection";
import { StackOverviewSection } from "@/components/sections/StackOverviewSection";
import { Footer } from "@/components/layout/Footer";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { Header } from "@/components/layout/Header";
import type { Locale } from "@/data/hyper";
import { getHyperContent } from "@/data/hyper";

type HyperPageProps = {
  locale: Locale;
};

export function HyperPage({ locale }: HyperPageProps) {
  const content = getHyperContent(locale);
  const localeClass =
    content.lang === "zh-CN" ? "zh-cn-page" : content.lang === "zh-HK" ? "zh-hk-page" : "";

  const entry = (section: Section) => <div className="bg-[#071019] pb-8"><div className="section-shell flex justify-end"><Link href={localizedPath(locale, section)} className="inline-flex min-h-11 items-center gap-3 rounded-md border border-white/15 px-5 text-sm font-medium text-orange-300 hover:border-orange-300">{labels[locale].more} · {labels[locale][section]} <span aria-hidden="true">↗</span></Link></div></div>;

  return (
    <div className={`${content.lang === "en" ? "pretty-copy" : "pretty-copy zh-page"} ${localeClass}`}>
      <Header content={content} />
      <main id="main-content">
        <HeroSection content={content} />
        <ProductsSection locale={locale} />
        {entry("products")}
        <CapabilitySystemSection content={content} />
        {entry("technology")}
        <StackOverviewSection content={content} />
        {entry("solutions")}
        <ApplicationsSection content={content} />
        {entry("applications")}
        <CaseStudySection content={content} />
        <ServiceNetworkSection content={content} />
        {entry("collaboration")}
        <AboutSection content={content} />
        {entry("about")}
        <ContactSection content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
}
