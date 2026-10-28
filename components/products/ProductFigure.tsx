import Image from "next/image";
import type { Product } from "@/data/products";
import { imageSrc } from "@/lib/media";

export function ProductFigure({ product, index, priority = false }: { product: Product; index: number; priority?: boolean }) {
  const view = product.views[index];
  return <figure className="product-editorial-figure">
    <div className="product-editorial-image"><Image unoptimized src={imageSrc(view.src)} alt={`${product.model} · ${view.label}`} width={view.width} height={view.height} priority={priority} sizes="(max-width: 767px) 100vw, 1180px" /></div>
    <figcaption><span>{product.model} / {String(index + 1).padStart(2, "0")}</span><span>{view.label}</span></figcaption>
  </figure>;
}
