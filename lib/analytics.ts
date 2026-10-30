import { resources } from "@/data/resources";
import { labels, localeFromPath, localizedPath, sections } from "@/lib/site";

export const CONSENT_KEY = "haiforce-cookie-preferences-v1";
export const CONSENT_EVENT = "haiforce-consent-change";
export const PREFERENCES_EVENT = "haiforce-open-preferences";
export const ANALYTICS_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
export type Consent = { version: 1; analytics: boolean; updatedAt: number };
const consentDuration = 180 * 24 * 60 * 60 * 1000;
export function readConsent(): Consent | null {
  try {
    const value = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
    return value?.version === 1 && typeof value.analytics === "boolean" && typeof value.updatedAt === "number" && value.updatedAt <= Date.now() && Date.now() - value.updatedAt < consentDuration ? value : null;
  } catch { return null; }
}
export function saveConsent(analytics: boolean) {
  const consent: Consent = { version: 1, analytics, updatedAt: Date.now() };
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(consent)); } catch { /* In-memory choice remains usable. */ }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
}
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } & Record<string, unknown>;
const analyticsWindow = () => window as unknown as AnalyticsWindow;
const denied = { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" };
let allowed = false;
let prepared = false;
let lastPage = "";
let transientUntil = 0;
function pageIdentity(path: string) {
  const locale = localeFromPath(path);
  const approved = ["", ...sections, "products/force-01", "products/force-05"];
  const route = approved.find(route => localizedPath(locale, route) === path);
  if (route === undefined) return null;
  const name = route === "" ? labels[locale].home : route === "products/force-01" ? "FORCE 01" : route === "products/force-05" ? "FORCE 05" : labels[locale][route as typeof sections[number]];
  const brand = locale === "en" ? "Hyper AIForce" : "超流智能";
  return { page_location: window.location.origin + path, page_title: `${name} | ${brand}`, page_referrer: "" };
}
function clearAnalyticsCookies() {
  const domains = ["", ...window.location.hostname.split(".").map((_, index, parts) => parts.slice(index).join(".")).filter(domain => domain.includes(".")).map(domain => `; Domain=.${domain}`)];
  const paths = ["/", ...window.location.pathname.split("/").filter(Boolean).map((_, index, parts) => "/" + parts.slice(0, index + 1).join("/"))];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!/^_ga(?:_|$)/.test(name)) continue;
    for (const domain of domains) for (const path of paths) document.cookie = `${name}=; Path=${path}; Max-Age=0${domain}; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
  }
}
export function updateAnalyticsConsent(accept: boolean, path: string) {
  allowed = accept;
  // Storage-restricted browsers can still use a choice for this page session.
  transientUntil = accept ? Date.now() + consentDuration : 0;
  const w = analyticsWindow();
  if (/^G-[A-Z0-9]+$/.test(ANALYTICS_ID)) w[`ga-disable-${ANALYTICS_ID}`] = !accept;
  if (!accept) {
    lastPage = "";
    // ga-disable is set before any consent update, including withdrawal.
    if (prepared) w.gtag?.("consent", "update", denied);
    clearAnalyticsCookies();
    return;
  }
  trackPage(path);
}
export function trackPage(path: string) {
  if (!allowed || Date.now() >= transientUntil || !/^G-[A-Z0-9]+$/.test(ANALYTICS_ID)) return;
  const data = pageIdentity(path);
  if (!data) return;
  const w = analyticsWindow();
  if (!prepared) {
    w.dataLayer = w.dataLayer || [];
    w.gtag = w.gtag || function () { w.dataLayer!.push(arguments); };
    w.gtag("consent", "default", denied);
    w.gtag("js", new Date());
    prepared = true;
  }
  if (lastPage === data.page_location) return;
  w.gtag?.("consent", "update", { ...denied, analytics_storage: "granted" });
  w.gtag?.("set", data);
  w.gtag?.("config", ANALYTICS_ID, { ...data, send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, ignore_referrer: true });
  w.gtag?.("event", "page_view", data);
  lastPage = data.page_location;
  if (!document.getElementById("haiforce-ga4")) {
    const script = document.createElement("script");
    script.id = "haiforce-ga4"; script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ANALYTICS_ID)}`;
    script.onerror = () => { script.remove(); lastPage = ""; };
    document.head.appendChild(script);
  }
}
export function trackEvent(name: "inquiry_click" | "contact_submit_success" | "file_download", value?: string) {
  if (!allowed || Date.now() >= transientUntil || !prepared || !/^G-[A-Z0-9]+$/.test(ANALYTICS_ID)) return;
  const data = pageIdentity(window.location.pathname);
  if (!data) return;
  const product = value === "force-01" || value === "force-05" ? value : undefined;
  const resource = resources.find(item => item.id === value && item.href);
  // Resource IDs come only from the published resource catalogue.
  analyticsWindow().gtag?.("event", name, { ...data, ...(product ? { product_id: product } : {}), ...(resource ? { resource_id: resource.id } : {}) });
}
