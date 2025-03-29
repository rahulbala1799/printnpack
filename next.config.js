/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration - keeping it simple
  reactStrictMode: false,
  swcMinify: true,
  
  // Disable image optimization completely
  images: {
    unoptimized: true,
    domains: ['localhost'],
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
  
  // Increase timeout for image optimization
  httpAgentOptions: {
    keepAlive: true,
  },
}

module.exports = nextConfig
