import Link from "next/link";
import Image from "next/image";
import { imageSrc } from "@/lib/media";
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
import { EditorialSections } from "@/components/site/EditorialSections";
import { editorial } from "@/data/editorial";
import { ChapterNavigation } from "@/components/site/ChapterNavigation";
import { ProjectQuestions } from "@/components/site/ProjectQuestions";

export function SitePage({ locale, section }: { locale: Locale; section: Section }) {
  const content = getHyperContent(locale);
  const copy = labels[locale];
  const legal = legalSections.includes(section);
  const resource = resourceCopy[locale];
  // Give each route a dedicated lead image; never reuse its editorial image.
  const heroImages: Partial<Record<Section, string>> = {
    products: "/images/products/scenes-v2/force-05-stadium.webp",
    technology: "/images/products/scenes-v2/force-01-factory.webp",
    solutions: "/images/products/scenes-v2/force-01-station.webp",
    applications: "/images/products/scenes-v2/force-05-hospital.webp",
    collaboration: "/images/products/scenes-v2/force-05-parking.webp",
    about: "/images/hyper/cyberport-3-exterior.png",
    resources: "/images/products/scenes-v2/force-01-warehouse.webp",
    contact: "/images/hyper/19w-building.webp",
  };
  const heroImage = heroImages[section];
  const brandName = locale === "en" ? "HYPER AIFORCE" : "超流智能";
  const related: Section[] = section === "products" ? ["technology", "resources"] : section === "technology" ? ["products", "solutions"] : section === "solutions" ? ["products", "applications"] : section === "applications" ? ["solutions", "collaboration"] : section === "collaboration" ? ["solutions", "about"] : section === "resources" ? ["products", "technology"] : ["products", "solutions"];
  return <div className={`interior-page upgraded-interior route-${section} pretty-copy ${locale === "en" ? "" : `zh-page ${locale}-page`}`}>
    <Header content={content} />
    <main id="main-content">
      <section className="interior-hero pb-12 pt-32 text-white md:pb-16 md:pt-40">
        <div className="section-shell">
          <nav aria-label={locale === "en" ? "Breadcrumb" : locale === "zh-cn" ? "面包屑导航" : "麵包屑導覽"} className="mb-7 flex gap-3 text-sm text-slate-400"><Link href={localizedPath(locale)} className="hover:text-orange-200">{copy.home}</Link><span aria-hidden="true">/</span><span aria-current="page">{copy[section]}</span></nav>
          <div className={`interior-hero-presentation ${heroImage ? "has-media" : ""}`}><div>
          <p className="text-sm font-semibold tracking-[0.16em] text-orange-300">{brandName}</p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">{copy[section]}</h1>
          {descriptions[locale][section] && <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{descriptions[locale][section]}</p>}
          </div>{heroImage && <div className="interior-hero-image"><Image unoptimized src={imageSrc(heroImage)} alt={copy[section]} width={1500} height={950} sizes="(max-width: 767px) 100vw, 50vw" priority /></div>}</div>
          {!legal && <div className="interior-route-index"><span aria-hidden="true">{String(["products", "technology", "solutions", "applications", "collaboration", "about", "resources", "contact"].indexOf(section) + 1).padStart(2, "0")} / {brandName}</span><a href="#route-content">{editorial[locale].index}<span aria-hidden="true">↓</span></a></div>}
        </div>
      </section>
      {!legal && section !== "products" && <ChapterNavigation locale={locale} section={section} />}
      <div id="route-content" className="route-content">
      {section === "products" && <ProductsSection locale={locale} />}
      {section === "technology" && <CapabilitySystemSection content={content} />}
      {section === "solutions" && <StackOverviewSection content={content} />}
      {section === "applications" && <><ApplicationsSection content={content} /><CaseStudySection content={content} /></>}
      {section === "collaboration" && <ServiceNetworkSection content={content} />}
      {section === "about" && <AboutSection content={content} />}
      {section === "contact" && <ContactSection content={content} />}
      {section === "resources" && <section className="section-shell grid gap-6 py-16 md:grid-cols-3">
        {resources.map(item => <article key={item.id} className="titanium-card rounded-xl p-6">
          <p className="text-sm text-[var(--brand-link-light)]">{resource[item.category]}</p><h2 className="mt-4 text-2xl font-semibold">{item.title}</h2>
          <dl className="my-7 space-y-3 text-sm text-slate-600">{[[resource.productLabel, item.product], [resource.language, item.language], [resource.version, item.version || "—"], [resource.updated, item.updated || "—"]].map(([label, value]) => <div key={label} className="flex justify-between gap-3"><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          {item.href ? <a href={item.href} download data-analytics-event="file_download" data-resource={item.id} className="inline-flex min-h-11 items-center rounded-md brand-button px-5 font-medium">{resource.download}</a> : <button type="button" disabled className="min-h-11 rounded-md border border-slate-500 px-5 text-sm text-slate-600">{resource.pending}</button>}
        </article>)}
      </section>}
      {!legal && section !== "products" && <EditorialSections locale={locale} section={section} />}
      {(section === "contact" || section === "collaboration" || section === "resources") && <ProjectQuestions locale={locale} />}
      {legal && <div className="section-shell legal-reading-layout"><nav className="legal-reading-nav" aria-label={editorial[locale].index}>{legalCopy[locale][section]?.map((block, index) => <a href={`#policy-${index}`} key={block.heading}>{block.heading}</a>)}</nav><article className="space-y-10 py-16">{legalCopy[locale][section]?.map((block, index) => <section id={`policy-${index}`} key={block.heading}><h2 className="text-2xl font-semibold text-[var(--text-primary-light)]">{block.heading}</h2>{block.paragraphs.map(text => <p key={text} className="mt-4 whitespace-pre-line text-base leading-8 text-slate-600">{text}</p>)}</section>)}{section === "privacy" && <Link href={localizedPath(locale, "cookies")} className="inline-block text-[var(--brand-link-light)] underline">{copy.cookies}</Link>}</article></div>}
      </div>
      {!legal && section !== "contact" && <section className="titanium-card py-12"><div className="section-shell flex flex-wrap items-center gap-5">
        {related.map(target => <Link key={target} href={localizedPath(locale, target)} className="inline-flex min-h-11 items-center text-slate-600 hover:text-[var(--brand-link-light)]">{copy[target]} <span aria-hidden="true" className="ml-2">↗</span></Link>)}
        <Link href={localizedPath(locale, "contact")} data-analytics-event="inquiry_click" className="inline-flex min-h-11 items-center rounded-md brand-button px-6 font-semibold md:ml-auto">{copy.contact}</Link>
      </div></section>}
    </main>
    <Footer content={content} />
  </div>;
}
