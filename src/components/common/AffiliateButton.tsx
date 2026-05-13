"use client";

interface AffiliateButtonProps {
  href: string;
  platform: string;
  className?: string;
  children?: React.ReactNode;
}

export function AffiliateButton({ href, platform, className = "", children }: AffiliateButtonProps) {
  const handleClick = async () => {
    try {
      await fetch("/api/affiliate-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: href, platform }),
      });
    } catch {}
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors ${className}`}
    >
      {children || `在 ${platform} 購買`}
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}
