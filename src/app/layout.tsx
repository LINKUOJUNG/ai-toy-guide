import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "AI 智能玩具指南｜評測、比較、推薦",
    template: "%s｜AI 智能玩具指南",
  },
  description: "專門介紹、評測、比較與推薦 AI 智能玩具的指南網站。幫家長找到最適合孩子的 AI 機器人、互動寵物、STEAM 編程玩具。",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "zh_TW",
    siteName: "AI 智能玩具指南",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen bg-white text-slate-800 antialiased">
        <Header />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
