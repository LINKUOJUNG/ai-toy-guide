import { mockProducts, mockPosts, mockAffiliateLinks } from "@/lib/mock-data";

export default function AdminDashboard() {
  const totalProducts = mockProducts.length;
  const publishedProducts = mockProducts.filter(p => p.is_published).length;
  const totalPosts = mockPosts.length;
  const publishedPosts = mockPosts.filter(p => p.status === "published").length;
  const totalClicks = mockAffiliateLinks.reduce((sum, l) => sum + l.click_count, 0);

  const stats = [
    { label: "商品總數", value: totalProducts, sub: `${publishedProducts} 已發布`, icon: "🤖", color: "bg-indigo-50 text-indigo-600" },
    { label: "文章總數", value: totalPosts, sub: `${publishedPosts} 已發布`, icon: "📝", color: "bg-green-50 text-green-600" },
    { label: "聯盟連結", value: mockAffiliateLinks.length, sub: `${mockAffiliateLinks.filter(l => l.is_active).length} 啟用中`, icon: "🔗", color: "bg-cyan-50 text-cyan-600" },
    { label: "總點擊數", value: totalClicks, sub: "聯盟連結點擊", icon: "📊", color: "bg-amber-50 text-amber-600" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">儀表板</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className={`rounded-xl p-5 ${stat.color}`}>
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-sm font-medium">{stat.label}</div>
            <div className="text-xs opacity-70 mt-1">{stat.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Products */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="font-bold text-slate-800 mb-4">最新商品</h2>
          <div className="space-y-3">
            {mockProducts.slice(0, 5).map((p) => (
              <div key={p.id} className="flex items-center justify-between text-sm">
                <span className="text-slate-700">{p.name}</span>
                <span className={`px-2 py-0.5 rounded text-xs ${p.is_published ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                  {p.is_published ? "已發布" : "草稿"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="font-bold text-slate-800 mb-4">最新文章</h2>
          <div className="space-y-3">
            {mockPosts.slice(0, 5).map((p) => (
              <div key={p.id} className="flex items-center justify-between text-sm">
                <span className="text-slate-700 truncate mr-4">{p.title}</span>
                <span className={`px-2 py-0.5 rounded text-xs shrink-0 ${p.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                  {p.status === "published" ? "已發布" : "草稿"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Affiliate Links */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 lg:col-span-2">
          <h2 className="font-bold text-slate-800 mb-4">熱門聯盟連結</h2>
          <div className="space-y-3">
            {mockAffiliateLinks.sort((a, b) => b.click_count - a.click_count).slice(0, 5).map((l) => (
              <div key={l.id} className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-slate-700">{l.product_name}</span>
                  <span className="text-xs text-slate-400 ml-2">({l.platform_name})</span>
                </div>
                <span className="font-semibold text-indigo-600">{l.click_count} 次點擊</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
