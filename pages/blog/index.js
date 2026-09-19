import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const posts = [
  {
    slug: 'custom-greaseproof-sheets-ireland-sizes-buying-guide',
    title: 'Custom Greaseproof Sheets Ireland: Sizes, MOQ & Buying Guide',
    excerpt:
      'How to buy custom printed greaseproof sheets in Ireland — sizes from 14×14 cm to 43×31.5 cm, 500-piece MOQ, 1/2/full colour food-safe print on 45 gsm white paper, and nationwide delivery from Ashbourne.',
    date: '2026-09-19',
    readTime: '8 min read',
    image:
      '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-branded-burger-wrap.jpg',
    imageAlt:
      'Custom greaseproof sheets Ireland — branded white greaseproof burger wrap wholesale print',
    category: 'Retail Guide',
  },
  {
    slug: 'foil-containers-ireland-sizes-buying-guide',
    title: 'Foil Containers Ireland: Sizes, Lids & Wholesale Buying Guide',
    excerpt:
      'How to buy foil containers in Ireland — 4×5, 4×8, 6×9 and 9×9 sizes, lid combos vs separate lids, half-gastro trays, and nationwide wholesale delivery from Ashbourne.',
    date: '2026-09-18',
    readTime: '8 min read',
    image: '/images/plain-packaging/10928.webp',
    imageAlt: 'Foil containers Ireland — 4×8 aluminium foil trays with lids wholesale',
    category: 'Wholesale Guide',
  },
  {
    slug: 'labels-on-a-roll-ireland-buying-guide',
    title: 'Labels on a Roll Ireland: Shapes, Materials, Dispensers & Buying Guide',
    excerpt:
      'How to buy custom labels on a roll in Ireland — round jar labels, glossy PP vs matt vs NatureFlex, dispenser boxes, roll winding and cores, and nationwide delivery from Ashbourne.',
    date: '2026-09-17',
    readTime: '8 min read',
    image:
      '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-round-jar-product-label.png',
    imageAlt: 'Labels on a roll Ireland — custom round jar product label wholesale print',
    category: 'Retail Guide',
  },
  {
    slug: 'custom-event-stamp-next-day-dublin',
    title: 'Custom Event Stamp Made & Delivered the Next Day – A Print n Pack Rush Job',
    excerpt:
      'Need a custom stamp urgently in Dublin? How Print n Pack created and delivered a personalised wooden event stamp within one day for a last-minute event.',
    date: '2026-09-16',
    readTime: '5 min read',
    image: '/images/blog/custom-event-stamp/custom-event-stamp-dublin-e-and-j.jpg',
    imageAlt:
      'Custom event stamp Dublin — wooden handle stamp pressing an E&J wreath monogram onto stationery',
    category: 'Case Study',
  },
  {
    slug: 'sos-grab-bags-ireland-sizes-buying-guide',
    title: 'SOS Grab Bags Ireland: Sizes, Plain vs Printed & Wholesale Buying Guide',
    excerpt:
      'How to buy SOS grab bags in Ireland — kraft takeaway sizes, plain case packs vs custom print from 500 units, tiered wholesale pricing, and nationwide delivery from Ashbourne.',
    date: '2026-09-16',
    readTime: '8 min read',
    image: '/images/products/sos-bags/1.png',
    imageAlt: 'SOS grab bags Ireland — kraft takeaway paper bags wholesale',
    category: 'Wholesale Guide',
  },
  {
    slug: 'kerala-cafe-printed-paper-bags-dublin',
    title: 'Kerala Cafe Dublin: How 1,000 Printed Paper Bags Were Enough for Branding',
    excerpt:
      'PrintNPack printed 1,000 branded white paper bags for Kerala Cafe in Coolmine, Dublin — logo, Instagram QR and contact details on a short café branding run from 500 units.',
    date: '2026-09-15',
    readTime: '6 min read',
    image: '/images/blog/kerala-cafe/kerala-cafe-printed-paper-bag-dublin.jpg',
    imageAlt:
      'Kerala Cafe Coolmine Dublin — custom printed white paper bag with palm tree logo and Instagram QR',
    category: 'Case Study',
  },
  {
    slug: 'luxury-magnetic-closure-boxes-ireland-buying-guide',
    title:
      'Luxury Magnetic Closure Boxes Ireland: Foil, Embossing & Corporate Gift Buying Guide',
    excerpt:
      'How to buy luxury magnetic closure boxes in Ireland — foil stamping, embossing, spot UV, inserts for cosmetics, jewellery and corporate gifts, and nationwide delivery from Ashbourne.',
    date: '2026-09-15',
    readTime: '8 min read',
    image:
      '/images/products/luxury-magnetic-closure-boxes/luxury-magnetic-closure-box-ireland-gold-foil.jpg',
    imageAlt:
      'Luxury magnetic closure boxes Ireland — forest green rigid gift box with gold foil logo',
    category: 'Retail Guide',
  },
  {
    slug: 'disposable-gloves-ireland-nitrile-vs-vinyl-buying-guide',
    title: 'Disposable Gloves Ireland: Nitrile vs Vinyl, Sizes & Wholesale Buying Guide',
    excerpt:
      'How to buy disposable gloves in Ireland — nitrile vs vinyl, powder-free options, S–XL sizes, case packs, and nationwide wholesale delivery from Ashbourne.',
    date: '2026-09-14',
    readTime: '8 min read',
    image: '/images/plain-packaging/170054.webp',
    imageAlt: 'Disposable gloves Ireland — blue powder-free nitrile catering gloves wholesale',
    category: 'Wholesale Guide',
  },
  {
    slug: 'custom-printed-tissue-paper-ireland-buying-guide',
    title:
      'Custom Printed Tissue Paper Ireland: Ecommerce Unboxing, Logo vs Pattern & Buying Guide',
    excerpt:
      'How to buy custom printed tissue paper in Ireland — logo versus pattern print, colours and eco options for ecommerce and boutiques, and nationwide delivery from Ashbourne.',
    date: '2026-09-13',
    readTime: '8 min read',
    image:
      '/images/products/custom-printed-tissue-paper/luxury-custom-printed-tissue-paper-black-gold-ireland.jpg',
    imageAlt: 'Custom printed tissue paper Ireland — black tissue with gold logo pattern',
    category: 'Retail Guide',
  },
  {
    slug: 'biobox-containers-ireland-sizes-buying-guide',
    title: 'Biobox Containers Ireland: Sizes No.1–No.12, Kraft vs White & Wholesale Buying Guide',
    excerpt:
      'How to buy biobox containers in Ireland — No.1 to No.12 kraft and white takeaway food boxes, case packs, tiered wholesale pricing, and nationwide delivery from Ashbourne.',
    date: '2026-09-12',
    readTime: '8 min read',
    image: '/images/plain-packaging/120090.webp',
    imageAlt: 'Biobox containers Ireland — kraft No.8 takeaway food boxes wholesale',
    category: 'Wholesale Guide',
  },
  {
    slug: 'custom-cake-boxes-ireland-buying-guide',
    title: 'Custom Cake Boxes Ireland: Window Styles, Luxury Finishes & Bakery Buying Guide',
    excerpt:
      'How to buy custom printed cake boxes in Ireland — window panels, inserts, handles, foil and embossing, food-safe boards for bakeries, and nationwide delivery from Ashbourne.',
    date: '2026-09-11',
    readTime: '8 min read',
    image: '/images/products/custom-cake-boxes/custom-cake-boxes-ireland-luxury-navy-cupcake-window.jpg',
    imageAlt: 'Custom cake boxes Ireland — navy cupcake box with display window',
    category: 'Bakery Guide',
  },
  {
    slug: 'branded-clothing-ireland-guide',
    title: 'Branded Clothing Ireland: Promotional Wear, Workwear & Company Logos',
    excerpt:
      'How Irish businesses buy branded clothing — promotional t-shirts, company clothing with logo, embroidery vs print, from €8.50, nationwide from Ashbourne.',
    date: '2026-09-15',
    readTime: '7 min read',
    image: '/images/apparel/POLO SHIRT MOCK UP 1.jpg',
    imageAlt: 'Branded clothing Ireland — custom polo with company logo',
    category: 'Apparel Guide',
  },
  {
    slug: 'poster-printing-ireland-guide',
    title: 'Poster Printing Ireland: Sizes A4–A0, Paper, Cost & Turnaround',
    excerpt:
      'Poster prints from A4 to A0 on 170gsm and 200gsm paper. From €8, no minimum order, 1–3 day print from Ashbourne.',
    date: '2026-09-15',
    readTime: '6 min read',
    image: '/ifa/product/Poster/single_poster.jpg',
    imageAlt: 'Poster printing Ireland — custom A1 poster print',
    category: 'Print Guide',
  },
  {
    slug: 'refuse-sacks-ireland-buying-guide',
    title: 'Refuse Sacks Ireland: Sizes, Hi-Grade vs Standard & Wholesale Buying Guide',
    excerpt:
      'How to buy refuse sacks and bin bags in Ireland — 26×44 sizes, hi-grade vs standard, clear and Greensack options, case packs from around €18, and nationwide delivery from Ashbourne.',
    date: '2026-09-10',
    readTime: '8 min read',
    image: '/images/plain-packaging/150003.webp',
    imageAlt: 'Refuse sacks Ireland — hi-grade black bin bags wholesale',
    category: 'Wholesale Guide',
  },
  {
    slug: 'custom-napkins-uk-ireland-europe',
    title: 'Custom Napkins UK, Ireland & Europe: Printed, Personalised & Branded Guide',
    excerpt:
      'Custom printed napkins for restaurants, pubs, hotels and weddings across Ireland, the UK and Europe — sizes, linen-feel vs paper, pricing from €0.05, and delivery from Ashbourne.',
    date: '2026-08-27',
    readTime: '12 min read',
    image: '/images/blog/custom-napkins/custom-napkins-uk-ireland-restaurant-table.jpg',
    imageAlt: 'Custom napkins UK and Ireland — branded restaurant napkins on a dining table',
    category: 'Hospitality Guide',
  },
  {
    slug: 'coffee-cups-ireland-guide',
    title: 'Coffee Cups Ireland: Plain vs Custom Printed Buying Guide',
    excerpt:
      'Plain wholesale double wall coffee cups vs custom printed branded cups, sizes from 4oz to 16oz, compostable options, pricing, and how to order coffee cups in Ireland.',
    date: '2026-08-26',
    readTime: '7 min read',
    image: '/images/plain-packaging/100070.webp',
    imageAlt: 'Coffee cups Ireland — plain and custom printed takeaway cups',
    category: 'Hospitality Guide',
  },
  {
    slug: 'roll-up-banner-printing-ireland',
    title: 'Roll Up Banner Printing Ireland: Cost, Dublin Delivery & Turnaround',
    excerpt:
      'Roll up banner printing from €80 with a heavy cassette. Artwork reprints from €35. Dublin delivery, Ashbourne collection, 2–3 day turnaround, pull up vs roller banners, and no minimum order.',
    date: '2026-08-26',
    readTime: '9 min read',
    image: '/ifa/product/rollup/2.png',
    imageAlt: 'Roll up banner printing Ireland — pull up banner with aluminium stand',
    category: 'Print Guide',
  },
  {
    slug: 'roll-up-banners-ireland-guide',
    title: 'Roll Up Banner Sizes Ireland: Pull Up, Roller Specs & Meath Printing',
    excerpt:
      'Standard roller banner size is 1000 × 2000 mm. Pull up banners printed in Meath from €80. Specs, 850/1000/1200 mm sizes, and extra wide XXL up to €450.',
    date: '2026-08-26',
    readTime: '7 min read',
    image: '/ifa/product/rollup/1.png',
    imageAlt: 'Roll up banners Ireland — pull up banner with aluminium stand',
    category: 'Print Guide',
  },
  {
    slug: 'extra-wide-roll-up-banners-ireland-guide',
    title: 'Extra Wide Roll Up Banners Ireland: 2m XL Sizes, NI Delivery & Trade Show Guide',
    excerpt:
      'How to choose XL, XXL and XXXL extra wide roll up banners in Ireland — 2m width, 3m height, B1 indoor venues, Northern Ireland and UK shipping.',
    date: '2026-08-19',
    readTime: '7 min read',
    image: '/ifa/product/extra-wide-rollup/hero-standout-3m.jpg',
    imageAlt: 'Extra wide 2m x 3m roll up banner Ireland with Silver XL stand',
    category: 'Print Guide',
  },
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
    title: 'Business Stamps Ireland | Custom Rubber & Company Stamps from €15',
    excerpt:
      'Custom rubber stamps, company stamps and invoice stamps from €15. Self-inking vs traditional and how to order from Ashbourne.',
    date: '2026-06-21',
    readTime: '7 min read',
    image: '/images/rubber-stamps/RubberStamp_10.jpg',
    imageAlt: 'Business stamps Ireland — custom company and invoice rubber stamps',
    category: 'Print Guide',
  },
  {
    slug: 'personalised-napkins-ireland-guide',
    title: 'Personalised Napkins Ireland | Printed Napkins from €0.05',
    excerpt:
      'Personalised and branded napkins from €0.05 — cocktail vs dinner sizes, linen-feel wedding napkins, and how to order in Ireland.',
    date: '2026-06-21',
    readTime: '8 min read',
    image: '/images/hero/napkin.svg',
    imageAlt: 'Personalised napkins Ireland — branded restaurant and wedding napkins',
    category: 'Hospitality Guide',
  },
  {
    slug: 'foamex-boards-ireland-guide',
    title: 'Foamex Board Ireland | 3mm, 5mm & 10mm Printed Foam Signs',
    excerpt:
      'Foamex board printing in Ireland — 3mm vs 5mm vs 10mm, sheet sizes, indoor vs outdoor, and foamex vs Correx.',
    date: '2026-06-21',
    readTime: '7 min read',
    image: '/ifa/product/foamex/3mm-Printed-Foamex-Boards-XL-Displays.avif',
    imageAlt: 'Foamex boards Ireland — custom PVC foam board signage',
    category: 'Signage Guide',
  },
  {
    slug: 'burger-boxes-ireland-guide',
    title: 'Burger Boxes Ireland: Plain vs Printed, Bagasse & Eco Options',
    excerpt:
      'Plain wholesale vs custom printed burger boxes, bagasse vs corrugated, biodegradable options, sizes, and how to order burger packaging in Ireland.',
    date: '2026-06-21',
    readTime: '8 min read',
    image: '/images/products/bagasse-burger-box/1.png',
    imageAlt: 'Burger boxes Ireland — plain and custom printed bagasse packaging',
    category: 'Hospitality Guide',
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
    title: 'Correx Boards Ireland | Corriboard Signs, Election & Site Boards',
    excerpt:
      'Printed Correx / corriboard boards in Ireland for election signs, property boards and site signage. Waterproof, 1–3 day print, nationwide delivery.',
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
    slug: 'greenspirit-eco-packaging-ireland',
    title: 'Greenspirit Eco Packaging Ireland: Compostable Cups, Cutlery & Nationwide Delivery',
    excerpt:
      'PrintNPack stocks 50+ Greenspirit compostable and eco-friendly products — aqueous hot cups, bagasse lids, wooden cutlery, greaseproof sheets and kraft trays. Plain wholesale case pricing with delivery across Ireland.',
    date: '2026-07-07',
    readTime: '9 min read',
    image: '/images/plain-packaging/100103.webp',
    imageAlt: 'Greenspirit compostable hot cups Ireland – eco-friendly wholesale packaging',
    category: 'Sustainability',
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
    title: 'Pizza Box Sizes Ireland | 7–16 Inch Wholesale Takeaway Guide',
    excerpt:
      '7" to 16" pizza box sizes for Irish takeaways — which wholesale sizes to stock, custom print options, and how to order.',
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
    slug: 'printed-paper-bag-cost-ireland',
    title: 'How Much Do Printed Paper Bags Cost in Ireland?',
    excerpt:
      'Printed paper bag pricing explained — flat handle from €0.18/unit, twisted handle from €0.35/unit, MOQ 500, and when plain case bags are cheaper.',
    date: '2026-06-23',
    readTime: '5 min read',
    image: '/images/products/flat-handle-bags/1.png',
    imageAlt: 'Printed paper bag cost Ireland – pricing guide',
    category: 'Pricing Guide',
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
