import type { Metadata } from "next";

import "@/app/globals.css";
import PageLoading from "@/components/site/PageLoading";
import { CookiePreferences } from "@/components/site/CookiePreferences";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hyper AI Force Limited | AI Robotics",
    template: "%s"
  },
  robots: process.env.VERCEL_ENV === "preview" || process.env.SITE_NOINDEX === "true" ? { index: false, follow: false } : undefined,
  description:
    "Hyper AI Force Limited develops robotic systems for physical security, autonomous patrol and facility operations.",
  openGraph: {
    title: "Hyper AI Force Limited",
    description:
      "Robotic solutions for physical security, autonomous patrol and facility operations.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_HK", "zh_CN"],
    images: [
      {
        url: "/images/generated/hyper-hero-robotics.png",
        width: 1536,
        height: 864,
        alt: "Hyper AI Force autonomous robotics"
      }
    ]
  }
};

export function SiteDocument({ children, lang }: { children: React.ReactNode; lang: "en" | "zh-CN" | "zh-HK" }) {
  return (
    <html lang={lang}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-orange-600 focus:p-3 focus:text-white">{lang === "en" ? "Skip to content" : lang === "zh-CN" ? "跳到正文" : "跳至內容"}</a>
        <PageLoading />{children}<CookiePreferences />
      </body>
    </html>
  );
}
