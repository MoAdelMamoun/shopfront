// Demo store identity + landing-page copy. Everything here is obviously
// fictional sample content — there is no real business, address, or person.

export const site = {
  name: process.env.NEXT_PUBLIC_STORE_NAME || 'Driftwood & Co.',
  tagline: 'Small-batch goods for everyday living.',
  currency: process.env.NEXT_PUBLIC_CURRENCY || '$',
  // Fictional contact details (555 numbers + example.com are reserved for demos).
  email: 'hello@example.com',
  phone: '+1 (555) 012-3456',
  address: '123 Sample Lane, Harbor Town, CA 90000',
  hours: 'Mon–Sat · 9am–6pm',
  social: { instagram: '#', pinterest: '#', facebook: '#' },
};

export const hero = {
  eyebrow: 'New season · Coastal Home Edit',
  title: 'Goods made to be lived with',
  subtitle:
    'Linens, ceramics, candles and small services for a warmer, simpler home — small-batch and built to last.',
  primaryCta: { label: 'Shop the catalog', href: '/catalog' },
  secondaryCta: { label: 'Our services', href: '/catalog?category=Services' },
};

export const features = [
  { icon: 'leaf', title: 'Small-batch & natural', body: 'Made in small runs from natural materials — no mass production.' },
  { icon: 'truck', title: 'Free local pickup', body: 'Order online and collect from the Harbor Town shop.' },
  { icon: 'heart', title: 'Lifetime care', body: 'Every piece comes with simple care notes so it lasts for years.' },
  { icon: 'shield', title: 'Easy 30-day returns', body: 'Changed your mind? Send it back within 30 days, no fuss.' },
];

export const testimonials = [
  {
    quote: 'The linen throw is the softest thing in our house. The whole site made checkout effortless.',
    name: 'Sample Customer A',
    detail: 'Sample review',
  },
  {
    quote: 'Booked a styling consult and ordered a few pieces in one go. Lovely little shop.',
    name: 'Sample Customer B',
    detail: 'Sample review',
  },
  {
    quote: 'Beautiful candles and the gift wrapping service is a nice touch for last-minute presents.',
    name: 'Sample Customer C',
    detail: 'Sample review',
  },
];

export type SiteNavLink = { label: string; href: string };
export const nav: SiteNavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Contact', href: '/contact' },
];
