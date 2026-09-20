import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import type { Locale } from "@/data/hyper";
import { getProducts, productPath } from "@/data/products";

function findProduct(locale: Locale, slug: string) {
  const product = getProducts(locale).items.find((item) => item.slug === slug);
  if (!product) notFound();
  return product;
}

export function productMetadata(locale: Locale, slug: string): Metadata {
  const product = findProduct(locale, slug);
  const title = `${product.model}${locale === "en" ? "" : ` ${product.name}`} | Hyper AIForce`;
  return {
    title, description: product.description,
    alternates: {
      canonical: productPath(locale, product.slug),
      languages: { en: productPath("en", product.slug), "zh-CN": productPath("zh-cn", product.slug), "zh-HK": productPath("zh-hk", product.slug) }
    },
    openGraph: {
      title, description: product.description, url: productPath(locale, product.slug),
      locale: locale === "en" ? "en_US" : locale === "zh-cn" ? "zh_CN" : "zh_HK",
      images: [{ url: product.views[0].src, alt: product.name }]
    }
  };
}

export function productPage(locale: Locale, slug: string) {
  const product = findProduct(locale, slug);
  return <ProductDetail key={`${locale}-${product.slug}`} locale={locale} slug={product.slug} />;
}
