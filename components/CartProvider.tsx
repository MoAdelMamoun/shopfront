'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { bySlug, type CatalogItem } from '@/data/catalog';

const STORAGE_KEY = 'shopfront.cart.v1';

interface CartLine {
  slug: string;
  qty: number;
}
export interface ResolvedLine extends CartLine {
  item: CatalogItem;
  lineTotal: number;
}

interface CartContextValue {
  lines: ResolvedLine[];
  count: number;
  subtotal: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  ready: boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [raw, setRaw] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  // Load once on mount (client-only; static export friendly).
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setRaw(JSON.parse(stored));
    } catch {
      /* ignore corrupt storage */
    }
    setReady(true);
  }, []);

  // Persist on change.
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(raw));
    } catch {
      /* ignore quota errors */
    }
  }, [raw, ready]);

  const value = useMemo<CartContextValue>(() => {
    const lines: ResolvedLine[] = raw
      .map((l) => {
        const item = bySlug(l.slug);
        return item ? { ...l, item, lineTotal: item.price * l.qty } : null;
      })
      .filter((l): l is ResolvedLine => l !== null);

    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.lineTotal, 0),
      ready,
      add: (slug, qty = 1) =>
        setRaw((prev) => {
          const found = prev.find((l) => l.slug === slug);
          if (found) return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l));
          return [...prev, { slug, qty }];
        }),
      setQty: (slug, qty) =>
        setRaw((prev) =>
          qty <= 0 ? prev.filter((l) => l.slug !== slug) : prev.map((l) => (l.slug === slug ? { ...l, qty } : l)),
        ),
      remove: (slug) => setRaw((prev) => prev.filter((l) => l.slug !== slug)),
      clear: () => setRaw([]),
    };
  }, [raw, ready]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within <CartProvider>');
  return ctx;
}
