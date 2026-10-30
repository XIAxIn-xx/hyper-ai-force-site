import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/data/hyper";
import { editorial } from "@/data/editorial";
import { labels, localizedPath, type Section } from "@/lib/site";
import { imageSrc } from "@/lib/media";
import { Reveal } from "@/components/sections/Reveal";

export function EditorialSections({ locale, section }: { locale: Locale; section: Section }) {
  const copy = editorial[locale];
  const page = copy.pages[section];
  if (!page) return null;
  const timeline = section === "collaboration" || section === "solutions";
  return <div className={`editorial-story editorial-${section}`}>
    <section id="perspective" className="editorial-feature">
      <div className="section-shell editorial-feature-grid">
        <Reveal className="editorial-feature-copy">
          <p className="editorial-kicker">{labels[locale][section]} / 01</p>
          <h2>{page.title}</h2>
          <p className="editorial-intro">{page.intro}</p>
          <a className="editorial-link" href="#assessment">{copy.scope}<span aria-hidden="true">↓</span></a>
        </Reveal>
        <Reveal className="editorial-feature-media" delay={0.08}>
          <Image unoptimized src={imageSrc(page.image)} alt={labels[locale][section]} width={1600} height={1000} sizes="(max-width: 767px) 100vw, 60vw" className="editorial-image" />
          <div className="editorial-media-caption"><span>{locale === "en" ? "HYPER AIFORCE" : "超流智能"}</span><span>{labels[locale][section]}</span></div>
        </Reveal>
      </div>
    </section>
    <section id="assessment" className={`editorial-assessment ${timeline ? "editorial-timeline" : ""}`}>
      <div className="section-shell">
        <div className="editorial-section-heading"><p className="editorial-kicker">{timeline ? copy.process : copy.scope}</p><span aria-hidden="true">01 — 03</span></div>
        <div className="editorial-chapters">
          {page.chapters.map((chapter, index) => <Reveal key={chapter.title} delay={index * 0.05}>
            <article className="editorial-chapter"><span className="editorial-number">0{index + 1}</span><h3>{chapter.title}</h3><p>{chapter.body}</p></article>
          </Reveal>)}
        </div>
        {section === "technology" && <div className="editorial-system" aria-label={page.title}>
          {page.chapters.map((chapter, index) => <div key={chapter.title}><span className="editorial-system-node" aria-hidden="true">0{index + 1}</span><span>{chapter.title}</span></div>)}
          <Link href={localizedPath(locale, "solutions")}>RSP <span aria-hidden="true">↗</span></Link>
        </div>}
        <div className="editorial-next"><Link className="editorial-link" href={localizedPath(locale, page.target)}>{labels[locale][page.target as Section]}<span aria-hidden="true">↗</span></Link><Link className="editorial-cta" href={section === "contact" ? "#contact" : localizedPath(locale, "contact")} data-analytics-event="inquiry_click">{copy.next}<span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  </div>;
}

export function ProductAssessment({ locale }: { locale: Locale }) {
  const copy = editorial[locale];
  return <section id="selection" className="editorial-assessment"><div className="section-shell">
    <div className="editorial-selection-heading"><p className="editorial-kicker">{copy.scope}</p><h2>{copy.productTitle}</h2><p className="editorial-intro">{copy.productIntro}</p></div>
    <div className="editorial-chapters">{copy.productSteps.map((chapter, index) => <Reveal key={chapter.title} delay={index * 0.05}><article className="editorial-chapter"><span className="editorial-number">0{index + 1}</span><h3>{chapter.title}</h3><p>{chapter.body}</p></article></Reveal>)}</div>
  </div></section>;
}
