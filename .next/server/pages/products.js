"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345,660];
exports.modules = {

/***/ 5034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6004);
/* harmony import */ var private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(366);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/products",
        pathname: "/products",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_products_js__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports getProductBySlug, getProductsByCategory, getRelatedProducts */
const products = [
    {
        id: "white-pizza-boxes",
        name: "White Pizza Boxes",
        category: "Food Packaging",
        description: "Premium white pizza boxes that keep your food hot and showcase your brand with our company blue accents.",
        features: [
            "Made from food-grade white corrugated cardboard",
            "Custom printing with company blue branding",
            "Stackable design for easy storage",
            'Multiple size options: 7", 9", 10", 12", and 14"',
            "Weekly delivery service available"
        ],
        detailedDescription: 'Our premium white pizza boxes are designed to keep your pizzas hot and fresh during delivery while reinforcing your brand image. The clean white exterior with company blue accents creates a professional, high-end appearance. Made from high-quality food-grade materials, these boxes offer excellent insulation and stability. Available in 7", 9", 10", 12", and 14" sizes to accommodate any pizza style. Each box can be fully customized with your branding, including full-color printing options for logos, messaging, and design elements. Take advantage of our weekly delivery service to ensure you never run out of packaging.',
        specifications: [
            {
                name: "Material",
                value: "Food-grade white corrugated cardboard"
            },
            {
                name: "Thickness",
                value: "1.5mm - 3mm (E-flute or B-flute)"
            },
            {
                name: "Color",
                value: "White with company blue accents"
            },
            {
                name: "Sizes Available",
                value: '7", 9", 10", 12", 14"'
            },
            {
                name: "Print Quality",
                value: "Up to 4-color offset or digital printing"
            },
            {
                name: "Minimum Order",
                value: "250 units"
            },
            {
                name: "Production Time",
                value: "7-10 business days"
            },
            {
                name: "Customization",
                value: "Size, printing, finish"
            },
            {
                name: "Delivery Options",
                value: "Weekly scheduled delivery service available"
            }
        ],
        images: [
            "/images/hero/white-pizza-box.svg",
            "/images/ifa/heroh/white-pizza.png"
        ],
        imageSrc: "/images/hero/white-pizza-box.svg",
        price: "Starting at €0.38 per unit",
        moq: 250,
        leadTime: "7-10 business days",
        weeklyDelivery: "Take advantage of our weekly delivery service specifically designed for restaurants. We'll establish a regular schedule that ensures you never run out of packaging while minimizing storage requirements. Our account managers will track your usage patterns to recommend optimal order quantities, helping you maintain efficiency and reduce costs. This branded packaging with consistent weekly delivery enhances your professional image and ensures operational consistency."
    },
    {
        id: "brown-pizza-boxes",
        name: "Brown Pizza Boxes",
        category: "Food Packaging",
        description: "Eco-friendly brown pizza boxes with company blue branding that keep food hot and showcase your sustainability commitment.",
        features: [
            "Made from recycled kraft corrugated cardboard",
            "Custom printing with company blue branding",
            "Stackable design for easy storage",
            'Multiple size options: 7", 9", 10", 12", and 14"',
            "Weekly delivery service available"
        ],
        detailedDescription: 'Our brown kraft pizza boxes combine sustainability with excellent performance. The natural brown exterior with company blue accents creates an eco-friendly yet professional appearance. Made from recycled materials, these boxes offer excellent insulation and stability while showcasing your environmental commitment. Available in 7", 9", 10", 12", and 14" sizes to accommodate any pizza style. Each box can be fully customized with your branding while maintaining the sustainable aesthetic. Our weekly delivery service ensures you always have the packaging you need when you need it.',
        specifications: [
            {
                name: "Material",
                value: "Recycled kraft corrugated cardboard"
            },
            {
                name: "Thickness",
                value: "1.5mm - 3mm (E-flute or B-flute)"
            },
            {
                name: "Color",
                value: "Natural brown with company blue accents"
            },
            {
                name: "Sizes Available",
                value: '7", 9", 10", 12", 14"'
            },
            {
                name: "Print Quality",
                value: "Up to 4-color offset or digital printing"
            },
            {
                name: "Minimum Order",
                value: "250 units"
            },
            {
                name: "Production Time",
                value: "7-10 business days"
            },
            {
                name: "Customization",
                value: "Size, printing, finish"
            },
            {
                name: "Delivery Options",
                value: "Weekly scheduled delivery service available"
            }
        ],
        images: [
            "/images/hero/brown-pizza-box.svg",
            "/images/ifa/heroh/brown-pizza.png"
        ],
        imageSrc: "/images/hero/brown-pizza-box.svg",
        price: "Starting at €0.35 per unit",
        moq: 250,
        leadTime: "7-10 business days",
        weeklyDelivery: "Our weekly delivery service is designed specifically for busy restaurants and food service businesses. We establish a consistent delivery schedule tailored to your needs, ensuring you maintain adequate stock without requiring large storage areas. Our account team monitors your usage patterns to optimize order quantities, reducing waste and controlling costs. This reliable branded packaging delivery service enhances your professional image while simplifying operations."
    },
    {
        id: "flat-handle-paper-bags",
        name: "Flat Handle Paper Bags",
        category: "Retail Packaging",
        description: "Premium paper bags with flat handles featuring company blue and white design elements for an elegant retail experience.",
        features: [
            "Durable flat paper handles for comfortable carrying",
            "Company blue and white color scheme",
            "Available in medium and small sizes",
            "Optional grease-proof lining available",
            "Weekly delivery service available"
        ],
        detailedDescription: "Our flat handle paper bags combine style with functionality, making them perfect for retail, takeaway, and promotional use. The elegant flat handles provide comfort and durability, while the company blue and white design creates a professional, high-end appearance. Available in medium and small sizes with optional grease-proof lining for food applications. These bags can be fully customized with your branding through various printing techniques while maintaining the sophisticated aesthetic. Our weekly delivery service ensures you never run out of essential packaging.",
        specifications: [
            {
                name: "Material",
                value: "Premium kraft paper (100-120gsm)"
            },
            {
                name: "Handle Type",
                value: "Flat paper"
            },
            {
                name: "Color Scheme",
                value: "White with company blue accents or brown with company blue accents"
            },
            {
                name: "Size Options",
                value: 'Small (8"x5"x10"), Medium (10"x6"x12")'
            },
            {
                name: "Lining Options",
                value: "Standard or grease-proof lining"
            },
            {
                name: "Print Quality",
                value: "Up to 4-color offset or digital printing"
            },
            {
                name: "Minimum Order",
                value: "500 units"
            },
            {
                name: "Production Time",
                value: "10-14 business days"
            },
            {
                name: "Delivery Options",
                value: "Weekly scheduled delivery service available"
            }
        ],
        images: [
            "/images/hero/flat-handle-bag.svg",
            "/images/ifa/heroh/flat-bag.png"
        ],
        imageSrc: "/images/hero/flat-handle-bag.svg",
        price: "Starting at €0.28 per unit",
        moq: 500,
        leadTime: "10-14 business days",
        weeklyDelivery: "Our weekly delivery service provides a consistent supply of branded packaging materials tailored to your business needs. This service is especially valuable for retail and food businesses that require regular packaging without maintaining large storage areas. Our team tracks your usage patterns to optimize delivery quantities, ensuring you never run short while minimizing waste. This premium service elevates your professional image while streamlining operations."
    },
    {
        id: "twisted-handle-paper-bags",
        name: "Twisted Handle Paper Bags",
        category: "Retail Packaging",
        description: "Elegant paper bags with twisted handles in company blue and white designs for upscale retail packaging.",
        features: [
            "Strong twisted paper handles for secure carrying",
            "Company blue and white color options",
            "Available in medium and small sizes",
            "Premium quality paper construction",
            "Weekly delivery service available"
        ],
        detailedDescription: "Our twisted handle paper bags offer a stylish, upscale packaging solution for boutiques, gift shops, and high-end retail. The distinctive twisted handles provide both visual appeal and functional strength. Available in company blue and white color schemes and in both medium and small sizes, these bags create a premium shopping experience. Each bag can be fully customized with your branding through various printing techniques. Take advantage of our weekly delivery service to maintain a consistent supply without requiring extensive storage space.",
        specifications: [
            {
                name: "Material",
                value: "Premium kraft paper (100-130gsm)"
            },
            {
                name: "Handle Type",
                value: "Twisted paper"
            },
            {
                name: "Color Scheme",
                value: "White with company blue accents or company blue with white accents"
            },
            {
                name: "Size Options",
                value: 'Small (8"x4.5"x10"), Medium (10"x5"x13")'
            },
            {
                name: "Print Quality",
                value: "Up to 4-color offset or digital printing"
            },
            {
                name: "Minimum Order",
                value: "500 units"
            },
            {
                name: "Production Time",
                value: "10-14 business days"
            },
            {
                name: "Delivery Options",
                value: "Weekly scheduled delivery service available"
            }
        ],
        images: [
            "/images/hero/twisted-handle-bag.svg",
            "/images/ifa/heroh/twisted-bag.png"
        ],
        imageSrc: "/images/hero/twisted-handle-bag.svg",
        price: "Starting at €0.30 per unit",
        moq: 500,
        leadTime: "10-14 business days",
        weeklyDelivery: "Our premium weekly delivery service ensures your business always has the right amount of branded packaging on hand. We establish a consistent delivery schedule tailored to your specific needs, helping you maintain adequate inventory without requiring large storage areas. Our account managers monitor your usage patterns to recommend optimal order quantities, reducing waste and controlling costs. This reliable service enhances your professional image while simplifying operations."
    },
    {
        id: "sos-grab-bags",
        name: "SOS Grab Bags",
        category: "Food Packaging",
        description: "Versatile SOS (Stand-Up Square Bottom) bags with company blue and white branding for food service and retail.",
        features: [
            "Self-opening square bottom design",
            "Company blue and white color options",
            "Available in medium and small sizes",
            "Optional grease-proof lining available",
            "Weekly delivery service available"
        ],
        detailedDescription: "Our SOS (Stand-Up Square Bottom) grab bags are perfect for food service, bakeries, coffee shops, and retail. The convenient self-opening design with a square bottom allows the bag to stand upright when filled, making them ideal for takeaway food and coffee. Available in company blue and white color schemes and in both medium and small sizes, with optional grease-proof lining for food applications. These bags can be fully customized with your branding while maintaining their functional design. Our weekly delivery service ensures you never run out of essential packaging.",
        specifications: [
            {
                name: "Material",
                value: "Food-grade kraft paper (80-100gsm)"
            },
            {
                name: "Style",
                value: "Self-opening square bottom"
            },
            {
                name: "Color Scheme",
                value: "White with company blue accents or company blue with white accents"
            },
            {
                name: "Size Options",
                value: 'Small (6"x3.5"x11"), Medium (8"x4.5"x13")'
            },
            {
                name: "Lining Options",
                value: "Standard or grease-proof lining"
            },
            {
                name: "Print Quality",
                value: "Up to 4-color offset or digital printing"
            },
            {
                name: "Minimum Order",
                value: "500 units"
            },
            {
                name: "Production Time",
                value: "10-14 business days"
            },
            {
                name: "Delivery Options",
                value: "Weekly scheduled delivery service available"
            }
        ],
        images: [
            "/images/hero/sos-bag.svg",
            "/images/ifa/heroh/sos-bag.png"
        ],
        imageSrc: "/images/hero/sos-bag.svg",
        price: "Starting at €0.25 per unit",
        moq: 500,
        leadTime: "10-14 business days",
        weeklyDelivery: "Our weekly delivery service is ideal for food service businesses that need a consistent supply of packaging. We establish a regular delivery schedule tailored to your needs, ensuring you always have sufficient stock without requiring large storage areas. Our account team monitors your usage patterns to optimize order quantities, helping you maintain efficiency and reduce costs. This reliable branded packaging service enhances your professional image while simplifying inventory management."
    },
    {
        id: "flat-paper-bags",
        name: "Flat Paper Bags",
        category: "Retail Packaging",
        description: "Simple and effective flat paper bags in company blue and white designs, with or without grease-proof lining.",
        features: [
            "Clean, flat design without handles",
            "Company blue and white color options",
            "Available in medium and small sizes",
            "Optional grease-proof lining available",
            "Weekly delivery service available"
        ],
        detailedDescription: "Our flat paper bags provide a clean, minimalist packaging solution for pharmaceuticals, bakeries, and retail. The simple design without handles offers a cost-effective option while maintaining a professional appearance. Available in company blue and white color schemes and in both medium and small sizes, with optional grease-proof lining for food applications. These bags can be fully customized with your branding through various printing techniques. Our weekly delivery service ensures a consistent supply tailored to your business needs.",
        specifications: [
            {
                name: "Material",
                value: "Kraft paper (70-100gsm)"
            },
            {
                name: "Style",
                value: "Flat bag without handles"
            },
            {
                name: "Color Scheme",
                value: "White with company blue accents or company blue with white accents"
            },
            {
                name: "Size Options",
                value: 'Small (6"x2"x8"), Medium (8"x3"x10")'
            },
            {
                name: "Lining Options",
                value: "Standard or grease-proof lining"
            },
            {
                name: "Print Quality",
                value: "Up to 4-color offset or digital printing"
            },
            {
                name: "Minimum Order",
                value: "500 units"
            },
            {
                name: "Production Time",
                value: "10-14 business days"
            },
            {
                name: "Delivery Options",
                value: "Weekly scheduled delivery service available"
            }
        ],
        images: [
            "/images/hero/flat-paper-bag.svg",
            "/images/ifa/heroh/flat-paper.png"
        ],
        imageSrc: "/images/hero/flat-paper-bag.svg",
        price: "Starting at €0.22 per unit",
        moq: 500,
        leadTime: "10-14 business days",
        weeklyDelivery: "Our weekly delivery service provides a reliable supply of packaging materials customized to your specific business needs. This service is particularly valuable for businesses that require consistent packaging without maintaining large storage inventories. Our team tracks your usage patterns to optimize delivery quantities, ensuring you never run short while minimizing waste. This premium service elevates your professional image while streamlining operations."
    },
    {
        id: "bagasse-boxes",
        name: "Bagasse Boxes",
        category: "Eco-Friendly Packaging",
        description: "Sustainable bagasse boxes made from sugarcane fiber, available in multiple sizes with company blue and white branding.",
        features: [
            "Made from 100% biodegradable sugarcane fiber",
            "Microwave and freezer safe",
            "Oil and water resistant",
            "Available in various sizes",
            "Weekly delivery service available"
        ],
        detailedDescription: "Our bagasse boxes offer an eco-friendly alternative to traditional packaging. Made from sugarcane fiber, a renewable resource and agricultural by-product, these boxes are 100% biodegradable and compostable. The natural white color with company blue branding creates a clean, professional appearance while showcasing your environmental commitment. These versatile containers are oil and water resistant, microwave and freezer safe, and available in multiple sizes to suit various applications. Our weekly delivery service ensures your business maintains a consistent supply of sustainable packaging.",
        specifications: [
            {
                name: "Material",
                value: "Sugarcane fiber (bagasse)"
            },
            {
                name: "Color",
                value: "Natural white with company blue branding"
            },
            {
                name: "Temperature Range",
                value: "-20\xb0C to +120\xb0C"
            },
            {
                name: "Size Options",
                value: "Various sizes available to suit different food portions"
            },
            {
                name: "Print Quality",
                value: "Up to 4-color biodegradable inks"
            },
            {
                name: "Minimum Order",
                value: "500 units"
            },
            {
                name: "Production Time",
                value: "10-14 business days"
            },
            {
                name: "Certification",
                value: "Biodegradable, compostable"
            },
            {
                name: "Delivery Options",
                value: "Weekly scheduled delivery service available"
            }
        ],
        images: [
            "/images/hero/bagasse-box.svg",
            "/images/ifa/heroh/bagasse.png"
        ],
        imageSrc: "/images/hero/bagasse-box.svg",
        price: "Starting at €0.32 per unit",
        moq: 500,
        leadTime: "10-14 business days",
        weeklyDelivery: "Our weekly delivery service for restaurants and food service businesses provides a reliable supply of eco-friendly packaging tailored to your needs. We establish a consistent delivery schedule that ensures you maintain adequate stock without requiring large storage areas. Our account managers track your usage patterns to recommend optimal order quantities, helping you maintain efficiency and reduce waste. This premium service featuring sustainable packaging enhances your brand's environmental commitment while simplifying operations."
    },
    {
        id: "pizza-boxes",
        name: "Pizza Boxes",
        category: "Food Packaging",
        description: "Premium pizza boxes that keep your food hot and enhance your brand image.",
        features: [
            "Made from food-grade materials",
            "Custom printing options",
            "Stackable design for easy storage",
            "Available in white or brown kraft options",
            'Multiple size options: 7", 9", 10", 12", and 14"',
            "Weekly delivery service available"
        ],
        detailedDescription: 'Our premium pizza boxes are designed to keep your pizzas hot and fresh during delivery while reinforcing your brand image. Made from high-quality food-grade materials, these boxes offer excellent insulation and stability. Choose from white or brown kraft materials with company blue accents to suit your brand aesthetic. Available in 7", 9", 10", 12", and 14" sizes to accommodate any pizza style. Each box can be fully customized with your branding, including full-color printing options for logos, messaging, and design elements. Take advantage of our weekly delivery service to ensure you never run out of packaging.',
        specifications: [
            {
                name: "Material",
                value: "Food-grade corrugated cardboard (white or brown kraft)"
            },
            {
                name: "Thickness",
                value: "1.5mm - 3mm (E-flute or B-flute)"
            },
            {
                name: "Color Options",
                value: "White with company blue accents or Natural brown with company blue accents"
            },
            {
                name: "Sizes Available",
                value: '7", 9", 10", 12", 14"'
            },
            {
                name: "Print Quality",
                value: "Up to 4-color offset or digital printing"
            },
            {
                name: "Minimum Order",
                value: "250 units"
            },
            {
                name: "Production Time",
                value: "7-10 business days"
            },
            {
                name: "Customization",
                value: "Size, color, printing, finish"
            },
            {
                name: "Delivery Options",
                value: "Weekly scheduled delivery service available"
            }
        ],
        images: [
            "/images/hero/pizza-box.svg",
            "/images/ifa/heroh/pizza.png"
        ],
        imageSrc: "/images/hero/pizza-box.svg",
        price: "Starting at €0.35 per unit",
        moq: 250,
        leadTime: "7-10 business days",
        weeklyDelivery: "Take advantage of our weekly delivery service specifically designed for restaurants. We'll establish a regular schedule that ensures you never run out of packaging while minimizing storage requirements. Our account managers will track your usage patterns to recommend optimal order quantities, helping you maintain efficiency and reduce costs. This branded packaging with consistent weekly delivery enhances your professional image and ensures operational consistency.",
        variants: [
            {
                name: "White Pizza Boxes",
                description: "Premium white pizza boxes with company blue accents that keep food hot and showcase your brand.",
                features: [
                    "Made from food-grade white corrugated cardboard",
                    "Clean, professional appearance with company blue accents",
                    'Available in 7", 9", 10", 12", and 14" sizes',
                    "Ideal for upscale restaurants and premium positioning"
                ],
                imageSrc: "/images/hero/white-pizza-box.svg"
            },
            {
                name: "Brown Pizza Boxes",
                description: "Eco-friendly brown kraft pizza boxes with company blue accents that showcase your sustainability commitment.",
                features: [
                    "Made from recycled kraft corrugated cardboard",
                    "Natural brown with company blue accents",
                    'Available in 7", 9", 10", 12", and 14" sizes',
                    "Perfect for businesses emphasizing eco-friendliness"
                ],
                imageSrc: "/images/hero/brown-pizza-box.svg"
            }
        ]
    },
    {
        id: "paper-bags",
        name: "Paper Bags",
        category: "Retail Packaging",
        description: "Eco-friendly paper bags that elevate your brand and customer experience.",
        features: [
            "Sustainable kraft paper options",
            "Multiple handle types and designs",
            "Company blue and white color options",
            "Available in medium and small sizes",
            "Optional grease-proof lining available",
            "Weekly delivery service available"
        ],
        detailedDescription: "Our eco-friendly paper bags are perfect for retail stores, restaurants, and promotional events. Made from durable kraft paper with various handle options, they provide reliable performance while showcasing your commitment to sustainability. Choose from flat handles, twisted handles, SOS designs, or flat bags without handles to suit your specific needs. Available in company blue and white color schemes and in both medium and small sizes, with optional grease-proof lining for food applications. Each bag can be fully customized with your branding through various printing techniques. Our weekly delivery service ensures you never run out of essential packaging.",
        specifications: [
            {
                name: "Material",
                value: "Kraft paper (70-130gsm depending on style)"
            },
            {
                name: "Handle Types",
                value: "Twisted paper, flat paper, no handles (SOS option available)"
            },
            {
                name: "Color Scheme",
                value: "White with company blue accents or company blue with white accents"
            },
            {
                name: "Size Options",
                value: "Small and Medium (dimensions vary by style)"
            },
            {
                name: "Lining Options",
                value: "Standard or grease-proof lining"
            },
            {
                name: "Print Quality",
                value: "Up to 4-color offset or digital printing"
            },
            {
                name: "Minimum Order",
                value: "500 units"
            },
            {
                name: "Production Time",
                value: "10-14 business days"
            },
            {
                name: "Customization",
                value: "Size, handles, printing, finish, reinforcements"
            },
            {
                name: "Delivery Options",
                value: "Weekly scheduled delivery service available"
            }
        ],
        images: [
            "/images/hero/paper-bag.svg",
            "/images/ifa/heroh/bag.png"
        ],
        imageSrc: "/images/hero/paper-bag.svg",
        price: "Starting at €0.25 per unit",
        moq: 500,
        leadTime: "10-14 business days",
        weeklyDelivery: "Our weekly delivery service provides a consistent supply of branded packaging materials tailored to your business needs. This service is especially valuable for retail and food businesses that require regular packaging without maintaining large storage areas. Our team tracks your usage patterns to optimize delivery quantities, ensuring you never run short while minimizing waste. This premium service elevates your professional image while streamlining operations.",
        variants: [
            {
                name: "Flat Handle Paper Bags",
                description: "Premium paper bags with flat handles featuring company blue and white design elements for an elegant retail experience.",
                features: [
                    "Durable flat paper handles for comfortable carrying",
                    "Company blue and white color scheme",
                    "Available in medium and small sizes",
                    "Optional grease-proof lining available"
                ],
                imageSrc: "/images/hero/flat-handle-bag.svg"
            },
            {
                name: "Twisted Handle Paper Bags",
                description: "Elegant paper bags with twisted handles in company blue and white designs for upscale retail packaging.",
                features: [
                    "Strong twisted paper handles for secure carrying",
                    "Company blue and white color options",
                    "Available in medium and small sizes",
                    "Premium quality paper construction"
                ],
                imageSrc: "/images/hero/twisted-handle-bag.svg"
            },
            {
                name: "SOS Grab Bags",
                description: "Versatile SOS (Stand-Up Square Bottom) bags with company blue and white branding for food service and retail.",
                features: [
                    "Self-opening square bottom design",
                    "Company blue and white color options",
                    "Available in medium and small sizes",
                    "Optional grease-proof lining available"
                ],
                imageSrc: "/images/hero/sos-bag.svg"
            },
            {
                name: "Flat Paper Bags",
                description: "Simple and effective flat paper bags in company blue and white designs, with or without grease-proof lining.",
                features: [
                    "Clean, flat design without handles",
                    "Company blue and white color options",
                    "Available in medium and small sizes",
                    "Optional grease-proof lining available"
                ],
                imageSrc: "/images/hero/flat-paper-bag.svg"
            }
        ]
    },
    {
        id: "burger-boxes",
        name: "Burger Boxes",
        category: "Food Packaging",
        description: "Sustainable and sturdy burger boxes perfect for takeaway and food delivery.",
        features: [
            "Made from bagasse (sugarcane fiber)",
            "Oil and water resistant",
            "Microwave safe options",
            "Biodegradable and compostable",
            "Custom branding available"
        ],
        detailedDescription: "Our sustainable burger boxes are designed for optimal food presentation and transportation. Made from eco-friendly materials including bagasse (sugarcane fiber), they offer excellent durability and insulation while being kind to the environment. The clamshell design keeps burgers secure, and ventilation features help maintain food quality by preventing sogginess.",
        specifications: [
            {
                name: "Material",
                value: "Bagasse (sugarcane fiber) or food-grade cardboard"
            },
            {
                name: "Size Options",
                value: 'Small (4"), Medium (5"), Large (6")'
            },
            {
                name: "Print Quality",
                value: "Up to 4-color biodegradable inks"
            },
            {
                name: "Minimum Order",
                value: "500 units"
            },
            {
                name: "Production Time",
                value: "7-10 business days"
            },
            {
                name: "Customization",
                value: "Size, printing, inserts, ventilation"
            }
        ],
        images: [
            "/images/hero/burger-box.svg",
            "/images/ifa/heroh/burger.png"
        ],
        imageSrc: "/images/hero/burger-box.svg",
        price: "Starting at €0.30 per unit",
        moq: 500,
        leadTime: "7-10 business days"
    },
    {
        id: "marketing-materials",
        name: "Marketing Materials",
        category: "Promotional",
        description: "High-quality printed materials to promote your business and generate leads.",
        features: [
            "Flyers and leaflets",
            "Brochures and catalogs",
            "Business cards",
            "Posters and banners",
            "Same-day printing available"
        ],
        detailedDescription: "Our marketing materials are designed to help your business make a lasting impression. From sleek business cards to eye-catching brochures, we offer a wide range of high-quality printed products to suit your promotional needs. Each item can be fully customized with your branding, using premium papers and advanced printing techniques for professional results.",
        specifications: [
            {
                name: "Materials",
                value: "Various paper stocks (100-350gsm)"
            },
            {
                name: "Print Quality",
                value: "High-resolution digital or offset printing"
            },
            {
                name: "Finishes Available",
                value: "Matte, glossy, soft-touch, spot UV"
            },
            {
                name: "Minimum Order",
                value: "Varies by product"
            },
            {
                name: "Production Time",
                value: "2-5 business days (rush options available)"
            },
            {
                name: "Customization",
                value: "Size, shape, paper type, finishes"
            }
        ],
        images: [
            "/images/hero/leaflet.svg",
            "/images/ifa/heroh/marketing.png"
        ],
        imageSrc: "/images/hero/leaflet.svg",
        price: "Starting at €0.10 per unit",
        moq: 100,
        leadTime: "2-5 business days"
    },
    {
        id: "napkins",
        name: "Custom Napkins",
        category: "Food Service",
        description: "Premium napkins with your branding that enhance the dining experience.",
        features: [
            "Multiple ply options",
            "Eco-friendly materials",
            "Full-color printing",
            "Various folding styles",
            "Fast production times"
        ],
        detailedDescription: "Our custom-printed napkins offer both functionality and branding opportunities for restaurants, cafes, and catering businesses. Available in various sizes, materials, and ply options, these napkins can be fully customized with your logo and design elements. Choose from different folding styles and ink colors to create napkins that perfectly complement your brand identity.",
        specifications: [
            {
                name: "Material",
                value: "Paper or cloth (various grades available)"
            },
            {
                name: "Ply Options",
                value: "1-ply, 2-ply, 3-ply"
            },
            {
                name: "Size Options",
                value: "Cocktail, Luncheon, Dinner"
            },
            {
                name: "Print Quality",
                value: "Up to 4-color printing"
            },
            {
                name: "Minimum Order",
                value: "1,000 units"
            },
            {
                name: "Production Time",
                value: "5-7 business days"
            }
        ],
        images: [
            "/images/hero/napkin.svg",
            "/images/ifa/heroh/napkin.png"
        ],
        imageSrc: "/images/hero/napkin.svg",
        price: "Starting at €0.05 per unit",
        moq: 1000,
        leadTime: "5-7 business days"
    },
    {
        id: "corrugated-boxes",
        name: "Corrugated Boxes",
        category: "Shipping",
        description: "Durable corrugated boxes for shipping and storage needs.",
        features: [
            "Custom sizes and strength options",
            "Sustainable materials",
            "Printed branding options",
            "Bulk order discounts",
            "Fast production times"
        ],
        detailedDescription: "Our corrugated boxes provide excellent protection for your products during storage and shipping. Made from durable, multi-layered cardboard, these boxes offer superior strength and stability. Available in various flute profiles and wall thicknesses to suit different weight requirements, each box can be customized with your branding and designed to optimize shipping costs.",
        specifications: [
            {
                name: "Material",
                value: "Corrugated cardboard (various flute options)"
            },
            {
                name: "Wall Types",
                value: "Single wall, double wall, triple wall"
            },
            {
                name: "Print Quality",
                value: "Up to 4-color flexographic printing"
            },
            {
                name: "Minimum Order",
                value: "250 units"
            },
            {
                name: "Production Time",
                value: "7-10 business days"
            },
            {
                name: "Customization",
                value: "Size, strength, printing, closure options"
            }
        ],
        images: [
            "/images/hero/pizza-box.svg",
            "/images/ifa/heroh/box.png"
        ],
        imageSrc: "/images/hero/pizza-box.svg",
        price: "Starting at €0.50 per unit",
        moq: 250,
        leadTime: "7-10 business days"
    },
    {
        id: "wide-format-products",
        name: "Wide Format Products",
        category: "Promotional",
        description: "High-impact large format printing for banners, posters, and displays to make your brand stand out.",
        features: [
            "High-resolution printing",
            "Indoor and outdoor options",
            "Variety of materials and finishes",
            "Common and custom sizes available",
            "Weather-resistant options",
            "Request for quote service"
        ],
        detailedDescription: "Our wide format printing services deliver eye-catching visuals perfect for trade shows, retail environments, and marketing campaigns. We offer a comprehensive range of large format print products from banners and posters to window graphics and exhibition displays. Using state-of-the-art printing technology and premium materials, we ensure vivid colors, sharp details, and durable finishes suitable for both indoor and outdoor applications. Each product can be fully customized with your branding, and our design team is available to help create impactful visuals that amplify your message.",
        specifications: [
            {
                name: "Materials",
                value: "Vinyl, fabric, paper, mesh, canvas, foam board, corrugated plastic"
            },
            {
                name: "Standard Sizes",
                value: "A1 (594mm \xd7 841mm), A0 (841mm \xd7 1189mm), 24\"\xd736\", 36\"\xd748\", 4'\xd78', 2'\xd76', Custom sizes available"
            },
            {
                name: "Printing",
                value: "High-resolution UV, latex, or solvent printing up to 1440dpi"
            },
            {
                name: "Finishing Options",
                value: "Lamination (gloss, matte, satin), grommets, pole pockets, hemming, mounting"
            },
            {
                name: "Indoor Products",
                value: "Posters, foam boards, standees, roll-up banners, wall graphics, backlit displays"
            },
            {
                name: "Outdoor Products",
                value: "Vinyl banners, mesh banners, flags, A-frames, yard signs, vehicle graphics"
            },
            {
                name: "Exhibition Products",
                value: "Pop-up displays, backdrop walls, counter displays, hanging banners, floor graphics"
            },
            {
                name: "Turnaround Time",
                value: "Standard 3-5 business days, rush options available"
            }
        ],
        images: [
            "/css-placeholder-image",
            "/css-placeholder-image"
        ],
        imageSrc: "/css-placeholder-image",
        price: "Request for Quote",
        quoteRequired: true,
        leadTime: "Varies by product and quantity"
    },
    {
        id: "roll-up-banner-stands",
        name: "Roll-Up Banner Stands",
        category: "Wide Format",
        description: "Professional roll-up banner stands that create instant impact for exhibitions, retail displays, and presentations.",
        features: [
            "Premium quality portable display system",
            "Available in multiple sizes and styles",
            "Lightweight aluminum cassette mechanism",
            "High-resolution graphics printing",
            "Includes carry case for easy transportation",
            "Quick 60-second setup with no tools required"
        ],
        detailedDescription: "Our roll-up banner stands provide the perfect portable marketing solution for businesses that need to make an impact at trade shows, retail environments, or promotional events. Each stand features a premium quality aluminum cassette base with an integrated roller mechanism that protects your graphics when not in use and allows for effortless setup in under 60 seconds. The high-resolution printed graphics are produced on anti-curl, anti-glare material that ensures your message looks professional from every angle.\n\nEvery roll-up banner comes complete with a padded carry case for easy transportation and storage between events. The lightweight yet stable design makes these stands ideal for frequent use, with the graphic panel easily retracted into the base to prevent damage. Choose from our economy, standard, or premium models depending on your usage requirements and budget, with each option providing excellent value and visual impact.",
        specifications: [
            {
                name: "Standard Sizes",
                value: "85cm \xd7 200cm (standard), 80cm \xd7 200cm (economy), 100cm \xd7 200cm (wide), Desktop (A4/A3)"
            },
            {
                name: "Base Material",
                value: "Aluminum cassette with protective end caps"
            },
            {
                name: "Pole System",
                value: "Telescopic aluminum support pole (premium), Single aluminum pole (standard), Two-part pole (economy)"
            },
            {
                name: "Graphic Material",
                value: "Anti-curl, anti-glare banner film with UV-resistant inks"
            },
            {
                name: "Print Resolution",
                value: "Up to 1440dpi for photographic quality"
            },
            {
                name: "Setup Time",
                value: "Under 60 seconds, no tools required"
            },
            {
                name: "Included Accessories",
                value: "Padded carry case, assembly instructions"
            },
            {
                name: "Weight",
                value: "2.5kg - 4kg depending on model and size"
            },
            {
                name: "Warranty",
                value: "1-year warranty on hardware (premium models feature extended 5-year warranty)"
            },
            {
                name: "Production Time",
                value: "2-3 business days standard (rush service available)"
            }
        ],
        applications: [
            "Trade show and exhibition displays",
            "Retail point-of-sale promotions",
            "Conference and event signage",
            "Corporate reception areas",
            "Sales presentations and pitches",
            "Lecture and training backgrounds",
            "Pop-up shops and temporary displays",
            "Product launches and demonstrations"
        ],
        models: [
            {
                name: "Economy Roll-Up",
                description: "Cost-effective solution for short-term or infrequent use",
                features: [
                    "Lightweight aluminum base",
                    "Two-part supporting pole",
                    "Standard 80cm \xd7 200cm graphic area",
                    "Basic carry bag included"
                ],
                recommendedFor: "One-time events, budget-conscious campaigns, indoor use only"
            },
            {
                name: "Standard Roll-Up",
                description: "Our most popular model, balancing quality and value",
                features: [
                    "Medium-weight aluminum cassette",
                    "Single supporting pole with internal bungee",
                    "85cm \xd7 200cm graphic area",
                    "Padded carry case included",
                    "Adjustable feet for stability"
                ],
                recommendedFor: "Regular exhibitors, retail environments, promotional campaigns"
            },
            {
                name: "Premium Roll-Up",
                description: "Professional-grade display for frequent or long-term use",
                features: [
                    "Heavy-duty aluminum cassette with chrome end caps",
                    "Telescopic pole for adjustable height",
                    "85cm or 100cm width options",
                    "Premium padded carry case",
                    "Tensioning system for perfect graphic display",
                    "5-year hardware warranty"
                ],
                recommendedFor: "Corporate environments, frequent exhibitors, premium brands"
            },
            {
                name: "Desktop Roll-Up",
                description: "Compact counter-top display for reception areas and point-of-sale",
                features: [
                    "A4 or A3 size options",
                    "Miniature aluminum cassette",
                    "Lightweight supporting pole",
                    "Protective sleeve included"
                ],
                recommendedFor: "Counter displays, product information, reception desks"
            }
        ],
        images: [
            "/images/ifa/heroh/rollup/1.png",
            "/images/ifa/heroh/rollup/2.png",
            "/images/ifa/heroh/rollup/3.png",
            "/images/ifa/heroh/rollup/4.png",
            "/images/ifa/heroh/rollup/5.png",
            "/images/ifa/heroh/rollup/6.png"
        ],
        imageSrc: "/images/ifa/heroh/rollup/1.png",
        price: "Request for Quote",
        quoteRequired: true,
        leadTime: "2-3 business days standard",
        faq: [
            {
                question: "How long do the graphics last?",
                answer: "Our roll-up banner graphics are printed with UV-resistant inks on premium anti-curl material. With proper care, indoor displays typically last 3-5 years without significant fading or deterioration."
            },
            {
                question: "Can I replace just the graphic on my existing stand?",
                answer: "Yes, we can produce replacement graphics for most standard roll-up banner stands. Simply provide the exact dimensions of your existing hardware, and we'll create a new graphic panel that fits perfectly."
            },
            {
                question: "Are your roll-up banners suitable for outdoor use?",
                answer: "Our standard roll-up banners are designed for indoor use. For outdoor applications, we recommend our outdoor banner displays that feature weather-resistant materials and sturdier bases."
            },
            {
                question: "What file format do you need for printing?",
                answer: "For best results, please provide high-resolution PDF, AI, or EPS files with fonts converted to outlines. Images should be at least 150dpi at final print size. We also accept PSD, TIFF, and JPEG files."
            },
            {
                question: "Do you offer design services if I don't have artwork?",
                answer: "Yes, our professional design team can create impactful banner designs for you. Just let us know your requirements, branding guidelines, and key messages, and we'll develop eye-catching visuals that achieve your objectives."
            }
        ],
        testimonials: [
            {
                quote: "The premium roll-up banners we ordered were outstanding quality and made a real impression at our annual conference. Setup was literally under a minute!",
                author: "Marketing Director, Tech Solutions Ltd"
            },
            {
                quote: "We use the desktop roll-ups at our reception desk to highlight our services. They look professional and have helped increase our upselling opportunities.",
                author: "Office Manager, Wellness Clinic"
            },
            {
                quote: "For our exhibition program, we ordered 15 standard roll-ups and have been impressed with their durability. Two years of regular use and they still look brand new.",
                author: "Events Coordinator, Manufacturing Association"
            }
        ]
    },
    {
        id: "vinyl-banners",
        name: "Vinyl Banners",
        category: "Wide Format",
        description: "High-impact vinyl banners for indoor and outdoor advertising that command attention and withstand the elements.",
        features: [
            "Premium quality 440gsm/510gsm vinyl material",
            "Vibrant, fade-resistant UV printing",
            "Indoor and outdoor durable options",
            "Custom sizes up to 5m wide",
            "Reinforced hems and eyelets standard",
            "Wind-slits option for outdoor longevity"
        ],
        detailedDescription: "Our premium vinyl banners deliver maximum visual impact for your advertising and promotional campaigns, whether indoors or outdoors. Printed on high-quality, weather-resistant materials using state-of-the-art UV printing technology, these banners produce vibrant colors and sharp details that capture attention from a distance.\n\nEach banner is crafted with reinforced edges and robust metal eyelets placed approximately every 50cm to ensure secure installation and longevity even in challenging conditions. For outdoor applications, we recommend our wind-slit option that allows air to pass through the banner, reducing wind pressure and extending the banner's lifespan. Available in standard sizes or completely customized to your exact specifications, our vinyl banners provide a cost-effective, high-impact marketing solution for events, storefronts, construction sites, and promotional campaigns.",
        specifications: [
            {
                name: "Standard Materials",
                value: "440gsm PVC vinyl (standard), 510gsm PVC vinyl (premium/outdoor)"
            },
            {
                name: "Common Sizes",
                value: "2'\xd74', 3'\xd76', 4'\xd78', 5'\xd710', 2'\xd76', Custom sizes up to 5m wide"
            },
            {
                name: "Finishing Options",
                value: "Hemmed edges, reinforced eyelets, pole pockets, rope/bungee cords, wind slits"
            },
            {
                name: "Print Technology",
                value: "UV-resistant, eco-solvent or latex printing with up to 1440dpi resolution"
            },
            {
                name: "Weather Resistance",
                value: "Waterproof, UV-resistant, -20\xb0C to +70\xb0C temperature tolerance"
            },
            {
                name: "Expected Lifespan",
                value: "2-3 years outdoor, 5+ years indoor with proper care and installation"
            },
            {
                name: "Turnaround Time",
                value: "24-48 hour rush service available, standard 3-5 business days"
            },
            {
                name: "Minimum Order",
                value: "No minimum - single banner printing available"
            },
            {
                name: "Color Options",
                value: "Full CMYK color printing, unlimited colors at no extra cost"
            },
            {
                name: "Design Service",
                value: "Professional design assistance available (additional fee may apply)"
            }
        ],
        applications: [
            "Retail storefronts and grand openings",
            "Trade shows and exhibition displays",
            "Sporting events and tournaments",
            "Construction site branding and information",
            "Outdoor advertising campaigns",
            "Festival and event promotion",
            "Election campaigns and political advertising",
            "Educational institutions and campus events"
        ],
        models: [
            {
                name: "Standard Indoor Vinyl",
                description: "Cost-effective solution for interior displays and short-term promotions",
                features: [
                    "440gsm smooth PVC vinyl",
                    "Hemmed edges with eyelets every 50cm",
                    "Full-color, high-resolution printing",
                    "Matte or gloss finish options"
                ],
                recommendedFor: "Indoor events, retail displays, short-term promotions, trade shows"
            },
            {
                name: "Premium Outdoor Vinyl",
                description: "Heavy-duty option designed to withstand challenging weather conditions",
                features: [
                    "510gsm reinforced PVC vinyl",
                    "Double-stitched hems for extra durability",
                    "Wind slits available for high-wind areas",
                    "UV-resistant inks for vibrant, fade-resistant colors",
                    "Reinforced corner patches for high-stress points"
                ],
                recommendedFor: "Long-term outdoor advertising, construction sites, sports facilities, building wraps"
            },
            {
                name: "Mesh Vinyl Banner",
                description: "Specialized perforated vinyl allowing wind to pass through naturally",
                features: [
                    "270gsm-350gsm mesh PVC material with 20-40% air flow",
                    "Perfect for windy locations without requiring wind slits",
                    "Reduced wind load on mounting structures",
                    "UV-resistant printing with approximately 80% color density"
                ],
                recommendedFor: "Fence wraps, building facades, scaffolding covers, exposed locations with high wind"
            },
            {
                name: "Double-Sided Vinyl Banner",
                description: "Two-sided printing for maximum visibility from multiple viewing angles",
                features: [
                    "650gsm blackout vinyl material",
                    "Block-out layer prevents image show-through",
                    "Different or identical designs on each side",
                    "Premium edge finishing with heavy-duty eyelets"
                ],
                recommendedFor: "Street lamp posts, hanging displays, trade show booth dividers, retail environments"
            }
        ],
        images: [
            "/css-placeholder-image",
            "/css-placeholder-image",
            "/css-placeholder-image",
            "/css-placeholder-image"
        ],
        imageSrc: "/css-placeholder-image",
        price: "Request for Quote",
        quoteRequired: true,
        leadTime: "3-5 business days standard (rush service available)",
        faq: [
            {
                question: "How long will my vinyl banner last outdoors?",
                answer: "With proper installation and care, our premium outdoor vinyl banners typically last 2-3 years in outdoor conditions. Factors affecting lifespan include exposure to direct sunlight, extreme weather conditions, and installation method. Indoor banners can last 5+ years."
            },
            {
                question: "What size banner do I need?",
                answer: "The ideal size depends on viewing distance and location. For close viewing (under 10m), smaller banners (2'\xd74', 3'\xd76') work well. For medium distances (10-30m), consider 4'\xd78' or 5'\xd710'. For long-distance visibility (30m+), we recommend larger custom sizes and emphasizing fewer, larger words in your design."
            },
            {
                question: "What are wind slits and do I need them?",
                answer: "Wind slits are small curved cuts in the vinyl that allow wind to pass through, reducing pressure on the banner and its mounting points. We recommend wind slits for any outdoor banner larger than 3'\xd76' or for any installation in open or elevated areas prone to wind. Alternatively, our mesh banners provide natural wind flow without requiring slits."
            },
            {
                question: "How should I install my banner?",
                answer: "For best results, secure banners evenly through all provided eyelets using bungee cords, zip ties, or rope. Ensure tension is even across the banner without excessive stretching. For long-term installations, we recommend checking tension periodically and adjusting as needed. We can provide installation hardware and advice for your specific situation."
            },
            {
                question: "Can I design my own banner or will you help me?",
                answer: "Both options are available! You can submit print-ready artwork following our specifications, or our professional design team can create custom designs for you. We offer everything from simple text layouts to complete creative concepts with graphics and branding. Design services are charged separately based on complexity."
            }
        ]
    },
    {
        id: "posters",
        name: "Professional Posters",
        category: "Wide Format",
        description: "High-definition posters with stunning color reproduction for marketing campaigns, events, and retail environments.",
        features: [
            "Premium 170gsm-200gsm paper options",
            "Photo-quality printing up to 1440dpi",
            "Standard and custom sizes available",
            "Multiple finish options (matte, gloss, satin)",
            "Fast turnaround times with rush service",
            "Lamination options for durability"
        ],
        detailedDescription: "Make a bold visual statement with our professional, high-definition posters, perfect for promotions, events, retail displays, and interior d\xe9cor. Using state-of-the-art printing technology, we deliver stunning color reproduction and exceptional image clarity that brings your visuals to life with remarkable detail.\n\nOur posters are printed on premium heavyweight papers with options for gloss, matte, or satin finishes to suit your specific application. Whether you need standard sizes like A0 and A1 or custom dimensions for your unique space, our posters provide a cost-effective way to create maximum visual impact.\n\nFor installations requiring extra durability, we offer lamination services in gloss or matte finishes, providing protection against handling, moisture, and UV fading. This is especially valuable for posters in high-traffic areas or for longer-term displays. From design assistance to lightning-fast turnaround times, we provide a complete solution for your poster printing needs.",
        specifications: [
            {
                name: "Paper Types",
                value: "170gsm silk/satin, 200gsm gloss, 170gsm matte, 190gsm photo satin"
            },
            {
                name: "Standard Sizes",
                value: 'A0 (841mm \xd7 1189mm), A1 (594mm \xd7 841mm), A2 (420mm \xd7 594mm), 24"\xd736", 36"\xd748", Custom sizes available'
            },
            {
                name: "Print Resolution",
                value: "Up to 1440dpi for photographic quality reproduction"
            },
            {
                name: "Finishing Options",
                value: "Lamination (gloss/matte), mounting to foam board or correx, edge sealing, encapsulation"
            },
            {
                name: "Color Profile",
                value: "Full CMYK with ICC color management for accurate color reproduction"
            },
            {
                name: "Minimum Order",
                value: "No minimum - single poster printing available"
            },
            {
                name: "Turnaround Time",
                value: "Same day service available, standard 24-48 hours"
            },
            {
                name: "Custom Shapes",
                value: "Cut-to-shape options available for unique designs"
            },
            {
                name: "Indoor Lifespan",
                value: "6-12 months unlaminated, 2+ years with lamination"
            },
            {
                name: "Design Template",
                value: "Free artwork templates available for all standard sizes"
            }
        ],
        applications: [
            "Retail promotional displays",
            "Corporate event signage",
            "Exhibition and conference information",
            "Restaurant and bar menus",
            "Educational displays and presentations",
            "Movie and entertainment promotions",
            "Art reproductions and gallery displays",
            "Wayfinding and informational signage"
        ],
        models: [
            {
                name: "Standard Paper Posters",
                description: "Cost-effective solution for short-term promotional displays",
                features: [
                    "170gsm silk/satin or matte paper",
                    "Vibrant color reproduction",
                    "Available in all standard and custom sizes",
                    "Unlaminated for economical printing"
                ],
                recommendedFor: "Short-term promotions, event announcements, indoor retail displays, temporary information"
            },
            {
                name: "Premium Photo Posters",
                description: "High-impact visual display with superior image quality",
                features: [
                    "190-200gsm photo-grade paper",
                    "Enhanced color gamut for photographic reproduction",
                    "Satin or gloss finish options",
                    "Superior detail resolution for close viewing"
                ],
                recommendedFor: "Fashion displays, product showcases, art reproductions, premium brand advertising"
            },
            {
                name: "Laminated Posters",
                description: "Durable finish providing protection and enhanced appearance",
                features: [
                    "Gloss, matte or satin lamination options",
                    "Protection against handling, moisture, and UV damage",
                    "Wipe-clean surface ideal for high-traffic areas",
                    "Extended lifespan of 2+ years indoor"
                ],
                recommendedFor: "Long-term displays, educational environments, restaurants, information boards"
            },
            {
                name: "Mounted Posters",
                description: "Ready-to-display solution with rigid backing",
                features: [
                    "Mounted on 5mm foam board or 3mm/5mm Correx",
                    "No need for additional framing",
                    "Professional edge finish options",
                    "Includes hanging options (adhesive hooks or drill holes)"
                ],
                recommendedFor: "Exhibition displays, information points, boardroom presentations, semi-permanent installations"
            }
        ],
        images: [
            "/css-placeholder-image",
            "/css-placeholder-image",
            "/css-placeholder-image",
            "/css-placeholder-image"
        ],
        imageSrc: "/css-placeholder-image",
        price: "Starting at €20 per poster",
        quoteRequired: false,
        leadTime: "24-48 hours standard (same day available)",
        faq: [
            {
                question: "What resolution should my artwork be for poster printing?",
                answer: "For optimum print quality, we recommend a minimum resolution of 150dpi at the final print size. For example, an A1 poster (594mm \xd7 841mm) should have a resolution of at least 3508 \xd7 4961 pixels. For the sharpest results, especially with photographic content, 300dpi is ideal."
            },
            {
                question: "What file formats do you accept for poster printing?",
                answer: "We accept PDF (preferred), JPEG, TIFF, PNG, AI, and PSD files. PDF files should be created with fonts embedded and in CMYK color mode. When sending native design files (AI, PSD), please convert text to outlines/paths or include all fonts used in the design."
            },
            {
                question: "How should I prepare my artwork for poster printing?",
                answer: "Set up your document at the exact size you want to print with 3mm bleed on all sides. Use CMYK color mode (not RGB) for most accurate color reproduction. Keep important text and elements at least 5mm from the edge. For templates and detailed specifications, please download our artwork guide or contact our design team."
            },
            {
                question: "Do I need to laminate my posters?",
                answer: "Lamination is recommended if your posters will be displayed for more than a few weeks, will be handled frequently, or will be in areas with high humidity or direct sunlight. Lamination provides protection against tearing, moisture, UV fading, and fingerprints, extending the life of your posters significantly."
            },
            {
                question: "What poster size should I choose?",
                answer: "The ideal size depends on viewing distance and location. A1 (594mm \xd7 841mm) is our most popular size, providing good visibility from up to 10 meters away. For greater impact at medium distances, consider A0 (841mm \xd7 1189mm). For close inspection of detailed information, A2 (420mm \xd7 594mm) may be sufficient. We're happy to advise on the best size for your specific needs."
            }
        ]
    },
    {
        id: "foamex-boards",
        name: "Foamex PVC Boards",
        category: "Wide Format",
        description: "Professional grade PVC foam board signage that combines lightweight durability with high-quality print finish for indoor displays.",
        features: [
            "Premium rigid yet lightweight PVC foam material",
            "Thickness options from 3mm to 10mm",
            "Direct UV printing for vibrant, durable results",
            "Custom cut-to-shape capabilities",
            "Suitable for indoor and sheltered outdoor use",
            "Ready-to-install with multiple fixing options"
        ],
        detailedDescription: "Foamex (PVC foam board) offers the perfect balance of quality, durability, and value for professional indoor signage and displays. This versatile, lightweight material provides a smooth, flat surface that showcases your graphics with exceptional clarity and color vibrancy.\n\nWe direct-print onto Foamex using state-of-the-art UV flatbed printing technology, creating a finish that is scratch-resistant and long-lasting without requiring additional lamination. The rigid yet lightweight nature of Foamex makes it ideal for wall-mounted displays, exhibition graphics, point-of-sale signage, and interior wayfinding systems.\n\nAvailable in thicknesses from 3mm (ideal for temporary displays) to 10mm (for maximum durability), Foamex can be precisely cut to any shape or size, including custom contours and rounded corners. We can also provide various finishing options including drill holes, standoffs for floating wall displays, or freestanding mounts for counter displays, giving you a complete, ready-to-install signage solution.",
        specifications: [
            {
                name: "Material",
                value: "Expanded PVC foam board (Foamex/Forex)"
            },
            {
                name: "Thickness Options",
                value: "3mm, 5mm, 10mm (other thicknesses available on request)"
            },
            {
                name: "Standard Sizes",
                value: "A0, A1, A2, A3, 2'\xd73', 4'\xd72', 4'\xd78', Custom sizes up to 2440mm \xd7 1220mm"
            },
            {
                name: "Print Technology",
                value: "Direct UV flatbed printing with light-fast inks"
            },
            {
                name: "Resolution",
                value: "Up to 1200dpi for photographic quality reproduction"
            },
            {
                name: "Color Profile",
                value: "Full CMYK + White ink capability for colored boards"
            },
            {
                name: "Finishing Options",
                value: "Cut to shape, rounded corners, drill holes, standoffs, edge capping"
            },
            {
                name: "Durability",
                value: "2-3 years indoor, 6-12 months in sheltered outdoor environments"
            },
            {
                name: "Fire Rating",
                value: "Available with Class 1 fire rating (FR grade) on request"
            },
            {
                name: "Minimum Order",
                value: "No minimum - single board printing available"
            },
            {
                name: "Turnaround Time",
                value: "2-3 business days standard (express service available)"
            }
        ],
        applications: [
            "Exhibition and trade show displays",
            "Interior signage and wayfinding",
            "Retail point-of-sale displays",
            "Museum and gallery information boards",
            "Office branding and corporate signage",
            "Menu boards and price displays",
            "Promotional displays and standees",
            "Architectural presentation boards"
        ],
        models: [
            {
                name: "3mm Foamex",
                description: "Lightweight option ideal for temporary indoor displays",
                features: [
                    "Slimmest and most economical option",
                    "Easy to cut and install",
                    "Suitable for short to medium-term use",
                    "Ideal for mounting with double-sided tape or adhesive"
                ],
                recommendedFor: "Temporary exhibitions, short-term promotions, smaller format displays, budget-conscious projects"
            },
            {
                name: "5mm Foamex",
                description: "Our most popular thickness balancing durability and cost",
                features: [
                    "Excellent rigidity-to-weight ratio",
                    "Resistant to warping and bending",
                    "Suitable for most indoor applications",
                    "Multiple mounting options including standoffs"
                ],
                recommendedFor: "Medium to long-term displays, retail environments, exhibition panels, wall-mounted signage"
            },
            {
                name: "10mm Foamex",
                description: "Maximum durability for premium displays and long-term use",
                features: [
                    "Superior rigidity for larger format displays",
                    "Enhanced resistance to impact and damage",
                    "Premium feel with substantial edge profile",
                    "Self-standing capability for some designs"
                ],
                recommendedFor: "Premium displays, long-term installations, freestanding displays, environments with high traffic or handling"
            },
            {
                name: "Custom Shaped Foamex",
                description: "Precision-cut to your unique design for maximum visual impact",
                features: [
                    "Available in all thickness options",
                    "Computer-controlled cutting for precise results",
                    "Complex shapes and contours possible",
                    "Ideal for branded displays and creative installations"
                ],
                recommendedFor: "Brand mascots, logo-shaped signage, creative retail displays, museum exhibits, architectural features"
            }
        ],
        images: [
            "/css-placeholder-image",
            "/css-placeholder-image",
            "/css-placeholder-image",
            "/css-placeholder-image"
        ],
        imageSrc: "/css-placeholder-image",
        price: "Starting at €25 per board",
        quoteRequired: false,
        leadTime: "2-3 business days standard",
        faq: [
            {
                question: "Is Foamex suitable for outdoor use?",
                answer: "Foamex is primarily designed for indoor use but can withstand short-term outdoor placement in sheltered conditions. For permanent outdoor installation, we recommend our Dibond aluminum composite or Correx fluted polypropylene options which offer superior weather resistance. If you need Foamex for outdoor use, the 10mm thickness with edge sealing will provide the best durability."
            },
            {
                question: "How do I mount Foamex boards to walls?",
                answer: "There are several methods for mounting Foamex: 1) Double-sided foam tape or Velcro for temporary or lightweight installations; 2) Mirror plates or stand-off fixings for a more permanent, professional finish; 3) Panel clips specifically designed for PVC boards; 4) Construction adhesive for permanent bonding to flat surfaces. We can pre-drill mounting holes or supply appropriate fixings for your specific installation needs."
            },
            {
                question: "What thickness of Foamex should I choose?",
                answer: "The ideal thickness depends on size and application: 3mm is suitable for smaller displays (up to A2) or temporary installations; 5mm is our most versatile option, providing good rigidity for most medium-sized boards (up to 4'\xd72'); 10mm is recommended for larger boards, freestanding displays, or installations requiring maximum durability. For specific advice on your project, our team is happy to recommend the most suitable option."
            },
            {
                question: "Can Foamex be used for creating 3D or raised lettering?",
                answer: "Yes, Foamex is excellent for creating dimensional signage. We can produce layered or stacked lettering by cutting multiple pieces and bonding them together, or create raised elements on a flat background. The material cuts cleanly with precise edges and can be shaped into virtually any design. For more complex 3D requirements, we can combine different thicknesses to create depth and visual interest."
            },
            {
                question: "How does Foamex compare to other sign materials?",
                answer: "Foamex offers an excellent balance of quality and value. Compared to corrugated plastic (Correx), it provides a smoother finish and more professional appearance. Compared to aluminum composite (Dibond), it's more economical but less weather-resistant. Foamex is lighter than acrylic but more durable than foam board with paper faces. It's ideal when you need a professional finish for indoor use without the premium cost of materials like acrylic or aluminum."
            }
        ]
    },
    {
        id: "correx-boards",
        name: "Correx Fluted Boards",
        category: "Wide Format",
        description: "Weather-resistant corrugated polypropylene boards for durable outdoor signage, ideal for elections, construction, real estate, and temporary displays.",
        features: [
            "Ultra-lightweight yet highly durable material",
            "Waterproof and weather-resistant construction",
            "Available in 2mm to 8mm thicknesses",
            "Direct UV printing for outdoor durability",
            "Cost-effective for large quantity orders",
            "Easy installation with multiple mounting options"
        ],
        detailedDescription: "Correx (also known as Corriboard or corrugated plastic) is the perfect solution for cost-effective outdoor signage and displays that need to withstand challenging weather conditions. This twin-wall fluted polypropylene material offers excellent durability, waterproof properties, and UV resistance at a fraction of the cost of other outdoor signage options.\n\nOur Correx boards are direct-printed using UV-stable inks that bond with the plastic surface, creating weather-resistant graphics that won't fade, crack, or peel even with extended outdoor exposure. The corrugated structure provides surprising strength despite its lightweight nature, making it perfect for site boards, election signs, estate agent boards, and outdoor event signage.\n\nAvailable in thicknesses from 2mm (ideal for smaller temporary signs) to 8mm (for maximum durability), Correx can be cut to any shape or size and installed using various methods including cable ties, screws, nails, or stake mounts. We can provide pre-drilled holes, H-stakes, or wire frame mounts to create complete ready-to-deploy signage systems for your specific application.",
        specifications: [
            {
                name: "Material",
                value: "Twin-wall fluted polypropylene (Correx/Corriboard)"
            },
            {
                name: "Thickness Options",
                value: "2mm, 3mm, 4mm, 5mm, 8mm (standard is 4mm)"
            },
            {
                name: "Standard Sizes",
                value: "A0, A1, A2, 600mm\xd7450mm, 800mm\xd7600mm, 1220mm\xd7813mm, Custom sizes up to 2440mm\xd71220mm"
            },
            {
                name: "Print Technology",
                value: "Direct UV flatbed printing with outdoor-grade inks"
            },
            {
                name: "Color Options",
                value: "Full-color CMYK printing, white ink available for colored boards"
            },
            {
                name: "Board Colors",
                value: "White standard, also available in black, yellow, blue (min. quantities apply)"
            },
            {
                name: "Weather Resistance",
                value: "Waterproof, UV-resistant, -20\xb0C to +80\xb0C temperature tolerance"
            },
            {
                name: "Expected Outdoor Lifespan",
                value: "6-24 months depending on conditions and thickness"
            },
            {
                name: "Finishing Options",
                value: "Cut to shape, rounded corners, drill holes, stake slots, eyelets"
            },
            {
                name: "Minimum Order",
                value: "No minimum for standard white boards, MOQ 10 for colored boards"
            },
            {
                name: "Bulk Discounts",
                value: "Significant price breaks at 10, 25, 50, 100+ units"
            }
        ],
        applications: [
            "Election and political campaign signs",
            "Construction site safety information",
            "Real estate and property signage",
            "Outdoor event directional signage",
            "Temporary parking and traffic management",
            "Retail pavement and promotional signs",
            "Agricultural field markers",
            "Festival and event announcements"
        ],
        models: [
            {
                name: "Standard 4mm Correx",
                description: "Our most popular option balancing durability and value",
                features: [
                    "Versatile 4mm twin-wall fluted polypropylene",
                    "Ideal for most outdoor applications",
                    "Full-color UV printing on white substrate",
                    "Pre-drilled corner holes included if requested"
                ],
                recommendedFor: "Election signs, real estate boards, construction site information, outdoor events"
            },
            {
                name: "Lightweight 2mm/3mm Correx",
                description: "Economical option for short-term or high-volume needs",
                features: [
                    "Ultra-lightweight 2mm or 3mm construction",
                    "Most economical option for large quantities",
                    "Suitable for sheltered outdoor or indoor use",
                    "Ideal for cable-tie or adhesive mounting"
                ],
                recommendedFor: "Indoor displays, short-term promotions, lightweight ceiling-hung signs, high-volume campaigns"
            },
            {
                name: "Heavy-Duty 5mm/8mm Correx",
                description: "Maximum durability for long-term outdoor installations",
                features: [
                    "Enhanced rigidity and wind resistance",
                    "Superior performance in exposed locations",
                    "Reinforced edge options available",
                    "Suitable for larger format applications"
                ],
                recommendedFor: "Long-term outdoor signage, exposed locations, larger format displays, premium property signs"
            },
            {
                name: "Staked Correx System",
                description: "Complete ready-to-install lawn and ground signage",
                features: [
                    "Includes metal H-stakes or wire frames",
                    "Pre-cut stake slots for easy assembly",
                    "Available in all thickness options",
                    "Double or single-sided printing options"
                ],
                recommendedFor: "Election campaigns, real estate yard signs, directional signage, event announcements"
            }
        ],
        images: [
            "/css-placeholder-image",
            "/css-placeholder-image",
            "/css-placeholder-image",
            "/css-placeholder-image"
        ],
        imageSrc: "/css-placeholder-image",
        price: "Starting at €15 per board",
        quoteRequired: false,
        leadTime: "1-3 business days standard",
        faq: [
            {
                question: "How long will Correx signs last outdoors?",
                answer: "With our UV-stable direct printing, Correx signs typically last 6-24 months in full outdoor conditions, depending on thickness and environmental factors. Standard 4mm signs maintain good appearance for about 12 months in average conditions. The 8mm heavy-duty option can last 18-24 months. The material itself is highly durable; it's usually the print that shows weathering first in the form of gradual fading from intense UV exposure."
            },
            {
                question: "What's the best way to install Correx signs?",
                answer: "There are several effective methods: 1) H-stakes or wire frames for lawn/ground installation; 2) Cable ties through pre-drilled holes for fence or post mounting; 3) Screws with washers for wall mounting; 4) Strong double-sided tape or hook-and-loop fasteners for temporary indoor use. We can pre-drill holes, add eyelets, or include stake slots to facilitate your preferred mounting method. For election campaigns and real estate applications, we offer complete sign systems with appropriate hardware."
            },
            {
                question: "Can I print on both sides of the Correx board?",
                answer: "Yes, double-sided printing is available on all Correx boards. For standard applications, we use opaque white board with separate prints on each side. For premium double-sided signs, we use a heavier board (minimum 4mm recommended) to prevent show-through. Double-sided printing is particularly popular for election signs, directional signage, and real estate boards where visibility from multiple directions is important."
            },
            {
                question: "What quantity discounts are available for Correx signs?",
                answer: "We offer significant price breaks at quantities of 10, 25, 50, and 100+ units of the same design. For election campaigns, political parties, and large real estate agencies, we offer special campaign packages that include various sizes and designs within the same order. For ongoing needs, we can set up custom pricing agreements to ensure you always receive the best value for your signage program."
            },
            {
                question: "Is Correx environmentally friendly?",
                answer: "Correx is made from polypropylene, which is recyclable (recycling code 5). While it's a plastic product, it uses significantly less material than solid plastic alternatives due to its twin-wall fluted structure. For clients with strong environmental priorities, we offer collection and recycling services for used signs (minimum quantities apply), or guidance on local recycling options. For short-term indoor applications where outdoor durability isn't required, we also offer eco-friendly alternatives like cardboard display board."
            }
        ]
    }
];
// Helper function to get a product by its ID/slug
const getProductBySlug = (slug)=>{
    return products.find((product)=>product.id === slug);
};
// Helper to get products by category
const getProductsByCategory = (category)=>{
    return products.filter((product)=>product.category === category);
};
// Helper to get related products (same category, excluding the current product)
const getRelatedProducts = (productId, limit = 3)=>{
    const currentProduct = getProductBySlug(productId);
    if (!currentProduct) return [];
    return products.filter((product)=>product.category === currentProduct.category && product.id !== productId).slice(0, limit);
};
// Export the products array as default
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);


/***/ }),

/***/ 366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1637);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4345);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__]);
_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// ProductCard component for rendering each product in the grid
const ProductCard = ({ product })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: `/products/${product.id}`,
        className: "block",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative h-56",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: product.imageSrc,
                        alt: product.name,
                        fill: true,
                        className: "object-cover group-hover:scale-105 transition-transform duration-300"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-sm text-blue-600 font-medium",
                            children: product.category
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "font-bold text-lg mt-1",
                            children: product.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-2 text-gray-600 line-clamp-2",
                            children: product.description
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-4 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-blue-600 font-medium",
                                    children: "View Details"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const ProductsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Products - PrintNPack Premium Packaging Solutions"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Explore PrintNPack's range of premium packaging solutions including food containers, retail bags, marketing materials and more."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute inset-0 bg-particles opacity-20"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-4xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-4xl md:text-5xl font-bold mb-4",
                                    children: "Our Product Range"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xl mb-8",
                                    children: "High-quality packaging solutions designed to help your business stand out"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-24 h-1 bg-white mx-auto rounded"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-gray-100 py-4 border-b border-gray-200",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-wrap items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-lg font-medium text-gray-700 mb-2 md:mb-0",
                                children: [
                                    "Showing all ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-blue-700",
                                        children: _data_products__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP.length
                                    }),
                                    " products"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex space-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-gray-600",
                                        children: "Sort by:"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        className: "bg-white border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                children: "Popularity"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                children: "Newest first"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                children: "Price: Low to high"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                children: "Price: High to low"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto px-4 py-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: _data_products__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductCard, {
                            product: product
                        }, product.id))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mx-auto px-4 text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-3xl font-bold mb-4",
                            children: "Need a Custom Packaging Solution?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-xl mb-8 max-w-3xl mx-auto",
                            children: "We specialize in creating custom packaging solutions tailored to your specific requirements."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/contact",
                            className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition duration-200",
                            children: "Contact Our Design Team"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 9650:
/***/ ((module) => {

module.exports = import("react-icons/bs");;

/***/ }),

/***/ 1301:
/***/ ((module) => {

module.exports = import("react-icons/fa");;

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("react-icons/io5");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,196,664,636,675,4,637], () => (__webpack_exec__(5034)));
module.exports = __webpack_exports__;

})();