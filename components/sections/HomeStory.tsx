import { FieldVideo } from "@/components/site/FieldVideo";
import { imageSrc } from "@/lib/media";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, RadioTower, Timer } from "lucide-react";
import type { Locale } from "@/data/hyper";
import { homeCopy } from "@/data/home";
import { getProducts, productPath } from "@/data/products";
import { localizedPath } from "@/lib/site";
import styles from "./HomeStory.module.css";

const applicationImages = [
  { src: "/images/products/force-05-rescue.webp", width: 853, height: 853 },
  { src: "/images/products/force-05-factory.webp", width: 852, height: 852 },
  { src: "/images/products/force-01-warehouse.webp", width: 853, height: 853 },
  { src: "/images/products/force-01-plaza.webp", width: 1106, height: 1106 }
];
const valueIcons = [ShieldCheck, RadioTower, Timer];

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <div className={styles.intro}>
    <div><p className={styles.eyebrow}>{eyebrow}</p><h2 className={styles.heading}>{title}</h2></div>
    <p className={styles.support}>{body}</p>
  </div>;
}

export function HomeStory({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const products = getProducts(locale).items;
  const casePath = `${localizedPath(locale, "applications")}#case-study`;
  const contactPath = localizedPath(locale, "contact");

  return <div className={styles.home}>
    <section id="home-products" aria-labelledby="home-products-title" className={`${styles.section} ${styles.light}`}>
      <div className="section-shell">
        <div className={styles.intro}>
          <div><p className={styles.eyebrow}>{copy.products.eyebrow}</p><h2 id="home-products-title" className={styles.heading}>{copy.products.title}</h2></div>
          <p className={styles.support}>{copy.products.body}</p>
        </div>
        <div className={styles.productGrid}>
          {products.map((product, index) => {
            const item = copy.products.items[index];
            const view = product.slug === "force-05"
              ? { src: "/images/products/force-05-workshop.webp", width: 863, height: 863, label: product.model }
              : product.views[0];
            return <article key={product.slug} className={styles.product}>
              {product.slug === "force-01" ? (
                <div className={`${styles.productImage} metallic-edge metallic-hover`}>
                  <FieldVideo file="grass" label={locale === "en" ? "FORCE 01 · Grass traversal" : locale === "zh-cn" ? "FORCE 01 · 草地行走" : "FORCE 01 · 草地行走"} />
                </div>
              ) : (
              <Link href={productPath(locale, product.slug)} className={`${styles.productImage} metallic-edge metallic-hover`} aria-label={item.cta}>
                <Image unoptimized src={imageSrc(view.src)} alt={`${product.model} · ${view.label}`} width={view.width} height={view.height} sizes="(max-width: 767px) calc(100vw - 32px), 570px" className={styles.contain} />
              </Link>
              )}
              <div className={styles.productDetails}>
                <p className={styles.category}>{item.category}</p>
                <h3 className={styles.productName}>{product.model}</h3>
                <p className={styles.body}>{item.body}</p>
                <Link href={productPath(locale, product.slug)} className={styles.textLink}>{item.cta}<ArrowUpRight size={18} aria-hidden="true" /></Link>
              </div>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section id="home-applications" className={`${styles.section} ${styles.paper}`}>
      <div className="section-shell">
        <SectionIntro {...copy.applications} />
        <div className={styles.applicationGrid}>
          {copy.applications.items.map((item, index) => <Link href={localizedPath(locale, "applications")} key={item.title} className={styles.application}>
            <div className={styles.applicationImage}><Image unoptimized {...applicationImages[index]} src={imageSrc(applicationImages[index].src)} alt={item.title} sizes="(max-width: 767px) calc(100vw - 32px), 570px" className={styles.contain} /></div>
            <div className={styles.applicationCopy}><span className={styles.index}>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div><ArrowUpRight className={styles.applicationArrow} size={20} aria-hidden="true" /></div>
          </Link>)}
        </div>
        <Link href={localizedPath(locale, "applications")} className={`${styles.textLink} ${styles.sectionLink}`}>{copy.applications.cta}<ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </section>

    <section id="home-technology" className={`${styles.section} ${styles.dark}`}>
      <div className="section-shell">
        <SectionIntro {...copy.technology} />
        <div className={styles.technologyGrid}>
          <figure className={`${styles.systemFigure} metallic-surface metallic-brushed metallic-edge metallic-hover`}>
            <Image unoptimized src={imageSrc("/images/capabilities/rsp-platform.png")} alt={copy.technology.imageAlt} width={2560} height={1440} sizes="(max-width: 1023px) calc(100vw - 32px), 660px" className={styles.systemImage} />
            <figcaption>RSP <span aria-hidden="true">/</span> Hyper AIForce</figcaption>
            <div className={styles.systemConnection} aria-hidden="true"><span>FORCE 01 / FORCE 05</span><span>↔</span><span>RSP</span><span>↔</span><span>{locale === "en" ? "Operator" : locale === "zh-cn" ? "操作人员" : "操作人員"}</span></div>
          </figure>
          <div className={styles.capabilities}>
            {copy.technology.items.map((item, index) => <article key={item.title}><span className={styles.index}>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
        </div>
        <div className={styles.technologyFooter}><p>{copy.technology.note}</p><div className={styles.linkRow}><Link href={localizedPath(locale, "technology")} className={styles.textLink}>{copy.technology.cta}<ArrowUpRight size={18} aria-hidden="true" /></Link><Link href={localizedPath(locale, "solutions")} className={styles.textLink}>{copy.technology.solutions}<ArrowUpRight size={18} aria-hidden="true" /></Link></div></div>
      </div>
    </section>

    <section id="home-value" className={`${styles.section} ${styles.light}`}>
      <div className="section-shell">
        <SectionIntro {...copy.value} />
        <div className={styles.valueGrid}>
          {copy.value.items.map((item, index) => {
            const Icon = valueIcons[index];
            return <article key={item.label} className={styles.value}>
              <div className={styles.valueLabel}><span>0{index + 1} / {item.label}</span><Icon size={26} strokeWidth={1.5} aria-hidden="true" /></div>
              <h3>{item.title}</h3><p>{item.body}</p>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section id="home-field" className={`${styles.section} ${styles.paper}`}>
      <div className="section-shell">
        <SectionIntro {...copy.field} />
        <div className={styles.caseGrid}>
          <Link href={casePath} aria-label={copy.field.cta} className={styles.caseImage}><Image unoptimized src={imageSrc("/images/home/glp-field.jpg")} alt={copy.field.imageAlt} width={1280} height={720} sizes="(max-width: 1023px) calc(100vw - 32px), 730px" className={styles.contain} /></Link>
          <article className={styles.caseCopy}><p className={styles.eyebrow}>GLP</p><h3>{copy.field.name}</h3><p>{copy.field.description}</p><p className={styles.outcome}>{copy.field.outcome}</p><Link href={casePath} className={styles.textLink}>{copy.field.cta}<ArrowUpRight size={18} aria-hidden="true" /></Link></article>
        </div>
      </div>
    </section>

    <section id="home-philosophy" className={`${styles.philosophy} ${styles.dark}`} aria-labelledby="home-philosophy-title">
      <div className="section-shell">
        <div className={styles.philosophyTop}><h2 id="home-philosophy-title">{copy.philosophy.title}</h2><p>AI Force Be With You.</p></div>
        <div className={styles.pillars}>{copy.philosophy.pillars.map(pillar => <article key={pillar.word}><h3>{pillar.word}</h3><p className={styles.pillarLabel}>{pillar.label}</p><p>{pillar.verbs}</p></article>)}</div>
        <div className={styles.philosophyStatement}><p className={styles.brandLines}>{copy.philosophy.lines.map(line => <span key={line}>{line}</span>)}</p><p className={styles.brandBody}>{copy.philosophy.body}</p></div>
        <div className={styles.missionGrid}>{[{ label: copy.philosophy.missionLabel, ...copy.philosophy.mission }, { label: copy.philosophy.visionLabel, ...copy.philosophy.vision }].map(item => <article key={item.label}><p className={styles.eyebrow}>{item.label}</p><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </div>
    </section>

    <section id="home-cooperation" className={`${styles.section} ${styles.cooperation}`}>
      <div className={`section-shell metallic-surface metallic-edge metallic-hover ${styles.cooperationPanel}`}>
        <SectionIntro {...copy.cooperation} />
        <div className={styles.cooperationGrid}>{copy.cooperation.items.map((item, index) => <article key={item.title}><span className={styles.index}>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        <div className={styles.linkRow}><Link href={contactPath} data-analytics-event="inquiry_click" className={styles.primaryButton}>{copy.cooperation.cta}<ArrowRight size={18} aria-hidden="true" /></Link><Link href={contactPath} data-analytics-event="inquiry_click" className={styles.textLink}>{copy.cooperation.secondary}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>
  </div>;
}
