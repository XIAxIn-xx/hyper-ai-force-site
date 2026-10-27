import type { Metadata } from "next";

import { HyperPage } from "@/components/HyperPage";
import { homeCopy } from "@/data/home";
import { getHyperContent } from "@/data/hyper";

const content = getHyperContent("zh-cn");
const seo = homeCopy["zh-cn"].seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...content.seo.keywords],
  alternates: {
    canonical: "/zh-cn",
    languages: {
      en: "/",
      "zh-HK": "/zh-hk",
      "zh-CN": "/zh-cn"
    }
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/zh-cn",
    images: [{ url: "/videos/haiforce-hero-poster.jpg", width: 1920, height: 1080, alt: "Hyper AIForce 机器人平台" }],
    locale: "zh_CN"
  }
};

export default function ZhCnHome() {
  return <HyperPage locale="zh-cn" />;
}
