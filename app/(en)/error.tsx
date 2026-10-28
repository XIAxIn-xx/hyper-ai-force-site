"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { labels, localeFromPath, localizedPath } from "@/lib/site";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const locale = localeFromPath(usePathname());
  return <main id="main-content" className="section-shell flex min-h-screen flex-col items-center justify-center gap-6 text-center text-white"><h1 className="text-3xl font-bold">{locale === "en" ? "This page could not be loaded" : locale === "zh-cn" ? "页面暂时无法加载" : "頁面暫時無法載入"}</h1><button onClick={reset} className="min-h-11 rounded-md bg-orange-600 px-6 py-3">{locale === "en" ? "Try again" : locale === "zh-cn" ? "重试" : "重試"}</button><Link href={localizedPath(locale)} className="min-h-11 text-orange-300 underline">{labels[locale].home}</Link></main>;
}
