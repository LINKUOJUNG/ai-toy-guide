"use client";
import { useState } from "react";
import { mockProducts } from "@/lib/mock-data";
import Link from "next/link";

export default function AdminProductsPage() {
  const [products] = useState(mockProducts);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">商品管理</h1>
        <Link href="/admin/products/new"
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 text-sm">
          + 新增商品
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-3 font-semibold text-slate-600">商品名稱</th>
              <th className="text-left p-3 font-semibold text-slate-600">品牌</th>
              <th className="text-center p-3 font-semibold text-slate-600">評分</th>
              <th className="text-center p-3 font-semibold text-slate-600">精選</th>
              <th className="text-center p-3 font-semibold text-slate-600">狀態</th>
              <th className="text-center p-3 font-semibold text-slate-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="p-3">
                  <div className="font-medium text-slate-800">{p.name}</div>
                  <div className="text-xs text-slate-400">/{p.slug}</div>
                </td>
                <td className="p-3 text-slate-600">{p.brand}</td>
                <td className="p-3 text-center font-semibold">{p.rating_overall.toFixed(1)}</td>
                <td className="p-3 text-center">{p.is_featured ? "⭐" : "-"}</td>
                <td className="p-3 text-center">
                  <span className={`px-2 py-0.5 rounded text-xs ${p.is_published ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                    {p.is_published ? "已發布" : "草稿"}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <Link href={`/admin/products/${p.id}`} className="text-indigo-600 hover:underline text-xs mr-2">編輯</Link>
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
