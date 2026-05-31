// Bundled sample catalog. Obviously fictional products & services so the demo
// runs with zero config. Prices are plain numbers in the store currency.

export type Category = 'Home' | 'Kitchen' | 'Outdoor' | 'Gifts' | 'Services';
export const categories: Category[] = ['Home', 'Kitchen', 'Outdoor', 'Gifts', 'Services'];

export interface CatalogItem {
  slug: string;
  name: string;
  category: Category;
  kind: 'product' | 'service';
  price: number;
  blurb: string;
  description: string;
  details: string[];
  tags: string[];
  featured?: boolean;
  rating: number; // 0–5, one decimal
  reviews: number;
}

export const catalog: CatalogItem[] = [
  {
    slug: 'linen-throw-blanket',
    name: 'Linen Throw Blanket',
    category: 'Home',
    kind: 'product',
    price: 68,
    blurb: 'Stonewashed pure-linen throw in warm oat.',
    description:
      'A generously sized throw woven from stonewashed European linen. Breathable in summer, cozy in winter, and softer with every wash.',
    details: ['100% washed linen', '130 × 170 cm', 'Machine washable, cold', 'Oat / natural'],
    tags: ['linen', 'cozy', 'bedroom', 'living room'],
    featured: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    slug: 'stoneware-vase',
    name: 'Stoneware Vase',
    category: 'Home',
    kind: 'product',
    price: 42,
    blurb: 'Hand-thrown matte stoneware bud vase.',
    description:
      'Each vase is hand-thrown and glazed in a soft matte finish, so no two are exactly alike. Perfect for a single stem or a small posy.',
    details: ['Hand-thrown stoneware', '18 cm tall', 'Watertight glaze', 'Sage / sand'],
    tags: ['ceramic', 'flowers', 'handmade'],
    rating: 4.6,
    reviews: 58,
  },
  {
    slug: 'sea-salt-sage-candle',
    name: 'Soy Candle — Sea Salt & Sage',
    category: 'Home',
    kind: 'product',
    price: 24,
    blurb: 'Hand-poured soy candle, ~45 hour burn.',
    description:
      'A clean-burning soy candle with notes of sea salt, sage and a hint of driftwood. Hand-poured into a reusable tumbler.',
    details: ['Natural soy wax', '~45 hour burn', 'Cotton wick', 'Reusable glass'],
    tags: ['candle', 'fragrance', 'gift'],
    featured: true,
    rating: 4.9,
    reviews: 211,
  },
  {
    slug: 'woven-storage-basket',
    name: 'Woven Storage Basket',
    category: 'Home',
    kind: 'product',
    price: 38,
    blurb: 'Handwoven seagrass basket with handles.',
    description:
      'A sturdy handwoven seagrass basket for blankets, toys or firewood. Soft handles make it easy to move room to room.',
    details: ['Handwoven seagrass', '35 × 30 cm', 'Reinforced handles'],
    tags: ['storage', 'natural', 'living room'],
    rating: 4.5,
    reviews: 73,
  },
  {
    slug: 'speckled-ceramic-mug',
    name: 'Speckled Ceramic Mug',
    category: 'Kitchen',
    kind: 'product',
    price: 18,
    blurb: 'Chunky speckled mug, 350ml.',
    description:
      'A satisfyingly chunky mug with a speckled reactive glaze. Holds a proper 350ml of coffee and feels great in the hand.',
    details: ['Glazed stoneware', '350 ml', 'Dishwasher safe', 'Speckled cream'],
    tags: ['mug', 'coffee', 'ceramic'],
    featured: true,
    rating: 4.7,
    reviews: 96,
  },
  {
    slug: 'olive-wood-cutting-board',
    name: 'Olive Wood Cutting Board',
    category: 'Kitchen',
    kind: 'product',
    price: 52,
    blurb: 'Solid olive-wood board with hanging loop.',
    description:
      'A solid olive-wood board with beautiful natural grain. Great for serving cheese and charcuterie or everyday prep.',
    details: ['Solid olive wood', '40 × 18 cm', 'Leather hanging loop', 'Oil to maintain'],
    tags: ['wood', 'serving', 'kitchen'],
    rating: 4.8,
    reviews: 64,
  },
  {
    slug: 'cotton-tea-towel-set',
    name: 'Cotton Tea Towel Set',
    category: 'Kitchen',
    kind: 'product',
    price: 22,
    blurb: 'Set of two woven cotton tea towels.',
    description:
      'A set of two absorbent waffle-weave cotton tea towels in complementary tones. They only get softer with use.',
    details: ['100% cotton', 'Set of 2', '50 × 70 cm each', 'Machine washable'],
    tags: ['kitchen', 'cotton', 'set'],
    rating: 4.4,
    reviews: 41,
  },
  {
    slug: 'pour-over-coffee-kit',
    name: 'Pour-Over Coffee Kit',
    category: 'Kitchen',
    kind: 'product',
    price: 46,
    blurb: 'Ceramic dripper, carafe & reusable filter.',
    description:
      'Everything you need for a slow morning brew: a ceramic dripper, a glass carafe and a reusable stainless filter.',
    details: ['Ceramic dripper', '600 ml carafe', 'Reusable filter', 'Gift boxed'],
    tags: ['coffee', 'gift', 'kit'],
    featured: true,
    rating: 4.7,
    reviews: 88,
  },
  {
    slug: 'enamel-camp-mug',
    name: 'Enamel Camp Mug',
    category: 'Outdoor',
    kind: 'product',
    price: 16,
    blurb: 'Classic speckled enamel mug, 300ml.',
    description:
      'A lightweight, hard-wearing enamel mug for the trail, the campfire or the back garden. Rolled rim, classic speckle.',
    details: ['Enamel-coated steel', '300 ml', 'Lightweight', 'Not microwave safe'],
    tags: ['outdoor', 'camping', 'mug'],
    rating: 4.5,
    reviews: 132,
  },
  {
    slug: 'picnic-blanket',
    name: 'Waterproof Picnic Blanket',
    category: 'Outdoor',
    kind: 'product',
    price: 58,
    blurb: 'Woven top, waterproof backing, folds flat.',
    description:
      'A roomy picnic blanket with a soft woven top and a fully waterproof backing. Folds into a neat carry strap.',
    details: ['Woven cotton top', 'Waterproof backing', '140 × 180 cm', 'Carry strap'],
    tags: ['outdoor', 'picnic', 'family'],
    rating: 4.6,
    reviews: 77,
  },
  {
    slug: 'terracotta-planter',
    name: 'Terracotta Planter',
    category: 'Outdoor',
    kind: 'product',
    price: 28,
    blurb: 'Hand-pressed terracotta pot with saucer.',
    description:
      'A classic hand-pressed terracotta planter with a matching saucer. Ages beautifully and breathes for healthier roots.',
    details: ['Natural terracotta', '16 cm diameter', 'Drainage hole', 'Saucer included'],
    tags: ['garden', 'plants', 'terracotta'],
    rating: 4.7,
    reviews: 52,
  },
  {
    slug: 'gift-box-cozy-night-in',
    name: 'Gift Box — Cozy Night In',
    category: 'Gifts',
    kind: 'product',
    price: 74,
    blurb: 'Candle, mug, tea towel & linen napkin.',
    description:
      'A ready-to-give bundle: a sea salt & sage candle, a speckled mug, a tea towel and a linen napkin, packed in a kraft gift box.',
    details: ['4 curated items', 'Kraft gift box', 'Includes a blank card', 'Ships ready to give'],
    tags: ['gift', 'bundle', 'set'],
    featured: true,
    rating: 4.9,
    reviews: 38,
  },
  {
    slug: 'greeting-card-set',
    name: 'Greeting Card Set',
    category: 'Gifts',
    kind: 'product',
    price: 14,
    blurb: 'Set of six recycled-paper cards.',
    description:
      'Six blank greeting cards printed on recycled paper with hand-drawn coastal motifs. Envelopes included.',
    details: ['Set of 6', 'Recycled paper', 'Blank inside', 'Envelopes included'],
    tags: ['cards', 'paper', 'gift'],
    rating: 4.3,
    reviews: 29,
  },
  {
    slug: 'gift-wrapping',
    name: 'Gift Wrapping',
    category: 'Services',
    kind: 'service',
    price: 6,
    blurb: 'Hand-wrapped in kraft paper & twine.',
    description:
      'Add hand wrapping to any order — kraft paper, cotton twine and a sprig of dried foliage, with a handwritten note card.',
    details: ['Per item', 'Kraft & twine', 'Handwritten note', 'Add at checkout'],
    tags: ['service', 'gift', 'add-on'],
    rating: 4.8,
    reviews: 64,
  },
  {
    slug: 'interior-styling-consult',
    name: 'Interior Styling Consult (45 min)',
    category: 'Services',
    kind: 'service',
    price: 90,
    blurb: 'A 45-minute styling session for one room.',
    description:
      'Book a 45-minute video styling session for a single room. You get a simple moodboard and a shopping list afterwards.',
    details: ['45 minutes, video call', 'One room', 'Moodboard + list', 'Demo booking only'],
    tags: ['service', 'styling', 'consult'],
    featured: true,
    rating: 5.0,
    reviews: 17,
  },
  {
    slug: 'candle-making-workshop',
    name: 'Candle-Making Workshop',
    category: 'Services',
    kind: 'service',
    price: 55,
    blurb: 'Two-hour in-store workshop for one.',
    description:
      'A relaxed two-hour workshop where you pour and scent your own soy candle to take home. Materials and a drink included.',
    details: ['2 hours', 'All materials included', 'Take your candle home', 'Demo booking only'],
    tags: ['service', 'workshop', 'experience'],
    rating: 4.9,
    reviews: 23,
  },
];

export const bySlug = (slug: string): CatalogItem | undefined => catalog.find((c) => c.slug === slug);
export const featured = (): CatalogItem[] => catalog.filter((c) => c.featured);
export const related = (item: CatalogItem, n = 4): CatalogItem[] =>
  catalog.filter((c) => c.category === item.category && c.slug !== item.slug).slice(0, n);

// Per-category accent color used by the placeholder artwork (no image assets,
// so the repo stays light and the demo runs with zero config).
export const categoryColor: Record<Category, { from: string; to: string }> = {
  Home: { from: '#cd8d6a', to: '#8a4733' },
  Kitchen: { from: '#7f9a72', to: '#566b4c' },
  Outdoor: { from: '#6f93a8', to: '#3f5d70' },
  Gifts: { from: '#bf724b', to: '#703c2f' },
  Services: { from: '#b39b86', to: '#6d5947' },
};
