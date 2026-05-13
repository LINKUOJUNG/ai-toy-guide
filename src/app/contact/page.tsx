"use client";
import { useState } from "react";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "聯絡我們" }]} />
      <h1 className="text-3xl font-bold text-slate-800 mb-6">聯絡我們</h1>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <p className="text-2xl mb-2">✅</p>
          <p className="text-lg font-semibold text-green-700">感謝您的來信！</p>
          <p className="text-slate-600">我們會盡快回覆。</p>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">姓名</label>
            <input type="text" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">主題</label>
            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
              <option>商品評測合作</option>
              <option>內容建議</option>
              <option>廣告合作</option>
              <option>問題回報</option>
              <option>其他</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">訊息</label>
            <textarea rows={5} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button type="submit"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            送出
          </button>
        </form>
      )}
    </div>
  );
}
