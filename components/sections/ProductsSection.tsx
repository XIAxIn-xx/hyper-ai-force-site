import Link from "next/link";
import type { Locale } from "@/data/hyper";
import { getProducts, productPath } from "@/data/products";
import { localizedPath } from "@/lib/site";
import { ProductFigure } from "@/components/products/ProductFigure";
import { ProductAssessment } from "@/components/site/EditorialSections";
import { Reveal } from "@/components/sections/Reveal";

export function ProductsSection({ locale }: { locale: Locale }) {
  const copy = getProducts(locale);
  return <div className="product-editorial">
    <section id="products" className="product-editorial-intro"><div className="section-shell">
      <p className="editorial-kicker">{copy.eyebrow}</p><h2>{copy.title}</h2><p className="editorial-intro">{copy.copy}</p>
      <nav className="product-editorial-nav" aria-label={copy.eyebrow}>{copy.items.map(product => <a key={product.slug} href={`#${product.slug}`}>{product.model}<span aria-hidden="true">↓</span></a>)}</nav>
    </div></section>
    {copy.items.map((product, index) => <section id={product.slug} key={product.slug} className={`product-catalogue-chapter ${index % 2 ? "product-catalogue-dark" : ""}`}>
      <div className="section-shell">
        <Reveal><div className="product-catalogue-heading"><div><p className="editorial-kicker">0{index + 1} / {product.category}</p><h2>{product.model}</h2>{locale !== "en" && <p className="mt-3 text-xl font-medium">{product.name}</p>}</div><Link className="editorial-link" href={productPath(locale, product.slug)}>{copy.learnMore}<span aria-hidden="true">↗</span></Link></div></Reveal>
        <Reveal><ProductFigure product={product} index={0} /></Reveal>
        <div className="product-catalogue-summary"><div><h3>{product.tagline}</h3><p>{product.description}</p></div><dl>{product.highlights.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></div>
        <div className="product-catalogue-pair"><Reveal><ProductFigure product={product} index={1} /></Reveal><Reveal delay={0.08}><div className="product-catalogue-benefits"><p className="editorial-kicker">{copy.benefits}</p>{product.benefits.map(benefit => <article key={benefit.title}><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}</div></Reveal></div>
        <div className="editorial-next"><Link className="editorial-link" href={productPath(locale, product.slug)}>{copy.learnMore}<span aria-hidden="true">↗</span></Link><Link className="editorial-cta" href={localizedPath(locale, "contact") + "?product=" + product.slug} data-analytics-event="inquiry_click" data-product={product.slug}>{copy.demo}<span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>)}
    <ProductAssessment locale={locale} />
  </div>;
}
