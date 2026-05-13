"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "首頁", href: "/" },
  { label: "商品總覽", href: "/products" },
  { label: "部落格", href: "/blog" },
  { label: "排行榜", href: "/rankings" },
  { label: "商品比較", href: "/compare" },
  { label: "推薦商城", href: "/shop" },
  { label: "關於我們", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-lg text-indigo-600">AI 智能玩具指南</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600"
            aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-100">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium text-slate-600 hover:text-indigo-600">
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
