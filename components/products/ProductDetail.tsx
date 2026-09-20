"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { getHyperContent, type Locale } from "@/data/hyper";
import { getProducts, homePath, productPath, type ProductSlug } from "@/data/products";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ProductVisual } from "@/components/products/ProductVisual";
import { ContactSection } from "@/components/sections/ContactSection";

export function ProductDetail({ locale, slug }: { locale: Locale; slug: ProductSlug }) {
  const [selected, setSelected] = useState(0);
  const content = getHyperContent(locale);
  const copy = getProducts(locale);
  const product = copy.items.find((item) => item.slug === slug)!;
  const other = copy.items.find((item) => item.slug !== slug)!;
  const view = product.views[selected];
  const specs = view.weight ? [{ label: `${copy.weight} · ${view.label}`, value: view.weight }, ...product.specs] : product.specs;
  return (
    <div className={`pretty-copy ${locale === "en" ? "" : `zh-page ${locale}-page`}`}>
      <Header content={content} productSlug={slug} />
      <main>
        <section className="bg-[#071019] pb-16 pt-28 text-white md:pb-24 md:pt-36">
          <div className="section-shell">
            <Link href={`${homePath(locale)}#products`} className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm text-slate-300 hover:text-orange-200"><ArrowLeft className="h-4 w-4" aria-hidden="true" />{copy.back}</Link>
            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-14">
              <div className="order-2 md:order-1">
                <ProductVisual product={product} selected={selected} onSelect={setSelected} label={slug === "force-01" ? copy.variants : copy.views} priority />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-sm font-semibold tracking-[0.16em] text-orange-300">{product.category}</p>
                <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">{product.model}</h1>
                {locale !== "en" && <p className="mt-3 text-2xl font-semibold">{product.name}</p>}
                <h2 className="mt-8 text-2xl font-semibold leading-snug md:text-3xl">{product.tagline}</h2>
                <p className="zh-copy mt-5 text-base leading-8 text-slate-300">{product.description}</p>
                <dl className="my-8 grid grid-cols-3 gap-3 border-y border-white/10 py-6">
                  {product.highlights.map((item) => <div key={item.label}><dt className="text-xs leading-5 text-slate-400">{item.label}</dt><dd className="mt-2 text-xl font-bold">{item.value}</dd></div>)}
                </dl>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg"><a href="#contact">{copy.demo}<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></a></Button>
                  <Button asChild size="lg" variant="outline"><a href="#specifications">{copy.specs}</a></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#050B14] py-20 text-white">
          <div className="section-shell">
            <h2 className="text-3xl font-bold md:text-4xl">{copy.benefits}</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {product.benefits.map((benefit, index) => <article key={benefit.title} className="border-t border-white/15 pt-6"><p className="text-sm font-semibold text-orange-300">0{index + 1}</p><h3 className="mt-4 text-xl font-semibold">{benefit.title}</h3><p className="zh-copy mt-3 text-sm leading-7 text-slate-300">{benefit.description}</p></article>)}
            </div>
          </div>
        </section>
        <section id="specifications" className="scroll-mt-20 bg-[#0B1520] py-20 text-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold">{copy.specs}</h2>
              <dl className="mt-8 divide-y divide-white/10 border-y border-white/10" aria-live="polite">
                {specs.map((spec) => <div key={spec.label} className="grid gap-2 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-5"><dt className="text-sm text-slate-400">{spec.label}</dt><dd className="text-sm leading-6 text-slate-100">{spec.value}</dd></div>)}
              </dl>
              <p className="mt-5 text-xs leading-6 text-slate-400">{product.note}</p>
            </div>
            <div className="self-start rounded-xl border border-white/10 bg-[#071019] p-7">
              <h2 className="text-2xl font-semibold">{copy.payloads}</h2>
              <ul className="mt-6 space-y-5">{product.payloads.map((payload) => <li key={payload} className="flex gap-3 text-sm leading-6 text-slate-300"><Check className="mt-1 h-4 w-4 shrink-0 text-orange-300" aria-hidden="true" />{payload}</li>)}</ul>
            </div>
          </div>
        </section>
        <section className="bg-[#071019] py-20 text-white">
          <div className="section-shell">
            <h2 className="text-3xl font-bold">{copy.applications}</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">{copy.scenarios.map((item) => <article key={item.label} className="rounded-xl border border-white/10 p-6"><h3 className="text-xl font-semibold">{item.label}</h3><p className="zh-copy mt-3 text-sm leading-7 text-slate-300">{item.description}</p></article>)}</div>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8"><p className="text-slate-400">{copy.related}</p><Link href={productPath(locale, other.slug)} className="inline-flex min-h-11 items-center gap-3 font-semibold text-orange-300 hover:text-orange-200">{other.model}{locale !== "en" ? ` · ${other.name}` : ""}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
          </div>
        </section>
        <ContactSection content={content} defaultProduct={slug} />
      </main>
      <Footer content={content} />
    </div>
  );
}
