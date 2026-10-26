import { productMetadata, productPage } from "@/lib/product-pages";

type Props = { params: { slug: string } };
export function generateMetadata({ params }: Props) { return productMetadata("zh-hk", params.slug); }
export default function Page({ params }: Props) { return productPage("zh-hk", params.slug); }

export const dynamicParams = false;
export function generateStaticParams() { return ["force-01", "force-05"].map(slug => ({ slug })); }
