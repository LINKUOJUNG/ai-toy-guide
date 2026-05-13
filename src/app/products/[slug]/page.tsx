import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AffiliateDisclosure } from "@/components/common/AffiliateDisclosure";
import { AffiliateButton } from "@/components/common/AffiliateButton";
import { RatingStars } from "@/components/common/RatingStars";
import { AdSlot } from "@/components/common/AdSlot";
import { mockProducts, mockCategories, getAffiliateLinksByProduct } from "@/lib/mock-data";
import { formatPrice, formatDate, getRatingLabel, getRatingColor, generateProductSchema, generateBreadcrumbSchema } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = mockProducts.find(p => p.slug === slug);
  if (!product) return { title: "商品不存在" };
  return {
    title: product.seo_title || product.name,
    description: product.seo_description || product.short_description,
    openGraph: {
      title: product.seo_title || product.name,
      description: product.seo_description || product.short_description,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return mockProducts.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = mockProducts.find(p => p.slug === slug);
  if (!product) notFound();

  const category = mockCategories.find(c => c.id === product.category_id);
  const affiliateLinks = getAffiliateLinksByProduct(product.id);

  const ratingDimensions = [
    { label: "AI 互動性", value: product.rating_ai_interaction },
    { label: "教育價值", value: product.rating_education },
    { label: "安全性", value: product.rating_safety },
    { label: "耐玩度", value: product.rating_durability },
    { label: "操作難易度", value: product.rating_ease_of_use },
    { label: "價格合理性", value: product.rating_value },
    { label: "親子共玩性", value: product.rating_parent_child },
  ];

  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首頁", url: "/" },
    { name: "商品總覽", url: "/products" },
    ...(category ? [{ name: category.name, url: `/categories/${category.slug}` }] : []),
    { name: product.name, url: `/products/${product.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[
          { label: "商品總覽", href: "/products" },
          ...(category ? [{ label: category.name, href: `/categories/${category.slug}` }] : []),
          { label: product.name },
        ]} />

        {/* Product Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image */}
          <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center text-8xl">
            🤖
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-indigo-600 font-medium">{product.brand}</span>
              {product.is_new && <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">新品</span>}
              {product.is_hot && <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded">熱門</span>}
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-4">{product.name}</h1>
            <p className="text-slate-600 mb-4">{product.short_description}</p>

            <div className="flex items-center gap-4 mb-4">
              <RatingStars rating={product.rating_overall} size="lg" />
              <span className={`font-semibold ${getRatingColor(product.rating_overall)}`}>
                {getRatingLabel(product.rating_overall)}
              </span>
            </div>

            <div className="text-2xl font-bold text-slate-800 mb-6">
              {formatPrice(product.price_min, product.price_max)}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
              <div className="bg-slate-50 rounded-lg p-3">
                <span className="text-slate-500">適合年齡</span>
                <p className="font-semibold">{product.age_range}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-3">
                <span className="text-slate-500">電池續航</span>
                <p className="font-semibold">{product.battery_life}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-3">
                <span className="text-slate-500">需要 App</span>
                <p className="font-semibold">{product.app_required ? "是" : "否"}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-3">
                <span className="text-slate-500">需要 Wi-Fi</span>
                <p className="font-semibold">{product.wifi_required ? "是" : "否"}</p>
              </div>
            </div>

            {/* Affiliate Buttons */}
            {affiliateLinks.length > 0 ? (
              <div className="flex flex-col gap-3">
                {affiliateLinks.map((link) => (
                  <AffiliateButton key={link.id} href={link.affiliate_url} platform={link.platform_name} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400">購買連結即將上線</p>
            )}
          </div>
        </div>

        <AffiliateDisclosure className="mb-8" />
        <AdSlot placement="product-after-summary" className="mb-8" />

        {/* AI Features */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">🧠 AI 功能</h2>
          <div className="flex flex-wrap gap-2">
            {product.ai_features.map((f, i) => (
              <span key={i} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">{f}</span>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="mb-12 prose max-w-none">
          <h2>📋 詳細介紹</h2>
          <p>{product.description}</p>
        </section>

        {/* Pros & Cons */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-800 mb-4">✅ 優點</h3>
            <ul className="space-y-2">
              {product.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-green-700">
                  <span className="mt-0.5">•</span><span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-800 mb-4">❌ 缺點</h3>
            <ul className="space-y-2">
              {product.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-red-700">
                  <span className="mt-0.5">•</span><span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AdSlot placement="product-after-pros-cons" className="mb-8" />

        {/* Rating Dimensions */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-6">📊 評分細項</h2>
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold text-indigo-600">{product.rating_overall.toFixed(1)}</div>
              <div>
                <RatingStars rating={product.rating_overall} size="lg" />
                <p className={`text-sm font-medium ${getRatingColor(product.rating_overall)}`}>
                  {getRatingLabel(product.rating_overall)}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {ratingDimensions.map((dim) => (
                <div key={dim.label} className="flex items-center gap-3">
                  <span className="text-sm text-slate-600 w-24">{dim.label}</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-2">
                    <div className="bg-indigo-500 rounded-full h-2" style={{ width: `${(dim.value / 5) * 100}%` }} />
                  </div>
                  <span className="text-sm font-semibold w-8">{dim.value.toFixed(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended / Not Recommended */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">👍 適合誰</h3>
            <ul className="space-y-2">
              {product.recommended_for.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600">
                  <span className="text-green-500 mt-0.5">✓</span><span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">👎 不適合誰</h3>
            <ul className="space-y-2">
              {product.not_recommended_for.map((n, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600">
                  <span className="text-red-500 mt-0.5">✗</span><span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Safety Notes */}
        {product.safety_notes.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-slate-800 mb-4">⚠️ 安全性提醒</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <ul className="space-y-2">
                {product.safety_notes.map((n, i) => (
                  <li key={i} className="text-yellow-800 flex items-start gap-2">
                    <span>⚠️</span><span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Last Updated */}
        <div className="text-sm text-slate-400 mb-8">
          最後更新：{formatDate(product.updated_at)}
        </div>
      </div>
    </>
  );
}
