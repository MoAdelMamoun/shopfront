import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { catalog, bySlug, related } from '@/data/catalog';
import ProductImage from '@/components/ProductImage';
import ProductCard from '@/components/ProductCard';
import Stars from '@/components/Stars';
import AddToCart from '@/components/AddToCart';
import Icon from '@/components/Icon';
import { formatPrice } from '@/components/Price';

export function generateStaticParams() {
  return catalog.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = bySlug(slug);
  if (!item) return {};
  return { title: item.name, description: item.blurb };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = bySlug(slug);
  if (!item) notFound();
  const rel = related(item);

  return (
    <div className="mx-auto max-w-content px-4 py-10">
      <nav className="mb-6 flex items-center gap-2 text-sm text-stone-500">
        <Link href="/" className="hover:text-brand-700">Home</Link>
        <span>/</span>
        <Link href={`/catalog?category=${encodeURIComponent(item.category)}`} className="hover:text-brand-700">
          {item.category}
        </Link>
        <span>/</span>
        <span className="text-stone-700">{item.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <ProductImage item={item} className="aspect-[4/3] w-full" />

        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-stone-400">{item.category}</span>
            {item.kind === 'service' && (
              <span className="rounded-full bg-sage-100 px-2 py-0.5 text-xs text-sage-700">Bookable service</span>
            )}
          </div>
          <h1 className="mt-2 text-3xl font-semibold text-ink">{item.name}</h1>
          <div className="mt-3">
            <Stars rating={item.rating} reviews={item.reviews} />
          </div>
          <p className="mt-4 text-2xl font-semibold text-ink">{formatPrice(item.price)}</p>
          <p className="mt-4 text-stone-600">{item.description}</p>

          <ul className="mt-5 space-y-2">
            {item.details.map((d) => (
              <li key={d} className="flex items-center gap-2 text-sm text-stone-600">
                <Icon name="check" className="h-4 w-4 text-sage-500" />
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <AddToCart item={item} />
          </div>

          <p className="mt-4 text-xs text-stone-400">
            Adding to cart and checking out never charges a card or places a real order.
          </p>
        </div>
      </div>

      {rel.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-ink">You might also like</h2>
          <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {rel.map((r) => (
              <ProductCard key={r.slug} item={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
