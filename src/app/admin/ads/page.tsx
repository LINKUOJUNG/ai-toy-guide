"use client";
import { useState } from "react";
import { mockAdPlacements } from "@/lib/mock-data";

export default function AdminAdsPage() {
  const [placements] = useState(mockAdPlacements);
  const [publisherId, setPublisherId] = useState("");
  const [autoAds, setAutoAds] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">廣告管理</h1>

      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
        <h2 className="font-bold text-slate-800 mb-4">Google AdSense 設定</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">AdSense Publisher ID</label>
            <input value={publisherId} onChange={(e) => setPublisherId(e.target.value)}
              placeholder="ca-pub-XXXXXXXXXXXXXXXX"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm max-w-md" />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={autoAds} onChange={(e) => setAutoAds(e.target.checked)} />
            啟用 Auto Ads
          </label>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-slate-800">廣告版位</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 text-sm">
            + 新增版位
          </button>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-3 font-semibold text-slate-600">版位名稱</th>
              <th className="text-center p-3 font-semibold text-slate-600">頁面類型</th>
              <th className="text-center p-3 font-semibold text-slate-600">位置</th>
              <th className="text-center p-3 font-semibold text-slate-600">狀態</th>
              <th className="text-center p-3 font-semibold text-slate-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {placements.map((p) => (
              <tr key={p.id} className="border-t border-slate-100">
                <td className="p-3 font-medium text-slate-800">{p.placement_name}</td>
                <td className="p-3 text-center text-slate-600">{p.page_type}</td>
                <td className="p-3 text-center text-slate-500">{p.position}</td>
                <td className="p-3 text-center">
                  <span className={`px-2 py-0.5 rounded text-xs ${p.is_active ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                    {p.is_active ? "啟用" : "停用"}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button className="text-indigo-600 hover:underline text-xs">編輯</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
