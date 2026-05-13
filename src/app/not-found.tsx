import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <div className="text-6xl mb-4">🔍</div>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">找不到頁面</h1>
      <p className="text-slate-500 mb-8">您要找的頁面不存在或已被移除。</p>
      <Link href="/"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
        回到首頁
      </Link>
    </div>
  );
}
