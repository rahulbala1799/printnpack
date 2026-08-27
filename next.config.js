/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration - keeping it simple
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/pizza-boxes',
        destination: '/pizza-boxes-ireland',
        permanent: true,
      },
      {
        source: '/pizza-box',
        destination: '/pizza-boxes-ireland',
        permanent: true,
      },
      {
        source: '/products/custom-pizza-boxes-ireland',
        destination: '/custom-pizza-boxes-ireland',
        permanent: true,
      },
      {
        source: '/custom-pizza-boxes',
        destination: '/custom-pizza-boxes-ireland',
        permanent: true,
      },
      {
        source: '/custom-pizza-box',
        destination: '/custom-pizza-boxes-ireland',
        permanent: true,
      },
      {
        source: '/branded-pizza-boxes-ireland',
        destination: '/custom-pizza-boxes-ireland',
        permanent: true,
      },
      {
        source: '/printed-pizza-boxes-ireland',
        destination: '/custom-pizza-boxes-ireland',
        permanent: true,
      },
      {
        source: '/wholesale-pizza-boxes',
        destination: '/pizza-boxes-wholesale-ireland',
        permanent: true,
      },
      {
        source: '/wholesale-pizza-boxes-ireland',
        destination: '/pizza-boxes-wholesale-ireland',
        permanent: true,
      },
      {
        source: '/plain-pizza-boxes',
        destination: '/plain-pizza-boxes-ireland',
        permanent: true,
      },
      {
        source: '/flat-handle-bags',
        destination: '/printed-flat-handle-bags-ireland',
        permanent: true,
      },
      {
        source: '/flat-handle-paper-bags',
        destination: '/printed-flat-handle-bags-ireland',
        permanent: true,
      },
      {
        source: '/printed-flat-handle-bags',
        destination: '/printed-flat-handle-bags-ireland',
        permanent: true,
      },
      {
        source: '/products/flat-handle-paper-bags',
        destination: '/printed-flat-handle-bags-ireland',
        permanent: true,
      },
      {
        source: '/products/eco-bagasse-burger-boxes',
        destination: '/eco-bagasse-burger-boxes',
        permanent: true,
      },
      {
        source: '/products/roll-up-banner-stands',
        destination: '/roll-up-banners-ireland',
        permanent: true,
      },
      {
        source: '/roll-up-banners',
        destination: '/roll-up-banners-ireland',
        permanent: true,
      },
      {
        source: '/roll-up-banner',
        destination: '/roll-up-banners-ireland',
        permanent: true,
      },
      {
        source: '/rollup-banners',
        destination: '/roll-up-banners-ireland',
        permanent: true,
      },
      {
        source: '/pull-up-banners',
        destination: '/roll-up-banners-ireland',
        permanent: true,
      },
      {
        source: '/pull-up-banners-ireland',
        destination: '/roll-up-banners-ireland',
        permanent: true,
      },
      {
        source: '/roller-banners-ireland',
        destination: '/roll-up-banners-ireland',
        permanent: true,
      },
      {
        source: '/blog/roll-up-banner-cost-ireland',
        destination: '/blog/roll-up-banner-printing-ireland',
        permanent: true,
      },
      {
        source: '/roll-up-banner-printing-ireland',
        destination: '/blog/roll-up-banner-printing-ireland',
        permanent: true,
      },
      {
        source: '/products/extra-wide-roll-up-banners',
        destination: '/extra-wide-roll-up-banners-ireland',
        permanent: true,
      },
      {
        source: '/products/vinyl-banners',
        destination: '/vinyl-banners',
        permanent: true,
      },
      {
        source: '/products/posters',
        destination: '/posters',
        permanent: true,
      },
      {
        source: '/products/foamex-boards',
        destination: '/foamex-boards',
        permanent: true,
      },
      {
        source: '/products/correx-boards',
        destination: '/correx-boards',
        permanent: true,
      },
      {
        source: '/products/vinyl-stickers',
        destination: '/vinyl-stickers',
        permanent: true,
      },
      {
        source: '/products/labels-on-a-roll',
        destination: '/labels-on-a-roll',
        permanent: true,
      },
      {
        source: '/disposable-coffee-cups-ireland',
        destination: '/hot-cups-ireland',
        permanent: true,
      },
      {
        source: '/coffee-cups-ireland',
        destination: '/hot-cups-ireland',
        permanent: true,
      },
      {
        source: '/takeaway-coffee-cups-ireland',
        destination: '/hot-cups-ireland',
        permanent: true,
      },
      {
        source: '/paper-cups-ireland',
        destination: '/hot-cups-ireland',
        permanent: true,
      },
      {
        source: '/branded-coffee-cups-dublin',
        destination: '/custom-printed-coffee-cups-ireland',
        permanent: true,
      },
      {
        source: '/branded-coffee-cups-ireland',
        destination: '/custom-printed-coffee-cups-ireland',
        permanent: true,
      },
      {
        source: '/printed-coffee-cups-ireland',
        destination: '/custom-printed-coffee-cups-ireland',
        permanent: true,
      },
      {
        source: '/custom-coffee-cups-ireland',
        destination: '/custom-printed-coffee-cups-ireland',
        permanent: true,
      },
      {
        source: '/personalised-coffee-cups-ireland',
        destination: '/custom-printed-coffee-cups-ireland',
        permanent: true,
      },
      {
        source: '/magnetic-closure-boxes-ireland',
        destination: '/luxury-magnetic-closure-boxes-ireland',
        permanent: true,
      },
      {
        source: '/magnetic-gift-boxes-ireland',
        destination: '/luxury-magnetic-closure-boxes-ireland',
        permanent: true,
      },
      {
        source: '/luxury-gift-boxes-ireland',
        destination: '/luxury-magnetic-closure-boxes-ireland',
        permanent: true,
      },
      {
        source: '/magnetic-boxes-dublin',
        destination: '/luxury-magnetic-closure-boxes-ireland',
        permanent: true,
      },
      {
        source: '/custom-gift-boxes-ireland',
        destination: '/luxury-magnetic-closure-boxes-ireland',
        permanent: true,
      },
      {
        source: '/custom-printed-tissue-paper',
        destination: '/custom-printed-tissue-paper-ireland',
        permanent: true,
      },
      {
        source: '/cake-boxes-ireland',
        destination: '/custom-cake-boxes-ireland',
        permanent: true,
      },
      {
        source: '/custom-printed-cake-boxes-ireland',
        destination: '/custom-cake-boxes-ireland',
        permanent: true,
      },
      {
        source: '/branded-cake-boxes-ireland',
        destination: '/custom-cake-boxes-ireland',
        permanent: true,
      },
      {
        source: '/cupcake-boxes-ireland',
        destination: '/custom-cake-boxes-ireland',
        permanent: true,
      },
      {
        source: '/bakery-packaging-ireland',
        destination: '/custom-cake-boxes-ireland',
        permanent: true,
      },
      {
        source: '/luxury-cake-boxes-ireland',
        destination: '/custom-cake-boxes-ireland',
        permanent: true,
      },
      {
        source: '/premium-flyers-ireland',
        destination: '/premium-leaflets-ireland',
        permanent: true,
      },
      {
        source: '/special-material-flyers-ireland',
        destination: '/premium-leaflets-ireland',
        permanent: true,
      },
      {
        source: '/metallic-flyers-ireland',
        destination: '/premium-leaflets-ireland',
        permanent: true,
      },
      {
        source: '/premium-leaflet-printing-ireland',
        destination: '/premium-leaflets-ireland',
        permanent: true,
      },
      {
        source: '/printed-greaseproof-paper-ireland',
        destination: '/greaseproof-sheets-ireland',
        permanent: true,
      },
      {
        source: '/custom-greaseproof-paper-ireland',
        destination: '/greaseproof-sheets-ireland',
        permanent: true,
      },
      {
        source: '/branded-greaseproof-sheets-ireland',
        destination: '/greaseproof-sheets-ireland',
        permanent: true,
      },
      {
        source: '/greaseproof-paper-printing-ireland',
        destination: '/greaseproof-sheets-ireland',
        permanent: true,
      },
      {
        source: '/greaseproof-paper-ireland',
        destination: '/greaseproof-sheets-ireland',
        permanent: true,
      },
      {
        source: '/custom-printed-greaseproof-sheets-ireland',
        destination: '/greaseproof-sheets-ireland',
        permanent: true,
      },
      {
        source: '/burger-wrap-paper-ireland',
        destination: '/greaseproof-sheets-ireland',
        permanent: true,
      },
      {
        source: '/sandwich-wrapping-paper-ireland',
        destination: '/greaseproof-sheets-ireland',
        permanent: true,
      },
      {
        source: '/stage-backdrops-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/large-stage-banners-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/stage-banner-printing-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/conference-backdrop-banners-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/polyester-backdrop-banners-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/3m-x-3m-banners-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/3m-x-3m-banner-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/large-banners-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/huge-banners-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/custom-large-banners-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/oversized-banners-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/extra-large-banners-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/50m-banners-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/custom-size-banners-ireland',
        destination: '/stage-backdrop-banners-ireland',
        permanent: true,
      },
      {
        source: '/branded-tissue-paper-ireland',
        destination: '/custom-printed-tissue-paper-ireland',
        permanent: true,
      },
      {
        source: '/personalised-tissue-paper-ireland',
        destination: '/custom-printed-tissue-paper-ireland',
        permanent: true,
      },
      {
        source: '/logo-tissue-paper-ireland',
        destination: '/custom-printed-tissue-paper-ireland',
        permanent: true,
      },
      {
        source: '/luxury-tissue-paper-ireland',
        destination: '/custom-printed-tissue-paper-ireland',
        permanent: true,
      },
      {
        source: '/flag-poles-ireland',
        destination: '/custom-printed-flags-ireland',
        permanent: true,
      },
      {
        source: '/custom-flags-ireland',
        destination: '/custom-printed-flags-ireland',
        permanent: true,
      },
      {
        source: '/printed-flags-ireland',
        destination: '/custom-printed-flags-ireland',
        permanent: true,
      },
      {
        source: '/personalised-flags-ireland',
        destination: '/custom-printed-flags-ireland',
        permanent: true,
      },
      {
        source: '/gaa-flags-ireland',
        destination: '/custom-printed-flags-ireland',
        permanent: true,
      },
      {
        source: '/disposable-gloves-ireland',
        destination: '/gloves-ireland',
        permanent: true,
      },
      {
        source: '/catering-gloves-ireland',
        destination: '/gloves-ireland',
        permanent: true,
      },
      {
        source: '/food-handling-gloves-ireland',
        destination: '/gloves-ireland',
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
