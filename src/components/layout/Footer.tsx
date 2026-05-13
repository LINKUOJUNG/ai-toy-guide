import Link from "next/link";

const footerLinks = [
  {
    title: "探索",
    links: [
      { label: "商品總覽", href: "/products" },
      { label: "排行榜", href: "/rankings" },
      { label: "商品比較", href: "/compare" },
      { label: "推薦商城", href: "/shop" },
    ],
  },
  {
    title: "內容",
    links: [
      { label: "部落格", href: "/blog" },
      { label: "選購指南", href: "/blog" },
      { label: "評測方法", href: "/review-method" },
    ],
  },
  {
    title: "關於",
    links: [
      { label: "關於我們", href: "/about" },
      { label: "聯絡我們", href: "/contact" },
      { label: "聯盟揭露", href: "/affiliate-disclosure" },
    ],
  },
  {
    title: "法律",
    links: [
      { label: "隱私權政策", href: "/privacy-policy" },
      { label: "使用條款", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🤖</span>
              <span className="font-bold text-white">AI 智能玩具指南</span>
            </Link>
            <p className="text-sm text-slate-400">
              幫你找到最適合孩子與家庭的 AI 智能玩具。
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-white mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AI 智能玩具指南. All rights reserved.</p>
          <p className="mt-1">本站部分連結為聯盟連結，透過連結購買不會增加您的成本。</p>
        </div>
      </div>
    </footer>
  );
}
