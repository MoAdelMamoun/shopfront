/** @type {import('next').NextConfig} */
const nextConfig = {
  // 100% static site — `next build` emits a self-contained `out/` directory
  // that can be hosted anywhere (GitHub Pages, Netlify, Cloudflare Pages, S3…)
  // with zero backend and zero maintenance.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
