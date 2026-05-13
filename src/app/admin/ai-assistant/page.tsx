"use client";
import { useState } from "react";

const templates = [
  { id: "product-intro", label: "商品介紹", prompt: "請幫我撰寫一段 AI 玩具的商品介紹，包含功能特色、適合年齡與使用情境。" },
  { id: "pros-cons", label: "優缺點分析", prompt: "請幫我分析這款 AI 玩具的優點與缺點。" },
  { id: "review", label: "評測文章草稿", prompt: "請幫我撰寫一篇 AI 玩具評測文章草稿。" },
  { id: "seo-title", label: "SEO 標題", prompt: "請幫我生成 5 個適合 SEO 的文章標題。" },
  { id: "seo-desc", label: "SEO 描述", prompt: "請幫我撰寫 160 字以內的 SEO 描述。" },
  { id: "faq", label: "FAQ 問答", prompt: "請幫我產生 5 個常見問題與答案。" },
  { id: "comparison", label: "商品比較表", prompt: "請幫我建立兩款 AI 玩具的比較表。" },
  { id: "social", label: "社群貼文", prompt: "請幫我撰寫 Facebook/IG 貼文來推薦這款 AI 玩具。" },
];

export default function AdminAIAssistantPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setOutput("【AI 生成的內容會顯示在這裡】\n\n此功能需要接入 OpenAI / Claude API 才能使用。\n目前為示範模式。\n\n⚠️ AI 產生的內容會儲存為草稿，不會自動發布。");
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">🤖 AI 內容助手</h1>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800 mb-6">
        <p className="font-semibold">⚠️ AI 產生的內容使用須知</p>
        <p>AI 產生的內容必須經過人工審核後才能發布。不得直接用作已發布文章。</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">選擇模板</label>
            <div className="grid grid-cols-2 gap-2">
              {templates.map((t) => (
                <button key={t.id}
                  onClick={() => { setSelectedTemplate(t.id); setInput(t.prompt); }}
                  className={`p-2 text-sm rounded-lg border text-left ${
                    selectedTemplate === t.id ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-slate-300"
                  }`}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">提示詞</label>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={6}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
          </div>
          <button onClick={handleGenerate} disabled={loading || !input}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50">
            {loading ? "生成中..." : "生成內容"}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">生成結果</label>
          <textarea value={output} onChange={(e) => setOutput(e.target.value)} rows={20}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            placeholder="AI 生成的內容會顯示在這裡..." />
          {output && (
            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700">
                儲存為草稿文章
              </button>
              <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-lg hover:bg-slate-200"
                onClick={() => navigator.clipboard.writeText(output)}>
                複製到剪貼簿
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
