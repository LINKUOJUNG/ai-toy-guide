import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { RatingStars } from "@/components/common/RatingStars";
import { mockProducts } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI 智能玩具排行榜",
  description: "依評分、人氣、價格排名的 AI 智能玩具推薦排行榜。",
};

export default function RankingsPage() {
  const products = [...mockProducts].filter(p => p.is_published).sort((a, b) => b.rating_overall - a.rating_overall);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "排行榜" }]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-2">🏆 AI 智能玩具排行榜</h1>
      <p className="text-slate-500 mb-8">依據評分、功能、價格綜合排名</p>

      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={product.id} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4">
            <div className={`text-3xl font-bold w-12 text-center ${
              index === 0 ? "text-amber-500" : index === 1 ? "text-slate-400" : index === 2 ? "text-amber-700" : "text-slate-300"
            }`}>
              {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
            </div>
            <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-2xl shrink-0">🤖</div>
            <div className="flex-1 min-w-0">
              <Link href={`/products/${product.slug}`} className="font-bold text-slate-800 hover:text-indigo-600">
                {product.name}
              </Link>
              <p className="text-sm text-slate-500 truncate">{product.short_description}</p>
            </div>
            <div className="hidden sm:block">
              <RatingStars rating={product.rating_overall} size="sm" />
            </div>
            <div className="text-sm font-semibold text-slate-700 hidden md:block">
              {formatPrice(product.price_min, product.price_max)}
            </div>
            <Link href={`/products/${product.slug}`}
              className="px-4 py-2 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-100 shrink-0">
              查看
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
