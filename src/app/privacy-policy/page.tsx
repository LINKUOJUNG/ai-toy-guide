import type { Metadata } from "next";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "隱私權政策", description: "AI 智能玩具指南的隱私權政策。" };

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "隱私權政策" }]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-6">隱私權政策</h1>
      <div className="prose max-w-none">
        <p>最後更新日期：2025 年 5 月</p>
        <h2>資料收集</h2>
        <p>本站可能收集以下資料：</p>
        <ul>
          <li>瀏覽行為（透過 Google Analytics）</li>
          <li>Email 訂閱資訊（若您主動訂閱）</li>
          <li>聯盟連結點擊紀錄</li>
        </ul>
        <h2>Cookie 使用</h2>
        <p>本站使用 Cookie 來改善瀏覽體驗與分析流量。您可以在瀏覽器設定中停用 Cookie。</p>
        <h2>第三方服務</h2>
        <p>本站使用 Google Analytics、Google AdSense 等第三方服務，這些服務有各自的隱私權政策。</p>
        <h2>資料安全</h2>
        <p>我們會採取合理的技術措施保護您的個人資料安全。</p>
        <h2>聯絡方式</h2>
        <p>如有隱私權相關問題，請透過<a href="/contact">聯絡頁面</a>與我們聯繫。</p>
      </div>
    </div>
  );
}
