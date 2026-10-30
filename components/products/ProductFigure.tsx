import { sphereStoryForImage } from "@/data/sphereScenes";
import type { Locale } from "@/data/hyper";
import Image from "next/image";
import type { Product } from "@/data/products";
import { imageSrc } from "@/lib/media";

export function ProductFigure({ product, index, priority = false, locale = "en" }: { product: Product; index: number; priority?: boolean; locale?: Locale }) {
  const view = product.views[index];
  const story = sphereStoryForImage(locale, view.src);
  return <figure className="product-editorial-figure">
    <div className="product-editorial-image"><Image unoptimized src={imageSrc(view.src)} alt={`${product.model} · ${view.label}`} width={view.width} height={view.height} priority={priority} sizes="(max-width: 767px) 100vw, 1180px" /></div>
    <figcaption><span>{product.model} / {story ? (locale === "en" ? "FIELD SCENARIO" : locale === "zh-cn" ? "场景观察" : "場景觀察") : String(index + 1).padStart(2, "0")}</span><span>{view.label}</span></figcaption>
    {story && <div className="sphere-scene-copy"><h3>{story.title}</h3><p>{story.body}</p></div>}
  </figure>;
}
