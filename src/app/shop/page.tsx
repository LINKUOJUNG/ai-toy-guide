import type { Metadata } from "next";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AffiliateDisclosure } from "@/components/common/AffiliateDisclosure";
import { AffiliateButton } from "@/components/common/AffiliateButton";
import { RatingStars } from "@/components/common/RatingStars";
import { mockProducts, mockAffiliateLinks } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI 智能玩具推薦商城",
  description: "精選熱門 AI 玩具、互動機器人、STEAM 編程玩具。依年齡、價格、功能篩選，找到最適合的選擇。",
};

export default function ShopPage() {
  const products = mockProducts.filter(p => p.is_published);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "推薦商城" }]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-2">AI 智能玩具推薦商城</h1>
      <p className="text-slate-500 mb-6">
        精選熱門 AI 玩具、互動機器人、STEAM 編程玩具與親子科技產品。
      </p>
      <AffiliateDisclosure className="mb-8" />

      <div className="space-y-6">
        {products.map((product) => {
          const links = mockAffiliateLinks.filter(l => l.product_id === product.id && l.is_active);
          return (
            <div key={product.id} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-slate-100 rounded-lg flex items-center justify-center text-5xl shrink-0">
                🤖
              </div>
              <div className="flex-1">
                <div className="text-xs text-indigo-600 font-medium mb-1">{product.brand}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{product.short_description}</p>
                <div className="flex items-center gap-4 mb-3">
                  <RatingStars rating={product.rating_overall} size="sm" />
                  <span className="text-sm text-slate-400">{product.age_range}</span>
                </div>
                <div className="text-lg font-bold text-slate-800 mb-4">
                  {formatPrice(product.price_min, product.price_max)}
                </div>
                <div className="flex flex-wrap gap-3">
                  {links.map((link) => (
                    <AffiliateButton key={link.id} href={link.affiliate_url} platform={link.platform_name}
                      className="text-sm px-4 py-2" />
                  ))}
                  {links.length === 0 && (
                    <span className="text-sm text-slate-400">購買連結即將上線</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
