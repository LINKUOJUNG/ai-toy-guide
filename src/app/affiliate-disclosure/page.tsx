import type { Metadata } from "next";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "聯盟揭露聲明", description: "AI 智能玩具指南的聯盟連結揭露聲明。" };

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "聯盟揭露聲明" }]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-6">聯盟揭露聲明</h1>
      <div className="prose max-w-none">
        <p>AI 智能玩具指南（以下簡稱「本站」）可能在文章與商品頁面中包含聯盟行銷連結（affiliate links）。</p>
        <h2>什麼是聯盟連結？</h2>
        <p>聯盟連結是一種追蹤連結，當你透過連結前往電商平台並購買商品時，本站可能會獲得少量佣金。這不會增加你的購買成本。</p>
        <h2>我們的承諾</h2>
        <ul>
          <li>聯盟關係不會影響我們的評測內容與評分</li>
          <li>我們會在包含聯盟連結的頁面明確標示</li>
          <li>所有購買按鈕都會使用 rel=&quot;sponsored nofollow&quot; 標記</li>
          <li>我們不會為了佣金推薦不適合的商品</li>
        </ul>
        <h2>合作平台</h2>
        <p>本站可能與以下平台建立聯盟關係：蝦皮購物、momo購物網、博客來、Amazon、樂天市場等。</p>
      </div>
    </div>
  );
}
