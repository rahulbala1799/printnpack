import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const posts = [
  {
    slug: 'printing-ashbourne-guide',
    title: 'Printing in Ashbourne Guide: Artwork Tips & What to Print Locally',
    excerpt:
      'What you can print locally in Ashbourne, how to prepare artwork, fast turnaround tips, and practical advice for posters, certificates, flyers and business print.',
    date: '2026-06-23',
    readTime: '10 min read',
    image: '/ifa/product/Poster/single_poster.jpg',
    imageAlt: 'Poster printing in Ashbourne at PrintNPack',
    category: 'Local Print Guide',
  },
  {
    slug: 'eu-ppwr-packaging-regulation-ireland-2026',
    title: 'EU Packaging Regulation Ireland 2026: What the PPWR Means for Irish Food Businesses',
    excerpt:
      'The EU Packaging and Packaging Waste Regulation (PPWR) becomes Irish law automatically on 12 August 2026. This guide explains the PFAS ban, recyclability mandates, EPR fee changes, and how Irish restaurants, takeaways, and retailers can get compliant packaging now — before the deadline rush.',
    date: '2026-02-20',
    readTime: '9 min read',
    image: '/images/products/bagasse-burger-box/1.png',
    imageAlt: 'PPWR-compliant bagasse burger boxes Ireland – PFAS-free eco food packaging',
    category: 'Compliance Guide',
  },
  {
    slug: 'business-stamps-ireland-guide',
    title: 'Business Stamps Ireland: Company Stamps, Invoice Stamps & Logo Stamps Guide',
    excerpt:
      'Everything Irish businesses need to know about company stamps — what to include, self-inking vs traditional, and how to order custom rubber stamps.',
    date: '2026-06-21',
    readTime: '7 min read',
    image: '/images/rubber-stamps/RubberStamp_10.jpg',
    imageAlt: 'Business stamps Ireland — custom company and invoice rubber stamps',
    category: 'Print Guide',
  },
  {
    slug: 'personalised-napkins-ireland-guide',
    title: 'Personalised Napkins Ireland: Sizes, Materials & Wedding Napkin Guide',
    excerpt:
      'Cocktail vs dinner napkin sizes, paper vs linen-feel, wedding napkins, restaurant branding, and how to order custom printed napkins in Ireland.',
    date: '2026-06-21',
    readTime: '8 min read',
    image: '/images/hero/napkin.svg',
    imageAlt: 'Personalised napkins Ireland — branded restaurant and wedding napkins',
    category: 'Hospitality Guide',
  },
  {
    slug: 'foamex-boards-ireland-guide',
    title: 'Foamex Boards Ireland: Thickness, Sizes & Signage Guide',
    excerpt:
      '3mm vs 5mm vs 10mm foamex, standard sheet sizes, indoor vs outdoor use, foamex vs correx, and how to order custom PVC foam signage.',
    date: '2026-06-21',
    readTime: '7 min read',
    image: '/ifa/product/foamex/3mm-Printed-Foamex-Boards-XL-Displays.avif',
    imageAlt: 'Foamex boards Ireland — custom PVC foam board signage',
    category: 'Signage Guide',
  },
  {
    slug: 'banner-sizes-ireland',
    title: 'Banner Sizes Ireland: PVC Outdoor & Roll-Up Banner Size Guide',
    excerpt:
      'Standard PVC banner sizes (2×4, 3×6, 4×8, 5×10) and roll-up dimensions for Irish shops, schools, and events — with pricing from €25.',
    date: '2026-06-21',
    readTime: '6 min read',
    image: '/ifa/product/banner/1666183881.webp',
    imageAlt: 'Standard banner sizes Ireland — PVC outdoor and roll-up banners',
    category: 'Print Guide',
  },
  {
    slug: 'banner-printing-ireland-guide',
    title: 'Banner Printing in Ashbourne, Dublin and Meath: Cost, Materials and Turnaround Guide',
    excerpt:
      'How much does banner printing cost in Ireland? PVC vs mesh, roll-up sizes, artwork tips, eyelets, and urgent turnaround — a practical guide for shops, schools, and events.',
    date: '2026-06-20',
    readTime: '8 min read',
    image: '/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp',
    imageAlt: 'Banner printing Ireland — custom PVC and roll-up banners',
    category: 'Print Guide',
  },
  {
    slug: 'trade-show-banners-decals-ireland',
    title: 'Trade Show Banners and Custom Decals in Ireland: The Complete High-Impact Marketing Guide',
    excerpt:
      'High quality trade show banners and custom decals in Ireland. Where they work best, why demand is rising, and how to choose the right option for your business — fast turnaround and affordable pricing for SMEs.',
    date: '2026-02-18',
    readTime: '9 min read',
    image: '/ifa/product/rollup/1.png',
    imageAlt: 'Trade show banners and custom decals Ireland – roll-up banners and exhibition displays',
    category: 'Print Guide',
  },
  {
    slug: 'corriboard-boards-ireland',
    title: 'Corriboard (Correx) Boards in Ireland: The Quiet Workhorse of Outdoor Marketing',
    excerpt:
      "If you've walked down any Irish street during an election, passed a property for sale, or attended a summer festival, you've already seen corriboard in action. This guide explains what it is, why it performs so well in Irish weather, and where businesses use it most.",
    date: '2026-02-18',
    readTime: '7 min read',
    image: '/ifa/product/corriboard/corrugated-plastic-signs.jpg',
    imageAlt: 'Corriboard (Correx) boards Ireland – outdoor signage printing',
    category: 'Print Guide',
  },
  {
    slug: 'custom-vinyl-stickers-ireland',
    title: 'Custom Vinyl Stickers Ireland: The Complete Guide to Materials, Uses & Ordering',
    excerpt:
      'Window stickers, car decals, transparent labels, frosted vinyl — this guide covers every type of custom vinyl sticker available in Ireland, how to choose the right material, and how to order with fast nationwide delivery.',
    date: '2026-02-18',
    readTime: '8 min read',
    image: '/ifa/product/vinylstk/Vinyl-Decals-_-Stickers.jpg',
    imageAlt: 'Custom vinyl stickers and decals Ireland – window stickers and car graphics',
    category: 'Print Guide',
  },
  {
    slug: 'eco-friendly-pizza-box-paper-bags-burger-boxes-ireland',
    title: 'Eco Friendly Pizza Box, Paper Bags & Burger Boxes Ireland',
    excerpt:
      'Where to buy eco friendly pizza box wholesale in Ireland, recyclable paper bags for takeaway, and compostable burger boxes — with product links and compliance tips for Irish restaurants.',
    date: '2026-06-17',
    readTime: '8 min read',
    image: '/images/pizza-boxes/PIZZA_BOX_2.jpg',
    imageAlt: 'Eco friendly pizza box Ireland – recyclable kraft corrugated wholesale',
    category: 'Sustainability',
  },
  {
    slug: 'custom-pizza-box-cost-ireland',
    title: 'How Much Do Custom Printed Pizza Boxes Cost in Ireland?',
    excerpt:
      'Custom pizza box pricing explained — per-unit costs, MOQ from 500 units, what affects print price, and when plain case packs are the better option.',
    date: '2026-06-23',
    readTime: '5 min read',
    image: '/images/pizza-boxes/PIZZA_BOX_5.jpg',
    imageAlt: 'Custom printed pizza box cost Ireland – pricing guide',
    category: 'Pricing Guide',
  },
  {
    slug: 'pizza-box-sizes-ireland',
    title: 'Pizza Box Sizes Ireland: The Complete Guide for Takeaways & Restaurants',
    excerpt:
      'Not sure which pizza box size to order? From 7-inch personal boxes to 18-inch family sizes, we break down every standard size, explain what to look for in a custom pizza box, and show you how to get the best value per unit for your Irish takeaway.',
    date: '2026-02-12',
    readTime: '6 min read',
    image: '/images/pizza-boxes/PIZZA_BOX_1.jpg',
    imageAlt: 'Custom pizza boxes Ireland – various sizes',
    category: 'Packaging Guide',
  },
  {
    slug: 'eco-packaging-for-takeaways-ireland',
    title: 'Eco Packaging for Takeaways Ireland: How to Switch to Sustainable Food Packaging',
    excerpt:
      'Irish consumers are choosing businesses that care about the planet. This guide covers the best eco-friendly food packaging options available in Ireland — from bagasse burger boxes to plain napkins wholesale — and how to make the switch without blowing your budget.',
    date: '2026-02-13',
    readTime: '7 min read',
    image: '/images/products/bagasse-burger-box/1.png',
    imageAlt: 'Eco-friendly bagasse burger boxes Ireland',
    category: 'Sustainability',
  },
  {
    slug: 'leaflet-printing-ireland-guide',
    title: 'Leaflet Printing Ireland: Sizes, Paper Stocks & What Actually Works for Local Marketing',
    excerpt:
      'Leaflet printing remains one of the highest-ROI marketing channels for local Irish businesses. This guide covers every size from A6 to A3, paper weights, gloss vs silk, folding options, and practical distribution tips — so your print run actually generates customers.',
    date: '2026-02-13',
    readTime: '7 min read',
    image: '/images/products/a5-leaflet.png',
    imageAlt: 'A5 leaflet printing Ireland – flyers for local businesses',
    category: 'Print Guide',
  },
  {
    slug: 'paper-bags-with-logo-ireland',
    title: 'Paper Bags with Logo Ireland: A Guide for Retailers, Cafés & Food Businesses',
    excerpt:
      'Every branded bag that leaves your business is a moving advertisement. This guide covers twisted handle, flat handle, and SOS paper bags — explaining which style suits your business, what GSM to choose, and how to get the best wholesale price.',
    date: '2026-02-13',
    readTime: '6 min read',
    image: '/images/products/twisted-handle-bags/1.png',
    imageAlt: 'Custom branded paper bags with logo Ireland',
    category: 'Packaging Guide',
  },
  {
    slug: 'plain-packaging-wholesale-ireland',
    title: 'Plain Packaging Wholesale Ireland: How to Buy Catering Supplies in Bulk',
    excerpt:
      'Buying plain packaging wholesale in Ireland does not need to be complicated. This guide covers what to stock, how to evaluate a supplier, and practical ways to reduce your per-unit cost on napkins, food containers, bags, and catering supplies.',
    date: '2026-02-13',
    readTime: '6 min read',
    image: '/images/plain-packaging/100396.webp',
    imageAlt: 'Plain packaging wholesale Ireland – bulk catering supplies',
    category: 'Wholesale Guide',
  },
  {
    slug: 'packaging-prices-ireland-covid-shipping',
    title: 'Why Packaging Prices Have Been All Over the Place — And What Irish Businesses Can Do About It',
    excerpt:
      'COVID factory shutdowns, dependency on Chinese manufacturing, and a container shipping crisis that pushed freight rates up by 800% — here is the full story of what drove Irish packaging prices up, what brought some of them back down, and why sustainable packaging is partly a response to all three.',
    date: '2026-02-13',
    readTime: '8 min read',
    image: '/images/plain-packaging/100396.webp',
    imageAlt: 'Packaging supply chain Ireland – COVID and shipping price impacts',
    category: 'Industry Insight',
  },
  {
    slug: 'irish-restaurant-industry-delivery-2025',
    title: 'The Irish Restaurant Industry in 2025: Delivery Platforms, Commission Costs & the Models That Are Surviving',
    excerpt:
      "Ireland's foodservice market is worth a record €9.8 billion — yet over 600 restaurants have closed since the VAT hike. We break down platform commission economics, the food delivery boom, and the business models Irish operators are using to stay alive.",
    date: '2026-02-13',
    readTime: '12 min read',
    image: '/images/pizza-boxes/PIZZA_BOX_3.jpg',
    imageAlt: 'Irish restaurant delivery packaging – pizza boxes and takeaway supplies',
    category: 'Industry Insight',
  },
  {
    slug: 'packaging-costs-ireland-restaurants-2025-2026',
    title: 'Irish Restaurants & Packaging Costs in 2025–2026: What the Data Actually Shows',
    excerpt:
      'Packaging costs for Irish restaurants peaked +39% above 2019 levels and remain +24% higher today. Here is the full data on what drove the spike, what PPWR means for Irish food businesses, and how operators are cutting cost-per-order.',
    date: '2026-02-13',
    readTime: '10 min read',
    image: '/images/pizza-boxes/PIZZA_BOX_1.jpg',
    imageAlt: 'Irish restaurant packaging costs 2025-2026 – cost data and trends',
    category: 'Industry Data',
  },
  {
    slug: 'eps-polystyrene-packaging-ireland-legal-2025',
    title: 'Expanded Polystyrene (EPS) in Ireland: What Is Banned, What Is Still Legal, and What Changes by 2030',
    excerpt:
      'EPS single-use food containers have been illegal in Ireland since July 2021 — but not all EPS is banned. This guide covers the legal status of polystyrene packaging, the fish box exception, recycling reality in Ireland, and what PPWR means for Irish businesses by 2030.',
    date: '2026-02-13',
    readTime: '11 min read',
    image: '/images/products/bagasse-burger-box/1.png',
    imageAlt: 'Eco packaging Ireland – sustainable alternatives to expanded polystyrene EPS',
    category: 'Compliance Guide',
  },
];

export default function BlogIndex() {
  const title = 'Resources & Guides | PrintNPack Ireland';
  const description =
    'Practical guides on packaging sizes, eco-friendly options, printing tips, and wholesale supplies for Irish takeaways, restaurants, and retailers.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/blog`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/blog`} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Resources</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Packaging &amp; Print Guides
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Practical advice on custom packaging, eco-friendly options, print formats, and wholesale
            supplies — written for Irish businesses.
          </p>
        </div>

        {/* Post grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-52 w-full">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-xs">{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug mb-3">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Read the guide →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need packaging for your business?</h2>
          <p className="text-slate-400 mb-6">
            Get a free quote on custom pizza boxes, eco-friendly packaging, plain napkins wholesale, and more.
            We deliver across all of Ireland.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/products"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
