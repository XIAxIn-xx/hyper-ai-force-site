# HAIFORCE website architecture

English uses `/`, Simplified Chinese `/zh-cn`, Traditional Chinese `/zh-hk`.
Each locale has products, technology, solutions, applications, collaboration,
resources, about, contact, privacy, terms, cookies, disclaimer and accessibility.
Existing FORCE 01 / FORCE 05 URLs remain unchanged. Language switching retains
its current page. Home has its own brand narrative: hero, the reason for remote presence, selected product imagery, a concise observation-to-action story, a project glimpse, brand belief and a conversation CTA. It does not reuse the full product explorer, capability sections, RSP workflow, case metrics, company introduction or inquiry form. Homepage copy is in `data/home.ts`; presentation is in `components/sections/HomeStory.tsx`. Detailed content and the inquiry form live on their dedicated pages.

## Content ownership

- Technology: existing capability-system content.
- Solutions: existing RSP inspection workflow.
- Applications: existing application scenarios and logistics-park case study.
- Collaboration: existing service / collaboration models.
- About: existing company information.
- Resources: `data/resources.ts`. Replace ese placeholders with approved documents.
  Store files in `public/downloads/`; set href to `/downloads/<filename>`.
  Add accurate title, product, language, version and update date. Null href keeps
  download disabled. Do not link an unapproved or missing document.
- Legal copy: `data/legal.ts`. Company must confirm entity, actual processing,
  retention and applicable requirements before publication.

## Environment

Existing Resend and Turnstile configuration is preserved. See `.env.example`.
`NEXT_PUBLIC_SITE_URL` is the canonical public origin; it defaults to the prior
site's configured `https://hyperaiforce.com`. Confirm domain before publication.
`NEXT_PUBLIC_GA4_ID` must be HAIFORCE's own `G-...` web-stream ID. Empty means
no GA4 script loads. Public environment changes require restarting development
or redeploying production. No Matter Poise analytics ID is reused.
`SITE_NOINDEX=true` disables indexing for other preview deployments. Vercel
preview environments are detected automatically. robots.txt, metadata and
X-Robots-Tag cover preview indexing. Index controls are not access controls.

## GA4 setup and verification

In the GA4 web stream, disable Enhanced Measurement automatic events, including
history-based page views, form interactions, outbound clicks and file downloads.
This site sends its own page_view, inquiry_click, contact_submit_success and
file_download events. Automatic collection would duplicate events and could
include URLs or form-related data outside the custom integration's allowlist.
Keep Google Signals and advertising features disabled in the property.

Custom page identity comes from approved static routes. Query strings, fragments,
referring URLs and inquiry content are not included. Only approved product IDs
are added to inquiry events. Unknown routes do not generate events.

Check in a fresh browser session:
1. Before a choice, no gtag script or analytics requests.
2. Reject: no analytics script; navigate and reload to verify persistence.
3. With a configured ID, accept: one page_view per route change; no extra query data.
4. Footer preferences: reject after accepting; verify subsequent events stop and
   accessible _ga cookies are removed. Previously collected data is unaffected.
5. Change preference in a second same-origin tab and verify synchronization.
6. Validate inquiry_click and contact_submit_success in GA4 DebugView / Realtime.
   Confirm incoming and acknowledgement emails separately using a test inquiry.
7. Enable file_download validation once approved download files are published.

Local verification does not confirm GA4 backend collection, email delivery,
production indexing, or legal approval.
