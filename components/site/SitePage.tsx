import Link from "next/link";
import { getHyperContent, type Locale } from "@/data/hyper";
import { labels, localizedPath, descriptions, legalSections, type Section } from "@/lib/site";
import { legalCopy } from "@/data/legal";
import { resources, resourceCopy } from "@/data/resources";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { CapabilitySystemSection } from "@/components/sections/CapabilitySystemSection";
import { StackOverviewSection } from "@/components/sections/StackOverviewSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ServiceNetworkSection } from "@/components/sections/ServiceNetworkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export function SitePage({ locale, section }: { locale: Locale; section: Section }) {
  const content = getHyperContent(locale);
  const copy = labels[locale];
  const legal = legalSections.includes(section);
  const resource = resourceCopy[locale];
  const related: Section[] = section === "products" ? ["technology", "resources"] : section === "technology" ? ["products", "solutions"] : section === "solutions" ? ["products", "applications"] : section === "applications" ? ["solutions", "collaboration"] : section === "collaboration" ? ["solutions", "about"] : section === "resources" ? ["products", "technology"] : ["products", "solutions"];
  return <div className={`pretty-copy ${locale === "en" ? "" : `zh-page ${locale}-page`}`}>
    <Header content={content} />
    <main id="main-content">
      <section className="border-b border-white/10 bg-[#050B14] pb-12 pt-32 text-white md:pb-16 md:pt-40">
        <div className="section-shell">
          <nav aria-label={locale === "en" ? "Breadcrumb" : locale === "zh-cn" ? "面包屑导航" : "麵包屑導覽"} className="mb-7 flex gap-3 text-sm text-slate-400"><Link href={localizedPath(locale)} className="hover:text-orange-200">{copy.home}</Link><span aria-hidden="true">/</span><span aria-current="page">{copy[section]}</span></nav>
          <p className="text-sm font-semibold tracking-[0.16em] text-orange-300">HYPER AIFORCE</p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">{copy[section]}</h1>
          {descriptions[locale][section] && <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{descriptions[locale][section]}</p>}
        </div>
      </section>
      {section === "products" && <ProductsSection locale={locale} />}
      {section === "technology" && <CapabilitySystemSection content={content} />}
      {section === "solutions" && <StackOverviewSection content={content} />}
      {section === "applications" && <><ApplicationsSection content={content} /><CaseStudySection content={content} /></>}
      {section === "collaboration" && <ServiceNetworkSection content={content} />}
      {section === "about" && <AboutSection content={content} />}
      {section === "contact" && <ContactSection content={content} />}
      {section === "resources" && <section className="section-shell grid gap-6 py-16 md:grid-cols-3">
        {resources.map(item => <article key={item.id} className="rounded-xl border border-white/10 bg-[#0B1520] p-6">
          <p className="text-sm text-orange-300">{resource[item.category]}</p><h2 className="mt-4 text-2xl font-semibold">{item.title}</h2>
          <dl className="my-7 space-y-3 text-sm text-slate-300">{[[resource.productLabel, item.product], [resource.language, item.language], [resource.version, item.version || "—"], [resource.updated, item.updated || "—"]].map(([label, value]) => <div key={label} className="flex justify-between gap-3"><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          {item.href ? <a href={item.href} download data-analytics-event="file_download" data-resource={item.id} className="inline-flex min-h-11 items-center rounded-md bg-orange-600 px-5 font-medium text-white hover:bg-orange-500">{resource.download}</a> : <button type="button" disabled className="min-h-11 rounded-md border border-white/10 px-5 text-sm text-slate-400">{resource.pending}</button>}
        </article>)}
      </section>}
      {legal && <article className="section-shell max-w-4xl space-y-10 py-16">{legalCopy[locale][section]?.map(block => <section key={block.heading}><h2 className="text-2xl font-semibold text-white">{block.heading}</h2>{block.paragraphs.map(text => <p key={text} className="mt-4 whitespace-pre-line text-base leading-8 text-slate-300">{text}</p>)}</section>)}{section === "privacy" && <Link href={localizedPath(locale, "cookies")} className="inline-block text-orange-300 underline">{copy.cookies}</Link>}</article>}
      {!legal && section !== "contact" && <section className="border-t border-white/10 bg-[#071019] py-12"><div className="section-shell flex flex-wrap items-center gap-5">
        {related.map(target => <Link key={target} href={localizedPath(locale, target)} className="inline-flex min-h-11 items-center text-slate-300 hover:text-orange-200">{copy[target]} <span aria-hidden="true" className="ml-2">↗</span></Link>)}
        <Link href={localizedPath(locale, "contact")} data-analytics-event="inquiry_click" className="inline-flex min-h-11 items-center rounded-md bg-orange-600 px-6 font-semibold text-white hover:bg-orange-500 md:ml-auto">{copy.contact}</Link>
      </div></section>}
    </main>
    <Footer content={content} />
  </div>;
}
