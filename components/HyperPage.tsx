import { imageSrc } from "@/lib/media";
import { HomeStory } from "@/components/sections/HomeStory";
import { HeroSection } from "@/components/sections/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getHyperContent, type Locale } from "@/data/hyper";

type HyperPageProps = {
  locale: Locale;
};

export function HyperPage({ locale }: HyperPageProps) {
  const content = getHyperContent(locale);
  const localeClass =
    content.lang === "zh-CN" ? "zh-cn-page" : content.lang === "zh-HK" ? "zh-hk-page" : "";

  return (
    <div className={`${content.lang === "en" ? "pretty-copy" : "pretty-copy zh-page"} ${localeClass}`}>
      <link rel="preload" as="image" href={imageSrc("/videos/haiforce-hero-poster.jpg")} />
      <Header content={content} home />
      <main id="main-content">
        <HeroSection content={content} />
        <HomeStory locale={locale} />
      </main>
      <Footer content={content} />
    </div>
  );
}
