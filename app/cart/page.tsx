'use client';

import Link from 'next/link';
import { useCart } from '@/components/CartProvider';
import ProductImage from '@/components/ProductImage';
import { formatPrice } from '@/components/Price';

export default function CartPage() {
  const { lines, subtotal, setQty, remove, ready } = useCart();

  return (
    <div className="mx-auto max-w-content px-4 py-12">
      <h1 className="text-3xl font-semibold text-ink">Your cart</h1>

      {!ready ? (
        <p className="mt-8 text-stone-400">Loading…</p>
      ) : lines.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center">
          <p className="text-stone-600">Your cart is empty.</p>
          <Link
            href="/catalog"
            className="mt-4 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-cream hover:bg-brand-700"
          >
            Browse the catalog
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <ul className="space-y-4 lg:col-span-2">
            {lines.map((l) => (
              <li key={l.slug} className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-4">
                <ProductImage item={l.item} className="h-24 w-32 shrink-0" />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Link href={`/product/${l.slug}`} className="font-medium text-ink hover:text-brand-700">
                        {l.item.name}
                      </Link>
                      <p className="text-sm text-stone-500">{formatPrice(l.item.price)} each</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(l.slug)}
                      className="text-sm text-stone-400 hover:text-brand-700"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="inline-flex items-center rounded-full border border-stone-300">
                      <button
                        type="button"
                        onClick={() => setQty(l.slug, l.qty - 1)}
                        className="h-9 w-9 text-stone-600 hover:text-brand-700"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm tabular-nums">{l.qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(l.slug, l.qty + 1)}
                        className="h-9 w-9 text-stone-600 hover:text-brand-700"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold text-ink">{formatPrice(l.lineTotal)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-ink">Order summary</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-stone-500">Subtotal</dt>
                <dd className="text-ink">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone-500">Shipping</dt>
                <dd className="text-sage-700">Free</dd>
              </div>
              <div className="flex justify-between border-t border-stone-200 pt-3 text-base font-semibold">
                <dt>Total</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
            </dl>
            <Link
              href="/checkout"
              className="mt-5 block rounded-full bg-brand-600 px-6 py-3 text-center text-sm font-medium text-cream hover:bg-brand-700"
            >
              Checkout
            </Link>
            <p className="mt-3 text-center text-xs text-stone-400">No payment is taken at checkout.</p>
          </aside>
        </div>
      )}
    </div>
  );
}
