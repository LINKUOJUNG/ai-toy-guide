"use client";
import { useState } from "react";
import { mockAffiliateLinks } from "@/lib/mock-data";

export default function AdminAffiliateLinksPage() {
  const [links] = useState(mockAffiliateLinks);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">聯盟連結管理</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 text-sm">
          + 新增連結
        </button>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-3 font-semibold text-slate-600">商品</th>
              <th className="text-left p-3 font-semibold text-slate-600">平台</th>
              <th className="text-center p-3 font-semibold text-slate-600">點擊數</th>
              <th className="text-center p-3 font-semibold text-slate-600">狀態</th>
              <th className="text-center p-3 font-semibold text-slate-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {links.map((l) => (
              <tr key={l.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="p-3 font-medium text-slate-800">{l.product_name}</td>
                <td className="p-3 text-slate-600">{l.platform_name}</td>
                <td className="p-3 text-center font-semibold text-indigo-600">{l.click_count}</td>
                <td className="p-3 text-center">
                  <span className={`px-2 py-0.5 rounded text-xs ${l.is_active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {l.is_active ? "啟用" : "停用"}
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
