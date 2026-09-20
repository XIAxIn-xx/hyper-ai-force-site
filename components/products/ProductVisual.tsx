"use client";

import Image from "next/image";
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
  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white">
        <Image
          src={view.src}
          alt={`${product.name} · ${view.label}`}
          fill
          priority={priority}
          sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1279px) 45vw, 560px"
          className={isForce01 ? "object-cover object-bottom" : "object-cover"}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={label}>
        {product.views.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-pressed={selected === index}
            onClick={() => onSelect(index)}
            className={`min-h-11 rounded-md border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${selected === index ? "border-orange-400/70 bg-orange-500/15 text-orange-200" : "border-white/15 text-slate-300 hover:bg-white/10"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
