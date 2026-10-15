"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
  selected: number;
  onSelect: (index: number) => void;
  label: string;
  priority?: boolean;
};

export function ProductVisual({ product, selected, onSelect, label, priority = false }: Props) {
  const view = product.views[selected];
  const isForce01 = product.slug === "force-01";
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 140, damping: 24 });
  const rotateY = useSpring(x, { stiffness: 140, damping: 24 });
  return (
    <div>
      <div style={{ perspective: 1000 }} onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - rect.left) / rect.width - 0.5) * 5);
        y.set(-((event.clientY - rect.top) / rect.height - 0.5) * 5);
      }} onPointerLeave={() => { x.set(0); y.set(0); }}>
      <motion.div style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY }} className="relative aspect-square overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)]">
        <AnimatePresence initial={false}>
        <motion.div key={view.src} className="absolute inset-0" initial={{ opacity: 0, scale: reduced ? 1 : 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.4 }}>
          <Image
          src={view.src}
          alt={`${product.name} · ${view.label}`}
          fill
          priority={priority}
          sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1279px) 45vw, 560px"
          className={isForce01 ? "object-cover object-bottom" : "object-cover"}
          />
        </motion.div>
        </AnimatePresence>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-5 bottom-5 flex items-center justify-between font-mono text-xs tracking-widest text-white"><span>{product.model}</span><span>0{selected + 1} / 0{product.views.length}</span></div>
      </motion.div>
      </div>
      <p className="mb-3 mt-5 text-xs text-slate-400">{label}</p>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {product.views.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-pressed={selected === index}
            onClick={() => onSelect(index)}
            className={`flex min-h-12 items-center gap-3 rounded-xl border p-1.5 pr-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${selected === index ? "border-orange-400/70 bg-orange-500/15 text-orange-200" : "border-white/15 text-slate-300 hover:bg-white/10"}`}
          >
            <span className="relative h-9 w-10 shrink-0 overflow-hidden rounded-md bg-white"><Image src={item.src} alt="" fill sizes="40px" className={isForce01 ? "object-cover object-bottom" : "object-cover"} /></span>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
