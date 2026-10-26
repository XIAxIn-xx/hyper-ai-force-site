import { notFound } from "next/navigation";
import { SitePage } from "@/components/site/SitePage";
import { isSection, sectionMetadata, sections } from "@/lib/site";
type Props = { params: { section: string } };
export function generateMetadata({ params }: Props) {
  if (!isSection(params.section)) notFound();
  return sectionMetadata("en", params.section);
}
export default function Page({ params }: Props) {
  if (!isSection(params.section)) notFound();
  return <SitePage locale="en" section={params.section} />;
}

export const dynamicParams = false;
export function generateStaticParams() { return sections.map(section => ({ section })); }
