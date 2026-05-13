"use client";
import { useState } from "react";
import { mockCategories } from "@/lib/mock-data";

export default function AdminCategoriesPage() {
  const [categories] = useState(mockCategories);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">分類管理</h1>
        <button onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 text-sm">
          + 新增分類
        </button>
      </div>
      {showForm && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input placeholder="分類名稱" className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            <input placeholder="Slug" className="px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
              <option value="product">商品分類</option>
              <option value="post">文章分類</option>
            </select>
          </div>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">儲存</button>
        </div>
      )}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-3 font-semibold text-slate-600">名稱</th>
              <th className="text-left p-3 font-semibold text-slate-600">Slug</th>
              <th className="text-center p-3 font-semibold text-slate-600">類型</th>
              <th className="text-center p-3 font-semibold text-slate-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.id} className="border-t border-slate-100">
                <td className="p-3 font-medium text-slate-800">{c.name}</td>
                <td className="p-3 text-slate-500">{c.slug}</td>
                <td className="p-3 text-center">
                  <span className={`px-2 py-0.5 rounded text-xs ${c.type === "product" ? "bg-indigo-100 text-indigo-700" : "bg-green-100 text-green-700"}`}>
                    {c.type === "product" ? "商品" : "文章"}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button className="text-indigo-600 hover:underline text-xs mr-2">編輯</button>
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
