import type { Metadata } from 'next';
import CatalogBrowser from '@/components/CatalogBrowser';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Browse the full catalog of products and services — filter by category, search and sort.',
};

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-ink">Catalog</h1>
        <p className="mt-2 max-w-xl text-stone-500">
          Everything in the shop — products and bookable services, all in one place.
        </p>
      </header>
      <CatalogBrowser />
    </div>
  );
}
