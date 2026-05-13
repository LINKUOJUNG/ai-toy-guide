"use client";
import { useState } from "react";
import { mockTags } from "@/lib/mock-data";

export default function AdminTagsPage() {
  const [tags] = useState(mockTags);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">標籤管理</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 text-sm">
          + 新增標籤
        </button>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex flex-wrap gap-3">
          {tags.map((t) => (
            <div key={t.id} className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-slate-700">{t.name}</span>
              <span className="text-xs text-slate-400">({t.slug})</span>
              <button className="text-red-400 hover:text-red-600 text-xs ml-1">✕</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
