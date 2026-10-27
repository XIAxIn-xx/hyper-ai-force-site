import type { Metadata } from "next";

import { HyperPage } from "@/components/HyperPage";
import { homeCopy } from "@/data/home";
import { getHyperContent } from "@/data/hyper";

const content = getHyperContent("en");
const seo = homeCopy["en"].seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...content.seo.keywords],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-HK": "/zh-hk",
      "zh-CN": "/zh-cn"
    }
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/",
    images: [{ url: "/videos/haiforce-hero-poster.jpg", width: 1920, height: 1080, alt: "Hyper AIForce robotic platforms" }],
    locale: "en_US"
  }
};

export default function Home() {
  return <HyperPage locale="en" />;
}
