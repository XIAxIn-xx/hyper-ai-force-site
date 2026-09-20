"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/data/hyper";
import { getProducts, homePath, productPath, type Product } from "@/data/products";
import { ProductVisual } from "@/components/products/ProductVisual";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Reveal } from "@/components/sections/Reveal";

function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const [selected, setSelected] = useState(0);
  const copy = getProducts(locale);
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0B1520] p-5 md:p-7">
      <ProductVisual product={product} selected={selected} onSelect={setSelected} label={product.slug === "force-01" ? copy.variants : copy.views} />
      <div className="mt-7 flex-1">
        <p className="text-sm font-semibold tracking-[0.15em] text-orange-300">{product.model}</p>
        <h3 className="mt-2 text-3xl font-bold text-white">{locale === "en" ? product.category : product.name}</h3>
        {locale !== "en" && <p className="mt-2 text-sm text-slate-400">{product.category}</p>}
        <p className="mt-5 text-xl font-semibold leading-relaxed text-white">{product.tagline}</p>
        <p className="zh-copy mt-3 text-sm leading-7 text-slate-300">{product.description}</p>
      </div>
      <dl className="my-7 grid grid-cols-3 gap-3 border-y border-white/10 py-5">
        {product.highlights.map((item) => (
          <div key={item.label}>
            <dt className="text-xs leading-5 text-slate-400">{item.label}</dt>
            <dd className="mt-2 text-base font-semibold text-white md:text-lg">{item.value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap gap-3">
        <Button asChild><Link href={productPath(locale, product.slug)}>{copy.learnMore}<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></Link></Button>
        <Button asChild variant="outline"><Link href={`${homePath(locale)}?product=${product.slug}#contact`}>{copy.demo}</Link></Button>
      </div>
    </article>
  );
}

export function ProductsSection({ locale }: { locale: Locale }) {
  const copy = getProducts(locale);
  return (
    <section id="products" className="scroll-mt-20 bg-[#071019] py-24 text-white">
      <div className="section-shell">
        <Reveal><SectionHeading eyebrow={copy.eyebrow} title={copy.title} copy={copy.copy} light className="max-w-4xl" /></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {copy.items.map((product) => <ProductCard key={product.slug} product={product} locale={locale} />)}
        </div>
      </div>
    </section>
  );
}
