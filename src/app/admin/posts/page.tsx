"use client";
import { useState } from "react";
import { mockPosts } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function AdminPostsPage() {
  const [posts] = useState(mockPosts);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">文章管理</h1>
        <Link href="/admin/posts/new"
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 text-sm">
          + 新增文章
        </Link>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-3 font-semibold text-slate-600">文章標題</th>
              <th className="text-center p-3 font-semibold text-slate-600">狀態</th>
              <th className="text-center p-3 font-semibold text-slate-600">發布日期</th>
              <th className="text-center p-3 font-semibold text-slate-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="p-3">
                  <div className="font-medium text-slate-800">{p.title}</div>
                  <div className="text-xs text-slate-400">/{p.slug}</div>
                </td>
                <td className="p-3 text-center">
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    p.status === "published" ? "bg-green-100 text-green-700" :
                    p.status === "scheduled" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {p.status === "published" ? "已發布" : p.status === "scheduled" ? "排程" : "草稿"}
                  </span>
                </td>
                <td className="p-3 text-center text-slate-500 text-xs">
                  {p.published_at ? formatDate(p.published_at) : "-"}
                </td>
                <td className="p-3 text-center">
                  <Link href={`/admin/posts/${p.id}`} className="text-indigo-600 hover:underline text-xs mr-2">編輯</Link>
                  <button className="text-red-500 hover:underline text-xs">刪除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
