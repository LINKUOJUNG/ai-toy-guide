export function AffiliateDisclosure({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800 ${className}`}>
      <p className="font-semibold mb-1">📋 聯盟揭露聲明</p>
      <p>
        本文可能包含聯盟連結。當您透過本文連結購買商品時，我們可能會獲得少量佣金，
        但不會增加您的購買成本。我們仍會以實際功能、價格、適用年齡、安全性與使用體驗作為評測依據。
      </p>
    </div>
  );
}
