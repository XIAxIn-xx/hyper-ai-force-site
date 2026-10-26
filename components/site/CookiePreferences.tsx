"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CONSENT_EVENT, CONSENT_KEY, PREFERENCES_EVENT, readConsent, saveConsent, trackEvent, trackPage, updateAnalyticsConsent, type Consent } from "@/lib/analytics";
import { labels, localeFromPath, localizedPath } from "@/lib/site";

const copy = {
  en: { title: "Cookies & preferences", text: "Necessary storage remembers your choice. Optional Google Analytics helps us understand website use and loads only with your consent.", accept: "Accept analytics", reject: "Reject analytics", manage: "Manage preferences", necessary: "Necessary storage (always on)", analytics: "Allow analytics", save: "Save preferences", close: "Close" },
  "zh-cn": { title: "Cookie 与偏好设置", text: "必要存储用于记住您的选择。可选 Google Analytics 帮助了解网站使用情况，仅在您同意后加载。", accept: "接受分析", reject: "拒绝分析", manage: "管理偏好", necessary: "必要存储（始终开启）", analytics: "允许分析", save: "保存偏好", close: "关闭" },
  "zh-hk": { title: "Cookie 與偏好設定", text: "必要儲存用於記住您的選擇。可選 Google Analytics 協助了解網站使用情況，僅在您同意後載入。", accept: "接受分析", reject: "拒絕分析", manage: "管理偏好", necessary: "必要儲存（始終開啟）", analytics: "允許分析", save: "儲存偏好", close: "關閉" }
};
export function PreferencesButton({ children }: { children: React.ReactNode }) {
  return <button type="button" onClick={() => window.dispatchEvent(new Event(PREFERENCES_EVENT))} className="min-h-11 text-left text-sm text-slate-400 hover:text-orange-200">{children}</button>;
}
export function CookiePreferences() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const text = copy[locale];
  const [banner, setBanner] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const priorFocus = useRef<HTMLElement | null>(null);
  const choice = useRef<Consent | null>(null);
  useEffect(() => {
    const sync = () => {
      const saved = readConsent(); choice.current = saved;
      setBanner(!saved); setAnalytics(saved?.analytics === true);
      updateAnalyticsConsent(saved?.analytics === true, window.location.pathname);
    };
    const change = (event: Event) => {
      const saved = (event as CustomEvent<Consent>).detail;
      choice.current = saved; setBanner(false); setAnalytics(saved.analytics);
      updateAnalyticsConsent(saved.analytics, window.location.pathname);
    };
    const open = () => {
      priorFocus.current = document.activeElement as HTMLElement;
      setAnalytics(choice.current?.analytics === true);
      dialog.current?.showModal();
    };
    const expiry = window.setInterval(() => {
      const saved = choice.current;
      if (saved && Date.now() - saved.updatedAt >= 180 * 86400000) {
        choice.current = null; setBanner(true); setAnalytics(false);
        updateAnalyticsConsent(false, window.location.pathname);
      }
    }, 60000);
    const storage = (event: StorageEvent) => { if (event.key === CONSENT_KEY || event.key === null) sync(); };
    const click = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-analytics-event]") : null;
      const name = target?.dataset.analyticsEvent;
      if (name === "inquiry_click" || name === "file_download") trackEvent(name, target?.dataset.product || target?.dataset.resource);
    };
    sync();
    window.addEventListener(CONSENT_EVENT, change);
    window.addEventListener(PREFERENCES_EVENT, open);
    window.addEventListener("storage", storage);
    document.addEventListener("click", click);
    return () => {
      window.clearInterval(expiry);
      window.removeEventListener(CONSENT_EVENT, change);
      window.removeEventListener(PREFERENCES_EVENT, open);
      window.removeEventListener("storage", storage);
      document.removeEventListener("click", click);
    };
  }, []);
  useEffect(() => {
    const saved = choice.current;
    if (saved && Date.now() - saved.updatedAt >= 180 * 86400000) {
      choice.current = null; setBanner(true); updateAnalyticsConsent(false, pathname);
    } else trackPage(pathname);
  }, [pathname]);
  function save(value: boolean) { saveConsent(value); dialog.current?.close(); }
  const button = "min-h-11 rounded-md border border-white/20 px-4 py-2 text-sm hover:border-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-300";
  return <>
    {banner && <aside aria-labelledby="cookie-banner-title" className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-4xl rounded-xl border border-white/20 bg-[#0B1520] p-5 text-white shadow-2xl md:p-6">
      <h2 id="cookie-banner-title" className="text-lg font-semibold">{text.title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text.text} <Link href={localizedPath(locale, "cookies")} className="text-orange-300 underline">{labels[locale].cookies}</Link></p>
      <div className="mt-4 flex flex-wrap gap-3"><button className={button} onClick={() => save(true)}>{text.accept}</button><button className={button} onClick={() => save(false)}>{text.reject}</button><button className={button} onClick={() => window.dispatchEvent(new Event(PREFERENCES_EVENT))}>{text.manage}</button></div>
    </aside>}
    <dialog ref={dialog} aria-labelledby="cookie-dialog-title" onClose={() => priorFocus.current?.focus()} className="m-auto max-h-[85dvh] w-[calc(100%_-_2rem)] max-w-lg overflow-auto rounded-xl border border-white/20 bg-[#0B1520] p-6 text-white shadow-2xl backdrop:bg-black/70">
      <div className="flex items-start justify-between gap-4"><h2 id="cookie-dialog-title" className="text-xl font-semibold">{text.title}</h2><button className="min-h-11 px-2 text-sm text-slate-300" onClick={() => dialog.current?.close()}>{text.close}</button></div>
      <p className="my-5 text-sm leading-6 text-slate-300">{text.text}</p>
      <p className="border-y border-white/10 py-4 text-sm">{text.necessary}</p>
      <label className="my-5 flex min-h-11 items-center gap-3"><input type="checkbox" checked={analytics} onChange={event => setAnalytics(event.target.checked)} className="h-5 w-5 accent-orange-500" />{text.analytics}</label>
      <div className="flex flex-wrap gap-3"><button className={button} onClick={() => save(analytics)}>{text.save}</button><button className={button} onClick={() => save(false)}>{text.reject}</button></div>
      <Link href={localizedPath(locale, "privacy")} onClick={() => dialog.current?.close()} className="mt-5 inline-flex min-h-11 items-center text-sm text-orange-300 underline">{labels[locale].privacy}</Link>
    </dialog>
  </>;
}
