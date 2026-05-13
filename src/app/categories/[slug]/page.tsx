import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { mockCategories, mockProducts, mockPosts } from "@/lib/mock-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = mockCategories.find(c => c.slug === slug);
  if (!cat) return { title: "分類不存在" };
  return {
    title: cat.seo_title || cat.name,
    description: cat.seo_description || cat.description || `${cat.name}相關商品與文章`,
  };
}

export function generateStaticParams() {
  return mockCategories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = mockCategories.find(c => c.slug === slug);
  if (!category) notFound();

  const products = mockProducts.filter(p => p.category_id === category.id && p.is_published);
  const posts = mockPosts.filter(p => p.category_id === category.id && p.status === "published");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[
        { label: category.type === "product" ? "商品總覽" : "部落格", href: category.type === "product" ? "/products" : "/blog" },
        { label: category.name },
      ]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-2">{category.name}</h1>
      {category.description && <p className="text-slate-500 mb-8">{category.description}</p>}

      {products.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-6">商品</h2>
          <ProductGrid products={products} />
        </section>
      )}

      {posts.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-6">相關文章</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {products.length === 0 && posts.length === 0 && (
        <p className="text-slate-400 text-center py-12">此分類目前沒有內容，敬請期待。</p>
      )}
    </div>
  );
}
