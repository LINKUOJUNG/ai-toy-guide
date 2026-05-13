"use client";
import { useState } from "react";

export default function AdminSEOPage() {
  const [settings, setSettings] = useState({
    site_title: "AI 智能玩具指南｜評測、比較、推薦",
    site_description: "專門介紹、評測、比較與推薦 AI 智能玩具的指南網站。",
    robots_txt: "User-agent: *\nAllow: /\nSitemap: https://example.com/sitemap.xml",
    ga_id: "",
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">SEO 管理</h1>

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-800 mb-4">全站 Meta 設定</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">全站標題</label>
              <input value={settings.site_title}
                onChange={(e) => setSettings(s => ({ ...s, site_title: e.target.value }))}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">全站描述</label>
              <textarea value={settings.site_description}
                onChange={(e) => setSettings(s => ({ ...s, site_description: e.target.value }))}
                rows={2} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-800 mb-4">robots.txt</h2>
          <textarea value={settings.robots_txt}
            onChange={(e) => setSettings(s => ({ ...s, robots_txt: e.target.value }))}
            rows={5} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-mono" />
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-800 mb-4">分析與追蹤</h2>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Google Analytics ID</label>
            <input value={settings.ga_id}
              onChange={(e) => setSettings(s => ({ ...s, ga_id: e.target.value }))}
              placeholder="G-XXXXXXXXXX"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm max-w-md" />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-800 mb-4">Schema 支援</h2>
          <div className="space-y-2 text-sm text-slate-600">
            <p>✅ Product Schema — 自動根據商品資料生成</p>
            <p>✅ Article Schema — 自動根據文章資料生成</p>
            <p>✅ FAQ Schema — 文章有 FAQ 時自動生成</p>
            <p>✅ Breadcrumb Schema — 所有頁面自動生成</p>
            <p>✅ Sitemap — 自動生成 /sitemap.xml</p>
          </div>
        </div>

        <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
          儲存設定
        </button>
      </div>
    </div>
  );
}
