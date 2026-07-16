import { AboutSection } from "@/components/sections/AboutSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarketSection } from "@/components/sections/MarketSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { ServiceNetworkSection } from "@/components/sections/ServiceNetworkSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { StrengthsSection } from "@/components/sections/StrengthsSection";
import { Footer } from "@/components/layout/Footer";
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

  return (
    <div className={`${content.lang === "en" ? "pretty-copy" : "pretty-copy zh-page"} ${localeClass}`}>
      <Header content={content} />
      <main>
        <HeroSection content={content} />
        <MarketSection content={content} />
        <StrengthsSection content={content} />
        <PlatformSection content={content} />
        <SolutionsSection content={content} />
        <ApplicationsSection content={content} />
        <CaseStudySection content={content} />
        <ServiceNetworkSection content={content} />
        <AboutSection content={content} />
        <ContactSection content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
}
