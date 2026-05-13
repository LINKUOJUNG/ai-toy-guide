"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { label: "儀表板", href: "/admin", icon: "📊" },
  { label: "商品管理", href: "/admin/products", icon: "🤖" },
  { label: "文章管理", href: "/admin/posts", icon: "📝" },
  { label: "分類管理", href: "/admin/categories", icon: "📁" },
  { label: "標籤管理", href: "/admin/tags", icon: "🏷️" },
  { label: "聯盟連結", href: "/admin/affiliate-links", icon: "🔗" },
  { label: "廣告管理", href: "/admin/ads", icon: "📺" },
  { label: "SEO 管理", href: "/admin/seo", icon: "🔍" },
  { label: "媒體庫", href: "/admin/media", icon: "🖼️" },
  { label: "AI 助手", href: "/admin/ai-assistant", icon: "🤖" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") setIsLoggedIn(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      sessionStorage.setItem("admin_auth", "true");
      setIsLoggedIn(true);
    } else {
      setError("密碼錯誤");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">🔐 管理後台登入</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="請輸入管理密碼" required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
              登入
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white shrink-0 hidden lg:block">
        <div className="p-4 border-b border-slate-700">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-xl">🤖</span>
            <span className="font-bold">AI 玩具後台</span>
          </Link>
        </div>
        <nav className="p-2">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors mb-0.5 ${
                pathname === item.href ? "bg-indigo-600 text-white" : "text-slate-300 hover:bg-slate-800"
              }`}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-700 mt-auto">
          <Link href="/" className="text-sm text-slate-400 hover:text-white">← 回到前台</Link>
          <button onClick={() => { sessionStorage.removeItem("admin_auth"); setIsLoggedIn(false); }}
            className="block text-sm text-red-400 hover:text-red-300 mt-2">登出</button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between lg:hidden">
          <span className="font-bold text-indigo-600">🤖 AI 玩具後台</span>
          <Link href="/" className="text-sm text-slate-500">← 前台</Link>
        </header>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
