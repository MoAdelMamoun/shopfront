'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/components/CartProvider';
import { formatPrice } from '@/components/Price';
import Icon from '@/components/Icon';

interface Placed {
  order: string;
  total: number;
  items: { name: string; qty: number; lineTotal: number }[];
  email: string;
}

export default function CheckoutPage() {
  const { lines, subtotal, clear, ready } = useCart();
  const [placed, setPlaced] = useState<Placed | null>(null);
  const [email, setEmail] = useState('');

  function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    // Build a confirmation, clear the cart. No payment, no network.
    const order = 'ORD-' + Math.random().toString(36).slice(2, 7).toUpperCase();
    setPlaced({
      order,
      total: subtotal,
      email,
      items: lines.map((l) => ({ name: l.item.name, qty: l.qty, lineTotal: l.lineTotal })),
    });
    clear();
    window.scrollTo({ top: 0 });
  }

  if (placed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-700">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h1 className="mt-5 text-3xl font-semibold text-ink">Order confirmed</h1>
        <p className="mt-2 text-stone-500">
          Order <span className="font-mono text-ink">{placed.order}</span>
          {placed.email ? <> · a receipt would go to {placed.email}</> : null}
        </p>

        <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 text-left">
          <ul className="divide-y divide-stone-100">
            {placed.items.map((i) => (
              <li key={i.name} className="flex justify-between py-3 text-sm">
                <span className="text-stone-700">
                  {i.name} <span className="text-stone-400">× {i.qty}</span>
                </span>
                <span className="text-ink">{formatPrice(i.lineTotal)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex justify-between border-t border-stone-200 pt-3 font-semibold">
            <span>Total</span>
            <span>{formatPrice(placed.total)}</span>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-md rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-800">
          <strong>No payment was taken and no order was placed.</strong>
        </p>

        <Link
          href="/catalog"
          className="mt-7 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-cream hover:bg-brand-700"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  if (ready && lines.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold text-ink">Checkout</h1>
        <p className="mt-3 text-stone-500">Your cart is empty, so there’s nothing to check out.</p>
        <Link
          href="/catalog"
          className="mt-5 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-cream hover:bg-brand-700"
        >
          Browse the catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-content px-4 py-12">
      <h1 className="text-3xl font-semibold text-ink">Checkout</h1>
      <p className="mt-2 text-sm text-stone-500">
        Submitting shows a confirmation only — no card is charged and no data leaves your browser.
      </p>

      <form onSubmit={placeOrder} className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <fieldset className="rounded-2xl border border-stone-200 bg-white p-6">
            <legend className="px-2 text-sm font-semibold text-ink">Contact</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" autoComplete="name" required />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={setEmail}
              />
            </div>
          </fieldset>

          <fieldset className="rounded-2xl border border-stone-200 bg-white p-6">
            <legend className="px-2 text-sm font-semibold text-ink">Shipping address</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Address" name="address" autoComplete="address-line1" required className="sm:col-span-2" />
              <Field label="City" name="city" autoComplete="address-level2" required />
              <Field label="Postal code" name="zip" autoComplete="postal-code" required />
            </div>
          </fieldset>
        </div>

        <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-ink">Summary</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {lines.map((l) => (
              <li key={l.slug} className="flex justify-between">
                <span className="text-stone-600">
                  {l.item.name} <span className="text-stone-400">× {l.qty}</span>
                </span>
                <span className="text-ink">{formatPrice(l.lineTotal)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-stone-200 pt-3 font-semibold">
            <span>Total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-cream hover:bg-brand-700"
          >
            Place order
          </button>
        </aside>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
  className,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <label className={`block text-sm ${className ?? ''}`}>
      <span className="text-stone-600">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 outline-none focus:border-brand-500"
      />
    </label>
  );
}
