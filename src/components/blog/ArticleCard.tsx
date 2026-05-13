import Link from "next/link";
import { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
          {post.cover_image ? (
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-4xl">📝</div>
          )}
        </div>
      </Link>
      <div className="p-4">
        {post.tags[0] && (
          <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{post.tags[0]}</span>
        )}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-bold text-slate-800 mt-2 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 mb-3 line-clamp-2">{post.excerpt}</p>
        <div className="text-xs text-slate-400">
          {post.published_at && formatDate(post.published_at)}
        </div>
      </div>
    </article>
  );
}
