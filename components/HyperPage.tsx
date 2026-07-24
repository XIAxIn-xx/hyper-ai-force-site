import { AboutSection } from "@/components/sections/AboutSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CapabilitySystemSection } from "@/components/sections/CapabilitySystemSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceNetworkSection } from "@/components/sections/ServiceNetworkSection";
import { StackOverviewSection } from "@/components/sections/StackOverviewSection";
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
        <StackOverviewSection content={content} />
        <CapabilitySystemSection content={content} />
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
