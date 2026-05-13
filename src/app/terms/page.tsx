import type { Metadata } from "next";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "使用條款", description: "AI 智能玩具指南的使用條款。" };

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "使用條款" }]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-6">使用條款</h1>
      <div className="prose max-w-none">
        <p>使用本網站即表示您同意以下條款。</p>
        <h2>內容免責聲明</h2>
        <p>本站提供的評測內容僅供參考，不構成購買建議。商品價格、規格與庫存可能隨時變動。</p>
        <h2>聯盟連結</h2>
        <p>本站包含聯盟連結，詳情請參閱<a href="/affiliate-disclosure">聯盟揭露聲明</a>。</p>
        <h2>智慧財產權</h2>
        <p>本站所有原創內容受著作權保護，未經授權不得轉載。</p>
        <h2>條款修改</h2>
        <p>本站保留隨時修改使用條款的權利，修改後會在本頁面更新。</p>
      </div>
    </div>
  );
}
