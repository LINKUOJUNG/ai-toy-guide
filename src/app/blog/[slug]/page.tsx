import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AffiliateDisclosure } from "@/components/common/AffiliateDisclosure";
import { AdSlot } from "@/components/common/AdSlot";
import { mockPosts, mockAuthors } from "@/lib/mock-data";
import { formatDate, generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = mockPosts.find(p => p.slug === slug);
  if (!post) return { title: "文章不存在" };
  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      type: "article",
      ...(post.og_image && { images: [post.og_image] }),
    },
  };
}

export function generateStaticParams() {
  return mockPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = mockPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const author = mockAuthors.find(a => a.id === post.author_id);
  const articleSchema = generateArticleSchema({ ...post, author });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首頁", url: "/" },
    { name: "部落格", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {post.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(post.faq)) }} />
      )}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "部落格", href: "/blog" }, { label: post.title }]} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, i) => (
            <span key={i} className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{tag}</span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
          {author && <span>作者：{author.name}</span>}
          {post.published_at && <span>發布：{formatDate(post.published_at)}</span>}
          <span>更新：{formatDate(post.updated_at)}</span>
        </div>

        {/* Cover Image */}
        <div className="bg-slate-100 rounded-2xl aspect-[16/9] flex items-center justify-center text-6xl mb-8">📝</div>

        <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">{post.excerpt}</p>

        {post.show_affiliate_disclosure && <AffiliateDisclosure className="mb-8" />}

        <AdSlot placement="post-before-content" className="mb-8" />

        {/* Content */}
        <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        <AdSlot placement="post-mid-content" className="mb-8" />

        {/* FAQ */}
        {post.faq.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">❓ 常見問題</h2>
            <div className="space-y-4">
              {post.faq.map((item, i) => (
                <details key={i} className="bg-slate-50 rounded-xl p-4 group">
                  <summary className="font-semibold text-slate-800 cursor-pointer">{item.question}</summary>
                  <p className="mt-3 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <AdSlot placement="post-after-content" className="mb-8" />

        <div className="text-sm text-slate-400 border-t pt-4">
          最後更新：{formatDate(post.updated_at)}
        </div>
      </article>
    </>
  );
}
