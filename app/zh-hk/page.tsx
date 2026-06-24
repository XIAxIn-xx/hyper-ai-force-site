import type { Metadata } from "next";

import { HyperPage } from "@/components/HyperPage";
import { getHyperContent } from "@/data/hyper";

const content = getHyperContent("zh-hk");

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
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
    title: content.seo.title,
    description: content.seo.description,
    url: "/zh-hk",
    locale: "zh_HK"
  }
};

export default function ZhHkHome() {
  return <HyperPage locale="zh-hk" />;
}
