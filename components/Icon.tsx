// Tiny inline icon set (no icon-font dependency).
const PATHS: Record<string, string> = {
  leaf: 'M11 3C6 3 3 7 3 12c0 4 2 7 2 7s2-1 4-3m4-13c5 0 8 4 8 9 0 6-5 9-11 9 0-7 2-13 8-15',
  truck: 'M3 6h11v9H3zM14 9h4l3 3v3h-7zM7 18a1.5 1.5 0 1 0 0 .01M17 18a1.5 1.5 0 1 0 0 .01',
  heart: 'M12 20s-7-4.3-9.3-8.3A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 9.3 5.7C19 15.7 12 20 12 20z',
  shield: 'M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z',
  cart: 'M3 4h2l2.4 12.3A2 2 0 0 0 9.4 18h8.2a2 2 0 0 0 2-1.6L21 8H6M9 21a1 1 0 1 0 0 .01M18 21a1 1 0 1 0 0 .01',
  check: 'M5 13l4 4L19 7',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.8 6.6 20l1-6.1L3.2 9.5l6.1-.9z',
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-3.5-3.5',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  bag: 'M6 8h12l-1 12H7zM9 8a3 3 0 0 1 6 0',
};

export default function Icon({ name, className }: { name: keyof typeof PATHS | string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? 'h-5 w-5'}
      aria-hidden
    >
      <path d={PATHS[name] ?? ''} />
    </svg>
  );
}
