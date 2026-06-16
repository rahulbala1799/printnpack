/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration - keeping it simple
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'printnpack.ie' }],
        destination: 'https://www.printnpack.ie/:path*',
        permanent: true,
      },
    ];
  },
  
  // Enable image optimization with better settings for Vercel
  images: {
    domains: ['localhost', 'printnpack.vercel.app'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Increase the buffer size for image processing
  experimental: {
    largePageDataBytes: 128 * 100000, // Increase for large pages
  },
}

module.exports = nextConfig
