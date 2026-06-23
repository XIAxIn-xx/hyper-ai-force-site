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

export function Header({ content }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <Link href={content.lang === "zh-HK" ? "/zh-hk" : "/"} className="group flex items-center gap-3">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md border text-sm font-black tracking-tight shadow-glow transition-colors",
              scrolled || open
                ? "border-cyan-500/35 bg-white text-cyan-700"
                : "border-cyan-300/40 bg-cyan-300/10 text-cyan-200"
            )}
          >
            HF
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide">
              Hyper AI Force
            </span>
            <span
              className={cn(
                "block text-[11px] uppercase tracking-[0.28em] transition-colors",
                scrolled || open ? "text-slate-500" : "text-slate-400"
              )}
            >
              AI Robotics
            </span>
          </span>
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
          <Button
            asChild
            variant="outline"
            size="sm"
            className={cn(
              scrolled || open
                ? "border-slate-300 text-slate-800 hover:bg-white"
                : "border-white/20 text-white hover:bg-white/10"
            )}
          >
            <Link href={content.switchHref}>{content.switchLabel}</Link>
          </Button>
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
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-800 hover:bg-white"
              >
                <Link href={content.switchHref}>{content.switchLabel}</Link>
              </Button>
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
