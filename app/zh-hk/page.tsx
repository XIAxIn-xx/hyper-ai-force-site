import type { Metadata } from "next";

import { HyperPage } from "@/components/HyperPage";
import { homeCopy } from "@/data/home";
import { getHyperContent } from "@/data/hyper";

const content = getHyperContent("zh-hk");
const seo = homeCopy["zh-hk"].seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...content.seo.keywords],
  alternates: {
    canonical: "/zh-hk",
    languages: {
      en: "/",
      "zh-HK": "/zh-hk",
      "zh-CN": "/zh-cn"
    }
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/zh-hk",
    images: [{ url: "/videos/haiforce-hero-poster.jpg", width: 1920, height: 1080, alt: "超流智能機械人平台" }],
    locale: "zh_HK"
  }
};

export default function ZhHkHome() {
  return <HyperPage locale="zh-hk" />;
}
