import { SiteDocument } from "@/components/site/SiteDocument";
export { metadata } from "@/components/site/SiteDocument";

// Fail rather than silently turning the marketing site into uncached SSR.
export const dynamic = "error";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
