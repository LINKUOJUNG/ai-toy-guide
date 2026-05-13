import type { Metadata } from "next";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "評測方法", description: "了解我們如何評測 AI 智能玩具。" };

export default function ReviewMethodPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "評測方法" }]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-6">評測方法</h1>
      <div className="prose max-w-none">
        <p>我們使用 7 個維度來評測每款 AI 智能玩具，每個維度 1-5 分。</p>
        <h2>評分維度</h2>
        <table>
          <thead><tr><th>維度</th><th>說明</th></tr></thead>
          <tbody>
            <tr><td>AI 互動性</td><td>語音辨識、情緒回應、自主互動能力</td></tr>
            <tr><td>教育價值</td><td>STEAM、語言、邏輯、創造力培養</td></tr>
            <tr><td>安全性</td><td>材質安全、年齡適合度、隱私保護</td></tr>
            <tr><td>耐玩度</td><td>長期吸引力、內容更新、擴充性</td></tr>
            <tr><td>操作難易度</td><td>設定簡便、介面直覺、家長上手容易</td></tr>
            <tr><td>價格合理性</td><td>功能與售價匹配、是否有隱藏費用</td></tr>
            <tr><td>親子共玩性</td><td>是否適合家長陪伴使用</td></tr>
          </tbody>
        </table>
        <h2>評分等級</h2>
        <ul>
          <li>4.5-5.0 分：極力推薦</li>
          <li>4.0-4.4 分：推薦</li>
          <li>3.5-3.9 分：值得考慮</li>
          <li>3.0-3.4 分：普通</li>
          <li>3.0 分以下：不推薦</li>
        </ul>
      </div>
    </div>
  );
}
