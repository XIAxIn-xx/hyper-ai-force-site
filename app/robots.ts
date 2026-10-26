import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  const noindex = process.env.VERCEL_ENV === "preview" || process.env.SITE_NOINDEX === "true";
  return { rules: { userAgent: "*", ...(noindex ? { disallow: "/" } : { allow: "/", disallow: ["/api/"] }) }, ...(noindex ? {} : { sitemap: `${siteUrl}/sitemap.xml` }) };
}
