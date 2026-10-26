import type { MetadataRoute } from "next";
import { locales, localizedPath, sections, siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...sections, "products/force-01", "products/force-05"];
  return locales.flatMap(locale => routes.map(route => ({ url: siteUrl + localizedPath(locale, route), alternates: { languages: Object.fromEntries(locales.map(language => [language === "en" ? "en" : language === "zh-cn" ? "zh-CN" : "zh-HK", siteUrl + localizedPath(language, route)])) } })));
}
