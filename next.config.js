/** @type {import('next').NextConfig} */
const nextConfig = {
  // Specify output directory for build files
  distDir: '.next',
  
  // Reduce strictness for development
  reactStrictMode: false,
  
  // Enable minification for better performance
  swcMinify: true,
  
  // Configure image optimization to work correctly on Vercel
  images: {
    unoptimized: true, // Completely disable image optimization for all environments
    domains: ['localhost', 'printnpack.vercel.app', 'vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Remove experimental features that might cause stability issues
  
  // Fix httpAgentOptions to only include allowed properties
  httpAgentOptions: {
    keepAlive: true,
  },
  
  // Adjust compiler options
  compiler: {
    // Remove console.log statements in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
