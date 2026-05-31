'use client';

import { useEffect, useMemo, useState } from 'react';
import { catalog, categories, type Category } from '@/data/catalog';
import ProductCard from './ProductCard';
import Icon from './Icon';

type CatFilter = 'All' | Category;
type Sort = 'featured' | 'price-asc' | 'price-desc' | 'rating';

const SORTS: { value: Sort; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'rating', label: 'Top rated' },
];

export default function CatalogBrowser() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<CatFilter>('All');
  const [sort, setSort] = useState<Sort>('featured');

  // Pick up ?category= from the URL on mount (avoids useSearchParams so static
  // export needs no Suspense boundary).
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get('category');
    if (c && (categories as string[]).includes(c)) setCat(c as Category);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let items = catalog.filter((i) => {
      const inCat = cat === 'All' || i.category === cat;
      const inQuery =
        !q ||
        i.name.toLowerCase().includes(q) ||
        i.blurb.toLowerCase().includes(q) ||
        i.tags.some((t) => t.includes(q));
      return inCat && inQuery;
    });
    items = [...items].sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return Number(b.featured ?? false) - Number(a.featured ?? false);
      }
    });
    return items;
  }, [query, cat, sort]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-sm flex-1">
          <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products & services…"
            className="w-full rounded-full border border-stone-300 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-brand-500"
            aria-label="Search the catalog"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-stone-600">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-full border border-stone-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand-500"
            aria-label="Sort products"
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Category chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {(['All', ...categories] as CatFilter[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              cat === c ? 'bg-brand-600 text-cream' : 'border border-stone-300 bg-white text-stone-600 hover:border-brand-400'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-stone-500">
        {results.length} item{results.length === 1 ? '' : 's'}
        {cat !== 'All' ? ` in ${cat}` : ''}
        {query ? ` matching “${query}”` : ''}
      </p>

      {results.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center text-stone-500">
          No matches. Try clearing the search or choosing a different category.
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {results.map((item) => (
            <ProductCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
