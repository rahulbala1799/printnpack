# PrintNPack Website - Comprehensive Code Documentation

## Project Overview

PrintNPack is a premium Irish packaging solutions website built with Next.js, TypeScript, and modern web technologies. The site serves as a complete business platform for a packaging company offering pizza boxes, paper bags, and various printing services.

## 🏗️ Tech Stack

- **Framework**: Next.js 13.4.19 with TypeScript
- **Styling**: Tailwind CSS 3.3.3 with custom CSS animations
- **Animation**: Framer Motion 11.18.2 for smooth animations and transitions
- **Forms**: Formik 2.4.6 with Yup 1.6.1 for validation
- **Email**: Nodemailer 6.10.0 for contact form submissions
- **Icons**: React Icons 5.5.0
- **Scroll Detection**: React Intersection Observer 9.16.0
- **Analytics**: Google Tag Manager (GTM-MB8SNF2S)
- **Live Chat**: Tawk.to integration

## 📁 Project Structure

```
website2/
├── pages/                     # Next.js pages (file-based routing)
│   ├── _app.js               # App wrapper with global styles
│   ├── _document.js          # HTML document structure with GTM
│   ├── index.js              # Homepage
│   ├── about.js              # About page
│   ├── contact.js            # Contact form page
│   ├── products.js           # Products catalog page
│   ├── services.js           # Main services page
│   ├── quote.js              # Quote request page
│   ├── services/             # Individual service pages
│   │   ├── posters.js        # Poster services
│   │   ├── vinyls.js         # Vinyl services
│   │   ├── leaflets.js       # Leaflet services
│   │   └── menus.js          # Menu design services
│   └── api/                  # API routes
│       └── contact.js        # Contact form handler
├── components/               # Reusable components
│   ├── layout/              # Layout components
│   │   ├── Layout.js        # Main layout wrapper
│   │   ├── Header.js        # Navigation header
│   │   └── Footer.js        # Site footer
│   ├── home/                # Homepage-specific components
│   │   ├── Hero.js          # Hero section with slides
│   │   ├── PromoBanner.js   # 15% off promotional banner
│   │   ├── USPCards.js      # Value proposition cards
│   │   ├── Services.js      # Services overview
│   │   ├── DesignServices.js # Design services section
│   │   ├── AboutUs.js       # About section
│   │   ├── ProductShowcase.js # Product highlights
│   │   ├── ImageGallery.js  # Product gallery
│   │   ├── PrintingTimes.js # Delivery times info
│   │   ├── CTA.js           # Call-to-action section
│   │   └── ...              # Other homepage components
│   └── search/              # Search functionality
├── data/                    # Data files
│   └── products.js          # Product catalog data (2271 lines)
├── public/                  # Static assets
│   └── images/              # Product and UI images
├── styles/                  # Styling
│   └── globals.css          # Global styles and animations
└── Configuration files
```

## 🎯 Core Functionality Breakdown

### 1. Application Entry Point (`pages/_app.js`)

The main application wrapper that:
- Loads global CSS styles
- Sets up Inter font from Google Fonts
- Initializes Google Tag Manager data layer
- Provides global viewport and theme color meta tags

### 2. Document Structure (`pages/_document.js`)

Custom HTML document that includes:
- **Google Tag Manager**: Full implementation with script and noscript tags
- **Tawk.to Live Chat**: Customer support widget integration
- Proper HTML lang attribute for accessibility

### 3. Layout System (`components/layout/`)

#### Layout.js
Simple wrapper providing:
- Header at top
- Main content area with flex-grow
- Footer at bottom
- Full viewport height layout

#### Header.js (357 lines)
Sophisticated navigation system featuring:
- **Dynamic Logo**: Animated 3D box icon with PrintNPack branding
- **Responsive Navigation**: Desktop and mobile-optimized menus
- **Search Integration**: Desktop search bar and mobile search overlay
- **Mouse-Following Gradient**: Dynamic background that responds to cursor position
- **Mobile Menu**: Slide-out drawer with staggered animations
- **Contact Integration**: Quick access to phone and email
- **Scroll Detection**: Header styling changes on scroll

**Key Features:**
- Netflix-style navigation hover effects
- Hamburger menu with animated lines
- Glass morphism effects with backdrop blur
- Particle animation backgrounds
- Contact information display

#### Footer.js
Standard footer with:
- Company information and social media links
- Quick navigation links
- Product categories
- Contact information including business address
- Copyright notice

### 4. Homepage Architecture (`pages/index.js`)

The homepage orchestrates multiple components:

```javascript
// Component order and structure
<Layout>
  <HeroSection />
  <PromoBanner />
  <ProductShowcase />
  <USPCards />
  <PrintingTimes />
  <ImageGallery />
  <DesignServices />
  <Services />
  <AboutUs />
  <CTA />
</Layout>
```

#### Key Components Analysis:

**Hero.js (200 lines)**
- **5-slide carousel** with auto-rotation every 5 seconds
- **Mouse-responsive gradients** that follow cursor movement
- **Product-specific content** for each slide (Pizza Boxes, Paper Bags, Burger Boxes, Leaflets, Napkins)
- **Mobile-optimized design** with responsive text and button sizing
- **Animated indicators** for slide navigation
- **Same-day dispatch badges** for applicable services

**PromoBanner.js (265 lines)**
- **15% off promotional offer** with countdown timer
- **Framer Motion animations** for smooth interactions
- **Particle background effects** for visual appeal
- **Real-time countdown** calculation from set end date
- **Flashing attention effects** to draw user focus
- **Responsive CTA buttons** for desktop and mobile

**USPCards.js**
Displays six value propositions:
1. Fast Delivery with weekly delivery system
2. Eco-Friendly sustainable materials
3. Premium Quality high-quality materials
4. Low MOQ (minimum order quantities)
5. Custom Sizes for specific requirements
6. Custom Design Service with professional team

### 5. Data Architecture (`data/products.js`)

**Comprehensive product catalog** with 2,271 lines containing:

**Product Structure:**
```javascript
{
  id: 'unique-identifier',
  name: 'Product Name',
  category: 'Product Category',
  description: 'Brief description',
  features: ['Feature 1', 'Feature 2'],
  detailedDescription: 'Comprehensive description',
  specifications: [
    { name: 'Material', value: 'Description' },
    // ... more specs
  ],
  images: ['image1.jpg', 'image2.jpg'],
  price: 'Starting price',
  moq: 'Minimum order quantity',
  leadTime: 'Production time',
  weeklyDelivery: 'Delivery service description'
}
```

**Product Categories:**
- Food Packaging (Pizza boxes, burger boxes)
- Retail Packaging (Paper bags, SOS bags)
- Eco-Friendly Packaging (Bagasse products)
- Hospitality Products (Napkins, menus)

### 6. Service Pages (`pages/services/`)

Four dedicated service pages with SEO optimization:

**Structure (116 lines each):**
- SEO-optimized head tags with meta descriptions
- Gradient hero sections
- Feature grid layouts
- Service listings
- Call-to-action sections
- Links to quote and contact pages

**Services:**
1. **Posters** - Event and promotional poster services
2. **Vinyls** - Custom vinyl graphics and decals
3. **Leaflets** - Design and printing services
4. **Menus** - Restaurant menu design

### 7. Contact System (`pages/contact.js` & `pages/api/contact.js`)

#### Contact Page (409 lines)
- **Formik-powered form** with Yup validation
- **Google Maps integration** showing business location
- **Contact information display**
- **Business hours and address**
- **Form fields**: name, email, phone, product interest, message

#### API Handler (`pages/api/contact.js`)
- **Nodemailer integration** for email sending
- **Gmail SMTP configuration** using app passwords
- **Input validation** and error handling
- **Email formatting** with HTML and text versions
- **Environment variable security** for credentials

### 8. Quote System (`pages/quote.js`)

Enhanced quote form with:
- **Product type dropdown** (Posters, Vinyls, Leaflets, Menus)
- **Quantity specification** field
- **Project specifications** textarea
- **Same validation system** as contact form
- **Professional quote processing** workflow

### 9. Styling System

#### Tailwind Configuration (`tailwind.config.js`)
- **Custom color palette**: primary, secondary, accent colors
- **Extended animations**: spin-slow, draw, bounce-slow
- **Custom keyframes** for SVG drawing animations
- **Responsive breakpoints** configuration

#### Global Styles (`styles/globals.css` - 658 lines)

**Key Features:**
- **Overflow prevention** for mobile devices
- **Custom CSS variables** for theming
- **30+ custom animations**:
  - fadeIn, scaleIn, slideInRight, slideInLeft
  - gradientAnimation, floatingParticles
  - sweep-shine, pulse-gradient
  - Mobile menu staggered animations

**Special Effects:**
- **Glass morphism** with backdrop-blur
- **Particle backgrounds** with moving dots
- **Glow effects** for promotional elements
- **Netflix-style navigation** hover effects
- **Hamburger menu animations**
- **Text gradient effects**

### 10. Search Functionality (`components/search/`)

- **SearchBar component** for desktop navigation
- **MobileSearch overlay** for mobile devices
- **Product search capabilities** across the catalog
- **Responsive design** with proper mobile handling

### 11. SEO & Analytics Implementation

**Google Tag Manager:**
- Container ID: GTM-MB8SNF2S
- Implemented in both `_document.js` (script) and `_app.js` (data layer)
- No-script fallback for users with JavaScript disabled

**SEO Features:**
- **Meta descriptions** for all pages
- **Canonical URLs** for service pages
- **Open Graph tags** for social sharing
- **Structured page titles** with brand consistency
- **Keyword optimization** for Irish market

### 12. Animation & Interaction Design

**Framer Motion Integration:**
- **Page transitions** and component animations
- **Scroll-triggered animations** using intersection observer
- **Hover effects** with spring physics
- **Staggered list animations** for mobile menu
- **Carousel transitions** in hero section

**Custom CSS Animations:**
- **Gradient shifts** for dynamic backgrounds
- **Particle movements** for visual appeal
- **3D transformations** for logo interactions
- **Loading states** and micro-interactions

### 13. Responsive Design Strategy

**Mobile-First Approach:**
- **Breakpoint system**: sm, md, lg, xl
- **Touch-optimized** interactions
- **Mobile menu** with slide-out drawer
- **Responsive typography** scaling
- **Optimized images** with Next.js Image component

**Performance Optimizations:**
- **Image optimization** with Next.js Image
- **Lazy loading** for better performance
- **Responsive images** with appropriate sizes
- **Efficient animations** with hardware acceleration

### 14. Business Logic Features

**Weekly Delivery Service:**
- Integrated throughout product descriptions
- Account management system mentions
- Usage pattern tracking capabilities
- Storage optimization benefits

**Minimum Order Quantities (MOQ):**
- Product-specific MOQ enforcement
- Low minimum orders (100-500 units)
- Mixed size ordering capabilities

**Same-Day Dispatch:**
- Featured prominently for applicable services
- Visual badges and animations
- Time-sensitive promotional elements

## 🔧 Development & Deployment

**Build System:**
- Next.js 13 with TypeScript support
- Custom npm scripts for development
- Node 18+ requirement
- Vercel deployment configuration

**Environment Variables:**
- `GMAIL_USER` - Email service account
- `GMAIL_APP_PASSWORD` - App-specific password
- Production environment configuration

**Performance Features:**
- Static generation where possible
- Dynamic imports for code splitting
- Optimized asset loading
- SEO-friendly routing

## 🎨 Design System

**Color Palette:**
- Primary: Blue tones (#1e3a8a, #3b82f6)
- Accent: Red (#e50914 for highlights)
- Supporting: Green, yellow, purple for USPs
- Neutral: Grays for text and backgrounds

**Typography:**
- Primary: Inter font family
- Responsive scaling (text-xl to text-5xl)
- Custom font weights and spacing
- Gradient text effects

**Component Patterns:**
- Card-based layouts
- Grid systems
- Gradient backgrounds
- Glass morphism effects
- Consistent spacing system

This codebase represents a modern, professional business website with advanced features for user engagement, lead generation, and brand presentation. The architecture supports scalability and maintainability while providing an excellent user experience across all devices. 