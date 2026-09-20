import { productMetadata, productPage } from "@/lib/product-pages";

type Props = { params: { slug: string } };
export function generateMetadata({ params }: Props) { return productMetadata("zh-cn", params.slug); }
export default function Page({ params }: Props) { return productPage("zh-cn", params.slug); }
