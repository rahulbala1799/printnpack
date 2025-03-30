"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,660];
exports.modules = {

/***/ 6030:
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
/* harmony import */ var private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4009);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1301);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__, react_icons_fa__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__, react_icons_fa__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// Card with 3D hover effect
const FeatureCard = ({ icon: Icon, title, description, color, delay })=>{
    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({
        threshold: 0.2,
        triggerOnce: true
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (inView) {
            controls.start("visible");
        }
    }, [
        controls,
        inView
    ]);
    const variants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: delay * 0.1,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        ref: ref,
        initial: "hidden",
        animate: controls,
        variants: variants,
        className: "perspective-1000",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            className: `bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center h-full ${isHovered ? "shadow-xl" : ""}`,
            onHoverStart: ()=>setIsHovered(true),
            onHoverEnd: ()=>setIsHovered(false),
            whileHover: {
                rotateX: 5,
                rotateY: 5,
                scale: 1.05,
                transition: {
                    duration: 0.4
                }
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative mb-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `w-20 h-20 mx-auto rounded-full flex items-center justify-center ${color} transition-all duration-300`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                animate: isHovered ? {
                                    scale: 1.1,
                                    rotate: 5
                                } : {
                                    scale: 1,
                                    rotate: 0
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                    size: 32,
                                    className: "text-white"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                            className: `absolute inset-0 rounded-full ${color} opacity-30`,
                            animate: {
                                scale: [
                                    1,
                                    1.2,
                                    1
                                ],
                                opacity: [
                                    0.3,
                                    0.1,
                                    0.3
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-xl font-bold mb-3 text-gray-900",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-gray-600 mb-4",
                    children: description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                    className: "inline-block",
                    whileHover: {
                        x: 4
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/about",
                        className: `font-medium text-blue-600 inline-flex items-center group`,
                        children: [
                            "Learn more",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {
                                className: "ml-1",
                                animate: isHovered ? {
                                    x: 3
                                } : {
                                    x: 0
                                },
                                transition: {
                                    duration: 0.2
                                },
                                children: "→"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
// Main component
const AboutUs = ()=>{
    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({
        threshold: 0.1,
        triggerOnce: true
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (inView) {
            controls.start("visible");
        }
    }, [
        controls,
        inView
    ]);
    const features = [
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaBox,
            title: "Low MOQ",
            description: "Custom printed packaging with minimums as low as 100 units, making professional packaging accessible to all businesses.",
            color: "bg-blue-600",
            delay: 0
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaShippingFast,
            title: "Fast Turnaround",
            description: "Industry-leading 7-day standard turnaround with express options available for urgent packaging needs.",
            color: "bg-amber-500",
            delay: 1
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaRegCalendarCheck,
            title: "Weekly Deliveries",
            description: "Our unique weekly delivery service helps you manage inventory while ensuring you never run out of packaging.",
            color: "bg-purple-600",
            delay: 2
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaLeaf,
            title: "Eco-Friendly",
            description: "Sustainable materials and production processes that reduce environmental impact without compromising quality.",
            color: "bg-green-600",
            delay: 3
        }
    ];
    const products = [
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaPizzaSlice,
            label: "Pizza Boxes"
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaShoppingBag,
            label: "Paper Bags"
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaHamburger,
            label: "Burger Boxes"
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaRecycle,
            label: "Eco Materials"
        }
    ];
    const headingVariants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const textVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut"
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "py-20 relative overflow-hidden bg-gradient-to-b from-white via-white to-blue-50",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full -mr-64 -mt-64 opacity-20 animate-blob"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-100 rounded-full -ml-64 -mb-64 opacity-20 animate-blob animation-delay-2000"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-100 rounded-full opacity-20 animate-blob animation-delay-4000"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hidden md:block absolute inset-0 pointer-events-none z-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute bottom-10 left-10 w-64 h-64 bg-green-100 rounded-full opacity-20"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-1/3 right-1/4 w-48 h-48 bg-purple-100 rounded-full opacity-15"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-2/3 left-1/5 w-48 h-48 bg-yellow-100 rounded-full opacity-15"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto px-4 relative z-10 mb-16",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-wrap justify-center items-center -mx-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full md:w-1/2 px-4 mb-8 md:mb-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: -50
                                },
                                animate: controls,
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.8,
                                            delay: 0.3
                                        }
                                    }
                                },
                                className: "rounded-xl overflow-hidden shadow-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full h-80 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg flex items-center justify-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-blue-800 text-xl font-semibold",
                                        children: "Premium Packaging Solutions"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full md:w-1/2 px-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: controls,
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.5
                                        }
                                    }
                                },
                                className: "bg-white p-6 rounded-xl shadow-lg border border-gray-100",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-2xl font-bold text-blue-800 mb-4",
                                        children: "Premium Quality Materials"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-gray-700 mb-6",
                                        children: "Our packaging solutions are crafted from the highest quality materials, ensuring durability, presentation excellence, and environmental responsibility for your products. Experience the difference that premium packaging makes in customer perception."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-wrap -mx-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-1/2 px-2 mb-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full h-32 bg-gradient-to-r from-green-100 to-green-300 rounded-lg flex items-center justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-green-800 text-sm font-medium",
                                                        children: "Eco-Friendly"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-1/2 px-2 mb-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full h-32 bg-gradient-to-r from-amber-100 to-amber-300 rounded-lg flex items-center justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-amber-800 text-sm font-medium",
                                                        children: "Premium Quality"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/products",
                                        className: "inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300",
                                        children: "Explore Our Products"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-aee8fb468d9a67ee" + " " + "container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: ref,
                        className: "jsx-aee8fb468d9a67ee" + " " + "text-center mb-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                initial: "hidden",
                                animate: controls,
                                variants: headingVariants,
                                className: "inline-block mb-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "jsx-aee8fb468d9a67ee" + " " + "text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent",
                                    children: "About PrintNPack"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                initial: "hidden",
                                animate: controls,
                                variants: textVariants,
                                className: "max-w-3xl mx-auto",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "jsx-aee8fb468d9a67ee" + " " + "text-lg text-gray-700 mb-8",
                                    children: [
                                        "Ireland's premier packaging specialist, delivering high-quality printed",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-aee8fb468d9a67ee" + " " + "font-semibold text-blue-800",
                                            children: " pizza boxes"
                                        }),
                                        ",",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-aee8fb468d9a67ee" + " " + "font-semibold text-blue-800",
                                            children: " paper bags"
                                        }),
                                        ", and",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-aee8fb468d9a67ee" + " " + "font-semibold text-blue-800",
                                            children: " burger boxes"
                                        }),
                                        " with industry-leading turnaround times and low minimum order quantities."
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-aee8fb468d9a67ee" + " " + "flex flex-wrap justify-center gap-8 mb-12",
                                children: products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.8
                                        },
                                        animate: controls,
                                        variants: {
                                            visible: {
                                                opacity: 1,
                                                scale: 1,
                                                transition: {
                                                    delay: 0.3 + index * 0.1,
                                                    duration: 0.5
                                                }
                                            }
                                        },
                                        whileHover: {
                                            scale: 1.1
                                        },
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-aee8fb468d9a67ee" + " " + "w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2 shadow-md",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(product.icon, {
                                                    size: 28,
                                                    className: "text-blue-600"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-aee8fb468d9a67ee" + " " + "text-sm font-medium text-gray-800",
                                                children: product.label
                                            })
                                        ]
                                    }, index))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: controls,
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: 0.5,
                                            duration: 0.6
                                        }
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/about",
                                    className: "inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1",
                                    children: "Discover Our Story"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-aee8fb468d9a67ee" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8",
                        children: features.map((feature, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeatureCard, {
                                ...feature
                            }, index))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        className: "mt-16 text-center",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: controls,
                        variants: {
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.8,
                                    duration: 0.6
                                }
                            }
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-aee8fb468d9a67ee" + " " + "inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-aee8fb468d9a67ee" + " " + "font-bold text-blue-800",
                                    children: "100% Irish Owned & Operated"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-aee8fb468d9a67ee" + " " + "mx-2 text-blue-400",
                                    children: "•"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-aee8fb468d9a67ee" + " " + "text-blue-700",
                                    children: "Proudly serving businesses across Ireland"
                                })
                            ]
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "aee8fb468d9a67ee",
                        children: "@-webkit-keyframes blob{0%{-webkit-transform:translate(0px,0px)scale(1);transform:translate(0px,0px)scale(1)}33%{-webkit-transform:translate(30px,-50px)scale(1.1);transform:translate(30px,-50px)scale(1.1)}66%{-webkit-transform:translate(-20px,20px)scale(.9);transform:translate(-20px,20px)scale(.9)}100%{-webkit-transform:translate(0px,0px)scale(1);transform:translate(0px,0px)scale(1)}}@-moz-keyframes blob{0%{-moz-transform:translate(0px,0px)scale(1);transform:translate(0px,0px)scale(1)}33%{-moz-transform:translate(30px,-50px)scale(1.1);transform:translate(30px,-50px)scale(1.1)}66%{-moz-transform:translate(-20px,20px)scale(.9);transform:translate(-20px,20px)scale(.9)}100%{-moz-transform:translate(0px,0px)scale(1);transform:translate(0px,0px)scale(1)}}@-o-keyframes blob{0%{-o-transform:translate(0px,0px)scale(1);transform:translate(0px,0px)scale(1)}33%{-o-transform:translate(30px,-50px)scale(1.1);transform:translate(30px,-50px)scale(1.1)}66%{-o-transform:translate(-20px,20px)scale(.9);transform:translate(-20px,20px)scale(.9)}100%{-o-transform:translate(0px,0px)scale(1);transform:translate(0px,0px)scale(1)}}@keyframes blob{0%{-webkit-transform:translate(0px,0px)scale(1);-moz-transform:translate(0px,0px)scale(1);-o-transform:translate(0px,0px)scale(1);transform:translate(0px,0px)scale(1)}33%{-webkit-transform:translate(30px,-50px)scale(1.1);-moz-transform:translate(30px,-50px)scale(1.1);-o-transform:translate(30px,-50px)scale(1.1);transform:translate(30px,-50px)scale(1.1)}66%{-webkit-transform:translate(-20px,20px)scale(.9);-moz-transform:translate(-20px,20px)scale(.9);-o-transform:translate(-20px,20px)scale(.9);transform:translate(-20px,20px)scale(.9)}100%{-webkit-transform:translate(0px,0px)scale(1);-moz-transform:translate(0px,0px)scale(1);-o-transform:translate(0px,0px)scale(1);transform:translate(0px,0px)scale(1)}}.animate-blob{-webkit-animation:blob 7s infinite;-moz-animation:blob 7s infinite;-o-animation:blob 7s infinite;animation:blob 7s infinite}.animation-delay-2000{-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.animation-delay-4000{-webkit-animation-delay:4s;-moz-animation-delay:4s;-o-animation-delay:4s;animation-delay:4s}.perspective-1000{-webkit-perspective:1e3px;-moz-perspective:1e3px;perspective:1e3px}"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




const CTA = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "py-16 bg-blue-900 text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute inset-0 z-0 opacity-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute inset-0 bg-grid-pattern opacity-50"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-950"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-950 to-transparent"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-blue-950 to-transparent"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto px-4 relative z-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col md:flex-row items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "md:w-1/2 text-center md:text-left mb-10 md:mb-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-3xl md:text-4xl font-bold mb-6",
                                    children: "Ready to Transform Your Packaging Experience?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xl mb-10 max-w-xl",
                                    children: "Our premium packaging solutions are designed to elevate your brand and create a memorable experience for your customers."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/contact",
                                            className: "bg-white text-blue-900 px-8 py-4 rounded-lg font-medium hover:bg-blue-100 transition duration-300 shadow-glow hover:scale-105 transform",
                                            children: "Get a Custom Quote"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/products",
                                            className: "border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition duration-300 hover:scale-105 transform",
                                            children: "Browse Products"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "md:w-1/2 md:pl-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative bg-blue-800 rounded-xl p-6 shadow-2xl",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-blue-700/50 rounded-lg p-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-3",
                                            children: "Premium Quality"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-white text-xl font-bold mb-4",
                                            children: "Award-Winning Packaging Solutions"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "space-y-2 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "flex items-start text-white",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            className: "h-5 w-5 text-blue-300 mr-2 mt-0.5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                clipRule: "evenodd"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Eco-friendly materials"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "flex items-start text-white",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            className: "h-5 w-5 text-blue-300 mr-2 mt-0.5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                clipRule: "evenodd"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Custom branding solutions"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "flex items-start text-white",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            className: "h-5 w-5 text-blue-300 mr-2 mt-0.5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                clipRule: "evenodd"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Fast turnaround times"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CTA);


/***/ }),

/***/ 4752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ImagePositions = {
    header: [
        {
            src: "/images/ifa/heroh/1.png",
            className: "absolute top-10 -right-20 w-64 opacity-20 hidden lg:block",
            alt: "Decorative packaging 1"
        },
        {
            src: "/images/ifa/heroh/2.png",
            className: "absolute -bottom-10 -left-16 w-48 opacity-15 hidden lg:block",
            alt: "Decorative packaging 2"
        }
    ],
    section1: [
        {
            src: "/images/ifa/heroh/3.png",
            className: "absolute top-1/4 -left-10 w-40 opacity-15 hidden lg:block",
            alt: "Decorative packaging 3"
        },
        {
            src: "/images/ifa/heroh/4.png",
            className: "absolute bottom-20 -right-16 w-56 opacity-20 hidden lg:block",
            alt: "Decorative packaging 4"
        }
    ],
    section2: [
        {
            src: "/images/ifa/heroh/5.png",
            className: "absolute top-10 -right-24 w-60 opacity-15 hidden lg:block",
            alt: "Decorative packaging 5"
        },
        {
            src: "/images/ifa/heroh/6.png",
            className: "absolute -bottom-16 left-10 w-44 opacity-20 hidden lg:block",
            alt: "Decorative packaging 6"
        }
    ],
    footer: [
        {
            src: "/images/ifa/heroh/7.png",
            className: "absolute top-1/3 -left-16 w-52 opacity-20 hidden lg:block",
            alt: "Decorative packaging 7"
        },
        {
            src: "/images/ifa/heroh/8.png",
            className: "absolute -bottom-10 -right-10 w-48 opacity-15 hidden lg:block",
            alt: "Decorative packaging 8"
        }
    ]
};
const DecorativeImages = ({ position = "header" })=>{
    // Select images based on the position prop
    const images = ImagePositions[position] || [];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative overflow-hidden",
        children: images.map((img, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                className: img.className,
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.7,
                    delay: index * 0.2
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: img.src,
                    alt: img.alt,
                    width: 500,
                    height: 500,
                    style: {
                        objectFit: "contain",
                        width: "100%",
                        height: "auto"
                    }
                })
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecorativeImages);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const DesignServices = ()=>{
    const [hoveredService, setHoveredService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const designServices = [
        {
            id: "posters",
            title: "Posters",
            description: "Eye-catching posters that demand attention and convey your message with impact.",
            image: "/images/ifa/heroh/2.png",
            color: "from-fuchsia-600 to-violet-800",
            accentColor: "#FF00FF",
            textColor: "text-white",
            pattern: "radial-gradient(circle, rgba(255,0,255,0.3) 2px, transparent 2px)",
            patternSize: "20px 20px"
        },
        {
            id: "vinyls",
            title: "Vinyls",
            description: "Premium vinyl stickers and graphics for branding that sticks with your customers.",
            image: "/images/ifa/heroh/3.png",
            color: "from-cyan-500 to-blue-700",
            accentColor: "#00FFFF",
            textColor: "text-white",
            pattern: "linear-gradient(45deg, rgba(0,255,255,0.3) 25%, transparent 25%, transparent 50%, rgba(0,255,255,0.3) 50%, rgba(0,255,255,0.3) 75%, transparent 75%, transparent)",
            patternSize: "20px 20px"
        },
        {
            id: "leaflets",
            title: "Leaflets",
            description: "Professional leaflets that put your information directly into customers' hands.",
            image: "/images/ifa/heroh/leaflet.png",
            color: "from-lime-500 to-green-700",
            accentColor: "#ADFF2F",
            textColor: "text-white",
            pattern: "repeating-linear-gradient(0deg, rgba(173,255,47,0.2), rgba(173,255,47,0.2) 2px, transparent 2px, transparent 4px)",
            patternSize: "20px 20px"
        },
        {
            id: "menus",
            title: "Menus",
            description: "Appetizing menu designs that showcase your offerings and enhance the dining experience.",
            image: "/images/ifa/heroh/5.png",
            color: "from-yellow-500 to-orange-700",
            accentColor: "#FFFF00",
            textColor: "text-white",
            pattern: "repeating-radial-gradient(circle at 0 0, transparent 0, rgba(255,255,0,0.2) 8px), repeating-linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0))",
            patternSize: "20px 20px"
        }
    ];
    // Animation variants
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
    const itemVariants = {
        hidden: {
            y: 30,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    // Custom glitch effect for heading
    const glitchAnimation = {
        hidden: {
            skewX: 0,
            skewY: 0,
            scale: 1
        },
        show: {
            skewX: [
                0,
                -2,
                0,
                2,
                0
            ],
            skewY: [
                0,
                1,
                0,
                -1,
                0
            ],
            scale: [
                1,
                1.02,
                1,
                1.01,
                1
            ],
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut"
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "relative py-20 overflow-hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 bg-black"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
                            backgroundSize: "60px 60px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        className: "absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl",
                        animate: {
                            background: [
                                "radial-gradient(circle, #ff00ff 0%, transparent 70%)",
                                "radial-gradient(circle, #00ffff 0%, transparent 70%)",
                                "radial-gradient(circle, #ffff00 0%, transparent 70%)",
                                "radial-gradient(circle, #ff00ff 0%, transparent 70%)"
                            ]
                        },
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        className: "absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl",
                        animate: {
                            background: [
                                "radial-gradient(circle, #00ffff 0%, transparent 70%)",
                                "radial-gradient(circle, #ffff00 0%, transparent 70%)",
                                "radial-gradient(circle, #ff00ff 0%, transparent 70%)",
                                "radial-gradient(circle, #00ffff 0%, transparent 70%)"
                            ]
                        },
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 2
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        className: "absolute top-20 left-10 w-20 h-20 opacity-40 hidden lg:block",
                        initial: {
                            y: 0
                        },
                        animate: {
                            y: [
                                0,
                                -15,
                                0
                            ],
                            filter: [
                                "hue-rotate(0deg)",
                                "hue-rotate(90deg)",
                                "hue-rotate(180deg)",
                                "hue-rotate(270deg)",
                                "hue-rotate(360deg)"
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 5,
                            ease: "easeInOut"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 200 200",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "#00FFFF",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M45.4,-52.9C58.9,-39.1,70.3,-25.2,74.3,-9C78.3,7.2,74.9,25.8,64.4,38.7C53.9,51.7,36.3,59.1,18.1,66.2C-0.2,73.3,-18.9,80.1,-33.9,74.9C-48.9,69.6,-60.1,52.2,-70.3,33.3C-80.6,14.4,-89.9,-6,-86.9,-24.4C-83.9,-42.8,-68.7,-59.3,-51,-69.3C-33.3,-79.3,-13.1,-82.8,2.9,-86.3C19,-89.7,31.9,-66.8,45.4,-52.9Z",
                                transform: "translate(100 100)"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        className: "absolute bottom-20 right-10 w-24 h-24 opacity-40 hidden lg:block",
                        initial: {
                            rotate: 0
                        },
                        animate: {
                            rotate: 360,
                            filter: [
                                "hue-rotate(0deg)",
                                "hue-rotate(120deg)",
                                "hue-rotate(240deg)",
                                "hue-rotate(360deg)"
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 200 200",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "#FF00FF",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M44.3,-65.2C53.2,-55.1,53.2,-36.6,53.2,-21.6C53.2,-6.6,53.5,5,53.9,20.8C54.3,36.5,54.9,56.4,45.9,66.5C36.8,76.6,18.1,76.9,0.9,76.1C-16.3,75.3,-32.6,73.4,-46.6,64.9C-60.5,56.3,-71.7,41.1,-73.9,25.2C-76.1,9.3,-69.3,-7.2,-63.8,-23.9C-58.3,-40.5,-54.2,-57.3,-43.5,-66.5C-32.7,-75.8,-15.9,-77.4,0.5,-78.5C18,-79.5,35.2,-75.3,44.1,-65.2Z",
                                transform: "translate(100 100)"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        className: "absolute top-1/2 left-1/3 w-16 h-16 opacity-40 hidden lg:block",
                        animate: {
                            scale: [
                                1,
                                1.2,
                                1
                            ],
                            rotateZ: [
                                0,
                                10,
                                -10,
                                0
                            ],
                            filter: [
                                "hue-rotate(0deg)",
                                "hue-rotate(180deg)",
                                "hue-rotate(360deg)"
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 8,
                            ease: "easeInOut"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 200 200",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "#FFFF00",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M39.5,-63.4C49.3,-56.9,54.3,-42.6,59.8,-29.1C65.4,-15.6,71.4,-2.8,70.4,9.2C69.4,21.2,61.3,32.5,51.3,41.3C41.3,50.1,29.5,56.4,16.5,61.2C3.5,65.9,-10.8,69,-24.5,66.7C-38.2,64.4,-51.3,56.7,-60.4,45.1C-69.4,33.5,-74.4,18,-73.3,3.3C-72.2,-11.4,-64.9,-25.4,-55.3,-36.3C-45.7,-47.3,-33.7,-55.2,-21.1,-59.6C-8.5,-64,-2.1,-65,7.8,-77.1C17.7,-89.3,29.7,-112.5,39.5,-63.4Z",
                                transform: "translate(100 100)"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative mb-16 text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                initial: {
                                    scale: 0.9,
                                    opacity: 0
                                },
                                whileInView: {
                                    scale: 1,
                                    opacity: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.7
                                },
                                className: "inline-block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-light text-xl text-white tracking-widest block mb-2",
                                        children: "CREATIVE SOLUTIONS"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {
                                        className: "text-5xl md:text-7xl font-bold mb-3 relative",
                                        variants: glitchAnimation,
                                        initial: "hidden",
                                        animate: "show",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "bg-clip-text text-transparent bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#FFFF00]",
                                                children: "DESIGN SERVICES"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {
                                                className: "absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#FFFF00]",
                                                initial: {
                                                    width: 0,
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    width: "100%",
                                                    opacity: 1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    delay: 0.5,
                                                    duration: 0.6
                                                }
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {
                                className: "text-lg text-gray-300 max-w-xl mx-auto mt-4",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: 0.3,
                                    duration: 0.6
                                },
                                children: "We blend creativity with strategy to design materials that capture attention and communicate your message at affordable prices."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
                        variants: containerVariants,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: true
                        },
                        children: designServices.map((service)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                variants: itemVariants,
                                className: "relative rounded-xl overflow-hidden group cursor-pointer perspective",
                                style: {
                                    height: "28rem"
                                },
                                onMouseEnter: ()=>setHoveredService(service.id),
                                onMouseLeave: ()=>setHoveredService(null),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                    className: "w-full h-full relative",
                                    animate: hoveredService === service.id ? {
                                        rotateX: [
                                            0,
                                            2,
                                            0
                                        ],
                                        rotateY: [
                                            0,
                                            5,
                                            0
                                        ]
                                    } : {},
                                    transition: {
                                        duration: 0.3
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `absolute inset-0 z-0 bg-gradient-to-br ${service.color} transition-all duration-500 ${hoveredService === service.id ? "opacity-100" : "opacity-95"}`,
                                            style: {
                                                backgroundImage: service.pattern,
                                                backgroundSize: service.patternSize
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute inset-[3px] rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                            style: {
                                                boxShadow: `0 0 15px ${service.accentColor}, inset 0 0 15px ${service.accentColor}`,
                                                transition: "opacity 0.5s ease"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute top-0 right-0 w-40 h-40 rounded-full opacity-30 blur-xl transform translate-x-10 -translate-y-10 transition-all duration-500",
                                            style: {
                                                background: `radial-gradient(circle, ${service.accentColor} 0%, transparent 70%)`,
                                                transform: hoveredService === service.id ? "translate(40px, -40px) scale(1.25)" : "translate(40px, -40px) scale(1)"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-20 blur-xl transform -translate-x-10 translate-y-10 transition-all duration-700",
                                            style: {
                                                background: `radial-gradient(circle, ${service.accentColor} 0%, transparent 70%)`,
                                                transform: hoveredService === service.id ? "translate(-40px, 40px) scale(1.25)" : "translate(-40px, 40px) scale(1)"
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-6 transition-all duration-500",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                                    className: "absolute w-48 h-48 rounded-full border-2 opacity-50",
                                                    style: {
                                                        borderColor: service.accentColor
                                                    },
                                                    animate: hoveredService === service.id ? {
                                                        scale: [
                                                            1,
                                                            1.2,
                                                            1
                                                        ],
                                                        opacity: [
                                                            0.5,
                                                            0.7,
                                                            0.5
                                                        ]
                                                    } : {},
                                                    transition: {
                                                        duration: 1.5,
                                                        repeat: Infinity
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                                    className: "relative h-52 w-52 mb-6 transition-transform duration-700 z-20",
                                                    animate: hoveredService === service.id ? {
                                                        scale: 1.1,
                                                        y: -10
                                                    } : {
                                                        scale: 1,
                                                        y: 0
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: service.image,
                                                        alt: service.title,
                                                        fill: true,
                                                        className: "object-contain drop-shadow-xl",
                                                        style: {
                                                            filter: hoveredService === service.id ? `drop-shadow(0 0 12px ${service.accentColor}) brightness(1.2) contrast(1.1)` : "brightness(1.05) contrast(1.05)"
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "bg-black/60 backdrop-blur-sm p-3 rounded-lg max-w-[90%] w-full",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-2xl font-bold relative mb-3 z-20 text-center",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "relative",
                                                                children: [
                                                                    service.title,
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {
                                                                        className: "absolute -bottom-1 left-1/2 h-0.5 transform -translate-x-1/2 origin-center transition-all duration-300",
                                                                        style: {
                                                                            background: service.accentColor
                                                                        },
                                                                        animate: hoveredService === service.id ? {
                                                                            width: "80%"
                                                                        } : {
                                                                            width: "0%"
                                                                        }
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-center text-white mb-4 max-w-xs mx-auto z-20",
                                                            children: service.description
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                                            animate: hoveredService === service.id ? {
                                                                y: 0,
                                                                opacity: 1
                                                            } : {
                                                                y: 10,
                                                                opacity: 0
                                                            },
                                                            transition: {
                                                                duration: 0.3
                                                            },
                                                            className: "z-20 flex justify-center",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                href: "/services",
                                                                className: "px-6 py-2.5 rounded-full backdrop-blur-sm border transition-all duration-300 text-sm font-medium flex items-center",
                                                                style: {
                                                                    borderColor: service.accentColor,
                                                                    backgroundColor: "rgba(0,0,0,0.5)",
                                                                    boxShadow: hoveredService === service.id ? `0 0 10px ${service.accentColor}` : "none"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Learn More"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                        className: "ml-2 w-4 h-4",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, service.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        className: "mt-16 text-center",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.8,
                            duration: 0.6
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative inline-block",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                        className: "absolute inset-0 rounded-lg opacity-70 blur-xl",
                                        style: {
                                            background: "linear-gradient(90deg, #FF00FF, #00FFFF, #FFFF00, #FF00FF)"
                                        },
                                        animate: {
                                            backgroundPosition: [
                                                "0% center",
                                                "200% center"
                                            ],
                                            scale: [
                                                1,
                                                1.05,
                                                1
                                            ],
                                            opacity: [
                                                0.7,
                                                0.9,
                                                0.7
                                            ]
                                        },
                                        transition: {
                                            backgroundPosition: {
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            scale: {
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            },
                                            opacity: {
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            }
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/services#design",
                                        className: "relative inline-flex items-center justify-center bg-black text-white py-3 px-8 rounded-lg font-medium z-10 border border-white/10 shadow-xl",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "View Design Portfolio"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "ml-2 w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {
                                className: "mt-4 text-white",
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: 1,
                                    duration: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xl font-light",
                                        children: "Starting from just "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {
                                        className: "text-2xl font-semibold",
                                        animate: {
                                            color: [
                                                "#FF00FF",
                                                "#00FFFF",
                                                "#FFFF00",
                                                "#FF00FF"
                                            ]
                                        },
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        },
                                        children: "€49"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignServices);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const positionStyles = {
    "top-left": "absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/4",
    "top-right": "absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/4",
    "bottom-left": "absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/4",
    "bottom-right": "absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/4",
    "center-left": "absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2",
    "center-right": "absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
};
const FloatingImages = ({ position = "top-right", size = "md", rotation = 5 })=>{
    // Select image based on position
    const imageIndex = {
        "top-left": "1.png",
        "top-right": "3.png",
        "bottom-left": "5.png",
        "bottom-right": "7.png",
        "center-left": "2.png",
        "center-right": "6.png"
    }[position] || "1.png";
    const imageSrc = `/images/ifa/heroh/${imageIndex}`;
    // Size classes
    const sizeClasses = {
        sm: "w-40 h-40",
        md: "w-60 h-60",
        lg: "w-80 h-80"
    }[size] || "w-60 h-60";
    // Animation for floating effect
    const floatingAnimation = {
        y: [
            0,
            -10,
            0
        ],
        rotate: [
            0,
            rotation,
            0
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${positionStyles[position]} overflow-visible pointer-events-none z-0 hidden lg:block`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            className: `${sizeClasses} opacity-20`,
            animate: floatingAnimation,
            transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: imageSrc,
                alt: "Floating product image",
                width: 300,
                height: 300,
                style: {
                    objectFit: "contain",
                    width: "100%",
                    height: "100%"
                }
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingImages);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const HeroSection = ()=>{
    const slides = [
        {
            title: "Premium Pizza Boxes That Boost Sales",
            subtitle: "Locally sourced packaging that enhances your brand value & customer experience",
            cta: "Get Your Custom Quote Today",
            product: "Pizza Box",
            benefits: [
                "Elevates your product presentation",
                "Boosts perceived value",
                "Enhances customer experience"
            ],
            imageSrc: "/images/ifa/heroh/pizza.png"
        },
        {
            title: "Paper Bags That Close More Sales",
            subtitle: "SAME-DAY PRINTING available - Irish-made bags that turn customers into loyal fans",
            cta: "Request Free Samples Now",
            product: "Paper Bag",
            benefits: [
                "Increases repeat purchases",
                "Strengthens brand perception",
                "Eco-friendly marketing tool"
            ],
            imageSrc: "/images/ifa/heroh/bag.png"
        },
        {
            title: "Sustainable Burger Boxes Customers Love",
            subtitle: "Stand out from competitors with premium eco-friendly packaging",
            cta: "Elevate Your Packaging Today",
            product: "Bagasse Box",
            benefits: [
                "Improves customer perception",
                "Supports your green initiatives",
                "Creates Instagram-worthy presentations"
            ],
            imageSrc: "/images/ifa/heroh/burger.png"
        },
        {
            title: "Marketing Materials That Generate Leads",
            subtitle: "SAME-DAY PRINTING available - Convert prospects into customers with high-impact designs",
            cta: "Boost Your Marketing Now",
            product: "Leaflet",
            benefits: [
                "Increases response rates",
                "Drives store traffic",
                "Boosts campaign ROI"
            ],
            imageSrc: "/images/ifa/heroh/leaflet.png"
        },
        {
            title: "Premium Napkins That Elevate Your Brand",
            subtitle: "SAME-DAY PRINTING available - Turn everyday items into powerful marketing tools",
            cta: "Enhance Your Brand Today",
            product: "Napkin",
            benefits: [
                "Improves customer experience",
                "Reinforces brand identity",
                "Low cost, high impact marketing"
            ],
            imageSrc: "/images/hero/napkin.png"
        }
    ];
    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        x: 0,
        y: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCurrentSlide((prev)=>(prev + 1) % slides.length);
        }, 5000);
        return ()=>clearInterval(interval);
    }, [
        slides.length
    ]);
    // Track mouse position for gradient effect
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleMouseMove = (e)=>{
            // Calculate mouse position as percentage of screen width/height
            const x = e.clientX / window.innerWidth * 100;
            const y = e.clientY / window.innerHeight * 100;
            setMousePosition({
                x,
                y
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    // Store mouse position as CSS variables to be used by the animation
    const gradientStyle = {
        "--mouse-x": `${mousePosition.x}%`,
        "--mouse-y": `${Math.min(mousePosition.y, 30)}%`,
        backgroundSize: "200% 200%"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute inset-0 animate-pulse-gradient",
                style: gradientStyle,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute inset-0 bg-particles opacity-20"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-sweep-shine"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col-reverse md:flex-row items-center py-8 md:py-24",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:w-1/2 text-white z-10 space-y-4 md:space-y-6 mt-6 md:mt-0 text-center md:text-left w-full",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "animate-fade-in",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "inline-flex items-center mb-3 bg-blue-950/90 backdrop-blur-sm rounded-lg py-1.5 px-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-yellow-400 text-sm",
                                                    children: "★★★★★"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-white text-xs ml-1",
                                                    children: "Trusted Irish Business"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-3xl md:text-5xl font-bold tracking-tight !leading-tight",
                                            children: slides[currentSlide].title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2 flex flex-col sm:flex-row justify-center md:justify-start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "space-y-1 md:space-y-2 text-sm md:text-base",
                                                children: slides[currentSlide].benefits.map((benefit, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex items-center justify-center md:justify-start",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                className: "h-4 w-4 md:h-5 md:w-5 text-green-300 mr-1.5 flex-shrink-0",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                    clipRule: "evenodd"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: benefit
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        }),
                                        (currentSlide === 1 || currentSlide === 3 || currentSlide === 4) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-white text-black font-bold py-1 px-3 text-sm rounded-lg my-2 inline-block animate-pulse",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-4 w-4 mr-1",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            fillRule: "evenodd",
                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                                                            clipRule: "evenodd"
                                                        })
                                                    }),
                                                    "SAME-DAY DISPATCH"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-4 md:mt-6 flex flex-col sm:flex-row gap-2 md:gap-4 justify-center md:justify-start",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/quote",
                                                    className: "inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 transition transform hover:scale-105 duration-200",
                                                    children: slides[currentSlide].cta
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    href: "tel:+35312345678",
                                                    className: "inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-3 border border-white text-sm md:text-base font-medium rounded-md text-white hover:bg-white/10 transition transform hover:scale-105 duration-200",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                                            })
                                                        }),
                                                        "Get Advice"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-wrap gap-1.5 mt-4 animate-fade-in-delayed justify-center md:justify-start",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "bg-blue-900/90 text-white px-2 py-0.5 rounded-full text-xs md:text-sm",
                                                    children: "\uD83C\uDDEE\uD83C\uDDEA Irish"
                                                }),
                                                (currentSlide === 1 || currentSlide === 3 || currentSlide === 4) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "bg-black text-white px-2 py-0.5 rounded-full text-xs md:text-sm font-bold",
                                                    children: "⚡ SAME-DAY"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "bg-blue-900/90 text-white px-2 py-0.5 rounded-full text-xs md:text-sm",
                                                    children: "\uD83D\uDCB0 Low MOQs"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "hidden md:inline-block bg-blue-900/90 md:bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm",
                                                    children: "\uD83C\uDF3F Locally Sourced"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "hidden md:inline-block bg-blue-900/90 md:bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm",
                                                    children: "\uD83D\uDCB0 No Hidden Costs"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:w-1/2 z-10 flex items-center justify-center overflow-visible w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative transform scale-125 md:scale-150",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-72 w-72 md:h-96 md:w-96 flex items-center justify-center relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute inset-0 flex items-center justify-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "relative h-full w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: slides[currentSlide].imageSrc,
                                                    alt: slides[currentSlide].product,
                                                    fill: true,
                                                    className: "object-contain",
                                                    priority: currentSlide === 0,
                                                    sizes: "(max-width: 768px) 288px, 384px",
                                                    unoptimized: "production" === "production"
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center space-x-1.5 md:space-x-2",
                        children: slides.map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setCurrentSlide(index),
                                className: `h-1.5 md:h-2 rounded-full transition-all ${index === currentSlide ? "w-6 md:w-8 bg-white" : "w-1.5 md:w-2 bg-white/50"}`
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);


/***/ }),

/***/ 2575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ImageGallery = ()=>{
    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalImage, setModalImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const images = [
        {
            src: "/images/ifa/heroh/1.png",
            alt: "Premium packaging product 1",
            size: "large" // large images span 2 columns or rows
        },
        {
            src: "/images/ifa/heroh/2.png",
            alt: "Premium packaging product 2",
            size: "medium"
        },
        {
            src: "/images/ifa/heroh/3.png",
            alt: "Premium packaging product 3",
            size: "medium"
        },
        {
            src: "/images/ifa/heroh/4.png",
            alt: "Premium packaging product 4",
            size: "large"
        },
        {
            src: "/images/ifa/heroh/5.png",
            alt: "Premium packaging product 5",
            size: "medium"
        },
        {
            src: "/images/ifa/heroh/6.png",
            alt: "Premium packaging product 6",
            size: "large"
        },
        {
            src: "/images/ifa/heroh/7.png",
            alt: "Premium packaging product 7",
            size: "medium"
        },
        {
            src: "/images/ifa/heroh/8.png",
            alt: "Premium packaging product 8",
            size: "medium"
        }
    ];
    const openModal = (image)=>{
        setModalImage(image);
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };
    const closeModal = ()=>{
        setModalOpen(false);
        document.body.style.overflow = "auto";
    };
    // Helper function to get the appropriate class based on image size
    const getSizeClass = (size)=>{
        // On mobile devices, all items are single-cell for consistency
        if (false) {}
        // On desktop, use the masonry layout
        switch(size){
            case "large":
                return "md:col-span-2 md:row-span-2";
            case "wide":
                return "md:col-span-2";
            case "tall":
                return "md:row-span-2";
            default:
                return "";
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "py-16 bg-gradient-to-b from-white to-gray-50",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.7
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-3xl md:text-4xl font-bold text-center mb-3 text-gray-800",
                                children: "Our Premium Products"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 px-2",
                                children: "Explore our range of high-quality packaging solutions designed for businesses that value presentation and sustainability."
                            })
                        ]
                    }),
                    selectedImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        className: "gallery-selected-preview relative w-full h-64 md:h-96 mb-6 md:mb-10 overflow-hidden rounded-xl shadow-lg cursor-pointer",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        onClick: ()=>openModal(selectedImage),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: selectedImage,
                                alt: "Selected packaging product",
                                fill: true,
                                style: {
                                    objectFit: "contain"
                                },
                                className: "bg-white p-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300 flex items-center justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-white text-sm font-medium bg-black bg-opacity-70 py-1 px-3 rounded-full",
                                    children: "Click to enlarge"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "block md:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: images.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: "aspect-square relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow cursor-pointer",
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: index * 0.1
                                    },
                                    onClick: ()=>{
                                        setSelectedImage(image.src);
                                        window.scrollTo({
                                            top: document.querySelector(".gallery-selected-preview")?.offsetTop - 80 || 0,
                                            behavior: "smooth"
                                        });
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "aspect-square w-full h-full relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: image.src,
                                            alt: image.alt,
                                            fill: true,
                                            sizes: "(max-width: 640px) 50vw",
                                            style: {
                                                objectFit: "contain"
                                            },
                                            className: "p-2"
                                        })
                                    })
                                }, index))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-4 auto-rows-auto gap-4 md:gap-6",
                            children: images.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: `${getSizeClass(image.size)} relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow cursor-pointer`,
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: index * 0.1
                                    },
                                    onClick: ()=>{
                                        setSelectedImage(image.src);
                                        window.scrollTo({
                                            top: document.querySelector(".gallery-selected-preview")?.offsetTop - 100 || 0,
                                            behavior: "smooth"
                                        });
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "aspect-square w-full h-full relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: image.src,
                                            alt: image.alt,
                                            fill: true,
                                            sizes: "(min-width: 768px) 25vw, 20vw",
                                            style: {
                                                objectFit: "contain"
                                            },
                                            className: "p-3 hover:scale-105 transition-transform duration-300"
                                        })
                                    })
                                }, index))
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        className: "mt-8 md:mt-12 text-center",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.5
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-700 mb-4 md:mb-6 px-2",
                                children: "All products are available in custom sizes and designs to suit your specific requirements."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/products",
                                className: "inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 md:py-3 md:px-8 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg",
                                children: "View All Products"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                children: modalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80",
                    onClick: closeModal,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        initial: {
                            scale: 0.9,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: 0.9,
                            opacity: 0
                        },
                        className: "relative max-w-4xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "absolute top-2 right-2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100",
                                onClick: closeModal,
                                children: "✕"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative w-full h-[60vh] md:h-[80vh]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: modalImage,
                                    alt: "Enlarged product image",
                                    fill: true,
                                    style: {
                                        objectFit: "contain"
                                    },
                                    quality: 90,
                                    className: "p-4",
                                    sizes: "(max-width: 768px) 100vw, 80vw"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageGallery);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* __next_internal_client_entry_do_not_use__ default auto */ 



const PrintingTimes = ()=>{
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("packaging");
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Flag that component has mounted (client-side only)
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    // Track component visibility for animation - only run on client
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isMounted) return;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.2
        });
        const section = document.getElementById("printing-times-section");
        if (section) {
            observer.observe(section);
        }
        return ()=>{
            if (section) {
                observer.unobserve(section);
            }
        };
    }, [
        isMounted
    ]);
    const tabs = [
        {
            id: "packaging",
            label: "Packaging Products"
        },
        {
            id: "wideFormat",
            label: "Wide Format"
        },
        {
            id: "leaflets",
            label: "Leaflets & Flyers"
        }
    ];
    const timelineData = {
        packaging: [
            {
                title: "Standard Production",
                time: "8-12 Days",
                description: "Our standard production time for custom packaging, ideal for most business needs.",
                icon: "\uD83D\uDCE6",
                color: "from-blue-500 to-blue-700"
            },
            {
                title: "Express Service",
                time: "4-7 Days",
                description: "Accelerated production for when you need your packaging sooner.",
                icon: "⚡",
                color: "from-amber-500 to-amber-700"
            },
            {
                title: "Weekly Service",
                time: "Every Week",
                description: "Unique weekly packaging service with printed options - exclusive to PrintNPack!",
                icon: "\uD83D\uDD04",
                color: "from-green-500 to-green-700",
                badge: "EXCLUSIVE"
            }
        ],
        wideFormat: [
            {
                title: "Same-Day Printing",
                time: "Today",
                description: "Order by 10AM for same-day production of urgent wide format projects.",
                icon: "\uD83D\uDD25",
                color: "from-red-500 to-red-700",
                badge: "FASTEST"
            },
            {
                title: "Next-Day Service",
                time: "24 Hours",
                description: "Order by 3PM for next-day delivery of your wide format prints.",
                icon: "⏱️",
                color: "from-purple-500 to-purple-700"
            },
            {
                title: "Standard Production",
                time: "3-5 Days",
                description: "Our standard timeline for wide format printing with optimal quality and price.",
                icon: "\uD83D\uDCCA",
                color: "from-blue-500 to-blue-700"
            }
        ],
        leaflets: [
            {
                title: "Same-Day Printing",
                time: "Today",
                description: "Order by 10AM for same-day production of your marketing materials.",
                icon: "\uD83D\uDE80",
                color: "from-red-500 to-red-700",
                badge: "FASTEST"
            },
            {
                title: "Next-Day Service",
                time: "24 Hours",
                description: "Submit your designs by 3PM for delivery the next business day.",
                icon: "\uD83D\uDCC6",
                color: "from-orange-500 to-orange-700"
            },
            {
                title: "Standard Production",
                time: "3-5 Days",
                description: "Our standard timeline for leaflets and flyers with best value pricing.",
                icon: "\uD83D\uDCC4",
                color: "from-blue-500 to-blue-700"
            }
        ]
    };
    // These will be the initial states before animations
    const initialOpacity = isMounted ? 0 : 1;
    const initialY = isMounted ? 20 : 0;
    const initialScale = isMounted ? 0.9 : 1;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "printing-times-section",
        className: "py-16 bg-gray-50 overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute inset-0 pointer-events-none z-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-x-1/4 -translate-y-1/4 opacity-20"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute bottom-0 left-0 w-96 h-96 bg-gray-200 rounded-full translate-x-1/4 translate-y-1/4 opacity-10"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full bg-grid-pattern opacity-10"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: "text-center mb-12",
                        initial: {
                            opacity: initialOpacity,
                            y: initialY
                        },
                        animate: isVisible || !isMounted ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 20
                        },
                        transition: {
                            duration: 0.5
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                                children: "Lightning-Fast Printing Times"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                children: "We revolutionize the industry with our rapid turnaround times, from same-day printing to our exclusive weekly packaging service."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap justify-center mb-12 gap-2",
                        children: tabs.map((tab, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                                className: `py-3 px-5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${activeTab === tab.id ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"}`,
                                onClick: ()=>setActiveTab(tab.id),
                                initial: {
                                    opacity: initialOpacity,
                                    y: initialY
                                },
                                animate: isVisible || !isMounted ? {
                                    opacity: 1,
                                    y: 0
                                } : {
                                    opacity: 0,
                                    y: 20
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: isMounted ? index * 0.1 : 0
                                },
                                whileHover: isMounted ? {
                                    scale: 1.03
                                } : {},
                                whileTap: isMounted ? {
                                    scale: 0.97
                                } : {},
                                children: tab.label
                            }, tab.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute top-16 left-8 right-8 hidden md:block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-1 bg-gray-200 relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: "absolute inset-0 bg-blue-500 origin-left",
                                        initial: {
                                            scaleX: isMounted ? 0 : 1
                                        },
                                        animate: isVisible || !isMounted ? {
                                            scaleX: 1
                                        } : {
                                            scaleX: 0
                                        },
                                        transition: {
                                            duration: 1,
                                            delay: 0.3
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-8 relative",
                                children: timelineData[activeTab].map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: "bg-white rounded-xl shadow-lg overflow-hidden relative z-10",
                                        initial: {
                                            opacity: initialOpacity,
                                            scale: initialScale
                                        },
                                        animate: isVisible || !isMounted ? {
                                            opacity: 1,
                                            scale: 1
                                        } : {
                                            opacity: 0,
                                            scale: 0.9
                                        },
                                        transition: {
                                            duration: 0.4,
                                            delay: isMounted ? 0.2 + index * 0.15 : 0
                                        },
                                        whileHover: isMounted ? {
                                            y: -5,
                                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                        } : {},
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `h-2 bg-gradient-to-r ${item.color}`
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-6 text-center md:text-left",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "relative mb-4 inline-block mx-auto md:mx-0 flex justify-center md:justify-start w-full",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `h-16 w-16 rounded-full bg-gradient-to-r ${item.color} bg-opacity-20 flex items-center justify-center`,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-3xl",
                                                                    children: item.icon
                                                                })
                                                            }),
                                                            isMounted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                                className: `absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-30`,
                                                                animate: {
                                                                    scale: [
                                                                        1,
                                                                        1.2,
                                                                        1
                                                                    ],
                                                                    opacity: [
                                                                        0.3,
                                                                        0.1,
                                                                        0.3
                                                                    ]
                                                                },
                                                                transition: {
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                    repeatType: "reverse"
                                                                }
                                                            }),
                                                            item.badge && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg",
                                                                children: item.badge
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-xl font-bold mb-2 text-center md:text-left",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `text-3xl font-extrabold mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent text-center md:text-left`,
                                                        children: item.time
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-gray-600 mb-4 text-center md:text-left",
                                                        children: item.description
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-auto pt-4 border-t border-gray-100 flex items-center justify-center md:justify-start text-sm text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "inline-block h-2 w-2 rounded-full bg-green-500 mr-2"
                                                            }),
                                                            "Available for all volumes"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, `${activeTab}-${index}`))
                            })
                        ]
                    }),
                    isMounted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: "text-center mt-10 text-gray-500 text-sm md:hidden",
                        initial: {
                            opacity: 0
                        },
                        animate: isVisible ? {
                            opacity: 1
                        } : {
                            opacity: 0
                        },
                        transition: {
                            delay: 1
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "inline-flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5 mr-2",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                    })
                                }),
                                "Tap the options above to explore different printing times"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: "bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-12 max-w-3xl mx-auto",
                        initial: {
                            opacity: initialOpacity,
                            x: isMounted ? -20 : 0
                        },
                        animate: isVisible || !isMounted ? {
                            opacity: 1,
                            x: 0
                        } : {
                            opacity: 0,
                            x: -20
                        },
                        transition: {
                            delay: isMounted ? 0.8 : 0
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-shrink-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "h-5 w-5 text-blue-500",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "ml-3",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-sm text-blue-800",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-bold",
                                                children: "Need a custom timeline?"
                                            }),
                                            " Our team can work with your specific deadlines. Contact us for special arrangements or rush orders."
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrintingTimes);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* __next_internal_client_entry_do_not_use__ default auto */ 




const ProductShowcase = ()=>{
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("food");
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [dragConstraints, setDragConstraints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        left: 0,
        right: 0
    });
    // Track visibility for animation
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.1
        });
        const section = document.getElementById("product-showcase");
        if (section) {
            observer.observe(section);
        }
        return ()=>{
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);
    // Calculate drag constraints based on screen width
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const calculateConstraints = ()=>{
            const tabContainer = document.querySelector(".tab-container");
            if (tabContainer) {
                const containerWidth = tabContainer.scrollWidth;
                const viewportWidth = tabContainer.offsetWidth;
                if (containerWidth > viewportWidth) {
                    setDragConstraints({
                        left: -(containerWidth - viewportWidth),
                        right: 0
                    });
                } else {
                    setDragConstraints({
                        left: 0,
                        right: 0
                    });
                }
            }
        };
        calculateConstraints();
        window.addEventListener("resize", calculateConstraints);
        return ()=>window.removeEventListener("resize", calculateConstraints);
    }, []);
    const products = {
        food: [
            {
                id: 1,
                name: "Pizza Boxes",
                image: "/images/ifa/heroh/pizza.png",
                color: "from-red-400 to-red-600"
            },
            {
                id: 2,
                name: "Burger Boxes",
                image: "/images/ifa/heroh/burger.png",
                color: "from-yellow-400 to-yellow-600"
            },
            {
                id: 3,
                name: "Napkins",
                image: "/images/ifa/heroh/napkin.png",
                color: "from-green-400 to-green-600"
            },
            {
                id: 4,
                name: "Paper Bags",
                image: "/images/ifa/heroh/bag.png",
                color: "from-blue-400 to-blue-600"
            }
        ],
        wideFormat: [
            {
                id: 5,
                name: "Banners",
                image: "/images/ifa/heroh/wide.png",
                color: "from-purple-400 to-purple-600"
            },
            {
                id: 6,
                name: "Roll Up Banners",
                image: "/images/ifa/heroh/1.png",
                color: "from-pink-400 to-pink-600"
            },
            {
                id: 7,
                name: "Posters",
                image: "/images/ifa/heroh/2.png",
                color: "from-indigo-400 to-indigo-600"
            },
            {
                id: 8,
                name: "Vinyl Stickers",
                image: "/images/ifa/heroh/3.png",
                color: "from-cyan-400 to-cyan-600"
            },
            {
                id: 9,
                name: "Foamex Boards",
                image: "/images/ifa/heroh/4.png",
                color: "from-blue-500 to-blue-700"
            },
            {
                id: 10,
                name: "Corriboards",
                image: "/images/ifa/heroh/5.png",
                color: "from-teal-400 to-teal-600"
            }
        ],
        leafletsFlyers: [
            {
                id: 11,
                name: "A3 Leaflets",
                image: "/images/ifa/heroh/leaflet.png",
                color: "from-blue-500 to-blue-700"
            },
            {
                id: 12,
                name: "A4 Leaflets",
                image: "/images/ifa/heroh/6.png",
                color: "from-green-500 to-green-700"
            },
            {
                id: 13,
                name: "A5 Leaflets",
                image: "/images/ifa/heroh/7.png",
                color: "from-yellow-500 to-yellow-700"
            },
            {
                id: 14,
                name: "A6 Leaflets",
                image: "/images/ifa/heroh/8.png",
                color: "from-orange-400 to-orange-600"
            }
        ]
    };
    const tabs = [
        {
            id: "food",
            label: "Food Packaging"
        },
        {
            id: "wideFormat",
            label: "Wide Format"
        },
        {
            id: "leafletsFlyers",
            label: "Leaflets & Flyers"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "product-showcase",
        className: "py-12 md:py-16 bg-white",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-1",
                            children: "Our Products"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-2 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto",
                            children: "Swipe to explore our premium product range"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-8 overflow-hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        className: "flex space-x-2 md:space-x-4 md:justify-center px-2 overflow-x-auto no-scrollbar pb-2",
                        drag: "x",
                        dragConstraints: dragConstraints,
                        dragElastic: 0.1,
                        dragTransition: {
                            bounceStiffness: 600,
                            bounceDamping: 20
                        },
                        children: tabs.map((tab)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {
                                className: `py-2 px-5 rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 ${activeTab === tab.id ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`,
                                onClick: ()=>setActiveTab(tab.id),
                                whileTap: {
                                    scale: 0.95
                                },
                                children: tab.label
                            }, tab.id))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6",
                    children: products[activeTab].map((product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                            className: "relative rounded-xl shadow-lg overflow-hidden h-64 cursor-pointer",
                            whileHover: {
                                scale: 1.03,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 20
                            },
                            transition: {
                                delay: product.id % 4 * 0.1,
                                duration: 0.4
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `absolute inset-0 bg-gradient-to-br ${product.color} opacity-90`
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "absolute inset-0 flex flex-col items-center justify-center p-4 text-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "relative h-36 w-36 mb-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                src: product.image,
                                                alt: product.name,
                                                fill: true,
                                                className: "object-contain drop-shadow-xl",
                                                unoptimized: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-xl font-bold mb-2 text-center",
                                            children: product.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/products",
                                            className: "inline-block mt-2 px-4 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-sm font-medium transition-all",
                                            children: "Learn More"
                                        })
                                    ]
                                })
                            ]
                        }, product.id))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "md:hidden mb-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "px-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: products[activeTab].map((product, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                        className: "relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: isVisible ? 1 : 0,
                                            y: isVisible ? 0 : 20,
                                            transition: {
                                                delay: index * 0.1,
                                                duration: 0.4
                                            }
                                        },
                                        whileHover: {
                                            y: -5,
                                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        variants: {
                                            hover: {
                                                "& .product-image": {
                                                    scale: 1.35,
                                                    filter: "brightness(1.2)",
                                                    transition: {
                                                        duration: 0.3
                                                    }
                                                }
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 rounded-full bg-gradient-to-br ${product.color} opacity-80 blur-lg`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "relative h-32 w-full flex items-center justify-center p-2 bg-gradient-to-b from-black/40 to-transparent",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: product.image,
                                                    alt: product.name,
                                                    width: 110,
                                                    height: 110,
                                                    className: "object-contain drop-shadow-xl scale-125 product-image transition-all",
                                                    unoptimized: true
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-3 bg-black/30 backdrop-blur-sm",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-white font-bold text-sm text-center mb-2 drop-shadow-sm",
                                                            children: product.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/products",
                                                            className: "flex items-center justify-center h-7 w-7 bg-white/20 hover:bg-white/30 rounded-full text-white text-xs transition-all",
                                                            "aria-label": `View ${product.name}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-3 w-3",
                                                                viewBox: "0 0 20 20",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                                                                    clipRule: "evenodd"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }, product.id))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center mt-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                className: "relative inline-block",
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.5
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-md opacity-70"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/products",
                                        className: "relative inline-flex items-center justify-center bg-gray-900 text-white py-3 px-6 rounded-lg text-sm font-medium border border-blue-500/30",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Browse All Products"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "ml-2 w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4 text-center md:hidden"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductShowcase);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3703:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1301);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, react_icons_fa__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, react_icons_fa__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const PromoBanner = ()=>{
    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        days: 2,
        hours: 12,
        minutes: 30,
        seconds: 0
    });
    const [hasExpired, setHasExpired] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isFlashing, setIsFlashing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };
    // Effect for the countdown timer
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Calculate the end date (2 days, 12 hours, 30 minutes from now)
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + timeLeft.days);
        endDate.setHours(endDate.getHours() + timeLeft.hours);
        endDate.setMinutes(endDate.getMinutes() + timeLeft.minutes);
        endDate.setSeconds(endDate.getSeconds() + timeLeft.seconds);
        const timer = setInterval(()=>{
            const now = new Date();
            const difference = endDate - now;
            if (difference <= 0) {
                clearInterval(timer);
                setHasExpired(true);
                return;
            }
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(difference % (1000 * 60) / 1000);
            setTimeLeft({
                days,
                hours,
                minutes,
                seconds
            });
        }, 1000);
        return ()=>clearInterval(timer);
    }, []);
    // Effect for the flashing attention effect
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const flashInterval = setInterval(()=>{
            setIsFlashing((prev)=>!prev);
        }, 2000);
        return ()=>clearInterval(flashInterval);
    }, []);
    if (hasExpired) {
        return null; // Don't show the banner if the offer has expired
    }
    // CSS variables for the glow effect
    const glowStyles = {
        boxShadow: isFlashing ? "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073" : "0 0 5px #fff, 0 0 10px #e60073",
        transition: "box-shadow 0.5s ease-in-out"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        className: "bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white py-3 px-4 relative overflow-hidden",
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    ...Array(10)
                ].map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        className: "absolute w-2 h-2 rounded-full bg-white opacity-30",
                        initial: {
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: 0.5
                        },
                        animate: {
                            x: [
                                Math.random() * 100 + "%",
                                Math.random() * 100 + "%"
                            ],
                            y: [
                                Math.random() * 100 + "%",
                                Math.random() * 100 + "%"
                            ],
                            scale: [
                                0.5,
                                1,
                                0.5
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: Math.random() * 5 + 10,
                            ease: "linear"
                        }
                    }, i))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        className: "absolute top-0 right-0 md:right-4 bg-yellow-400 text-black font-bold py-1 px-3 rounded-b-lg shadow-lg transform -translate-y-0 hidden md:block",
                        initial: {
                            y: -40
                        },
                        animate: {
                            y: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        },
                        children: "New Customer Offer!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full flex justify-center mb-2 md:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            className: "bg-yellow-400 text-black font-bold py-1 px-3 rounded-lg shadow-lg text-sm",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.3
                            },
                            children: "New Customer Offer!"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:flex-row items-center justify-between relative z-10",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-1 mb-4 md:mb-0 text-center md:text-left flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                        className: "mr-3 hidden md:block",
                                        animate: {
                                            rotate: [
                                                0,
                                                10,
                                                0,
                                                -10,
                                                0
                                            ]
                                        },
                                        transition: {
                                            repeat: Infinity,
                                            duration: 2
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGift, {
                                            className: "text-3xl text-yellow-300"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h3, {
                                                className: "text-xl md:text-2xl font-bold mb-1",
                                                style: glowStyles,
                                                animate: {
                                                    scale: isFlashing ? 1.05 : 1
                                                },
                                                transition: {
                                                    duration: 0.5
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-yellow-300",
                                                        children: "15% OFF"
                                                    }),
                                                    " Your First Order!"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm md:text-base opacity-90",
                                                children: "Contact us today to claim this exclusive offer"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-1 flex flex-col md:flex-row justify-center md:justify-end items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center md:text-right mb-3 md:mb-0 md:mr-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm font-medium",
                                            children: "Offer Expires In:"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-2 md:space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                                className: "flex flex-col items-center",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bg-white bg-opacity-20 rounded-md px-2 py-1 w-12 md:w-14 text-center backdrop-blur-sm border border-white/20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-xl md:text-2xl font-bold",
                                                            children: timeLeft.days
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-xs mt-1",
                                                        children: "Days"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                                className: "flex flex-col items-center",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bg-white bg-opacity-20 rounded-md px-2 py-1 w-12 md:w-14 text-center backdrop-blur-sm border border-white/20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-xl md:text-2xl font-bold",
                                                            children: timeLeft.hours
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-xs mt-1",
                                                        children: "Hours"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                                className: "flex flex-col items-center",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bg-white bg-opacity-20 rounded-md px-2 py-1 w-12 md:w-14 text-center backdrop-blur-sm border border-white/20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-xl md:text-2xl font-bold",
                                                            children: timeLeft.minutes
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-xs mt-1",
                                                        children: "Mins"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                                className: "flex flex-col items-center",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bg-white bg-opacity-20 rounded-md px-2 py-1 w-12 md:w-14 text-center backdrop-blur-sm border border-white/20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-xl md:text-2xl font-bold",
                                                            children: timeLeft.seconds
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-xs mt-1",
                                                        children: "Secs"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hidden md:block ml-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/contact",
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
                                                    className: "bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300 transition-all flex items-center shadow-lg",
                                                    animate: {
                                                        boxShadow: isFlashing ? "0 0 8px rgba(250, 204, 21, 0.8), 0 0 16px rgba(250, 204, 21, 0.6)" : "0 4px 6px rgba(0, 0, 0, 0.2)"
                                                    },
                                                    transition: {
                                                        duration: 0.5
                                                    },
                                                    children: [
                                                        "Contact Us ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaArrowRight, {
                                                            className: "ml-2"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:hidden w-full flex justify-center mt-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/contact",
                                passHref: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
                                    className: "bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300 transition-all flex items-center shadow-lg",
                                    animate: {
                                        boxShadow: isFlashing ? "0 0 8px rgba(250, 204, 21, 0.8), 0 0 16px rgba(250, 204, 21, 0.6)" : "0 4px 6px rgba(0, 0, 0, 0.2)"
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: [
                                        "Contact Us ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaArrowRight, {
                                            className: "ml-2"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromoBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 130:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const SectionDivider = ({ variant = "default" })=>{
    const bgColors = {
        default: "from-transparent to-gray-50",
        blue: "from-transparent to-blue-50",
        dark: "from-transparent to-gray-100"
    };
    // Select images based on variant
    const leftImageSrc = variant === "default" ? "/images/ifa/heroh/4.png" : variant === "blue" ? "/images/ifa/heroh/6.png" : "/images/ifa/heroh/8.png";
    const rightImageSrc = variant === "default" ? "/images/ifa/heroh/3.png" : variant === "blue" ? "/images/ifa/heroh/5.png" : "/images/ifa/heroh/7.png";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `relative w-full h-32 md:h-40 bg-gradient-to-b ${bgColors[variant]}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto relative h-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: "absolute -left-10 top-1/2 transform -translate-y-1/2 w-32 h-32 opacity-10 hidden lg:block",
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    whileInView: {
                        opacity: 0.1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: leftImageSrc,
                        alt: "Decorative packaging",
                        width: 300,
                        height: 300,
                        style: {
                            objectFit: "contain",
                            width: "100%",
                            height: "100%"
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: "absolute -right-10 top-1/2 transform -translate-y-1/2 w-40 h-40 opacity-10 hidden lg:block",
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    whileInView: {
                        opacity: 0.1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: rightImageSrc,
                        alt: "Decorative packaging",
                        width: 300,
                        height: 300,
                        style: {
                            objectFit: "contain",
                            width: "100%",
                            height: "100%"
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionDivider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1301);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_fa__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([react_icons_fa__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const ServiceCard = ({ icon: Icon, title, description, color, index, imageSrc })=>{
    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        className: "bg-white rounded-xl shadow-lg overflow-hidden relative group text-center md:text-left",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            delay: index * 0.1
        },
        onHoverStart: ()=>setIsHovered(true),
        onHoverEnd: ()=>setIsHovered(false),
        whileHover: {
            y: -8
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `h-2 bg-gradient-to-r ${color}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `absolute inset-0 bg-gradient-to-br ${color}`
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative z-10 p-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col md:flex-row md:items-start gap-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-center md:items-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                    className: `mb-4 bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center ${color.includes("blue") ? "bg-blue-100" : color.includes("green") ? "bg-green-100" : color.includes("amber") ? "bg-amber-100" : color.includes("red") ? "bg-red-100" : "bg-purple-100"}`,
                                    animate: {
                                        rotate: isHovered ? [
                                            0,
                                            10,
                                            -10,
                                            10,
                                            0
                                        ] : 0,
                                        scale: isHovered ? 1.1 : 1
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                        size: 28,
                                        className: `${color.includes("blue") ? "text-blue-600" : color.includes("green") ? "text-green-600" : color.includes("amber") ? "text-amber-600" : color.includes("red") ? "text-red-600" : "text-purple-600"}`
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-xl font-bold mb-3 text-gray-900 w-full",
                                    children: title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-gray-600 mb-5 w-full",
                                    children: description
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                    whileHover: {
                                        x: 5
                                    },
                                    className: "flex justify-center md:justify-start w-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: `/services#${title.toLowerCase().replace(/\s+/g, "-")}`,
                                        className: `font-semibold inline-flex items-center gap-1 group ${color.includes("blue") ? "text-blue-600" : color.includes("green") ? "text-green-600" : color.includes("amber") ? "text-amber-600" : color.includes("red") ? "text-red-600" : "text-purple-600"}`,
                                        children: [
                                            "Learn More",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "transition-transform duration-300 group-hover:translate-x-1",
                                                children: "→"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "md:w-1/3 flex-shrink-0 hidden md:block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative h-32 w-32 ml-auto opacity-90 group-hover:opacity-100 transition-opacity",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    src: imageSrc,
                                    alt: title,
                                    width: 128,
                                    height: 128,
                                    className: "object-contain",
                                    unoptimized: "production" === "production"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
const Services = ()=>{
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.1
        });
        const section = document.getElementById("services-section");
        if (section) {
            observer.observe(section);
        }
        return ()=>{
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);
    const services = [
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaBox,
            title: "Packaging Solutions",
            description: "Comprehensive packaging solutions tailored to your product specifications and brand requirements.",
            color: "from-blue-500 to-blue-700",
            imageSrc: "/images/ifa/heroh/pizza.png"
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPrint,
            title: "Custom Printing",
            description: "High-quality printing services to make your packaging stand out with your unique brand identity.",
            color: "from-purple-500 to-purple-700",
            imageSrc: "/images/ifa/heroh/bag.png"
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLeaf,
            title: "Eco-Friendly Options",
            description: "Sustainable packaging alternatives that reduce environmental impact without compromising quality.",
            color: "from-green-500 to-green-700",
            imageSrc: "/images/ifa/heroh/burger.png"
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaShippingFast,
            title: "Bulk Orders",
            description: "Efficient handling of large volume orders with competitive pricing and timely delivery.",
            color: "from-red-500 to-red-700",
            imageSrc: "/images/ifa/heroh/napkin.png"
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPencilRuler,
            title: "Custom Design",
            description: "Expert design services to create packaging that perfectly fits your product and enhances brand appeal.",
            color: "from-amber-500 to-amber-700",
            imageSrc: "/images/ifa/heroh/leaflet.png"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "services-section",
        className: "py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto px-4 relative z-10",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                    className: "text-center mb-12",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: isVisible ? {
                        opacity: 1,
                        y: 0
                    } : {
                        opacity: 0,
                        y: 20
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                            children: "Our Services"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg text-gray-600 max-w-2xl mx-auto",
                            children: "We offer a comprehensive range of packaging and printing services to meet all your business needs. From concept to delivery, we ensure quality at every step."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                    className: "bg-white rounded-xl shadow-xl overflow-hidden mb-16",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: isVisible ? {
                        opacity: 1,
                        y: 0
                    } : {
                        opacity: 0,
                        y: 30
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.2
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:flex-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:w-1/2 relative",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "h-64 md:h-full w-full relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-white text-xl font-semibold",
                                                children: "Premium Packaging Service"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "absolute bottom-0 left-0 p-6 md:p-8",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg inline-block mb-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-blue-800 font-bold",
                                                        children: "Featured Service"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg",
                                                    children: "Complete Packaging Solutions"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "md:w-1/2 p-6 md:p-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaBox, {
                                                    className: "text-2xl text-blue-600"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-2xl font-bold text-gray-900 mb-3",
                                                children: "End-to-End Packaging Excellence"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-gray-700 mb-4",
                                                children: "Our comprehensive packaging service takes care of every aspect of your packaging needs, from initial design to final delivery. We handle material selection, structural design, graphics, printing, finishing, and logistics integration."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "grid grid-cols-2 gap-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "rounded-full bg-green-100 p-2 mr-2",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLeaf, {
                                                                    className: "text-green-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm text-gray-700",
                                                                children: "Eco-Friendly Materials"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "rounded-full bg-amber-100 p-2 mr-2",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPrint, {
                                                                    className: "text-amber-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm text-gray-700",
                                                                children: "Custom Branding"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "rounded-full bg-purple-100 p-2 mr-2",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPencilRuler, {
                                                                    className: "text-purple-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm text-gray-700",
                                                                children: "Expert Design"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "rounded-full bg-red-100 p-2 mr-2",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaShippingFast, {
                                                                    className: "text-red-600"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm text-gray-700",
                                                                children: "Fast Production"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/services",
                                        className: "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg",
                                        children: "Learn More About Our Services"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: services.map((service, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServiceCard, {
                            ...service,
                            index: index
                        }, index))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                    className: "text-center mt-12",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: isVisible ? {
                        opacity: 1,
                        y: 0
                    } : {
                        opacity: 0,
                        y: 20
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.5
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/services",
                        className: "inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg",
                        children: "View All Services"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4114);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_ri__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([react_icons_ri__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const USPCards = ({ data })=>{
    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, {
            threshold: 0.1
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return ()=>{
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);
    // Use data from props if provided, otherwise use default data
    const defaultUspData = [
        {
            id: "custom-design",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiBox3Line, {
                className: "text-4xl text-green-600 icon-hover"
            }),
            title: "Custom Design Service",
            description: "Professional design team to create unique packaging that represents your brand and stands out.",
            stat: "100%",
            statLabel: "customizable",
            color: "from-green-500 to-green-700",
            delay: 0
        },
        {
            id: "exclusive",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiLeafLine, {
                className: "text-4xl text-blue-600 icon-hover"
            }),
            title: "Eco-Friendly Materials",
            description: "Sustainable packaging options that reduce environmental impact without compromising on quality.",
            stat: "100%",
            statLabel: "biodegradable options",
            color: "from-blue-500 to-blue-700",
            delay: 100
        },
        {
            id: "low-moq",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiRulerLine, {
                className: "text-4xl text-amber-600 icon-hover"
            }),
            title: "Low Minimum Orders",
            description: "Custom packaging accessible to businesses of all sizes with minimums starting at just 100 units.",
            stat: "100",
            statLabel: "unit minimum",
            color: "from-amber-500 to-amber-700",
            delay: 200
        },
        {
            id: "fast-delivery",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiTimerFlashLine, {
                className: "text-4xl text-purple-600 icon-hover"
            }),
            title: "Weekly Delivery Service",
            description: "Our unique weekly printing and delivery system ensures you never run out of essential packaging.",
            stat: "52",
            statLabel: "deliveries per year",
            color: "from-purple-500 to-purple-700",
            delay: 300
        }
    ];
    // Use the data prop if provided, otherwise use the default data
    const displayData = data || defaultUspData;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        ref: sectionRef,
        className: "relative py-10 overflow-hidden bg-gradient-to-b from-white to-gray-50",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-700 to-blue-900 opacity-5 transform -skew-y-2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 bg-grid-pattern opacity-5"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute inset-0 pointer-events-none z-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute -right-20 top-1/4 w-64 h-64 opacity-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: "/images/ifa/heroh/pizza.png",
                            alt: "Pizza Box",
                            width: 300,
                            height: 300,
                            className: "object-contain transform rotate-12",
                            unoptimized: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute -left-20 bottom-1/4 w-64 h-64 opacity-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: "/images/ifa/heroh/bag.png",
                            alt: "Paper Bag",
                            width: 300,
                            height: 300,
                            className: "object-contain transform -rotate-12",
                            unoptimized: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute bottom-0 right-1/4 w-80 h-80 opacity-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: "/images/ifa/heroh/burger.png",
                            alt: "Burger Box",
                            width: 350,
                            height: 350,
                            className: "object-contain",
                            unoptimized: true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto px-4 relative z-10 max-w-6xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-center mb-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                initial: {
                                    rotate: 0
                                },
                                animate: {
                                    rotate: 360
                                },
                                transition: {
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                className: "hidden md:block absolute left-10 opacity-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiBox3Line, {
                                    className: "text-9xl text-blue-700"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-center relative",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "text-3xl md:text-4xl font-bold text-gray-900 mb-2",
                                        children: [
                                            "Why Choose ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-blue-700",
                                                children: [
                                                    "Print",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-blue-900",
                                                        children: "N"
                                                    }),
                                                    "Pack"
                                                ]
                                            }),
                                            "?"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-1 w-10 bg-blue-700"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiBox3Line, {
                                                className: "text-xl text-blue-700"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-1 w-36 bg-gradient-to-r from-blue-700 to-blue-500"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-lg text-gray-600 max-w-2xl",
                                        children: "Our unique advantages set us apart from the competition"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                initial: {
                                    rotate: 0
                                },
                                animate: {
                                    rotate: -360
                                },
                                transition: {
                                    duration: 40,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                className: "hidden md:block absolute right-10 opacity-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiBox3Line, {
                                    className: "text-9xl text-blue-700"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap justify-center gap-4 mt-4",
                        children: displayData.map((usp, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                className: "relative bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 w-[calc(50%-0.5rem)]  aspect-square sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)]",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: isVisible ? {
                                    opacity: 1,
                                    y: 0
                                } : {
                                    opacity: 0,
                                    y: 20
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: index * 0.1,
                                    ease: [
                                        0.43,
                                        0.13,
                                        0.23,
                                        0.96
                                    ]
                                },
                                whileHover: {
                                    y: -5,
                                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
                                    scale: 1.02
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-700"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "h-full p-4 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative mx-auto mb-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `h-16 w-16 rounded-xl bg-gradient-to-br ${typeof usp.color === "string" ? usp.color : "from-blue-500 to-blue-700"} flex items-center justify-center opacity-90`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                                            whileHover: {
                                                                scale: 1.2,
                                                                rotate: 10
                                                            },
                                                            className: "text-white",
                                                            children: usp.icon
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                                        className: "absolute -right-1 -top-1 h-3 w-3 rounded-full bg-blue-700",
                                                        animate: {
                                                            scale: [
                                                                1,
                                                                1.2,
                                                                1
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 2,
                                                            repeat: Infinity
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-1 flex flex-col justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "text-base font-bold text-gray-800 mb-2 text-center",
                                                                children: usp.title
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${usp.color} mx-auto mb-3 inline-block`,
                                                                children: usp.stat
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-xs text-gray-600 mb-4 text-center leading-tight line-clamp-3",
                                                                children: usp.description
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-xs text-gray-500 flex items-center gap-1 justify-center mt-auto",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiBox3Line, {
                                                                className: "text-blue-700"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: usp.statLabel
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (USPCards);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1637);
/* harmony import */ var _components_home_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7020);
/* harmony import */ var _components_home_ProductShowcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(787);
/* harmony import */ var _components_home_USPCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(528);
/* harmony import */ var _components_home_Services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8567);
/* harmony import */ var _components_home_AboutUs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2352);
/* harmony import */ var _components_home_CTA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1919);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_home_PromoBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3703);
/* harmony import */ var _components_home_PrintingTimes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(573);
/* harmony import */ var _components_home_DecorativeImages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4752);
/* harmony import */ var _components_home_FloatingImages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3789);
/* harmony import */ var _components_home_SectionDivider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(130);
/* harmony import */ var _components_home_ImageGallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2575);
/* harmony import */ var _components_home_DesignServices__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(718);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1301);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4114);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_home_ProductShowcase__WEBPACK_IMPORTED_MODULE_4__, _components_home_USPCards__WEBPACK_IMPORTED_MODULE_5__, _components_home_Services__WEBPACK_IMPORTED_MODULE_6__, _components_home_AboutUs__WEBPACK_IMPORTED_MODULE_7__, _components_home_PromoBanner__WEBPACK_IMPORTED_MODULE_10__, _components_home_PrintingTimes__WEBPACK_IMPORTED_MODULE_11__, _components_home_DecorativeImages__WEBPACK_IMPORTED_MODULE_12__, _components_home_FloatingImages__WEBPACK_IMPORTED_MODULE_13__, _components_home_SectionDivider__WEBPACK_IMPORTED_MODULE_14__, _components_home_ImageGallery__WEBPACK_IMPORTED_MODULE_15__, _components_home_DesignServices__WEBPACK_IMPORTED_MODULE_16__, react_icons_fa__WEBPACK_IMPORTED_MODULE_17__, react_icons_ri__WEBPACK_IMPORTED_MODULE_18__]);
([_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _components_home_ProductShowcase__WEBPACK_IMPORTED_MODULE_4__, _components_home_USPCards__WEBPACK_IMPORTED_MODULE_5__, _components_home_Services__WEBPACK_IMPORTED_MODULE_6__, _components_home_AboutUs__WEBPACK_IMPORTED_MODULE_7__, _components_home_PromoBanner__WEBPACK_IMPORTED_MODULE_10__, _components_home_PrintingTimes__WEBPACK_IMPORTED_MODULE_11__, _components_home_DecorativeImages__WEBPACK_IMPORTED_MODULE_12__, _components_home_FloatingImages__WEBPACK_IMPORTED_MODULE_13__, _components_home_SectionDivider__WEBPACK_IMPORTED_MODULE_14__, _components_home_ImageGallery__WEBPACK_IMPORTED_MODULE_15__, _components_home_DesignServices__WEBPACK_IMPORTED_MODULE_16__, react_icons_fa__WEBPACK_IMPORTED_MODULE_17__, react_icons_ri__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















function Home() {
    // USP data with simpler, consistent packaging-themed icons
    const uspData = [
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_18__.RiTimerFlashLine, {
                className: "text-4xl text-blue-600 icon-hover"
            }),
            title: "Fast Delivery",
            description: "Industry-leading turnaround times with our unique weekly delivery system"
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_18__.RiLeafLine, {
                className: "text-4xl text-green-600 icon-hover"
            }),
            title: "Eco-Friendly",
            description: "Sustainable materials and production methods for environmentally conscious packaging"
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_18__.RiAwardLine, {
                className: "text-4xl text-amber-600 icon-hover"
            }),
            title: "Premium Quality",
            description: "High-quality materials and precision printing for exceptional results"
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_18__.RiNumbersLine, {
                className: "text-4xl text-purple-600 icon-hover"
            }),
            title: "Low MOQ",
            description: "Minimum orders as low as 100 units, making custom packaging accessible to all"
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_18__.RiRulerLine, {
                className: "text-4xl text-red-600 icon-hover"
            }),
            title: "Custom Sizes",
            description: "Tailored dimensions to perfectly fit your specific product requirements"
        },
        {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_18__.RiPaintBrushLine, {
                className: "text-4xl text-blue-800 icon-hover"
            }),
            title: "Custom Design Service",
            description: "Professional design team to create unique packaging that represents your brand"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "PrintNPack - Premium Irish Packaging Solutions"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "PrintNPack provides high-quality pizza boxes, paper bags, and burger boxes for businesses across Ireland with fast delivery and low minimum orders."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "packaging ireland, pizza boxes, paper bags, food packaging, low moq, fast delivery"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_FloatingImages__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        position: "top-right",
                        size: "lg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_Hero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_DecorativeImages__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                position: "header"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_PromoBanner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_SectionDivider__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                variant: "default"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_FloatingImages__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        position: "center-left",
                        size: "md"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_ProductShowcase__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_SectionDivider__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                variant: "blue"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_USPCards__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                data: uspData
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_DecorativeImages__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        position: "section1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_PrintingTimes__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_SectionDivider__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                variant: "dark"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_ImageGallery__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_SectionDivider__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                variant: "default"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_DesignServices__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_SectionDivider__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                variant: "blue"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_FloatingImages__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        position: "bottom-right",
                        size: "md"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_Services__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_DecorativeImages__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                position: "section2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_AboutUs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_FloatingImages__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        position: "bottom-left",
                        size: "sm"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_DecorativeImages__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        position: "footer"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_CTA__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}

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

/***/ }),

/***/ 4114:
/***/ ((module) => {

module.exports = import("react-icons/ri");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,196,664,636,675,4,637], () => (__webpack_exec__(6030)));
module.exports = __webpack_exports__;

})();