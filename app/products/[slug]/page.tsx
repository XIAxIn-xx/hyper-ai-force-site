import { productMetadata, productPage } from "@/lib/product-pages";

type Props = { params: { slug: string } };
export function generateMetadata({ params }: Props) { return productMetadata("en", params.slug); }
export default function Page({ params }: Props) { return productPage("en", params.slug); }
