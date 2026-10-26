import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getHyperContent, type Locale } from "@/data/hyper";
import { homeCopy } from "@/data/home";
import { getProducts, productPath } from "@/data/products";
import { localizedPath } from "@/lib/site";

const eyebrow = "text-sm font-semibold tracking-[0.14em] text-orange-300";
const heading = "mt-5 whitespace-pre-line text-3xl font-semibold leading-tight tracking-normal md:text-5xl";
const textLink = "inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-orange-300 hover:text-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300";

export function HomeStory({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const products = getProducts(locale).items;
  const caseAlt = getHyperContent(locale).caseStudy.mediaAlt;

  return <>
    <section id="home-purpose" className="bg-[#050B14] py-20 text-white md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <p className={eyebrow}>{copy.purpose.eyebrow}</p>
          <h2 className={heading}>{copy.purpose.title}</h2>
        </div>
        <div className="lg:pt-10">
          <p className="text-base leading-8 text-slate-300 md:text-lg">{copy.purpose.body}</p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-slate-400">
            {copy.purpose.contexts.map(context => <li key={context} className="flex items-center gap-2"><span aria-hidden="true" className="h-1 w-1 rounded-full bg-orange-400" />{context}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <section id="home-products" className="border-t border-white/10 bg-[#071019] py-20 text-white md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid items-end gap-8 md:grid-cols-2">
          <div><p className={eyebrow}>{copy.products.eyebrow}</p><h2 className={heading}>{copy.products.title}</h2></div>
          <div className="max-w-lg md:justify-self-end"><p className="text-base leading-8 text-slate-300">{copy.products.body}</p><Link href={localizedPath(locale, "products")} className={`${textLink} mt-4`}>{copy.products.link}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {products.map((product, index) => {
            const view = product.views[0];
            return <article key={product.slug}>
              <Link href={productPath(locale, product.slug)} aria-label={`${product.model} · ${product.name}`} className="group block overflow-hidden rounded-xl border border-white/10 bg-[#0B1520] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300">
                <Image src={view.src} alt={`${product.model} · ${view.label}`} width={view.width} height={view.height} sizes="(max-width: 767px) calc(100vw - 32px), 570px" unoptimized className="aspect-video w-full object-contain" />
              </Link>
              <div className="mt-6 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold">{product.model}{locale !== "en" && <span className="ml-3 text-base font-normal text-slate-400">{product.name}</span>}</h3>
                <Link href={productPath(locale, product.slug)} aria-label={`${copy.products.link} · ${product.model}`} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-orange-300 hover:border-orange-300"><ArrowUpRight size={20} aria-hidden="true" /></Link>
              </div>
              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300">{copy.products.items[index]}</p>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section id="home-approach" className="bg-[#0B1520] py-20 text-white md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <div><p className={eyebrow}>{copy.approach.eyebrow}</p><h2 className={heading}>{copy.approach.title}</h2></div>
          <p className="max-w-xl self-end text-base leading-8 text-slate-300">{copy.approach.body}</p>
        </div>
        <ol className="my-12 grid gap-8 md:grid-cols-3">
          {copy.approach.steps.map((step, index) => <li key={step.title} className="border-t border-white/20 pt-6"><span className="font-mono text-sm text-orange-300">0{index + 1}</span><h3 className="mt-6 text-2xl font-semibold">{step.title}</h3><p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">{step.body}</p></li>)}
        </ol>
        <div className="flex flex-wrap gap-x-10 gap-y-3"><Link href={localizedPath(locale, "technology")} className={textLink}>{copy.approach.technology}<ArrowUpRight size={18} aria-hidden="true" /></Link><Link href={localizedPath(locale, "solutions")} className={textLink}>{copy.approach.solutions}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>

    <section id="home-field" className="bg-[#071019] py-20 text-white md:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <Link href={`${localizedPath(locale, "applications")}#case-study`} className="block overflow-hidden rounded-xl border border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300">
          <Image src="/images/generated/glp-robot-inspection-poster.jpg" alt={caseAlt} width={854} height={480} sizes="(max-width: 1023px) calc(100vw - 32px), 660px" className="h-auto w-full" />
        </Link>
        <div><p className={eyebrow}>{copy.field.eyebrow}</p><h2 className={heading}>{copy.field.title}</h2><p className="mt-6 text-base leading-8 text-slate-300">{copy.field.body}</p><Link href={`${localizedPath(locale, "applications")}#case-study`} className={`${textLink} mt-6`}>{copy.field.link}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>

    <section id="home-belief" className="border-y border-white/10 bg-[#050B14] py-24 text-white md:py-32">
      <div className="section-shell">
        <p className={eyebrow}>{copy.belief.eyebrow}</p>
        <h2 className="mt-8 max-w-5xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">{copy.belief.title}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end"><p className="max-w-2xl text-lg leading-8 text-slate-300">{copy.belief.body}</p><Link href={localizedPath(locale, "about")} className={textLink}>{copy.belief.link}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>

    <section id="home-conversation" className="bg-[radial-gradient(ellipse_at_100%_100%,rgba(249,115,22,0.10),transparent_60%)] py-20 text-white md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div><p className={eyebrow}>{copy.conversation.eyebrow}</p><h2 className={heading}>{copy.conversation.title}</h2></div>
        <div className="self-end"><p className="max-w-lg text-base leading-8 text-slate-300">{copy.conversation.body}</p><div className="mt-8 flex flex-wrap items-center gap-6"><Link href={localizedPath(locale, "contact")} data-analytics-event="inquiry_click" className="inline-flex min-h-12 items-center gap-4 rounded-md bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-500">{copy.conversation.contact}<ArrowUpRight size={18} aria-hidden="true" /></Link><Link href={localizedPath(locale, "resources")} className={textLink}>{copy.conversation.resources}<ArrowUpRight size={18} aria-hidden="true" /></Link></div></div>
      </div>
    </section>
  </>;
}
