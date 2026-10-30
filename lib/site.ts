import type { Metadata } from "next";
import type { Locale } from "@/data/hyper";

export const locales: Locale[] = ["en", "zh-cn", "zh-hk"];
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://haif.ai").replace(/\/$/, "");
export const sections = ["products", "technology", "solutions", "applications", "collaboration", "resources", "about", "contact", "privacy", "terms", "cookies", "disclaimer", "accessibility"] as const;
export type Section = typeof sections[number];
export const legalSections: Section[] = ["privacy", "terms", "cookies", "disclaimer", "accessibility"];
export const labels: Record<Locale, Record<Section | "home" | "preferences" | "more", string>> = {
  en: { home: "Home", products: "Products", technology: "Technology", solutions: "Solutions", applications: "Applications", collaboration: "Collaboration", resources: "Resources", about: "About Us", contact: "Contact Us", privacy: "Privacy Policy", terms: "Terms of Use", cookies: "Cookie Notice", disclaimer: "Website & Product Disclaimer", accessibility: "Accessibility", preferences: "Cookie preferences", more: "Explore more" },
  "zh-cn": { home: "首页", products: "产品", technology: "技术能力", solutions: "解决方案", applications: "应用场景", collaboration: "合作模式", resources: "资料中心", about: "关于我们", contact: "联系我们", privacy: "隐私政策", terms: "使用条款", cookies: "Cookie 说明", disclaimer: "网站与产品免责声明", accessibility: "无障碍声明", preferences: "Cookie 偏好设置", more: "了解更多" },
  "zh-hk": { home: "首頁", products: "產品", technology: "技術能力", solutions: "解決方案", applications: "應用場景", collaboration: "合作模式", resources: "資料中心", about: "關於我們", contact: "聯絡我們", privacy: "私隱政策", terms: "使用條款", cookies: "Cookie 說明", disclaimer: "網站與產品免責聲明", accessibility: "無障礙聲明", preferences: "Cookie 偏好設定", more: "了解更多" }
};
export function localeFromPath(path: string): Locale {
  return /^\/zh-cn(?:\/|$)/.test(path) ? "zh-cn" : /^\/zh-hk(?:\/|$)/.test(path) ? "zh-hk" : "en";
}
export function localizedPath(locale: Locale, path = ""): string {
  return `${locale === "en" ? "" : `/${locale}`}${path ? `/${path.replace(/^\//, "")}` : ""}` || "/";
}
export function isSection(value: string): value is Section {
  return (sections as readonly string[]).includes(value);
}
export function sectionMetadata(locale: Locale, section: Section): Metadata {
  const brand = locale === "en" ? "Hyper AIForce" : "超流智能";
  const imageAlt = locale === "en" ? "Hyper AIForce robotics" : locale === "zh-cn" ? "超流智能机器人系统" : "超流智能機械人系統";
  const title = `${labels[locale][section]} | ${brand}`;
  const description = descriptions[locale][section] || `${labels[locale][section]} — ${brand}`;
  return { title, description, alternates: { canonical: localizedPath(locale, section), languages: Object.fromEntries(locales.map(l => [l === "en" ? "en" : l === "zh-cn" ? "zh-CN" : "zh-HK", localizedPath(l, section)])) }, openGraph: { title, description, url: localizedPath(locale, section), locale: locale === "en" ? "en_US" : locale === "zh-cn" ? "zh_CN" : "zh_HK", images: [{ url: "/images/generated/hyper-hero-robotics.png", width: 1536, height: 864, alt: imageAlt }] } };
}
export const descriptions: Record<Locale, Partial<Record<Section, string>>> = {
  en: { products: "Explore FORCE 01 and FORCE 05 robotic inspection systems.", technology: "AI perception, autonomous patrol, teleoperation and robotic motion control.", solutions: "Connect robots, the RSP platform and deployment services in one inspection workflow.", applications: "Robotic inspection for security patrol, logistics parks and facility operations.", collaboration: "Explore deployment, system integration and service collaboration with Hyper AIForce.", resources: "Product literature, technical documentation and operating manuals.", about: "Learn about Hyper AIForce and its robotic security solutions.", contact: "Discuss your site, product requirements or a demonstration with Hyper AIForce." },
  "zh-cn": { products: "探索 FORCE 01 与 FORCE 05 机器人巡检产品。", technology: "了解 AI 感知、自主巡检、远程接管与机器人运动控制。", solutions: "连接机器人、RSP 平台与部署服务，形成完整巡检闭环。", applications: "面向安防巡逻、物流园区与设施运营的机器人应用。", collaboration: "了解超流智能的部署、系统集成与服务合作模式。", resources: "产品资料、技术说明和操作使用手册。", about: "了解超流智能与机器人安防解决方案。", contact: "与超流智能讨论场地、产品需求或演示预约。" },
  "zh-hk": { products: "探索 FORCE 01 與 FORCE 05 機械人巡檢產品。", technology: "了解 AI 感知、自主巡檢、遠端接管與機械人運動控制。", solutions: "連接機械人、RSP 平台與部署服務，形成完整巡檢閉環。", applications: "面向安防巡邏、物流園區與設施營運的機械人應用。", collaboration: "了解超流智能的部署、系統整合與服務合作模式。", resources: "產品資料、技術說明和操作使用手冊。", about: "了解超流智能與機械人安防解決方案。", contact: "與超流智能討論場地、產品需求或演示預約。" }
};
