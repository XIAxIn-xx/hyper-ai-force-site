import type { Locale } from "@/data/hyper";

// Add an approved local /downloads/ URL only when the document is ready.
export type Resource = { id: string; category: "product" | "technical" | "manual"; title: string; product: string; language: string; version: string | null; updated: string | null; href: string | null };
export const resources: Resource[] = [
  { id: "ese-product", category: "product", title: "ese", product: "—", language: "—", version: null, updated: null, href: null },
  { id: "ese-technical", category: "technical", title: "ese", product: "—", language: "—", version: null, updated: null, href: null },
  { id: "ese-manual", category: "manual", title: "ese", product: "—", language: "—", version: null, updated: null, href: null }
];
export const resourceCopy: Record<Locale, { product: string; technical: string; manual: string; pending: string; download: string; productLabel: string; language: string; version: string; updated: string }> = {
  en: { product: "Product literature", technical: "Technical documentation", manual: "Operating manuals", pending: "Coming soon", download: "Download", productLabel: "Product", language: "Language", version: "Version", updated: "Updated" },
  "zh-cn": { product: "产品资料", technical: "技术说明", manual: "操作使用手册", pending: "资料准备中", download: "下载", productLabel: "适用产品", language: "语言", version: "版本", updated: "更新日期" },
  "zh-hk": { product: "產品資料", technical: "技術說明", manual: "操作使用手冊", pending: "資料準備中", download: "下載", productLabel: "適用產品", language: "語言", version: "版本", updated: "更新日期" }
};
