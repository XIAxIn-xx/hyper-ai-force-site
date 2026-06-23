import type { Metadata } from "next";

import { HyperPage } from "@/components/HyperPage";
import { getHyperContent } from "@/data/hyper";

const content = getHyperContent("en");

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: [...content.seo.keywords],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-HK": "/zh-hk"
    }
  },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    url: "/",
    locale: "en_US"
  }
};

export default function Home() {
  return <HyperPage locale="en" />;
}
