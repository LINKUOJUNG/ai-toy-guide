"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "", slug: "", excerpt: "", content: "",
    category_id: "", tags: "",
    seo_title: "", seo_description: "",
    show_affiliate_disclosure: true, show_adsense: true,
    status: "draft" as "draft" | "published" | "scheduled",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("文章已儲存（mock）");
    router.push("/admin/posts");
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">新增文章</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-800 mb-4">文章資訊</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">文章標題 *</label>
              <input name="title" value={form.title} onChange={handleChange} required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Slug *</label>
              <input name="slug" value={form.slug} onChange={handleChange} required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">摘要</label>
              <textarea name="excerpt" value={form.excerpt} onChange={handleChange} rows={2}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">內容 *</label>
              <textarea name="content" value={form.content} onChange={handleChange} rows={15}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-mono" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">標籤（逗號分隔）</label>
              <input name="tags" value={form.tags} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-800 mb-4">SEO 設定</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">SEO Title</label>
              <input name="seo_title" value={form.seo_title} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">SEO Description</label>
              <textarea name="seo_description" value={form.seo_description} onChange={handleChange} rows={2}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-800 mb-4">發布設定</h2>
          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="show_affiliate_disclosure" checked={form.show_affiliate_disclosure} onChange={handleChange} />
              顯示聯盟揭露
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="show_adsense" checked={form.show_adsense} onChange={handleChange} />
              啟用 AdSense
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">狀態</label>
            <select name="status" value={form.status} onChange={handleChange}
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
              <option value="draft">草稿</option>
              <option value="published">發布</option>
              <option value="scheduled">排程</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <button type="submit"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
            儲存文章
          </button>
          <button type="button" onClick={() => router.back()}
            className="px-8 py-3 bg-slate-100 text-slate-600 font-semibold rounded-lg hover:bg-slate-200">
            取消
          </button>
        </div>
      </form>
    </div>
  );
}
