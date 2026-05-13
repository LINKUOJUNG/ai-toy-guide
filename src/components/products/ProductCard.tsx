import Link from "next/link";
import { Product } from "@/lib/types";
import { RatingStars } from "@/components/common/RatingStars";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-6xl">🤖</div>
          {product.is_new && (
            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">新品</span>
          )}
          {product.is_hot && (
            <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">熱門</span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <div className="text-xs text-indigo-600 font-medium mb-1">{product.brand}</div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 mb-3 line-clamp-2">{product.short_description}</p>
        <div className="flex items-center gap-2 mb-2">
          <RatingStars rating={product.rating_overall} size="sm" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700">{formatPrice(product.price_min, product.price_max)}</span>
          <span className="text-xs text-slate-400">{product.age_range}</span>
        </div>
        <Link href={`/products/${product.slug}`}
          className="mt-3 block text-center py-2 bg-indigo-50 text-indigo-600 font-medium rounded-lg hover:bg-indigo-100 transition-colors text-sm">
          查看評測
        </Link>
      </div>
    </div>
  );
}
