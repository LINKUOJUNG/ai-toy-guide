import type { Metadata } from "next";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "關於我們", description: "了解 AI 智能玩具指南的使命與團隊。" };

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "關於我們" }]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-6">關於我們</h1>
      <div className="prose max-w-none">
        <p>AI 智能玩具指南是一個專門介紹、評測、比較與推薦 AI 智能玩具的網站。</p>
        <h2>我們的使命</h2>
        <p>我們相信每個孩子都值得擁有既好玩又安全的 AI 玩具。我們的目標是透過客觀、深入的評測內容，幫助家長、教育工作者與科技玩家做出明智的購買決定。</p>
        <h2>我們的評測原則</h2>
        <ul>
          <li>所有評測基於實際功能與規格分析</li>
          <li>不誇大商品效果</li>
          <li>不偽造使用經驗</li>
          <li>聯盟連結會明確揭露</li>
          <li>評分維度公開透明</li>
        </ul>
        <h2>聯絡我們</h2>
        <p>如有商品評測合作、內容建議或任何問題，歡迎透過 <a href="/contact">聯絡表單</a> 與我們聯繫。</p>
      </div>
    </div>
  );
}
