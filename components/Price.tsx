import { site } from '@/data/site';

export function formatPrice(value: number): string {
  return `${site.currency}${value.toFixed(2)}`;
}

export default function Price({ value, className }: { value: number; className?: string }) {
  return <span className={className}>{formatPrice(value)}</span>;
}
