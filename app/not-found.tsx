import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="font-serif text-6xl font-semibold text-brand-200">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-ink">We couldn’t find that page</h1>
      <p className="mt-2 text-stone-500">The link may be old, or the product may have sold out.</p>
      <Link
        href="/catalog"
        className="mt-6 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-cream hover:bg-brand-700"
      >
        Back to the catalog
      </Link>
    </div>
  );
}
