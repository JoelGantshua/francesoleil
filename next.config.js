/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['alg-riesoleil.vercel.app'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      { source: '/logo192.png', destination: '/public/logo192.png' },
      { source: '/logo512.png', destination: '/public/logo512.png' },
      { source: '/screenshots/(.*)', destination: '/public/screenshots/$1' },
    ];
  },
};

module.exports = nextConfig;
