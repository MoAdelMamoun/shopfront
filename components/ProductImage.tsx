import { categoryColor, type CatalogItem } from '@/data/catalog';

// Asset-free placeholder artwork: a tasteful gradient panel + the product name.
// Keeps the repo light and the demo zero-config. Swap for real photography by
// dropping images in /public and replacing this component.
export default function ProductImage({
  item,
  className,
  rounded = 'rounded-2xl',
}: {
  item: CatalogItem;
  className?: string;
  rounded?: string;
}) {
  const c = categoryColor[item.category];
  const gid = `g-${item.slug}`;
  return (
    <div className={`relative overflow-hidden ${rounded} ${className ?? ''}`} aria-hidden>
      <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c.from} />
            <stop offset="100%" stopColor={c.to} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#${gid})`} />
        {/* soft arcs */}
        <g fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5">
          <circle cx="320" cy="60" r="70" />
          <circle cx="320" cy="60" r="46" />
          <circle cx="60" cy="250" r="56" />
        </g>
        <rect x="0" y="0" width="400" height="300" fill="rgba(0,0,0,0.06)" />
        <text
          x="28"
          y="270"
          fill="rgba(255,255,255,0.95)"
          fontFamily="Georgia, serif"
          fontSize="22"
          fontStyle="italic"
        >
          {item.name.length > 22 ? item.name.slice(0, 21) + '…' : item.name}
        </text>
        <text x="28" y="40" fill="rgba(255,255,255,0.8)" fontFamily="ui-sans-serif, sans-serif" fontSize="11" letterSpacing="2">
          {item.category.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
