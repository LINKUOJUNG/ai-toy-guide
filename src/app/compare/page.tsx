"use client";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { mockProducts } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { RatingStars } from "@/components/common/RatingStars";
import { formatPrice } from "@/lib/utils";

export default function ComparePage() {
  const products = mockProducts.filter(p => p.is_published);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleProduct = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else if (selected.length < 4) {
      setSelected([...selected, id]);
    }
  };

  const selectedProducts = products.filter(p => selected.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "商品比較" }]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-2">商品比較</h1>
      <p className="text-slate-500 mb-8">勾選 2-4 個商品進行比較</p>

      {/* Product Selection */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
        {products.map((p) => (
          <button key={p.id} onClick={() => toggleProduct(p.id)}
            className={`p-3 rounded-lg border text-left text-sm transition-colors ${
              selected.includes(p.id) ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-slate-300"
            }`}>
            <div className="font-semibold text-slate-700 truncate">{p.name}</div>
            <div className="text-xs text-slate-400">{p.brand}</div>
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      {selectedProducts.length >= 2 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="p-3 text-left font-semibold text-slate-600 w-32">項目</th>
                {selectedProducts.map(p => (
                  <th key={p.id} className="p-3 text-center font-bold text-slate-800">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {([
                ["品牌", (p: Product) => p.brand],
                ["價格", (p: Product) => formatPrice(p.price_min, p.price_max)],
                ["適合年齡", (p: Product) => p.age_range],
                ["評分", (p: Product) => p.rating_overall.toFixed(1)],
                ["AI 功能", (p: Product) => p.ai_features.join("、")],
                ["需要 App", (p: Product) => p.app_required ? "是" : "否"],
                ["需要 Wi-Fi", (p: Product) => p.wifi_required ? "是" : "否"],
                ["電池續航", (p: Product) => p.battery_life],
                ["優點", (p: Product) => p.pros.join("、")],
                ["缺點", (p: Product) => p.cons.join("、")],
              ] as [string, (p: Product) => string][]).map(([label, fn]) => (
                <tr key={label} className="border-t border-slate-200">
                  <td className="p-3 font-medium text-slate-600">{label}</td>
                  {selectedProducts.map(p => (
                    <td key={p.id} className="p-3 text-center text-slate-700">{fn(p)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedProducts.length < 2 && (
        <p className="text-center text-slate-400 py-12">請至少選擇 2 個商品進行比較</p>
      )}
    </div>
  );
}
