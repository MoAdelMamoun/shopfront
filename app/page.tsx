import Link from 'next/link';
import { catalog, categories, featured, categoryColor } from '@/data/catalog';
import { hero, features, testimonials, site } from '@/data/site';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/Icon';
import NewsletterDemo from '@/components/NewsletterDemo';

export default function HomePage() {
  const feat = featured();
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-cream">
        <div className="mx-auto grid max-w-content items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700 ring-1 ring-brand-200">
              {hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-ink md:text-5xl">{hero.title}</h1>
            <p className="mt-4 max-w-md text-lg text-stone-600">{hero.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-brand-700"
              >
                {hero.primaryCta.label}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brand-500 hover:text-brand-700"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Decorative collage of category tiles */}
          <div className="grid grid-cols-2 gap-3">
            {categories.slice(0, 4).map((c, i) => {
              const col = categoryColor[c];
              return (
                <Link
                  key={c}
                  href={`/catalog?category=${encodeURIComponent(c)}`}
                  className={`flex h-32 items-end rounded-2xl p-4 text-cream shadow-sm transition-transform hover:-translate-y-0.5 md:h-40 ${i % 2 ? 'translate-y-4' : ''}`}
                  style={{ background: `linear-gradient(135deg, ${col.from}, ${col.to})` }}
                >
                  <span className="font-serif text-lg font-semibold">{c}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="mx-auto max-w-content px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Icon name={f.icon} />
              </div>
              <h3 className="mt-3 text-base font-semibold text-ink">{f.title}</h3>
              <p className="mt-1 text-sm text-stone-500">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-content px-4 py-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-ink">Featured this season</h2>
            <p className="mt-1 text-stone-500">A handful of favourites from the catalog.</p>
          </div>
          <Link href="/catalog" className="hidden text-sm font-medium text-brand-700 hover:underline sm:inline">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {feat.map((item) => (
            <ProductCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      {/* Category band */}
      <section className="mx-auto max-w-content px-4 py-12">
        <h2 className="text-2xl font-semibold text-ink">Shop by category</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => {
            const col = categoryColor[c];
            const n = catalog.filter((i) => i.category === c).length;
            return (
              <Link
                key={c}
                href={`/catalog?category=${encodeURIComponent(c)}`}
                className="flex h-28 flex-col justify-between rounded-2xl p-4 text-cream transition-transform hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${col.from}, ${col.to})` }}
              >
                <span className="font-serif text-lg font-semibold">{c}</span>
                <span className="text-xs text-cream/80">{n} item{n === 1 ? '' : 's'}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Services callout */}
      <section className="bg-sage-100">
        <div className="mx-auto grid max-w-content items-center gap-8 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-ink">More than products — book a service</h2>
            <p className="mt-3 text-stone-600">
              Add gift wrapping to any order, book a 45-minute interior styling consult, or join a candle-making
              workshop. Services live right alongside products in the same cart and checkout.
            </p>
            <Link
              href="/catalog?category=Services"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-opacity hover:opacity-90"
            >
              Browse services
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {catalog
              .filter((i) => i.category === 'Services')
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/product/${s.slug}`}
                  className="rounded-xl bg-white p-4 text-sm shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="font-medium text-ink">{s.name}</p>
                  <p className="mt-1 text-brand-700">
                    {site.currency}
                    {s.price.toFixed(2)}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-content px-4 py-14">
        <h2 className="text-2xl font-semibold text-ink">What (demo) customers say</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-stone-200 bg-white p-6">
              <div className="text-brand-500" aria-hidden>★★★★★</div>
              <blockquote className="mt-3 text-stone-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-stone-500">
                {t.name} · <span className="text-stone-400">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Newsletter (demo) */}
      <section className="mx-auto max-w-content px-4 pb-16">
        <NewsletterDemo />
      </section>
    </>
  );
}
