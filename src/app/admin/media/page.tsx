"use client";

export default function AdminMediaPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">媒體庫</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 text-sm">
          上傳圖片
        </button>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
        <div className="text-4xl mb-4">🖼️</div>
        <p className="text-slate-500 mb-2">拖拽圖片到此處上傳</p>
        <p className="text-xs text-slate-400">支援 JPG、PNG、WebP，單檔最大 5MB</p>
        <p className="text-xs text-slate-400 mt-4">接上 Supabase Storage 後即可使用完整媒體庫功能</p>
      </div>
    </div>
  );
}
