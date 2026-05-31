import Link from 'next/link';
import { categories } from '@/data/catalog';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-lg font-semibold text-ink">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-stone-500">{site.tagline}</p>
          <p className="mt-4 text-sm text-stone-500">{site.address}</p>
          <p className="text-sm text-stone-500">{site.hours}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Shop</p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c}>
                <Link href={`/catalog?category=${encodeURIComponent(c)}`} className="text-stone-600 hover:text-brand-700">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Help</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/catalog" className="text-stone-600 hover:text-brand-700">Full catalog</Link></li>
            <li><Link href="/cart" className="text-stone-600 hover:text-brand-700">Your cart</Link></li>
            <li><Link href="/contact" className="text-stone-600 hover:text-brand-700">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            <li>{site.email}</li>
            <li>{site.phone}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-200">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-4 py-5 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {site.name} (demo). Sample data — not a real store.</span>
          <span>
            A portfolio demo by{' '}
            <a href="https://mohamedadelmamoun.com" className="text-brand-700 underline" target="_blank" rel="noopener noreferrer">
              Mohamed Adel Mamoun
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
