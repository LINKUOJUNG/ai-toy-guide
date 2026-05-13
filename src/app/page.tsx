import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { EmailSubscribe } from "@/components/common/EmailSubscribe";
import { AdSlot } from "@/components/common/AdSlot";
import { getFeaturedProducts, getPublishedPosts, getProductCategories } from "@/lib/mock-data";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const latestPosts = getPublishedPosts().slice(0, 6);
  const categories = getProductCategories();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            AI 智能玩具怎麼選？<br className="hidden sm:block" />
            我們幫你看懂功能、價格與安全性
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            從 AI 機器人、互動寵物、STEAM 編程玩具到智慧陪伴玩具，我們整理實用評測、選購指南與熱門推薦，幫家長找到真正適合孩子的科技玩具。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products"
              className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors text-lg">
              查看 AI 玩具推薦
            </Link>
            <Link href="/blog"
              className="px-8 py-4 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-400 transition-colors text-lg border border-indigo-400">
              閱讀選購指南
            </Link>
          </div>
        </div>
      </section>

      <AdSlot placement="after-hero" className="max-w-7xl mx-auto px-4 py-4" />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">⭐ 本月精選 AI 玩具</h2>
            <p className="text-slate-500 mt-1">我們精選的優質 AI 智能玩具</p>
          </div>
          <Link href="/products" className="text-indigo-600 font-medium hover:underline text-sm">
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">🎯 依分類探索</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/categories/${cat.slug}`}
                className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-slate-200">
                <div className="text-3xl mb-2">
                  {cat.slug === 'ai-robots' ? '🤖' :
                   cat.slug === 'ai-pets' ? '🐕' :
                   cat.slug === 'steam-coding' ? '💻' :
                   cat.slug === 'voice-interactive' ? '🗣️' :
                   cat.slug === 'smart-companion' ? '🧸' : '👶'}
                </div>
                <p className="text-sm font-medium text-slate-700">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">📝 最新文章</h2>
            <p className="text-slate-500 mt-1">AI 玩具評測、選購指南與最新情報</p>
          </div>
          <Link href="/blog" className="text-indigo-600 font-medium hover:underline text-sm">
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <AdSlot placement="after-articles" className="max-w-7xl mx-auto px-4 py-4" />

      {/* Rankings Teaser */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🏆 熱門排行榜</h2>
          <p className="text-slate-600 mb-8">依據評分、人氣、價格綜合排名</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link href="/rankings" className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow border">
              <p className="text-2xl mb-2">🥇</p>
              <p className="font-semibold text-slate-700">最佳 AI 玩具</p>
              <p className="text-xs text-slate-400 mt-1">綜合評分最高</p>
            </Link>
            <Link href="/rankings" className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow border">
              <p className="text-2xl mb-2">💰</p>
              <p className="font-semibold text-slate-700">高 CP 值推薦</p>
              <p className="text-xs text-slate-400 mt-1">花小錢買好玩具</p>
            </Link>
            <Link href="/rankings" className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow border">
              <p className="text-2xl mb-2">👶</p>
              <p className="font-semibold text-slate-700">幼兒首選</p>
              <p className="text-xs text-slate-400 mt-1">3-6 歲推薦</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Email Subscribe */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EmailSubscribe />
      </section>
    </>
  );
}
