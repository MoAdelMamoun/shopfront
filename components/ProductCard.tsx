import Link from 'next/link';
import type { CatalogItem } from '@/data/catalog';
import ProductImage from './ProductImage';
import Stars from './Stars';
import { formatPrice } from './Price';

export default function ProductCard({ item }: { item: CatalogItem }) {
  return (
    <Link
      href={`/product/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-md"
    >
      <ProductImage item={item} rounded="rounded-none" className="aspect-[4/3]" />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-stone-400">{item.category}</span>
          {item.kind === 'service' && (
            <span className="rounded-full bg-sage-100 px-2 py-0.5 text-xs text-sage-700">Service</span>
          )}
        </div>
        <h3 className="mt-1 font-medium text-ink group-hover:text-brand-700">{item.name}</h3>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-stone-500">{item.blurb}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold text-ink">{formatPrice(item.price)}</span>
          <Stars rating={item.rating} />
        </div>
      </div>
    </Link>
  );
}
