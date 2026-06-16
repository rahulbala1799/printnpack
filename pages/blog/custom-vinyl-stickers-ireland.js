import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';

import { SITE_URL as siteUrl } from '../../lib/site';
const slug = 'custom-vinyl-stickers-ireland';
const heroImage = '/ifa/product/vinylstk/Vinyl-Decals-_-Stickers.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Custom Vinyl Stickers Ireland: The Complete Guide to Materials, Uses & Ordering',
  description:
    'Everything Irish businesses need to know about custom vinyl stickers — window stickers, car decals, transparent labels, frosted vinyl, and how to order fast with nationwide delivery.',
  image: `${siteUrl}${heroImage}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-02-18',
  dateModified: '2026-02-18',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${slug}` },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long do custom vinyl stickers last in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outdoor-grade vinyl stickers are rated for 3–7 years depending on the material and finish. Premium cast vinyl used for vehicle wraps and outdoor signage can last 5–7 years. Calendared vinyl for indoor use typically lasts 3–5 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get custom-shaped vinyl stickers printed in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack offers die-cut vinyl stickers in any custom shape, cut precisely to your artwork. You can order stickers in circles, custom logo shapes, or any die-line you provide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What file format do I need for custom vinyl sticker printing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PDF or AI (Adobe Illustrator) with all text converted to outlines and 3mm bleed added is ideal. High-resolution PNG or TIFF (300dpi+) is also accepted. Our team can advise if your artwork needs adjustments before printing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are vinyl stickers waterproof?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Vinyl stickers are inherently water-resistant. Outdoor and vehicle-grade vinyl is also UV-resistant and can withstand Irish weather — rain, damp, and occasional sun — for years without fading or peeling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order quantity for vinyl stickers in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies custom vinyl stickers from small runs to bulk orders. Get in touch or use our online quote form to get pricing for your specific quantity, size, and material.',
      },
    },
  ],
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Custom Vinyl Stickers Ireland', item: `${siteUrl}/blog/${slug}` },
  ],
};

const materials = [
  {
    name: 'Gloss Vinyl',
    finish: 'High-shine, vivid',
    durability: '3–5 years outdoor',
    best: 'Window displays, product labels, promotional stickers',
    popular: true,
  },
  {
    name: 'Matte Vinyl',
    finish: 'Flat, premium feel',
    durability: '3–5 years outdoor',
    best: 'Brand stickers, laptop decals, packaging labels',
    popular: false,
  },
  {
    name: 'Clear / Transparent',
    finish: 'See-through base',
    durability: '3–5 years outdoor',
    best: 'Window logos, bottle labels, product branding on glass',
    popular: false,
  },
  {
    name: 'Frosted Vinyl',
    finish: 'Opaque etched glass look',
    durability: '5+ years indoor',
    best: 'Office privacy windows, shop doors, partition glass',
    popular: false,
  },
  {
    name: 'Cast Vinyl',
    finish: 'Gloss or matte, ultra-conformable',
    durability: '5–7 years outdoor',
    best: 'Vehicle wraps, fleet graphics, curved surfaces',
    popular: false,
  },
];

const applications = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Shop Windows',
    desc: 'Hours, logos, promotions, and seasonal offers. Window vinyl transforms a bare shopfront into an instant brand statement visible from the street.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect x="9" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="16" r="1"/>
      </svg>
    ),
    title: 'Vehicles & Vans',
    desc: "Your work van is a moving billboard. Branded van graphics with your logo, phone number, and website generate thousands of local impressions every week — for free.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
    title: 'Product Labels',
    desc: 'Food jars, coffee bags, craft beer bottles, candles. Custom vinyl labels elevate handmade products into retail-ready goods that command premium prices.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Office & Interiors',
    desc: 'Wall graphics, branded partitions, frosted meeting room glass, wayfinding. Interior vinyl turns a generic office into a space that reflects your brand culture.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Events & Hospitality',
    desc: 'Markets, festivals, pop-ups, and trade shows. Temporary window and wall graphics create a professional branded environment that can be removed cleanly afterwards.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Fleet & Delivery Vehicles',
    desc: "Consistent fleet branding across multiple vehicles cements brand recognition across your delivery area. Every journey is a brand impression — especially valuable for Irish food and logistics businesses.",
  },
];

const orderSteps = [
  {
    num: '01',
    title: 'Choose your sticker type',
    desc: 'Window sticker, vehicle decal, transparent label, frosted vinyl, or custom shape — decide what you need and for which surface.',
  },
  {
    num: '02',
    title: 'Prepare your artwork',
    desc: 'Supply a PDF or AI file at 300dpi+ with 3mm bleed. No artwork? Our team can help with design or give you an artwork template to fill in.',
  },
  {
    num: '03',
    title: 'Get a quote',
    desc: "Use the online quote form or call us directly. We'll confirm size, quantity, material, finish, and turnaround time — and give you a final price.",
  },
  {
    num: '04',
    title: 'Approve your proof',
    desc: "We send a digital proof before printing. You check colours, layout, and cut line — and confirm it's exactly what you want.",
  },
  {
    num: '05',
    title: 'Printed & delivered',
    desc: 'Most orders are dispatched within 1–3 working days. We deliver nationwide across Ireland — from Dublin to Donegal.',
  },
];

export default function CustomVinylStickersIreland() {
  const title = 'Custom Vinyl Stickers Ireland: The Complete Guide to Materials, Uses & Ordering';
  const description =
    'Everything Irish businesses need to know about custom vinyl stickers in 2026 — window stickers, car decals, transparent labels, frosted vinyl, design tips and how to order with fast delivery across Ireland.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom vinyl stickers ireland, vinyl stickers ireland, window stickers ireland, car decals ireland, custom stickers ireland, vinyl decals ireland, vinyl stickers dublin, custom printed stickers ireland, frosted vinyl ireland, vehicle graphics ireland"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${siteUrl}/blog/${slug}`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/blog/${slug}`} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}${heroImage}`} />
        <meta property="og:image:alt" content="Custom vinyl stickers and decals Ireland – PrintNPack" />
        <meta property="article:published_time" content="2026-02-18" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${heroImage}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Custom Vinyl Stickers Ireland</span>
        </nav>

        {/* Meta row */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Print Guide</span>
          <span className="text-slate-400 text-sm">18 Feb 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Vinyl Stickers Ireland: The Complete Guide to Materials, Uses &amp; Ordering
        </h1>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-8 border border-slate-100">
          <Image
            src={heroImage}
            alt="Custom vinyl stickers and decals Ireland – window stickers, car decals, transparent labels"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-white text-sm font-medium opacity-90">Custom vinyl stickers &amp; decals — printed in Ireland</span>
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { stat: 'From €2', label: 'per sticker' },
            { stat: '1–3 days', label: 'turnaround' },
            { stat: '6+', label: 'material types' },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-slate-900 text-white rounded-xl p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-purple-300 mb-1">{stat}</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>

        <div className="prose prose-slate max-w-none">

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Custom vinyl stickers are one of the most versatile and cost-effective branding tools available
            to Irish businesses in 2026. Whether you need window graphics for a Dublin café, van decals
            for a Meath contractor, or product labels for a Galway craft brand — printed vinyl is the answer.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers everything: the different types of vinyl available, which material to choose
            for your application, design best practices, and a step-by-step walkthrough of how to order
            <strong> custom vinyl stickers in Ireland</strong> with fast turnaround.
          </p>

          {/* ─── SECTION 1: What are vinyl stickers ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What Are Custom Vinyl Stickers?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Vinyl stickers are printed graphics produced on a thin, flexible PVC (polyvinyl chloride) film
            with a pressure-sensitive adhesive backing. Unlike paper stickers, vinyl is waterproof,
            UV-resistant, and durable enough for outdoor applications — making it the material of choice
            for everything from shop window graphics to vehicle fleet branding.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The key advantage over other print products is the combination of <strong>precision die-cutting</strong>
            (the sticker can be any shape, not just a rectangle) and <strong>surface conformability</strong> —
            vinyl can be applied to glass, metal, wood, plastic, and curved surfaces cleanly and without bubbling.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For Irish businesses, custom vinyl stickers serve two core functions: <strong>brand visibility</strong>
            (shop fronts, vehicles, events) and <strong>product identification</strong> (labels, barcodes,
            product information). Both applications benefit from the same properties: vivid full-colour printing,
            long outdoor life, and clean removal when no longer needed.
          </p>

          {/* ─── Image grid ─── */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/ifa/product/vinylstk/Window_Sticker_2_01041803202404.png.webp"
                alt="Window vinyl sticker printing Ireland – custom shop front graphics"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/70 text-white text-xs p-2 text-center font-medium">Window stickers</div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/ifa/product/vinylstk/carstk.webp"
                alt="Car decals and vehicle vinyl stickers Ireland – van graphics and fleet branding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/70 text-white text-xs p-2 text-center font-medium">Vehicle decals</div>
            </div>
          </div>

          {/* ─── SECTION 2: Types ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Types of Custom Vinyl Stickers Available in Ireland
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Not all vinyl stickers are the same. Here are the main product types and what each one is
            designed for:
          </p>

          <div className="space-y-4 mb-10">
            {[
              {
                type: 'Window Stickers',
                img: '/ifa/product/vinylstk/Window_Sticker_3_01042303202404.png.webp',
                desc: 'Applied to the interior face of a glass window and viewed from outside. Used for shop logos, opening hours, promotional graphics, and seasonal displays. Apply and remove cleanly without residue — ideal for businesses that refresh their messaging regularly.',
                tag: 'Most popular',
                tagColor: 'bg-purple-600 text-white',
              },
              {
                type: 'Transparent / Clear Vinyl',
                img: '/ifa/product/vinylstk/Transperent_Sticker_low_03281303202404.png.webp',
                desc: 'Printed on a clear base so only the design is visible — the surface shows through. Ideal for bottle labels, glass branding, and window stickers where you want the look of a directly-painted logo rather than a solid sticker.',
                tag: 'Premium look',
                tagColor: 'bg-slate-700 text-white',
              },
              {
                type: 'Vehicle Decals',
                img: '/ifa/product/vinylstk/carstk.webp',
                desc: 'Cast or calendared vinyl applied to painted metal, plastic bumpers, or glass. Includes simple cut vinyl lettering (phone number, logo, web address) up to full-colour printed panels for vans and HGVs. Rated 5–7 years outdoor for cast vinyl.',
                tag: 'High impact',
                tagColor: 'bg-blue-600 text-white',
              },
              {
                type: 'Frosted Vinyl',
                img: '/ifa/product/vinylstk/frosted-vinyl-decals-1000x1000.webp',
                desc: 'Creates the appearance of sandblasted or etched glass without the permanent modification. Applied to office partitions, meeting room glass, shopfront doors, and shower screens for privacy and branding. Popular with Irish offices, salons, and hospitality venues.',
                tag: 'Office & interiors',
                tagColor: 'bg-slate-600 text-white',
              },
              {
                type: 'Custom-Cut Decals',
                img: '/ifa/product/vinylstk/custom-printed-decals-1000x1000.webp',
                desc: 'Die-cut precisely to your artwork shape — no rectangular border, just the graphic itself. Used for logo stickers, product packaging accents, and merchandise. Can be produced on a roll or individual cut pieces.',
                tag: 'Custom shape',
                tagColor: 'bg-emerald-600 text-white',
              },
            ].map(({ type, img, desc, tag, tagColor }) => (
              <div key={type} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-36 h-40 sm:h-auto flex-shrink-0">
                    <Image src={img} alt={`${type} Ireland`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 144px" />
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-slate-900 text-base">{type}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColor}`}>{tag}</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ─── SECTION 3: Materials table ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Vinyl Sticker Materials Compared
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            The material you choose determines how long the sticker lasts, how it looks on the surface,
            and whether it can be removed cleanly. Here is how the main options compare:
          </p>

          <div className="overflow-x-auto mb-8 rounded-xl border border-slate-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Material</th>
                  <th className="text-left px-4 py-3 font-semibold">Finish</th>
                  <th className="text-left px-4 py-3 font-semibold">Outdoor life</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">Best for</th>
                </tr>
              </thead>
              <tbody>
                {materials.map(({ name, finish, durability, best, popular }, i) => (
                  <tr key={name} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} ${popular ? 'ring-1 ring-inset ring-purple-300' : ''}`}>
                    <td className="px-4 py-3 font-bold text-slate-900">
                      {name}
                      {popular && <span className="ml-2 bg-purple-100 text-purple-700 text-xs px-1.5 py-0.5 rounded-full font-medium">Popular</span>}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{finish}</td>
                    <td className="px-4 py-3 text-slate-700 font-mono text-xs">{durability}</td>
                    <td className="px-4 py-3 text-slate-600">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-purple-500 bg-purple-50 rounded-r-xl pl-5 pr-6 py-4 my-8">
            <p className="text-slate-800 font-medium leading-relaxed italic">
              "For most Irish businesses ordering window stickers or product labels for the first time,
              gloss vinyl on a white base is the right starting point — vivid colours, competitive price,
              and a finish that reads clearly from a distance."
            </p>
          </blockquote>

          {/* ─── SECTION 4: Transparent sticker detail ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            The Case for Transparent Vinyl Stickers
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Transparent (clear) vinyl is one of the most underused options in Ireland — and one of the most
            effective. Because the base is invisible, a clear sticker applied to a glass shopfront or bottle
            gives the impression that the design has been <strong>painted directly onto the surface</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/ifa/product/vinylstk/Transperent_Sticker_low_03281303202404.png.webp"
                alt="Transparent vinyl stickers Ireland – clear base window and bottle labels"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 384px"
              />
            </div>
            <div className="flex flex-col justify-center gap-3 p-1">
              {[
                ['Bottle & jar labels', 'Clear vinyl wraps around glass beautifully — ideal for artisan food, craft spirits, and cosmetic products.'],
                ['Shopfront window logos', 'Applied inside the glass — the logo appears "on" the window with no white border around it.'],
                ['Car windscreens', 'Internal window stickers for parking permits, club logos, or business branding look far cleaner on clear vinyl.'],
              ].map(([title, text]) => (
                <div key={title} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="font-semibold text-slate-900 text-sm mb-1">{title}</p>
                  <p className="text-slate-600 text-xs leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── SECTION 5: Car decals ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Car Decals &amp; Vehicle Graphics Ireland: What You Need to Know
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Vehicle graphics remain one of the highest-return investments in local Irish marketing. A
            well-branded van driven around a town or city generates <strong>30,000–70,000 impressions
            per day</strong> at a fraction of the cost of paid digital advertising — and the branding works
            24 hours a day, 365 days a year.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-6 border border-slate-200">
            <Image
              src="/ifa/product/vinylstk/carstk.webp"
              alt="Vehicle decals and van graphics Ireland – custom car stickers for fleet branding"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-transparent" />
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center p-6">
              <p className="text-white font-bold text-lg mb-1">Van &amp; vehicle branding</p>
              <p className="text-slate-300 text-sm max-w-xs">Cast vinyl rated 5–7 years outdoor — built for Irish weather</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {[
              ['Cast vinyl', 'For full-colour vehicle wraps and panels, cast vinyl is the correct material. It is thinner and more conformable than calendared vinyl, meaning it stretches around curves and door handles without creasing or peeling at the edges.'],
              ['Cut vinyl lettering', 'For simple text — a phone number, web address, or logo in one or two colours — cut vinyl is the most cost-effective option. The design is cut from a single-colour vinyl sheet and applied directly to the vehicle surface.'],
              ['Reflective vinyl', 'For vans, trailers, and service vehicles that need to be highly visible at night, reflective vinyl provides excellent visibility and is required for certain commercial vehicle categories under Irish road rules.'],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex-shrink-0 w-1.5 rounded-full bg-purple-500 self-stretch" style={{ minHeight: 16 }} />
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">{title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ─── SECTION 6: Applications ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
            Where Irish Businesses Use Vinyl Stickers
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {applications.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-3">
                  {icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* ─── Frosted vinyl callout ─── */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 mb-10 text-white">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="relative w-full sm:w-40 h-32 sm:h-40 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="/ifa/product/vinylstk/frosted-vinyl-decals-1000x1000.webp"
                  alt="Frosted vinyl decals Ireland – office glass partition privacy stickers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 160px"
                />
              </div>
              <div>
                <span className="text-purple-300 text-xs font-semibold uppercase tracking-wider">Spotlight</span>
                <h3 className="text-xl font-bold mt-1 mb-3">Frosted Vinyl for Irish Offices &amp; Shops</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Frosted vinyl replicates the look of acid-etched glass at a fraction of the cost —
                  and it is fully removable. It is the go-to solution for creating privacy on meeting
                  room partitions, salon window panels, and open-plan office dividers, while keeping
                  the space feeling light and open. Many Irish co-working spaces and modern offices
                  are using branded frosted panels to display company names, values, or logos across
                  glass walls.
                </p>
              </div>
            </div>
          </div>

          {/* ─── SECTION 7: Design tips ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to Design Custom Vinyl Stickers: 5 Practical Tips
          </h2>

          <ul className="space-y-4 mb-8">
            {[
              ['Keep it simple', 'Vinyl stickers communicate at speed and distance. A clean logo, a phone number, and a URL outperform a dense design every time. If the sticker is on a vehicle or window, it will be read in under 3 seconds.'],
              ['Set up your artwork correctly', 'Supply a PDF or AI file with all text converted to outlines and 3mm bleed added beyond the cut line. For die-cut stickers, include a separate die-line on a spot colour layer.'],
              ['Use CMYK colour mode', 'All print is produced in CMYK. If your design is built in RGB (screen), colours will shift on print. Convert to CMYK in Illustrator or InDesign before submitting — especially important for logo colours and brand reds or blues.'],
              ['Check resolution for raster elements', 'Logos built in Illustrator as vectors will print crisply at any size. If you are using photos or raster elements, ensure they are at least 300dpi at the final print size. Low-res images will print blurry.'],
              ['Match white ink for clear vinyl', 'When printing on clear vinyl, a white ink layer behind the design is required to make colours opaque and vivid. Without it, colours print translucent against the glass. Confirm with your printer whether white ink is included for transparent material orders.'],
            ].map(([num_title, text], i) => (
              <li key={num_title} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                <div>
                  <strong className="text-slate-900">{num_title}.</strong>{' '}
                  <span className="text-slate-700 leading-relaxed">{text}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* ─── SECTION 8: How to order ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
            How to Order Custom Vinyl Stickers in Ireland
          </h2>

          <div className="space-y-4 mb-10">
            {orderSteps.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-5 items-start bg-white border border-slate-200 rounded-xl p-5 hover:border-purple-300 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 text-purple-300 font-bold text-lg flex items-center justify-center font-mono">
                  {num}
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">{title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Artwork specs box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Artwork quick-reference
            </h3>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                ['Format', 'PDF · AI · PNG (300dpi+) · TIFF'],
                ['Colour mode', 'CMYK'],
                ['Bleed', '3mm all sides'],
                ['Text', 'Convert all text to outlines'],
                ['Die-cut stickers', 'Include a separate die-line layer'],
                ['White ink (clear vinyl)', 'Confirm with us before submitting'],
              ].map(([key, val]) => (
                <div key={key} className="flex gap-2">
                  <span className="font-semibold text-slate-700 min-w-[120px]">{key}:</span>
                  <span className="text-slate-600">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── FAQ ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-10">
            {[
              {
                q: 'How long do custom vinyl stickers last outdoors in Ireland?',
                a: 'Outdoor-grade vinyl is rated 3–7 years depending on material. Premium cast vinyl (used for vehicle wraps and long-term signage) lasts 5–7 years. Standard calendared vinyl (window stickers, labels) typically lasts 3–5 years. Both handle Irish weather well — rain, frost, and UV.',
              },
              {
                q: 'Can I get custom-shaped vinyl stickers in Ireland?',
                a: 'Yes. PrintNPack offers die-cut vinyl in any custom shape — circles, logo shapes, irregular outlines, or any die-line you supply. If you are unsure how to set up a die-line, our team can help.',
              },
              {
                q: 'Are vinyl stickers waterproof?',
                a: 'Yes. Vinyl is inherently water-resistant and outdoor grades are also UV-resistant. They are designed to survive Irish weather — rain, damp, cold — for years without fading, peeling, or delaminating.',
              },
              {
                q: 'What file format do I need for vinyl sticker printing?',
                a: 'PDF or AI (Adobe Illustrator) with all text converted to outlines and 3mm bleed added is ideal. High-resolution PNG or TIFF (300dpi+) at final print size is also accepted. We will check your artwork and advise if any adjustments are needed.',
              },
              {
                q: 'Can I order a small quantity of vinyl stickers?',
                a: 'Yes. PrintNPack handles runs from small quantities through to large bulk orders. Get in touch or use the quote form and we will confirm pricing and minimum quantities for your specific requirement.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-purple-500 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ─── CTA ─── */}
        <div className="mt-12 bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl p-8 sm:p-10 text-center text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <span className="inline-block bg-purple-500/40 text-purple-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Custom Vinyl Stickers Ireland
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to order your vinyl stickers?</h2>
            <p className="text-purple-200 mb-8 max-w-md mx-auto">
              Window stickers, car decals, transparent labels, frosted vinyl, and custom-cut shapes.
              Fast turnaround. Nationwide delivery across Ireland.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/vinyl-stickers"
                className="bg-white text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Vinyl Stickers →
              </Link>
              <Link
                href="/quote"
                className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold border border-purple-500 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-purple-200">
              {['From €2 per sticker', '1–3 day turnaround', 'Delivered nationwide', '6+ material types'].map((f) => (
                <span key={f} className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-slate-500 hover:text-slate-700 text-sm font-medium">
            ← Back to all guides
          </Link>
        </div>

      </main>
    </Layout>
  );
}
