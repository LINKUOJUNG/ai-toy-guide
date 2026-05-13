"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "", slug: "", brand: "", category_id: "",
    description: "", short_description: "",
    price_min: 0, price_max: 0,
    age_range: "", ai_features: "",
    app_required: false, wifi_required: false,
    battery_life: "", pros: "", cons: "",
    rating_overall: 0,
    rating_ai_interaction: 0, rating_education: 0, rating_safety: 0,
    rating_durability: 0, rating_ease_of_use: 0, rating_value: 0, rating_parent_child: 0,
    recommended_for: "", not_recommended_for: "", safety_notes: "",
    is_featured: false, is_new: false, is_published: false,
    seo_title: "", seo_description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked :
              type === "number" ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to Supabase
    alert("商品已儲存（mock）");
    router.push("/admin/products");
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">新增商品</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-800 mb-4">基本資訊</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">商品名稱 *</label>
              <input name="name" value={form.name} onChange={handleChange} required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Slug *</label>
              <input name="slug" value={form.slug} onChange={handleChange} required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">品牌</label>
              <input name="brand" value={form.brand} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">適合年齡</label>
              <input name="age_range" value={form.age_range} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">最低價格</label>
              <input name="price_min" type="number" value={form.price_min} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">最高價格</label>
              <input name="price_max" type="number" value={form.price_max} onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">簡短描述</label>
            <input name="short_description" value={form.short_description} onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">詳細描述</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={4}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-800 mb-4">功能與評測</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">AI 功能（逗號分隔）</label>
              <input name="ai_features" value={form.ai_features} onChange={handleChange}
                placeholder="語音辨識, 視覺辨識, 情緒感知"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">優點（每行一個）</label>
                <textarea name="pros" value={form.pros} onChange={handleChange} rows={3}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">缺點（每行一個）</label>
                <textarea name="cons" value={form.cons} onChange={handleChange} rows={3}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" name="app_required" checked={form.app_required} onChange={handleChange} />
                需要 App
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" name="wifi_required" checked={form.wifi_required} onChange={handleChange} />
                需要 Wi-Fi
              </label>
            </div>
          </div>
        </div>

        {/* Ratings */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-800 mb-4">評分（1-5 分）</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "rating_overall", label: "總評分" },
              { name: "rating_ai_interaction", label: "AI 互動性" },
              { name: "rating_education", label: "教育價值" },
              { name: "rating_safety", label: "安全性" },
              { name: "rating_durability", label: "耐玩度" },
              { name: "rating_ease_of_use", label: "操作難易度" },
              { name: "rating_value", label: "價格合理性" },
              { name: "rating_parent_child", label: "親子共玩性" },
            ].map((r) => (
              <div key={r.name}>
                <label className="block text-xs font-medium text-slate-600 mb-1">{r.label}</label>
                <input name={r.name} type="number" min="0" max="5" step="0.1"
                  value={(form as Record<string, unknown>)[r.name] as number} onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* SEO */}
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

        {/* Status */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-800 mb-4">發布設定</h2>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="is_published" checked={form.is_published} onChange={handleChange} />
              發布
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="is_featured" checked={form.is_featured} onChange={handleChange} />
              精選
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="is_new" checked={form.is_new} onChange={handleChange} />
              新品
            </label>
          </div>
        </div>

        <div className="flex gap-4">
          <button type="submit"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
            儲存商品
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
