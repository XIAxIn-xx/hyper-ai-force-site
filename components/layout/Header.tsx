"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const homeHref =
    content.lang === "zh-HK" ? "/zh-hk" : content.lang === "zh-CN" ? "/zh-cn" : "/";

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 48);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b transition-all duration-300",
        scrolled || open
          ? "border-[#E6EAF0]/80 bg-[#F5F7FA]/90 text-slate-950 shadow-[0_12px_36px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "border-white/10 bg-transparent text-white"
      )}
    >
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href={homeHref} className="group flex items-center">
          <img
            src={
              scrolled || open
                ? "/images/logo/ai-force-logo-dark.png"
                : "/images/logo/ai-force-logo-light.png"
            }
            alt="AIForce"
            className="h-11 w-auto object-contain"
          />
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-7 text-sm transition-colors lg:flex",
            scrolled || open ? "text-slate-700" : "text-slate-300"
          )}
        >
          {content.nav.map((item) => (
            <a
              key={item.href}
              className={cn(
                "transition",
                scrolled || open ? "hover:text-cyan-700" : "hover:text-cyan-200"
              )}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2">
            {languageLinks.map((item) => (
              <Button
                key={item.lang}
                asChild
                variant="outline"
                size="sm"
                className={cn(
                  scrolled || open
                    ? "border-slate-300 text-slate-800 hover:bg-white"
                    : "border-white/20 text-white hover:bg-white/10",
                  content.lang === item.lang ? "bg-white/15 text-cyan-200" : ""
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>
          <Button asChild size="sm">
            <a href="#contact">{content.contact.button}</a>
          </Button>
        </div>

        <button
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors lg:hidden",
            scrolled || open
              ? "border-slate-300 bg-white/70 text-slate-900"
              : "border-white/15 text-white"
          )}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#E6EAF0] bg-[#F5F7FA]/95 shadow-[0_18px_36px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:hidden">
          <div className="section-shell flex flex-col gap-4 py-5 text-sm text-slate-700">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-white"
              >
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-4 gap-3 pt-2">
              {languageLinks.map((item) => (
                <Button
                  key={item.lang}
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(
                    "border-slate-300 text-slate-800 hover:bg-white",
                    content.lang === item.lang ? "bg-white text-cyan-700" : ""
                  )}
                >
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </Button>
              ))}
              <Button asChild size="sm">
                <a href="#contact" onClick={() => setOpen(false)}>
                  {content.contact.button}
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
