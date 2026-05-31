'use client';

import { useState } from 'react';
import { useCart } from './CartProvider';
import type { CatalogItem } from '@/data/catalog';

export default function AddToCart({ item }: { item: CatalogItem }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function onAdd() {
    add(item.slug, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  const isService = item.kind === 'service';

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="inline-flex items-center rounded-full border border-stone-300">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="h-10 w-10 text-lg text-stone-600 hover:text-brand-700"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-8 text-center text-sm tabular-nums">{qty}</span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          className="h-10 w-10 text-lg text-stone-600 hover:text-brand-700"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-brand-700"
      >
        {added ? 'Added ✓' : isService ? 'Add booking to cart' : 'Add to cart'}
      </button>
      {isService && <span className="text-xs text-stone-500">Booking confirmed at checkout</span>}
    </div>
  );
}
