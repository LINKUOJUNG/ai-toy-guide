"use client";

export function RatingStars({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClass = size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<span key={i} className={`rating-star ${sizeClass}`}>★</span>);
    } else if (i - 0.5 <= rating) {
      stars.push(<span key={i} className={`rating-star ${sizeClass}`}>★</span>);
    } else {
      stars.push(<span key={i} className={`rating-star-empty ${sizeClass}`}>★</span>);
    }
  }
  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      <span className={`font-semibold text-slate-700 ${size === "sm" ? "text-xs" : "text-sm"}`}>{rating.toFixed(1)}</span>
    </div>
  );
}
