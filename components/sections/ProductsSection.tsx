"use client";

import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { useId, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { localizedPath } from "@/lib/site";
import type { Locale } from "@/data/hyper";
import { getProducts, productPath } from "@/data/products";
import { ProductVisual } from "@/components/products/ProductVisual";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function ProductsSection({ locale }: { locale: Locale }) {
  const copy = getProducts(locale);
  const [active, setActive] = useState(0);
  const [views, setViews] = useState([0, 0]);
  const [expanded, setExpanded] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const id = useId();
  const product = copy.items[active];
  const duration = reduced ? 0 : 0.35;
  const select = (index: number) => { setActive(index); setExpanded(0); };

  return (
    <section id="products" className="relative isolate scroll-mt-20 overflow-hidden bg-[var(--bg-dark)] py-24 text-white">
      <div className="section-shell">
        <motion.div initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration }}>
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} copy={copy.copy} light className="max-w-4xl" />
        </motion.div>
        <LayoutGroup id={id}>
          <div role="tablist" aria-label={copy.eyebrow} className="mt-10 grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-white/[0.025] p-2 md:max-w-2xl">
            {copy.items.map((item, index) => (
              <button key={item.slug} id={id + "-tab-" + index} role="tab" type="button" aria-selected={active === index} aria-controls={id + "-panel"} tabIndex={active === index ? 0 : -1}
                onClick={() => select(index)}
                onKeyDown={(event) => {
                  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
                  event.preventDefault();
                  const next = event.key === "Home" ? 0 : event.key === "End" ? 1 : 1 - active;
                  select(next);
                  document.getElementById(id + "-tab-" + next)?.focus();
                }}
                className="relative rounded-xl px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 md:px-6">
                {active === index && <motion.span layoutId="product-selection" transition={{ duration }} className="absolute inset-0 rounded-xl border border-orange-300/25 bg-[var(--surface-steel)]" />}
                <span className={"relative block text-lg font-semibold tracking-wider " + (active === index ? "text-white" : "text-slate-400")}>{item.model}</span>
                <span className="relative mt-1 block text-xs leading-5 text-slate-400">{item.category}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>
        <div id={id + "-panel"} role="tabpanel" aria-labelledby={id + "-tab-" + active} tabIndex={0} className="metallic-surface metallic-brushed metallic-edge metallic-hover mt-6 rounded-[28px] p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 md:p-8 lg:p-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article key={product.slug} initial={false} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -8 }} transition={{ duration: duration * 0.6 }} className="grid items-start gap-8 lg:grid-cols-[1.08fr_1fr] lg:gap-12">
              <ProductVisual product={product} selected={views[active]} onSelect={(index) => setViews((previous) => previous.map((value, i) => i === active ? index : value))} label={active === 0 ? copy.variants : copy.views} />
              <div className="min-w-0 lg:pt-3">
                <div className="flex items-center gap-4 text-xs font-medium tracking-[0.2em] text-orange-300"><span>{product.model}</span><span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-orange-400/40 to-transparent" /><span aria-hidden="true">0{active + 1} / 02</span></div>
                <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{locale === "en" ? product.category : product.name}</h3>
                <p className="mt-4 text-lg font-medium leading-relaxed text-white/90">{product.tagline}</p>
                <p className="zh-copy mt-3 text-sm leading-7 text-slate-400">{product.description}</p>
                <dl className="my-7 grid grid-cols-3 gap-3 border-y border-white/10 py-6">
                  {product.highlights.map((item, index) => <motion.div key={item.label} initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration, delay: reduced ? 0 : index * 0.07 }} className="flex flex-col-reverse justify-end gap-2"><dt className="text-xs leading-5 text-slate-400">{item.label}</dt><dd className="text-lg font-semibold tracking-tight text-white sm:text-2xl">{item.value}</dd></motion.div>)}
                </dl>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="group"><Link href={productPath(locale, product.slug)}>{copy.learnMore}<ArrowRight className="ml-3 h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" /></Link></Button>
                  <Button asChild variant="outline"><Link href={localizedPath(locale, "contact") + "?product=" + product.slug} data-analytics-event="inquiry_click" data-product={product.slug}>{copy.demo}</Link></Button>
                </div>
                <div className="mt-8 border-t border-white/10">
                  {product.benefits.map((benefit, index) => (
                    <div key={benefit.title} className="border-b border-white/10">
                      <h4><button type="button" aria-expanded={expanded === index} aria-controls={id + "-benefit-" + index} onClick={() => setExpanded(expanded === index ? null : index)} className="flex min-h-14 w-full items-center gap-3 py-4 text-left text-sm font-medium text-slate-200 transition-colors hover:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">
                        <span aria-hidden="true" className="font-mono text-xs text-slate-500">0{index + 1}</span><span className="flex-1">{benefit.title}</span><Plus aria-hidden="true" className={"h-4 w-4 shrink-0 motion-safe:transition-transform " + (expanded === index ? "rotate-45 text-orange-300" : "")} />
                      </button></h4>
                      <motion.div id={id + "-benefit-" + index} aria-hidden={expanded !== index} initial={false} animate={{ height: expanded === index ? "auto" : 0, opacity: expanded === index ? 1 : 0 }} transition={{ duration }} className="overflow-hidden">
                        <p className="pb-5 pl-7 text-sm leading-7 text-slate-400">{benefit.description}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
