"use client";
import { useState } from "react";

export function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to Supabase
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-indigo-50 rounded-2xl p-8 text-center">
        <p className="text-2xl mb-2">🎉</p>
        <p className="text-lg font-semibold text-indigo-700">感謝訂閱！</p>
        <p className="text-slate-600">我們會定期寄送 AI 玩具新品資訊給您。</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">📬 訂閱 AI 玩具新品週報</h2>
      <p className="text-slate-600 mb-6">每週整理最新 AI 玩具、親子科技產品與優惠資訊。</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button type="submit"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
          免費訂閱
        </button>
      </form>
      <p className="text-xs text-slate-400 mt-3">我們尊重您的隱私，不會寄送垃圾郵件。</p>
    </div>
  );
}
