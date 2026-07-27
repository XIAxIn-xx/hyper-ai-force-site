"use client";

import Link from "next/link";
import { Globe2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { HyperContent } from "@/data/hyper";
import { cn } from "@/lib/utils";

type HeaderProps = {
  content: HyperContent;
};

const languageLinks = [
  { lang: "en", label: "EN", href: "/" },
  { lang: "zh-HK", label: "繁中", href: "/zh-hk" },
  { lang: "zh-CN", label: "简中", href: "/zh-cn" }
];

export function Header({ content }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const homeHref =
    content.lang === "zh-HK" ? "/zh-hk" : content.lang === "zh-CN" ? "/zh-cn" : "/";
  const languageButtonLabel =
    content.lang === "en" ? "Language" : content.lang === "zh-HK" ? "語言" : "语言";

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 48);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const languageMenu = (className: string) => (
    <div className={cn("rounded-lg border border-white/10 bg-[#0D1721]/95 p-1.5 shadow-[0_18px_42px_rgba(0,0,0,0.34)] backdrop-blur-xl", className)}>
      {languageLinks.map((item) => (
        <Link
          key={item.lang}
          href={item.href}
          onClick={() => setLanguageOpen(false)}
          className={cn(
            "flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors",
              content.lang === item.lang
                ? "bg-orange-500 text-white"
              : "text-slate-300 hover:bg-white/10 hover:text-orange-200"
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  const languageTrigger = (
    <button
      type="button"
      aria-label={languageButtonLabel}
      aria-expanded={languageOpen}
      onClick={() => setLanguageOpen((value) => !value)}
      className={cn(
        "inline-flex h-10 items-center gap-2 rounded-md border px-3 transition-colors",
        scrolled || open || languageOpen
          ? "border-white/15 bg-[#0D1721]/80 text-white hover:bg-white/10"
          : "border-white/15 text-white hover:bg-white/10"
      )}
    >
      <Globe2 className="h-5 w-5" />
      <span className="text-xs font-semibold">{languageButtonLabel}</span>
    </button>
  );

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b transition-all duration-300",
        scrolled || open
          ? "border-white/10 bg-[#071019]/92 text-white shadow-[0_12px_36px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-white/10 bg-transparent text-white"
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
              "text-orange-100/80"
            )}
          >
            {content.hero.slogan}
          </span>
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-7 text-sm transition-colors lg:flex",
            "text-slate-300"
          )}
        >
          {content.nav.map((item) => (
            <a
              key={item.href}
              className={cn(
                "transition",
                content.lang !== "en" ? "zh-nav text-sm font-medium tracking-normal" : "",
                "hover:text-orange-200"
              )}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            {languageTrigger}
            {languageOpen ? languageMenu("absolute right-0 top-full z-10 mt-2 w-32") : null}
          </div>
          <Button asChild size="sm">
            <a href="#contact">{content.contact.navButton}</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {languageTrigger}
          <button
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors",
              "border-white/15 text-white hover:bg-white/10"
            )}
            aria-label="Toggle navigation"
            onClick={() => {
              setOpen((value) => !value);
              setLanguageOpen(false);
            }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {languageOpen ? <div className="absolute right-4 top-20 lg:hidden">{languageMenu("w-32")}</div> : null}

      {open ? (
        <div className="border-t border-white/10 bg-[#071019]/95 shadow-[0_18px_36px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:hidden">
          <div className="section-shell flex flex-col gap-4 py-5 text-sm text-slate-300">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  setLanguageOpen(false);
                }}
                className="rounded-md px-2 py-2 hover:bg-white/10 hover:text-orange-200"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <Button asChild size="sm">
                <a href="#contact" onClick={() => setOpen(false)}>
                  {content.contact.navButton}
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
