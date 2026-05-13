import type { Metadata } from "next";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { mockProducts, getProductCategories } from "@/lib/mock-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI 智能玩具商品總覽",
  description: "探索所有 AI 智能玩具：AI 機器人、互動寵物、STEAM 編程玩具、語音互動玩具、智慧陪伴玩具。",
};

export default function ProductsPage() {
  const products = mockProducts.filter(p => p.is_published);
  const categories = getProductCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "商品總覽" }]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-2">AI 智能玩具商品總覽</h1>
      <p className="text-slate-500 mb-8">探索所有 AI 智能玩具，依分類、年齡、價格篩選</p>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/products"
          className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-full font-medium">
          全部
        </Link>
        {categories.map((cat) => (
          <Link key={cat.id} href={`/categories/${cat.slug}`}
            className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            {cat.name}
          </Link>
        ))}
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
