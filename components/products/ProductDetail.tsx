import { FieldVideo } from "@/components/site/FieldVideo";
import Link from "next/link";
import { localizedPath } from "@/lib/site";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getHyperContent, type Locale } from "@/data/hyper";
import { getProducts, productPath, type ProductSlug } from "@/data/products";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ProductFigure } from "@/components/products/ProductFigure";
import { ProductAssessment } from "@/components/site/EditorialSections";
import { Reveal } from "@/components/sections/Reveal";
import { editorial } from "@/data/editorial";
import { ContactSection } from "@/components/sections/ContactSection";

export function ProductDetail({ locale, slug }: { locale: Locale; slug: ProductSlug }) {
  const content = getHyperContent(locale);
  const copy = getProducts(locale);
  const product = copy.items.find((item) => item.slug === slug)!;
  const other = copy.items.find((item) => item.slug !== slug)!;
  const language = locale === "en" ? 0 : locale === "zh-cn" ? 1 : 2;
  const specs = [...product.views.filter(view => view.weight).map(view => ({ label: `${copy.weight} · ${view.label}`, value: view.weight! })), ...product.specs];
  return (
    <div className={`product-detail-editorial pretty-copy ${locale === "en" ? "" : `zh-page ${locale}-page`}`}>
      <Header content={content} productSlug={slug} />
      <main id="main-content">
        <section className="interior-hero pb-16 pt-28 text-white md:pb-24 md:pt-36">
          <div className="section-shell">
            <Link href={localizedPath(locale, "products")} className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm text-slate-300 hover:text-orange-200"><ArrowLeft className="h-4 w-4" aria-hidden="true" />{copy.back}</Link>
            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-14">
              <div className="order-2 md:order-1">
                <ProductFigure product={product} index={slug === "force-05" ? 5 : 0} locale={locale} priority />
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
                  <Button asChild size="lg"><a href="#contact" data-analytics-event="inquiry_click" data-product={slug}>{copy.demo}<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></a></Button>
                  <Button asChild size="lg" variant="outline"><a href="#specifications">{copy.specs}</a></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <nav className="product-detail-nav" aria-label={editorial[locale].index}><div className="section-shell"><a href="#product-benefits">{copy.benefits}</a><a href="#specifications">{copy.specs}</a><a href="#product-applications">{copy.applications}</a><a href="#contact">{copy.demo}</a></div></nav>
        <section id="product-benefits" className="titanium-section light-copy py-20">
          <div className="section-shell">
            <h2 className="text-3xl font-bold md:text-4xl">{copy.benefits}</h2>
            <div className="product-benefit-sequence mt-10">
              {product.benefits.map((benefit, index) => <Reveal key={benefit.title}><article className={`product-benefit-row ${index % 2 ? "product-benefit-reverse" : ""} ${slug === "force-05" && index > 0 ? "sphere-text-benefit" : ""}`}>{(slug !== "force-05" || index === 0) && <ProductFigure product={product} index={slug === "force-05" ? 4 : index + 1} locale={locale} />}<div><p className="editorial-kicker">0{index + 1} / {product.model}</p><h3>{benefit.title}</h3><p>{benefit.description}</p></div></article></Reveal>)}
            </div>
          </div>
        </section>
        {slug === "force-01" && (
          <section className="interior-hero py-16 text-white" aria-labelledby="field-video-title">
            <div className="section-shell">
              <h2 id="field-video-title" className="text-3xl font-bold md:text-4xl">{["FORCE 01 in action", "FORCE 01 实拍演示", "FORCE 01 實拍演示"][language]}</h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <figure>
                  <FieldVideo file="stairs" label={["Stair climbing", "楼梯攀爬", "樓梯攀爬"][language]} />
                  <figcaption className="mt-3 text-sm text-slate-300">{["Stair climbing", "楼梯攀爬", "樓梯攀爬"][language]}</figcaption>
                </figure>
                <figure>
                  <FieldVideo file="obstacles" label={["Obstacle course", "赛道演示", "賽道演示"][language]} />
                  <figcaption className="mt-3 text-sm text-slate-300">{["Obstacle course", "赛道演示", "賽道演示"][language]}</figcaption>
                </figure>
              </div>
            </div>
          </section>
        )}
        <section id="specifications" className="scroll-mt-20 titanium-section light-copy py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold">{copy.specs}</h2>
              <dl className="mt-8 divide-y divide-[var(--border-light)] border-y border-[var(--border-light)]" aria-live="polite">
                {specs.map((spec) => <div key={spec.label} className="grid gap-2 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-5"><dt className="text-sm text-slate-400">{spec.label}</dt><dd className="text-sm leading-6 text-slate-100">{spec.value}</dd></div>)}
              </dl>
              <p className="mt-5 text-xs leading-6 text-slate-400">{product.note}</p>
            </div>
            <div className="titanium-card self-start rounded-xl p-7">
              <h2 className="text-2xl font-semibold">{copy.payloads}</h2>
              <ul className="mt-6 space-y-5">{product.payloads.map((payload) => <li key={payload} className="flex gap-3 text-sm leading-6 text-slate-300"><Check className="mt-1 h-4 w-4 shrink-0 text-orange-300" aria-hidden="true" />{payload}</li>)}</ul>
            </div>
          </div>
        </section>
        <section id="product-applications" className="titanium-section light-copy py-20">
          <div className="section-shell">
            <h2 className="text-3xl font-bold">{copy.applications}</h2>
            {slug !== "force-05" && <div className="product-scene-posters">{product.views.slice(4).map((view, index) => <Reveal key={view.src}><ProductFigure product={product} index={index + 4} /></Reveal>)}</div>}
            <p className="editorial-scene-note">{editorial[locale].sceneNote}</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">{copy.scenarios.map((item) => <article key={item.label} className="rounded-xl border border-[var(--border-light)] bg-white p-6"><h3 className="text-xl font-semibold">{item.label}</h3><p className="zh-copy mt-3 text-sm leading-7 text-slate-300">{item.description}</p></article>)}</div>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8"><p className="text-slate-400">{copy.related}</p><Link href={productPath(locale, other.slug)} className="inline-flex min-h-11 items-center gap-3 font-semibold text-orange-300 hover:text-orange-200">{other.model}{locale !== "en" ? ` · ${other.name}` : ""}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
          </div>
        </section>
        <ProductAssessment locale={locale} />
        <ContactSection content={content} defaultProduct={slug} />
      </main>
      <Footer content={content} />
    </div>
  );
}
