"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { labels, localeFromPath, localizedPath } from "@/lib/site";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  const locale = localeFromPath(usePathname());
  return <main id="main-content" className="flex min-h-screen items-center justify-center bg-[#050B14] px-6 text-center text-white"><div><p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">超流智能</p><h1 className="mt-4 text-4xl font-black">{locale === "en" ? "Page not found" : locale === "zh-cn" ? "页面未找到" : "找不到頁面"}</h1><Button asChild className="mt-8"><Link href={localizedPath(locale)}>{labels[locale].home}</Link></Button></div></main>;
}
