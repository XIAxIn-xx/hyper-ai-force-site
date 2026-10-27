# Hyper AIForce homepage redesign

## Scope and content

English, Simplified Chinese and Traditional Chinese Home pages share the same
8-section structure. English follows the supplied brief; Chinese copies retain
its meaning. Existing official product typography `FORCE 01` / `FORCE 05` is used.
The official slogan is `AI Force Be With You.`

1. Hero — existing supplied video, brand introduction, product anchor and sales CTA.
2. Product Matrix — two static large product visuals, category, overview and details.
3. Applications — four static image modules with brief customer context.
4. Technology — existing RSP interface, a simple connection overview and 3 capabilities.
5. Why Hyper AIForce — Safety, Presence, Efficiency.
6. Proven in the Field — existing GLP deployment footage still and qualitative results.
7. Our Philosophy — AI / Force / You, brand statements, Mission and Vision together.
8. Work With Us — RaaS, Direct Purchase, Integration & Partnership, unified contact CTAs.

There are no scene-switching controls, specification tables or contact forms on
Home. Existing inner-page content and routes are reused rather than rebuilt.

## Files

- `components/HyperPage.tsx`: home assembly and first-screen poster preload.
- `components/sections/HeroSection.tsx`: localized home messaging, product anchor,
  sales CTA, responsive height, reduced-motion-aware title and existing video controls.
- `components/sections/HomeStory.tsx`: the 7 sections following Hero.
- `components/sections/HomeStory.module.css`: scoped light, neutral and dark sections,
  image fitting, responsive grids, readable contrast and restrained hover behavior.
- `data/home.ts`: English, Simplified Chinese and Traditional Chinese home content.
- `components/layout/Header.tsx`: Home-specific exact slogan and direct mobile
  contact link; corrected scroll background opacity for legibility on light sections.
- `app/page.tsx`, `app/zh-cn/page.tsx`, `app/zh-hk/page.tsx`: localized Home metadata
  and the supplied video poster as the share image.
- `app/globals.css`: disable smooth anchor scrolling under reduced motion.
- `lib/site.ts`, `.env.example`: default canonical origin updated to `https://haif.ai`.
  Existing canonical paths, hreflang relationships and index controls are retained.
- `public/images/home/glp-field.jpg`: still extracted from existing GLP video at 2s.
- `docs/website-architecture.md`, this file: current architecture and delivery notes.

No dependencies were installed. Footer, contact API, Cookie/GA4 implementation,
product explorer and detailed inner-page components are reused.

## CTA targets

All paths receive `/zh-cn` or `/zh-hk` for their corresponding language.

| Entry | Actual target |
| --- | --- |
| Explore Our Robots | `#home-products` |
| Explore FORCE 01 | `/products/force-01` |
| Explore FORCE 05 | `/products/force-05` |
| Application images / Explore Applications | `/applications` |
| Explore Technology | `/technology` |
| Explore Solutions | `/solutions` |
| View Case Study / case image | `/applications#case-study` |
| Header Contact / Contact Sales | `/contact` |
| Discuss Your Project / Contact Us | `/contact` |

The existing case is on Applications, so the CTA uses that actual page and anchor.
No new case-study URL or duplicate form was created. Existing contact-click event
attributes are preserved for configured, consented analytics.

## Media provenance and confirmation

The user explicitly authorized reuse of existing site images in the current chat,
including the product-page dog and sphere imagery, and confirmed public use of the
GLP customer name. Existing images are reused as supplied; no product structure,
logo or camera layout was altered. No new generated imagery or third-party robot
images were introduced. Reuse authorization is not an independent photographic
provenance audit of those existing assets.

| Placement | Existing source |
| --- | --- |
| Hero | `/videos/haiforce-hero.mp4`, supplied 10月27日(1).mp4 conversion; existing poster |
| Product Matrix | first views from `data/products.ts`: FORCE 01 villa and FORCE 05 office |
| Public Safety & Emergency Response | `/images/products/scenes-v2/force-05-rescue.webp` |
| Industrial & Remote Operations | `/images/products/scenes-v2/force-01-factory.webp` |
| Logistics & Warehousing | `/images/products/scenes-v2/force-01-warehouse.webp` |
| Property & Facility Security | `/images/products/scenes-v2/force-05-perimeter.webp` |
| Technology | `/images/capabilities/rsp-platform.png` |
| GLP case | frame at 2s of `/videos/glp-robot-inspection.mp4`, saved to `/images/home/glp-field.jpg` |

Product and scene visuals retain full composition. The supplied Hero video fills
its background container; decorative video pauses out of view, in hidden tabs or
under reduced motion, and has manual playback control. Other images load lazily.

No missing asset blocks the approved local design. Additional confirmed documentary
photos of emergency, facility and product operations would allow replacing existing
scene imagery without changing the layout. Any external campaign or new distribution
of customer media should use the company's approved media rights records.

## Claims and pending confirmation

- 60% / 80% / 40% are intentionally absent from Home. Confirm measurement periods,
  baselines, calculation and release approval before adding them.
- The headline below Proven in Practice uses qualitative deployment language rather
  than "Measurable impact" while numerical results remain unconfirmed.
- Technology is a system overview. A visible note distinguishes remote operation,
  assisted functions and autonomous modes and makes configuration dependence explicit.
- AI / Force / You expresses brand philosophy, not a claim that every product has
  autonomous perception or decision-making as standard.
- Existing inner-page numerical claims were outside this homepage edit and should
  be reconciled with approved evidence before any broader release review.
- `NEXT_PUBLIC_SITE_URL` overrides the new default. Production DNS, deployed metadata,
  analytics collection, mail delivery and customer data calculations are not established
  by local build and browser checks. This work does not deploy the site.

## Validation

- TypeScript check passed before browser verification.
- Desktop 1440px, tablet 834px and mobile 390px checked for horizontal overflow.
- Desktop brand philosophy height measured at about 792px; Mission / Vision included.
- Hero product anchor and a visible 44px-high mobile Header contact link checked.
- Build and final internal-link results are recorded below after completion.
- No standalone lint script/config or automated test suite is present; no packages
  were installed to create these. The Next build performs its available checks.

### Completed results

- `pnpm typecheck`: passed.
- `pnpm build`: passed; optimized build completed and generated 54 pages.
  Home First Load JS reported as 162 kB. This is build output, not a measured
  Core Web Vitals or Lighthouse score.
- Production build served locally for final HTTP and link checks: passed in all
  3 languages, exact 8-section order, one H1, no duplicated form, all Home image
  files available, canonical origin `https://haif.ai`, 57 internal route/anchor
  targets returned valid pages and existing anchors.
- Browser checks: desktop 1440×1000, tablet 834×1112, mobile 390×844. No horizontal
  overflow; static product layout stacks naturally; philosophy keywords fit their
  mobile columns without splitting the punctuation.
- Hero product anchor scrolled to Product Matrix. Discuss Your Project navigated
  to the existing Contact page. Header's mobile contact target measured 44px high.
- Supplied Hero video decoded and played in the browser (readyState 4). Existing
  reduced-motion and visibility playback logic retained; new title motion and
  anchor scrolling respect reduced-motion preferences.
- Final preview tab had no captured console errors.
- Desktop philosophy screenshot: `/tmp/haiforce-home-philosophy-desktop.png`.
- Mobile product screenshot: `/tmp/haiforce-home-mobile.png`.
- Preview remains local; no production deployment was performed.

Production preview logged Next.js's optional `sharp` recommendation. The build
and image delivery succeeded using the available fallback. For production image
optimization, the maintainer may install it manually with `pnpm add sharp`.
No dependency installation was performed in this change.
