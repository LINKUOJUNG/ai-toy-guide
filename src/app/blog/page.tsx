import type { Metadata } from "next";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { getPublishedPosts, getPostCategories } from "@/lib/mock-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "部落格 - AI 玩具評測、選購指南與最新情報",
  description: "AI 智能玩具評測文章、選購指南、新品情報與排行榜，幫你做出最好的購買決定。",
};

export default function BlogPage() {
  const posts = getPublishedPosts();
  const categories = getPostCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "部落格" }]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-2">部落格</h1>
      <p className="text-slate-500 mb-8">AI 玩具評測、選購指南與最新情報</p>

      <div className="flex flex-wrap gap-2 mb-8">
        <span className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-full font-medium">全部</span>
        {categories.map((cat) => (
          <Link key={cat.id} href={`/categories/${cat.slug}`}
            className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full font-medium hover:bg-indigo-50 hover:text-indigo-600">
            {cat.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
