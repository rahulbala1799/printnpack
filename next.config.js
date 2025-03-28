/** @type {import('next').NextConfig} */
const nextConfig = {
  // Specify output directory for build files
  distDir: '.next',
  
  // Reduce strictness for development
  reactStrictMode: false,
  
  // Enable minification for better performance
  swcMinify: true,
  
  // Disable image optimization entirely to prevent ECONNRESET errors
  images: {
    unoptimized: true,
    // Add default domains for image sources
    domains: ['localhost'],
    // Higher quality defaults
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable experimental features that help with stability
  experimental: {
    // These features can help with local development issues
    scrollRestoration: true,
    legacyBrowsers: false,
  },
  
  // Set higher timeout for fetch operations (30 seconds)
  httpAgentOptions: {
    keepAlive: true,
    timeout: 30000,
  },
  
  // Adjust compiler options
  compiler: {
    // Remove console.log statements in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
