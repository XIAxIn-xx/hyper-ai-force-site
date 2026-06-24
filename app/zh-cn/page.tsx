import type { Metadata } from "next";

import { HyperPage } from "@/components/HyperPage";
import { getHyperContent } from "@/data/hyper";

const content = getHyperContent("zh-cn");

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
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
    title: content.seo.title,
    description: content.seo.description,
    url: "/zh-cn",
    locale: "zh_CN"
  }
};

export default function ZhCnHome() {
  return <HyperPage locale="zh-cn" />;
}
