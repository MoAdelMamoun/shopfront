export default function Stars({ rating, reviews, className }: { rating: number; reviews?: number; className?: string }) {
  const full = Math.round(rating);
  return (
    <span className={`inline-flex items-center gap-1 ${className ?? ''}`} aria-label={`Rated ${rating} out of 5`}>
      <span className="text-brand-500" aria-hidden>
        {'★'.repeat(full)}
        <span className="text-stone-300">{'★'.repeat(5 - full)}</span>
      </span>
      <span className="text-sm text-stone-500">
        {rating.toFixed(1)}
        {typeof reviews === 'number' ? ` (${reviews})` : ''}
      </span>
    </span>
  );
}
