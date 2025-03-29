/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration - keeping it simple
  reactStrictMode: false,
  swcMinify: true,
  
  // Just disable image optimization completely
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
