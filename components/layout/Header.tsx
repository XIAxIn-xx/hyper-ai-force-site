"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { labels, localeFromPath, localizedPath } from "@/lib/site";
import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { HyperContent } from "@/data/hyper";
import { productPath, type ProductSlug } from "@/data/products";
import { cn } from "@/lib/utils";

type HeaderProps = {
  content: HyperContent;
  productSlug?: ProductSlug;
  home?: boolean;
};

const languageLinks = [
  { lang: "en", label: "EN", href: "/" },
  { lang: "zh-HK", label: "繁中", href: "/zh-hk" },
  { lang: "zh-CN", label: "简中", href: "/zh-cn" }
];

export function Header({ content, home = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const homeHref =
    content.lang === "zh-HK" ? "/zh-hk" : content.lang === "zh-CN" ? "/zh-cn" : "/";
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const currentPage = pathname.replace(/^\/zh-(cn|hk)(?=\/|$)/, "").replace(/^\//, "");
  const nav = ["home", "products", "technology", "solutions", "applications", "collaboration", "about"].map(key => ({
    key,
    href: localizedPath(locale, key === "home" ? "" : key),
    label: labels[locale][key as keyof typeof labels.en]
  }));
  const languageButtonLabel =
    content.lang === "en" ? "Language" : content.lang === "zh-HK" ? "語言" : "语言";

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 48);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const languageMenu = (className: string) => (
    <div className={cn("rounded-lg border border-white/10 bg-[color-mix(in_srgb,var(--surface-dark)_95%,transparent)] p-1.5 shadow-[0_18px_42px_rgba(0,0,0,0.34)] backdrop-blur-xl", className)}>
      {languageLinks.map((item) => (
        <a
          key={item.lang}
          href={localizedPath(item.lang === "en" ? "en" : item.lang === "zh-CN" ? "zh-cn" : "zh-hk", currentPage)}
          onClick={() => setLanguageOpen(false)}
          className={cn(
            "flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors",
              content.lang === item.lang
                ? "bg-orange-500 text-[var(--text-primary-light)]"
              : "text-slate-300 hover:bg-white/10 hover:text-brand"
          )}
        >
          {item.label}
        </a>
      ))}
    </div>
  );

  const languageTrigger = (
    <button
      type="button"
      aria-label={languageButtonLabel}
      aria-expanded={languageOpen}
      onClick={() => { setLanguageOpen((value) => !value); setProductsOpen(false); }}
      className={cn(
        "inline-flex h-10 items-center gap-2 rounded-md border px-3 transition-colors",
        scrolled || open || languageOpen
          ? "border-white/15 bg-[color-mix(in_srgb,var(--surface-dark)_80%,transparent)] text-white hover:bg-white/10"
          : "border-white/15 text-white hover:bg-white/10"
      )}
    >
      <Globe2 className="h-5 w-5" />
      <span className={home ? "hidden text-xs font-semibold sm:inline" : "text-xs font-semibold"}>{languageButtonLabel}</span>
    </button>
  );

  useEffect(() => {
    setOpen(false); setLanguageOpen(false); setProductsOpen(false);
  }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); setLanguageOpen(false); setProductsOpen(false); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    const closeProducts = (event: PointerEvent) => {
      if (event.target instanceof Element && !event.target.closest("[data-products-nav]")) setProductsOpen(false);
    };
    document.addEventListener("pointerdown", closeProducts);
    return () => document.removeEventListener("pointerdown", closeProducts);
  }, []);

  const productNav = (item: (typeof nav)[number], mobile = false) => {
    const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
    const submenuId = mobile ? "mobile-products-submenu" : "desktop-products-submenu";
    return <div key={item.href} data-products-nav className={mobile ? "" : "relative"}
      onMouseLeave={mobile ? undefined : () => setProductsOpen(false)}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setProductsOpen(false); }}
      onKeyDown={event => {
        if (event.key === "Escape") {
          event.stopPropagation();
          setProductsOpen(false);
          event.currentTarget.querySelector("button")?.focus();
        }
      }}>
      <div className={cn("flex items-center", mobile ? "justify-between" : "gap-1", active && "text-brand")}>
        <Link prefetch href={item.href} aria-current={pathname === item.href ? "page" : undefined}
          onMouseEnter={mobile ? undefined : () => { setProductsOpen(true); setLanguageOpen(false); }}
          onClick={() => { setOpen(false); setProductsOpen(false); }}
          className={cn("hover:text-brand", mobile ? "flex-1 rounded-md px-2 py-2" : "py-3", content.lang !== "en" && "zh-nav font-medium tracking-normal")}>
          {item.label}
        </Link>
        <button type="button" aria-expanded={productsOpen} aria-controls={submenuId}
          aria-label={locale === "en" ? "Products submenu" : locale === "zh-cn" ? "产品子菜单" : "產品子選單"}
          onClick={() => { setProductsOpen(value => !value); setLanguageOpen(false); }}
          className="inline-flex h-11 w-8 items-center justify-center rounded-md hover:bg-white/10 hover:text-brand">
          <ChevronDown aria-hidden="true" className={cn("h-4 w-4 transition-transform motion-reduce:transition-none", productsOpen && "rotate-180")} />
        </button>
      </div>
      {productsOpen && <div id={submenuId} className={cn(
        mobile ? "ml-2 mt-1 border-l border-white/15 pl-3" : "metallic-surface metallic-edge absolute left-0 top-full w-44 whitespace-nowrap rounded-lg p-1.5 shadow-xl"
      )}>
        {(["force-01", "force-05"] as const).map(slug => {
          const href = productPath(locale, slug);
          return <Link prefetch key={slug} href={href} aria-current={pathname === href ? "page" : undefined}
            onClick={() => { setOpen(false); setProductsOpen(false); }}
            className={cn("flex min-h-11 items-center rounded-md px-3 text-sm font-medium hover:bg-white/10 hover:text-brand", pathname === href ? "text-brand" : "text-slate-300")}>
            {slug === "force-01" ? "FORCE 01" : "FORCE 05"}
          </Link>;
        })}
      </div>}
    </div>;
  };

  return (
    <header
      className={cn(
        "site-header fixed left-0 top-0 z-50 w-full border-b transition-all duration-300",
        scrolled || open
          ? "site-header-scrolled text-white shadow-[0_8px_24px_rgb(0_0_0/0.16)]"
          : "text-white"
      )}
    >
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href={homeHref} className="group flex flex-col items-start justify-center">
          <img
            src="/images/logo/ai-force-logo-light.png"
            alt="AIForce"
            className="h-11 w-auto object-contain"
          />
          <span
            className={cn(
              "mt-0.5 whitespace-nowrap text-[10px] font-semibold leading-3 tracking-[0.12em]",
              "text-slate-300"
            )}
          >
            {home ? "AI Force Be With You." : content.hero.slogan}
          </span>
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-4 text-sm transition-colors xl:flex",
            "text-slate-300"
          )}
        >
          {nav.map((item) => item.key === "products" ? productNav(item) : (
            <Link
              prefetch
              key={item.href}
              className={cn(
                "transition",
                content.lang !== "en" ? "zh-nav text-sm font-medium tracking-normal" : "",
                "hover:text-brand",
                pathname === item.href ? "text-brand" : ""
              )}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <div className="relative">
            {languageTrigger}
            {languageOpen ? languageMenu("absolute right-0 top-full z-10 mt-2 w-32") : null}
          </div>
          <Button asChild size="sm" className="shadow-none">
            <Link href={localizedPath(locale, "contact")} data-analytics-event="inquiry_click">{content.contact.navButton}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          {home && <Link href={localizedPath(locale, "contact")} data-analytics-event="inquiry_click" className="inline-flex min-h-11 items-center rounded-md brand-button px-3 text-xs font-semibold">{content.contact.navButton}</Link>}
          {languageTrigger}
          <button
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors",
              "border-white/15 text-white hover:bg-white/10"
            )}
            aria-label={locale === "en" ? "Toggle navigation" : locale === "zh-cn" ? "展开导航" : "展開導覽"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => {
              setOpen((value) => !value);
              setProductsOpen(!open && currentPage.startsWith("products/"));
              setLanguageOpen(false);
            }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {languageOpen ? <div className="absolute right-4 top-20 xl:hidden">{languageMenu("w-32")}</div> : null}

      {open ? (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-[color-mix(in_srgb,var(--bg-dark)_95%,transparent)] shadow-[0_18px_36px_rgba(0,0,0,0.3)] backdrop-blur-xl xl:hidden">
          <div className="section-shell flex flex-col gap-4 py-5 text-sm text-slate-300">
            {nav.map((item) => item.key === "products" ? productNav(item, true) : (
              <Link
                prefetch
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => {
                  setOpen(false);
                  setLanguageOpen(false);
                }}
                className="rounded-md px-2 py-2 hover:bg-white/10 hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild size="sm" className="shadow-none">
                <Link prefetch href={localizedPath(locale, "contact")} data-analytics-event="inquiry_click" onClick={() => setOpen(false)}>
                  {content.contact.navButton}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
