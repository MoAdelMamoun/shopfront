'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { nav, site } from '@/data/site';
import { useCart } from './CartProvider';
import Icon from './Icon';

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-ink">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-brand-700 ${
                isActive(l.href) ? 'text-brand-700' : 'text-stone-600'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            className="relative inline-flex items-center gap-2 rounded-full border border-stone-300 px-3.5 py-2 text-sm text-ink transition-colors hover:border-brand-500 hover:text-brand-700"
            aria-label={`Cart, ${count} item${count === 1 ? '' : 's'}`}
          >
            <Icon name="bag" className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1 text-xs font-medium text-cream">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-stone-200 bg-cream px-4 py-3 md:hidden">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm ${isActive(l.href) ? 'text-brand-700' : 'text-stone-700'}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
