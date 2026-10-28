"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/site";

// Outside the route slot: keep the current page visible until the next is ready.
export default function PageLoading() {
  const pathname = usePathname();
  const [pending, setPending] = useState(false);
  const locale = localeFromPath(pathname);
  useEffect(() => {
    setPending(false);
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const start = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement) || link.download || (link.target && link.target !== "_self")) return;
      const next = new URL(link.href, location.href);
      if (next.origin !== location.origin || next.pathname === pathname) return;
      clearTimeout(timeout);
      setPending(true);
      timeout = setTimeout(() => setPending(false), 15000);
    };
    document.addEventListener("click", start, true);
    return () => { document.removeEventListener("click", start, true); clearTimeout(timeout); };
  }, [pathname]);
  if (!pending) return null;
  const label = locale === "en" ? "Loading…" : locale === "zh-cn" ? "加载中…" : "載入中…";
  return <div role="status" aria-live="polite" className="route-pending"><span className="sr-only">{label}</span></div>;
}
