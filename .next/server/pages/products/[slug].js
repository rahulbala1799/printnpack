"use strict";
(() => {
var exports = {};
exports.id = 905;
exports.ids = [905];
exports.modules = {

/***/ 3197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/products/[slug].js
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
  "default": () => (_slug_),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.js
var _document = __webpack_require__(2638);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(5225);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/layout/Layout.js + 5 modules
var Layout = __webpack_require__(869);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./data/products.js
var products = __webpack_require__(6168);
;// CONCATENATED MODULE: ./components/PaperOptionsExplorer.js




const PaperOptionsExplorer = ({ paperWeights, paperFinishes, laminationOptions })=>{
    const [activeTab, setActiveTab] = (0,external_react_.useState)("configurator");
    const [selectedWeight, setSelectedWeight] = (0,external_react_.useState)("170gsm");
    const [selectedFinish, setSelectedFinish] = (0,external_react_.useState)("Silk");
    const [selectedLamination, setSelectedLamination] = (0,external_react_.useState)("No Lamination");
    // Get the currently selected options
    const currentWeight = paperWeights?.find((w)=>w.weight === selectedWeight) || paperWeights?.[2];
    const currentFinish = paperFinishes?.find((f)=>f.name === selectedFinish) || paperFinishes?.[1];
    const currentLamination = laminationOptions?.find((l)=>l.name === selectedLamination) || laminationOptions?.[0];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mb-12",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mb-8 flex border-b border-gray-200",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: `py-2 px-4 font-medium text-sm mr-2 ${activeTab === "configurator" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`,
                        onClick: ()=>setActiveTab("configurator"),
                        children: "Paper Configurator"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: `py-2 px-4 font-medium text-sm ${activeTab === "weights" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`,
                        onClick: ()=>setActiveTab("weights"),
                        children: "Weight Comparison"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: `py-2 px-4 font-medium text-sm ${activeTab === "finishes" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`,
                        onClick: ()=>setActiveTab("finishes"),
                        children: "Finish Options"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: `py-2 px-4 font-medium text-sm ${activeTab === "chart" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`,
                        onClick: ()=>setActiveTab("chart"),
                        children: "Comparison Chart"
                    })
                ]
            }),
            activeTab === "configurator" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-md mb-8",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        className: "text-xl font-bold text-gray-800 mb-6",
                        children: "Build Your Perfect Paper Combination"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white p-5 rounded-lg shadow-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "font-semibold text-gray-800 mb-3",
                                        children: "1. Select Paper Weight"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "space-y-2",
                                        children: paperWeights?.map((option)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                onClick: ()=>setSelectedWeight(option.weight),
                                                className: `w-full text-left px-3 py-2 rounded-md text-sm ${selectedWeight === option.weight ? "bg-blue-50 text-blue-700 font-medium border border-blue-200" : "bg-gray-50 hover:bg-gray-100 text-gray-700"}`,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: option.weight
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-xs bg-gray-200 px-2 py-1 rounded-full",
                                                            children: option.category
                                                        })
                                                    ]
                                                })
                                            }, option.weight))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white p-5 rounded-lg shadow-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "font-semibold text-gray-800 mb-3",
                                        children: "2. Select Paper Finish"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "space-y-2",
                                        children: paperFinishes?.map((finish)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                onClick: ()=>setSelectedFinish(finish.name),
                                                className: `w-full text-left px-3 py-2 rounded-md text-sm ${selectedFinish === finish.name ? "bg-blue-50 text-blue-700 font-medium border border-blue-200" : "bg-gray-50 hover:bg-gray-100 text-gray-700"}`,
                                                children: finish.name
                                            }, finish.name))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white p-5 rounded-lg shadow-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "font-semibold text-gray-800 mb-3",
                                        children: "3. Select Lamination (Optional)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "space-y-2",
                                        children: laminationOptions?.map((lamination)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                onClick: ()=>setSelectedLamination(lamination.name),
                                                className: `w-full text-left px-3 py-2 rounded-md text-sm ${selectedLamination === lamination.name ? "bg-blue-50 text-blue-700 font-medium border border-blue-200" : "bg-gray-50 hover:bg-gray-100 text-gray-700"}`,
                                                children: lamination.name
                                            }, lamination.name))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mt-8 bg-white p-6 rounded-lg shadow-md",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                className: "font-bold text-lg text-gray-800 mb-4",
                                children: "Your Selected Paper"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-wrap md:flex-nowrap gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full md:w-2/3",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-gradient-to-r from-blue-50 to-gray-50 p-4 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-lg font-semibold text-gray-900 mb-1",
                                                    children: [
                                                        selectedWeight,
                                                        " ",
                                                        selectedFinish,
                                                        " ",
                                                        selectedLamination !== "No Lamination" ? `with ${selectedLamination}` : ""
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-sm text-gray-600 mb-4",
                                                    children: [
                                                        currentWeight?.description,
                                                        " ",
                                                        currentFinish?.description,
                                                        selectedLamination !== "No Lamination" ? ` ${currentLamination?.description}` : ""
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                    className: "text-xs font-semibold uppercase text-gray-500 mb-1",
                                                                    children: "WEIGHT"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        currentWeight?.category,
                                                                        " (",
                                                                        selectedWeight,
                                                                        ")"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                    className: "text-xs font-semibold uppercase text-gray-500 mb-1",
                                                                    children: "FINISH"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "text-sm",
                                                                    children: selectedFinish
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                    className: "text-xs font-semibold uppercase text-gray-500 mb-1",
                                                                    children: "PROTECTION"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "text-sm",
                                                                    children: selectedLamination
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mt-6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                            className: "text-xs font-semibold uppercase text-gray-500 mb-2",
                                                            children: "BEST FOR"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-sm text-gray-700",
                                                            children: currentWeight?.best_for
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mt-6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                            className: "text-xs font-semibold uppercase text-gray-500 mb-2",
                                                            children: "FEATURES"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: currentWeight?.features?.map((feature, idx)=>/*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded",
                                                                    children: feature
                                                                }, idx))
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "w-full md:w-1/3 flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "relative w-full max-w-[200px] aspect-[1/1.414] mb-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: `absolute inset-0 shadow-md rounded-md ${selectedFinish === "Gloss" ? "bg-white" : selectedFinish === "Matt" ? "bg-gray-50" : selectedFinish === "Silk" ? "bg-blue-50" : "bg-yellow-50"} ${selectedLamination.includes("Gloss") ? "ring-4 ring-blue-200" : selectedLamination.includes("Matt") ? "ring-4 ring-gray-200" : ""}`,
                                                    style: {
                                                        transform: `perspective(1000px) rotateY(15deg)`,
                                                        boxShadow: selectedWeight === "350gsm" ? "0 10px 25px -5px rgba(0, 0, 0, 0.2)" : selectedWeight === "300gsm" ? "0 8px 20px -5px rgba(0, 0, 0, 0.18)" : selectedWeight === "250gsm" ? "0 6px 15px -5px rgba(0, 0, 0, 0.15)" : selectedWeight === "170gsm" ? "0 4px 10px -5px rgba(0, 0, 0, 0.12)" : selectedWeight === "130gsm" ? "0 2px 5px -3px rgba(0, 0, 0, 0.1)" : "0 1px 3px -2px rgba(0, 0, 0, 0.08)"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "absolute inset-0 flex items-center justify-center",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-2xl font-bold text-gray-400 opacity-20",
                                                            children: "A5"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "w-full flex justify-center items-center mb-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "h-6 w-[150px] bg-gray-200 rounded-full relative",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: `h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-500`,
                                                            style: {
                                                                width: selectedWeight === "350gsm" ? "100%" : selectedWeight === "300gsm" ? "85%" : selectedWeight === "250gsm" ? "70%" : selectedWeight === "170gsm" ? "50%" : selectedWeight === "130gsm" ? "35%" : "15%"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute inset-0 flex items-center justify-center",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-xs font-medium text-white",
                                                                children: "Thickness"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "text-xs text-gray-500",
                                                children: [
                                                    "Weight: ",
                                                    selectedWeight
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mt-6 flex justify-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors",
                                    children: "Request This Paper Sample"
                                })
                            })
                        ]
                    })
                ]
            }),
            activeTab === "weights" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-white rounded-lg p-6 shadow-md mb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "font-semibold text-gray-700 mb-6",
                        children: "Paper Weight Comparison"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative h-20 flex items-center mb-8 overflow-hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute h-20 w-full bg-gradient-to-r from-blue-50 to-blue-100 rounded-md"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "z-10 w-full flex justify-between px-4",
                                children: paperWeights?.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: `h-${index + 2} w-12 bg-blue-${300 + index * 100} rounded-full mb-1`,
                                                style: {
                                                    height: `${(index + 1) * 4 + 8}px`
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "text-xs font-medium text-gray-700",
                                                children: option.weight
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "text-xs text-gray-500",
                                                children: option.category
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-8",
                        children: paperWeights?.map((weight, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex justify-between items-start mb-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                className: "font-bold text-gray-800",
                                                children: weight.weight
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full",
                                                children: weight.category
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-sm text-gray-600 mb-3",
                                        children: weight.description
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                children: "Best for:"
                                            }),
                                            " ",
                                            weight.best_for
                                        ]
                                    })
                                ]
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mt-8 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: "italic",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                    children: "GSM"
                                }),
                                " (grams per square meter) measures paper thickness and weight. Higher GSM indicates thicker, more substantial paper. All our weights can be combined with any paper finish to suit your specific needs."
                            ]
                        })
                    })
                ]
            }),
            activeTab === "finishes" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-white rounded-lg p-6 shadow-md mb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "font-semibold text-gray-700 mb-6",
                        children: "Paper Finish Comparison"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                        children: paperFinishes?.map((finish, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-gray-50 rounded-lg p-5 border border-gray-200",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "h-24 bg-white rounded-lg mb-4 border border-gray-200 flex items-center justify-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: `w-3/4 h-3/4 rounded-md shadow-sm ${finish.name === "Gloss" ? "bg-gradient-to-br from-white to-gray-100" : finish.name === "Matt" ? "bg-gray-200" : finish.name === "Silk" ? "bg-blue-50" : "bg-yellow-50"}`
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "font-bold text-lg text-gray-800 mb-2",
                                        children: finish.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-sm text-gray-600 mb-3",
                                        children: finish.description
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white p-3 rounded-md",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                className: "font-medium text-sm text-gray-700 mb-2",
                                                children: "Benefits:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-sm text-gray-600",
                                                children: finish.benefits
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                className: "font-medium text-sm text-gray-700 mb-1",
                                                children: "Best For:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-sm text-gray-600",
                                                children: finish.best_for
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mt-6 text-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-xs text-blue-700",
                                            children: "Available with all paper weights (90gsm - 350gsm)"
                                        })
                                    })
                                ]
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "font-semibold text-gray-700 mb-4 mt-8",
                        children: "Lamination Options"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: laminationOptions?.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "font-bold text-gray-800 mb-2",
                                        children: option.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-sm text-gray-600 mb-3",
                                        children: option.description
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-green-50 p-2 rounded",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "font-medium text-green-800 mb-1",
                                                        children: "Pros:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-green-700",
                                                        children: option.pros
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-red-50 p-2 rounded",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "font-medium text-red-800 mb-1",
                                                        children: "Cons:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-red-700",
                                                        children: option.cons
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            activeTab === "chart" && /*#__PURE__*/ jsx_runtime.jsx(PaperComparisonChart, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mt-12 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-inner",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col md:flex-row md:items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "md:flex-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "font-bold text-xl text-blue-900 mb-3",
                                    children: "Not sure which paper to choose?"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-blue-800 mb-4 md:mb-0",
                                    children: "Request our premium sample pack featuring all paper weights and finishes to touch and feel the quality before placing your order."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "md:ml-8 flex flex-col sm:flex-row gap-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    href: "/contact?subject=Paper Sample Request",
                                    className: "inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-medium transition-colors shadow-md",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                            className: "w-5 h-5 mr-2",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                            })
                                        }),
                                        "Get Free Samples"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    onClick: ()=>setActiveTab("chart"),
                                    className: "inline-flex items-center justify-center text-blue-700 bg-white hover:bg-blue-50 px-5 py-3 rounded-lg font-medium transition-colors border border-blue-200 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                            className: "w-5 h-5 mr-2",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            })
                                        }),
                                        "Compare All Papers"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
// Paper Comparison Chart Component
const PaperComparisonChart = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "paper-comparison-chart",
        className: "bg-white rounded-lg p-6 shadow-md mb-6",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                className: "text-xl font-bold mb-6",
                children: "Paper Weight & Finish Comparison Chart"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                    className: "min-w-full bg-white border border-gray-200 rounded-lg",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("thead", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                className: "bg-gray-50",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("th", {
                                        className: "py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b",
                                        children: "Weight"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("th", {
                                        className: "py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b",
                                        children: "Category"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("th", {
                                        className: "py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b",
                                        children: "Available Finishes"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("th", {
                                        className: "py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b",
                                        children: "Thickness Feel"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("th", {
                                        className: "py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b",
                                        children: "Best For"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("tbody", {
                            className: "divide-y divide-gray-200",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm font-medium text-gray-900",
                                            children: "90gsm"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Ultra-Light"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "All finishes available"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Very thin, like printer paper"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Mass distribution, inserts"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm font-medium text-gray-900",
                                            children: "130gsm"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Light"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "All finishes available"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Thin but sturdy"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Flyers, promotional materials"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm font-medium text-gray-900",
                                            children: "170gsm"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Medium"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "All finishes available"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Substantial, professional"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Brochures, menus, leaflets"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm font-medium text-gray-900",
                                            children: "250gsm"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Heavy"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "All finishes available"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Thick, card-like"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Premium catalogs, covers"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm font-medium text-gray-900",
                                            children: "300gsm"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Premium"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "All finishes available"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Very thick, luxury feel"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Luxury brochures, folders"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm font-medium text-gray-900",
                                            children: "350gsm"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Ultra Premium"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "All finishes available"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Card-like, extremely durable"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("td", {
                                            className: "py-3 px-4 text-sm text-gray-500",
                                            children: "Premium marketing materials"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mt-6 p-4 bg-blue-50 rounded-lg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex-shrink-0 pt-1",
                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                className: "h-5 w-5 text-blue-500",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z",
                                    clipRule: "evenodd"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "ml-3",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "text-sm text-blue-700",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                        children: "Important Note:"
                                    }),
                                    " All paper weights can be combined with any finish option (Uncoated, Silk, Gloss, Matt). Additionally, any paper weight and finish combination can have lamination applied for enhanced durability and protection."
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_PaperOptionsExplorer = (PaperOptionsExplorer);

;// CONCATENATED MODULE: ./components/PizzaBoxExplorer.js



const PizzaBoxExplorer = ()=>{
    const [activeSize, setActiveSize] = (0,external_react_.useState)("10inch");
    const [animating, setAnimating] = (0,external_react_.useState)(false);
    // Define pizza box sizes with their dimensions and info
    const boxSizes = [
        {
            id: "7inch",
            name: '7"',
            dimension: '7" (18cm)',
            height: "4.5cm",
            bestFor: "Personal pizzas, dessert pizzas, kids meals",
            capacity: "Single small pizza (6-7 inches)",
            boxColor: "bg-amber-100",
            labelColor: "text-amber-800",
            borderColor: "border-amber-300",
            accent: "from-amber-500 to-amber-700"
        },
        {
            id: "9inch",
            name: '9"',
            dimension: '9" (23cm)',
            height: "4.5cm",
            bestFor: "Small pizzas, specialty appetizer pizzas",
            capacity: "Single small pizza (8-9 inches)",
            boxColor: "bg-amber-50",
            labelColor: "text-amber-900",
            borderColor: "border-amber-400",
            accent: "from-amber-600 to-amber-800"
        },
        {
            id: "10inch",
            name: '10"',
            dimension: '10" (25cm)',
            height: "4.5cm",
            bestFor: "Medium pizzas, most popular size for delivery",
            capacity: "Single medium pizza (9-10 inches)",
            boxColor: "bg-orange-50",
            labelColor: "text-orange-900",
            borderColor: "border-orange-400",
            accent: "from-orange-600 to-orange-800"
        },
        {
            id: "12inch",
            name: '12"',
            dimension: '12" (30.5cm)',
            height: "5cm",
            bestFor: "Large pizzas, family size pizzas",
            capacity: "Single large pizza (11-12 inches)",
            boxColor: "bg-orange-100",
            labelColor: "text-orange-800",
            borderColor: "border-orange-500",
            accent: "from-orange-700 to-red-700"
        },
        {
            id: "14inch",
            name: '14"',
            dimension: '14" (35.5cm)',
            height: "5cm",
            bestFor: "Extra-large pizzas, party size pizzas",
            capacity: "Single extra-large pizza (13-14 inches)",
            boxColor: "bg-red-100",
            labelColor: "text-red-800",
            borderColor: "border-red-500",
            accent: "from-red-700 to-red-900"
        }
    ];
    // Get current box
    const currentBox = boxSizes.find((box)=>box.id === activeSize);
    // Handle size click with animation
    const handleSizeClick = (size)=>{
        if (size === activeSize) return;
        setAnimating(true);
        setActiveSize(size);
        setTimeout(()=>setAnimating(false), 600);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mb-16",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mb-6 sm:mb-8 text-center px-2",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        className: "text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800",
                        children: "Pizza Box Size Explorer"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-600 max-w-3xl mx-auto text-sm sm:text-base",
                        children: "Choose from 5 different box sizes to perfectly fit your pizza offerings. Each eco-friendly kraft box can be customized with your branding."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "relative mb-6 sm:mb-8",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "flex justify-center space-x-1 sm:space-x-2 md:space-x-4 overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar",
                    children: boxSizes.map((size)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            onClick: ()=>handleSizeClick(size.id),
                            className: `relative min-w-0 px-3 sm:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 transform ${activeSize === size.id ? `text-white bg-gradient-to-r ${size.accent} shadow-lg scale-105 sm:scale-110` : "text-gray-600 bg-gray-100 hover:bg-gray-200"}`,
                            children: [
                                size.name,
                                activeSize === size.id && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-yellow-400 text-xs font-bold rounded-full w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center animate-pulse",
                                    children: "✓"
                                })
                            ]
                        }, size.id))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 mb-8",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "lg:col-span-3 bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-md",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "relative aspect-square max-w-sm mx-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: `absolute inset-0 ${currentBox.boxColor} ${currentBox.borderColor} border-2 rounded-lg shadow-xl transition-all duration-500 transform ${animating ? "scale-90 rotate-3 opacity-0" : "scale-100 rotate-0 opacity-100"}`,
                                style: {
                                    transformStyle: "preserve-3d",
                                    perspective: "1000px",
                                    transform: `perspective(1000px) rotateX(20deg) rotateZ(-5deg)`
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "absolute inset-0 flex flex-col items-center justify-center",
                                        style: {
                                            transformStyle: "preserve-3d",
                                            transform: "translateZ(2px)"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute inset-0 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative w-2/3 h-2/3 flex items-center justify-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute inset-0 bg-blue-600 opacity-10 rounded-full transform -rotate-12"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "text-blue-800 font-extrabold text-2xl sm:text-3xl md:text-4xl transform -rotate-12",
                                                            children: [
                                                                "print",
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-orange-600",
                                                                    children: "N"
                                                                }),
                                                                "pack"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute bottom-4 right-4 bg-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-bold text-xs sm:text-sm shadow-md transform rotate-3",
                                                children: currentBox.dimension
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: `absolute left-0 right-0 bottom-0 h-6 ${currentBox.boxColor} ${currentBox.borderColor} border-t-2 rounded-b-lg transform origin-top`,
                                        style: {
                                            transform: "rotateX(-90deg) translateZ(-10px)",
                                            backgroundColor: "#d4a76a"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "absolute top-1/4 w-full text-center text-xs font-medium text-amber-800 px-2 truncate",
                                            children: [
                                                "Eco-Friendly • Kraft Material • ",
                                                currentBox.height,
                                                " Height"
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "lg:col-span-2 flex flex-col space-y-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: `bg-gradient-to-r ${currentBox.accent} text-white p-4 rounded-xl shadow-md`,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                        className: "text-xl font-bold mb-2",
                                        children: [
                                            currentBox.name,
                                            " Pizza Box"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "text-white/90 text-sm",
                                        children: [
                                            "Dimensions: ",
                                            currentBox.dimension,
                                            " \xd7 ",
                                            currentBox.dimension,
                                            " \xd7 ",
                                            currentBox.height
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex-1 grid grid-cols-1 gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white p-4 rounded-xl border border-gray-200 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                                                className: "font-bold text-gray-700 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "bg-blue-100 text-blue-700 w-6 h-6 inline-flex items-center justify-center rounded-full mr-2",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            })
                                                        })
                                                    }),
                                                    "Best For"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-600 pl-8",
                                                children: currentBox.bestFor
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white p-4 rounded-xl border border-gray-200 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                                                className: "font-bold text-gray-700 mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "bg-green-100 text-green-700 w-6 h-6 inline-flex items-center justify-center rounded-full mr-2",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                            })
                                                        })
                                                    }),
                                                    "Features"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "text-gray-600 pl-8 space-y-1 text-sm sm:text-base",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: "✓ Recycled kraft corrugated cardboard"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: "✓ Stackable design for easy storage"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: "✓ Customizable with your branding"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: "✓ Excellent heat retention"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: "✓ Eco-friendly and biodegradable"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-8 bg-blue-50 rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mb-4 md:mb-0 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                className: "text-xl font-bold text-blue-900",
                                children: "Need Custom Sizes?"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-blue-700 text-sm sm:text-base",
                                children: "We can produce custom box sizes tailored to your specific requirements."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: "w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-lg font-bold transition-colors flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                className: "w-5 h-5 mr-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                })
                            }),
                            "Request Quote"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_PizzaBoxExplorer = (PizzaBoxExplorer);

;// CONCATENATED MODULE: ./pages/products/[slug].js











const ProductDetail = ({ product, relatedProducts })=>{
    const [isClient, setIsClient] = (0,external_react_.useState)(false);
    const [isDropdownOpen, setIsDropdownOpen] = (0,external_react_.useState)(false);
    const [fallbackImage, setFallbackImage] = (0,external_react_.useState)(false);
    const [currentImageIndex, setCurrentImageIndex] = (0,external_react_.useState)(0);
    const router = (0,router_.useRouter)();
    // Add reference for the SOS hero section
    const sosHeroRef = (0,external_react_.useRef)(null);
    // Tab view toggles
    const [activeTab, setActiveTab] = (0,external_react_.useState)("description");
    (0,external_react_.useEffect)(()=>{
        setIsClient(true);
        // Auto rotate images if product exists and has images
        if (product && product.images && product.images.length > 1) {
            const interval = setInterval(()=>{
                setCurrentImageIndex((prev)=>(prev + 1) % product.images.length);
            }, 3000);
            return ()=>clearInterval(interval);
        }
    }, [
        product
    ]);
    // Parallax scroll effect for SOS Grab Bags
    (0,external_react_.useEffect)(()=>{
        if (product && product.id === "sos-grab-bags") {
            const handleScroll = ()=>{
                if (sosHeroRef.current) {
                    const scrollPosition = window.scrollY;
                    const parallaxElements = sosHeroRef.current.querySelectorAll("[data-parallax]");
                    parallaxElements.forEach((el)=>{
                        const speed = parseFloat(el.getAttribute("data-parallax") || 0.1);
                        el.style.transform = `translateY(${scrollPosition * speed}px)`;
                    });
                    // Update parallax variable for background textures
                    document.documentElement.style.setProperty("--parallax-y", `${scrollPosition * 0.05}px`);
                }
            };
            window.addEventListener("scroll", handleScroll);
            return ()=>window.removeEventListener("scroll", handleScroll);
        }
    }, [
        product
    ]);
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container mx-auto px-4 py-8",
            children: "Loading..."
        });
    }
    if (!product) {
        return /*#__PURE__*/ jsx_runtime.jsx(Layout/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: "Product Not Found"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: "Sorry, the product you are looking for does not exist."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/products",
                        className: "text-blue-600 hover:underline mt-4 inline-block",
                        children: "Browse all products"
                    })
                ]
            })
        });
    }
    // If the page is not yet generated, this will be displayed initially until getStaticProps() runs
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime.jsx(Layout/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container mx-auto px-4 py-12",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "flex justify-center items-center h-96",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"
                    })
                })
            })
        });
    }
    // If product not found
    if (!product) {
        return /*#__PURE__*/ jsx_runtime.jsx(Layout/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mx-auto px-4 py-12 text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "text-3xl font-bold mb-6",
                        children: "Product Not Found"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "mb-8",
                        children: "The product you're looking for doesn't exist or has been removed."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/products",
                        className: "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg",
                        children: "Browse All Products"
                    })
                ]
            })
        });
    }
    // Create structured data for product
    const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.images[0],
        "brand": {
            "@type": "Brand",
            "name": "PrintNPack"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "price": product.price.replace(/[^\d.-]/g, ""),
            "availability": "https://schema.org/InStock"
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        className: "jsx-eb5425553c3def0a",
                        children: `${product.name} - Premium Packaging Solutions | PrintNPack`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: `${product.description} Explore our high-quality ${product.name} with custom branding options, multiple sizes, and fast delivery. Perfect for restaurants and retail businesses.`,
                        className: "jsx-eb5425553c3def0a"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: `${product.name}, packaging solutions, food packaging, retail packaging, custom packaging, sustainable packaging, branded packaging`,
                        className: "jsx-eb5425553c3def0a"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: `${product.name} - PrintNPack`,
                        className: "jsx-eb5425553c3def0a"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: product.description,
                        className: "jsx-eb5425553c3def0a"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:image",
                        content: product.images[0],
                        className: "jsx-eb5425553c3def0a"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:type",
                        content: "product",
                        className: "jsx-eb5425553c3def0a"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:url",
                        content: `https://printnpack.com/products/${product.id}`,
                        className: "jsx-eb5425553c3def0a"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(structuredData)
                        },
                        className: "jsx-eb5425553c3def0a"
                    }),
                    jsx_runtime.jsx((style_default()), {
                        id: "eb5425553c3def0a",
                        children: '.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.hide-scrollbar::-webkit-scrollbar{display:none}@-webkit-keyframes zoomIn{from{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.2);transform:scale(1.2)}}@-moz-keyframes zoomIn{from{-moz-transform:scale(1);transform:scale(1)}to{-moz-transform:scale(1.2);transform:scale(1.2)}}@-o-keyframes zoomIn{from{-o-transform:scale(1);transform:scale(1)}to{-o-transform:scale(1.2);transform:scale(1.2)}}@keyframes zoomIn{from{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}}.zoom-animation{-webkit-animation:zoomIn.3s ease-out forwards;-moz-animation:zoomIn.3s ease-out forwards;-o-animation:zoomIn.3s ease-out forwards;animation:zoomIn.3s ease-out forwards}@media(max-width:640px){.thumbnail-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;padding:.5rem 0}.thumbnail-item{scroll-snap-align:center;-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}}.css-placeholder{background:-webkit-linear-gradient(315deg,#3182ce 25%,#4299e1 25%,#4299e1 50%,#3182ce 50%,#3182ce 75%,#4299e1 75%);background:-moz-linear-gradient(315deg,#3182ce 25%,#4299e1 25%,#4299e1 50%,#3182ce 50%,#3182ce 75%,#4299e1 75%);background:-o-linear-gradient(315deg,#3182ce 25%,#4299e1 25%,#4299e1 50%,#3182ce 50%,#3182ce 75%,#4299e1 75%);background:linear-gradient(135deg,#3182ce 25%,#4299e1 25%,#4299e1 50%,#3182ce 50%,#3182ce 75%,#4299e1 75%);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:white;font-weight:bold;text-shadow:1px 1px 3px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 0 1px rgba(255,255,255,.2);-moz-box-shadow:inset 0 0 0 1px rgba(255,255,255,.2);box-shadow:inset 0 0 0 1px rgba(255,255,255,.2)}.css-placeholder.banner{background:-webkit-linear-gradient(45deg,#2c5282 25%,#2b6cb0 25%,#2b6cb0 50%,#2c5282 50%,#2c5282 75%,#2b6cb0 75%);background:-moz-linear-gradient(45deg,#2c5282 25%,#2b6cb0 25%,#2b6cb0 50%,#2c5282 50%,#2c5282 75%,#2b6cb0 75%);background:-o-linear-gradient(45deg,#2c5282 25%,#2b6cb0 25%,#2b6cb0 50%,#2c5282 50%,#2c5282 75%,#2b6cb0 75%);background:linear-gradient(45deg,#2c5282 25%,#2b6cb0 25%,#2b6cb0 50%,#2c5282 50%,#2c5282 75%,#2b6cb0 75%);-webkit-background-size:60px 60px;-moz-background-size:60px 60px;-o-background-size:60px 60px;background-size:60px 60px}.css-placeholder.poster{background:-webkit-linear-gradient(45deg,#3182ce 25%,#4299e1 25%,#4299e1 50%,#3182ce 50%,#3182ce 75%,#4299e1 75%);background:-moz-linear-gradient(45deg,#3182ce 25%,#4299e1 25%,#4299e1 50%,#3182ce 50%,#3182ce 75%,#4299e1 75%);background:-o-linear-gradient(45deg,#3182ce 25%,#4299e1 25%,#4299e1 50%,#3182ce 50%,#3182ce 75%,#4299e1 75%);background:linear-gradient(45deg,#3182ce 25%,#4299e1 25%,#4299e1 50%,#3182ce 50%,#3182ce 75%,#4299e1 75%);-webkit-background-size:20px 20px;-moz-background-size:20px 20px;-o-background-size:20px 20px;background-size:20px 20px}.css-placeholder::after{content:"Wide Format Print";font-size:1.2rem}'
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-gray-100 py-3 border-b border-gray-200",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center text-sm text-gray-600",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                className: "hover:text-blue-600",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "mx-2",
                                children: "/"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/products",
                                className: "hover:text-blue-600",
                                children: "Products"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "mx-2",
                                children: "/"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "text-gray-900 font-medium",
                                children: product.name
                            })
                        ]
                    })
                })
            }),
            product && product.id === "brown-pizza-boxes" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative overflow-hidden bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 border-b border-gray-200",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 opacity-20",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            className: "h-full w-full",
                            viewBox: "0 0 100 100",
                            preserveAspectRatio: "none",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("pattern", {
                                        id: "pizza-grid",
                                        width: "10",
                                        height: "10",
                                        patternUnits: "userSpaceOnUse",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            d: "M 10 0 L 0 0 0 10",
                                            fill: "none",
                                            stroke: "white",
                                            strokeWidth: "0.5",
                                            opacity: "0.3"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                    width: "100",
                                    height: "100",
                                    fill: "url(#pizza-grid)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container mx-auto px-4 py-8 md:py-16 relative z-10",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-white order-2 md:order-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-4 md:mb-6",
                                            children: product.category
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight",
                                            children: [
                                                "Eco-Friendly ",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-yellow-300",
                                                    children: "Pizza Boxes"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                                    className: "hidden sm:block"
                                                }),
                                                " With Style"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-lg md:text-xl text-amber-100 mb-6 md:mb-8 max-w-lg",
                                            children: "Premium kraft pizza boxes that keep your delicious creations hot while showcasing your commitment to sustainability."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col sm:flex-row gap-3 md:gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "#pizza-box-options",
                                                    className: "w-full sm:w-auto text-center inline-flex justify-center items-center bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-3 rounded-lg font-bold transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-5 h-5 mr-2",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                            })
                                                        }),
                                                        "Explore Sizes"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/contact?subject=Pizza Box Quote",
                                                    className: "w-full sm:w-auto text-center inline-flex justify-center items-center bg-transparent hover:bg-white/10 text-white border-2 border-white px-4 sm:px-6 py-3 rounded-lg font-bold transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-5 h-5 mr-2",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                            })
                                                        }),
                                                        "Request Quote"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-6 md:mt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm text-amber-200 block mb-2 md:inline md:mr-3",
                                                    children: "Available sizes: "
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "flex flex-wrap items-center gap-2",
                                                    children: [
                                                        '7"',
                                                        '9"',
                                                        '10"',
                                                        '12"',
                                                        '14"'
                                                    ].map((size, idx)=>/*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "inline-block px-2 py-1 rounded-full text-xs font-bold bg-amber-900 text-amber-300 border border-amber-600",
                                                            children: size
                                                        }, idx))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative h-64 sm:h-80 md:h-auto order-1 md:order-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "relative aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto",
                                            children: product.images.map((img, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: `absolute inset-0 transition-all duration-1000 transform ${currentImageIndex === idx ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-6"}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "relative w-full h-full rounded-2xl overflow-hidden shadow-2xl",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: img,
                                                                alt: `${product.name} - Image ${idx + 1}`,
                                                                fill: true,
                                                                className: "object-cover",
                                                                priority: idx === 0
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute -top-3 -right-3 md:-top-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 bg-orange-500 rounded-full opacity-80 animate-pulse"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full opacity-70 animate-bounce"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-white text-amber-800 px-2 py-0.5 md:px-3 md:py-1 rounded-full font-bold shadow-lg transform -rotate-3 text-xs md:text-sm",
                                                            children: idx === 0 ? '10"' : idx === 1 ? '14"' : idx === 2 ? '7"' : '12"'
                                                        })
                                                    ]
                                                }, idx))
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5",
                                            children: product.images.map((_, idx)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    onClick: ()=>setCurrentImageIndex(idx),
                                                    className: `w-3 h-3 rounded-full transition-all ${currentImageIndex === idx ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`,
                                                    "aria-label": `View image ${idx + 1}`
                                                }, idx))
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900"
                    })
                ]
            }),
            product && product.id === "white-pizza-boxes" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative overflow-hidden bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 border-b border-gray-200",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 opacity-20",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            className: "h-full w-full",
                            viewBox: "0 0 100 100",
                            preserveAspectRatio: "none",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("pattern", {
                                        id: "white-pizza-grid",
                                        width: "10",
                                        height: "10",
                                        patternUnits: "userSpaceOnUse",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            d: "M 10 0 L 0 0 0 10",
                                            fill: "none",
                                            stroke: "blue",
                                            strokeWidth: "0.5",
                                            opacity: "0.3"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                    width: "100",
                                    height: "100",
                                    fill: "url(#white-pizza-grid)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container mx-auto px-4 py-8 md:py-16 relative z-10",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-gray-800 order-2 md:order-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "inline-block bg-blue-600/20 backdrop-blur-sm text-blue-900 px-4 py-1 rounded-full text-sm font-medium mb-4 md:mb-6",
                                            children: product.category
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight",
                                            children: [
                                                "Premium ",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-blue-600",
                                                    children: "Pizza Boxes"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                                    className: "hidden sm:block"
                                                }),
                                                " In Clean White"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-lg",
                                            children: "Elegant white pizza boxes that keep your delicious creations hot while providing a clean, professional canvas for your brand."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col sm:flex-row gap-3 md:gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "#size-comparison",
                                                    className: "w-full sm:w-auto text-center inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-lg font-bold transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-5 h-5 mr-2",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                            })
                                                        }),
                                                        "Explore Sizes"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/contact?subject=White Pizza Box Quote",
                                                    className: "w-full sm:w-auto text-center inline-flex justify-center items-center bg-transparent hover:bg-blue-600/10 text-blue-600 border-2 border-blue-600 px-4 sm:px-6 py-3 rounded-lg font-bold transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-5 h-5 mr-2",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                            })
                                                        }),
                                                        "Request Quote"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-6 md:mt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm text-blue-800 block mb-2 md:inline md:mr-3",
                                                    children: "Available sizes: "
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "flex flex-wrap items-center gap-2",
                                                    children: [
                                                        '7"',
                                                        '9"',
                                                        '10"',
                                                        '12"',
                                                        '14"'
                                                    ].map((size, idx)=>/*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "inline-block px-2 py-1 rounded-full text-xs font-bold bg-white text-blue-600 border border-blue-200 shadow-sm",
                                                            children: size
                                                        }, idx))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative h-64 sm:h-80 md:h-auto order-1 md:order-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "relative aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto",
                                            children: product.images.map((img, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: `absolute inset-0 transition-all duration-1000 transform ${currentImageIndex === idx ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-6"}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                src: img,
                                                                alt: `${product.name} - Image ${idx + 1}`,
                                                                fill: true,
                                                                className: "object-cover",
                                                                priority: idx === 0
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute -top-3 -right-3 md:-top-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full opacity-80 animate-pulse"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 bg-blue-300 rounded-full opacity-70 animate-bounce"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-white text-blue-800 px-2 py-0.5 md:px-3 md:py-1 rounded-full font-bold shadow-lg transform -rotate-3 text-xs md:text-sm",
                                                            children: idx % 5 === 0 ? '7"' : idx % 5 === 1 ? '9"' : idx % 5 === 2 ? '10"' : idx % 5 === 3 ? '12"' : '14"'
                                                        })
                                                    ]
                                                }, idx))
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5",
                                            children: product.images.map((_, idx)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    onClick: ()=>setCurrentImageIndex(idx),
                                                    className: `w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentImageIndex === idx ? "bg-blue-600 scale-125" : "bg-blue-300 hover:bg-blue-400"}`,
                                                    "aria-label": `View image ${idx + 1}`
                                                }, idx))
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-blue-100 via-white to-blue-100"
                    })
                ]
            }),
            product && product.id === "vinyl-banners" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative overflow-hidden bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-800 border-b border-gray-200",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 opacity-20",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            className: "h-full w-full",
                            viewBox: "0 0 100 100",
                            preserveAspectRatio: "none",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("pattern", {
                                        id: "banner-grid",
                                        width: "10",
                                        height: "10",
                                        patternUnits: "userSpaceOnUse",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            d: "M 10 0 L 0 0 0 10",
                                            fill: "none",
                                            stroke: "white",
                                            strokeWidth: "0.5",
                                            opacity: "0.3"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                    width: "100",
                                    height: "100",
                                    fill: "url(#banner-grid)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container mx-auto px-4 py-12 md:py-20 relative z-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "md:hidden mb-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative h-64 rounded-xl overflow-hidden shadow-2xl mx-auto max-w-sm",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: "/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp",
                                            alt: "High-impact vinyl banner",
                                            fill: true,
                                            className: "object-cover",
                                            priority: true,
                                            sizes: "(max-width: 768px) 100vw, 50vw"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute bottom-4 left-4 right-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2",
                                                children: "OUTDOOR DURABLE"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6",
                                                children: product.category
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                                className: "text-4xl md:text-6xl font-bold mb-6 leading-tight",
                                                children: [
                                                    "Command ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-yellow-300",
                                                        children: "Attention"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                    "With High-Impact Banners"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-xl text-blue-100 mb-8 max-w-lg",
                                                children: "Weather-resistant, vibrant banners that make your message impossible to miss - indoors or outdoors."
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "flex flex-wrap gap-3 mb-8",
                                                children: product.features.slice(0, 4).map((feature, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white inline-flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-4 h-4 mr-2 text-yellow-300",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M5 13l4 4L19 7"
                                                                })
                                                            }),
                                                            feature.replace(/^(Premium |Vibrant |Custom |Reinforced )/, "")
                                                        ]
                                                    }, i))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-wrap gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "/contact",
                                                        className: "bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5 mr-2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                                })
                                                            }),
                                                            "Get Custom Quote"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "/contact?subject=Banner%20Design",
                                                        className: "bg-transparent hover:bg-white/10 text-white border-2 border-white/30 font-medium py-3 px-6 rounded-lg transition duration-300 inline-flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5 mr-2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                                })
                                                            }),
                                                            "Design Service"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "hidden md:block relative",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "relative h-[28rem] w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: "/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp",
                                                        alt: "High-impact vinyl banner",
                                                        fill: true,
                                                        className: "object-cover hover:scale-105 transition-transform duration-1000",
                                                        priority: true,
                                                        sizes: "(max-width: 1280px) 50vw, 600px"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "absolute -left-4 top-1/4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl transform -rotate-3 animate-pulse",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    className: "w-6 h-6 mr-2",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "font-semibold",
                                                                    children: "Vibrant UV Printing"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "absolute right-4 bottom-20 bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg shadow-xl transform rotate-3",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    className: "w-6 h-6 mr-2",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "font-semibold",
                                                                    children: "Weather Resistant"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg",
                                                        children: "Fast 3-Day Turnaround"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -bottom-12 -left-12 w-64 h-48 rounded-lg overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-700 border-4 border-white",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: "/ifa/product/banner/20221019_184301869688_fcc9a6_Automobiles.webp",
                                                    alt: "Automobile advertising banner",
                                                    fill: true,
                                                    className: "object-cover hover:scale-110 transition-transform duration-700"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -top-8 -right-8 w-16 h-16 rounded-full bg-yellow-400"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute bottom-24 -right-6 w-12 h-12 rounded-full bg-purple-500 opacity-70"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute bottom-0 left-0 right-0",
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            viewBox: "0 0 1200 120",
                            preserveAspectRatio: "none",
                            className: "w-full h-12 text-white",
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                                fill: "currentColor"
                            })
                        })
                    })
                ]
            }),
            product.id === "roll-up-banner-stands" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container mx-auto px-4 py-16 md:py-24",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-white space-y-6 relative z-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "text-4xl md:text-5xl font-bold leading-tight",
                                            children: "Professional Roll-Up Banner Stands"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-xl text-blue-100",
                                            children: "Make a lasting impression at your next exhibition or event with our premium quality portable display systems."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex flex-wrap gap-4 mt-8",
                                            children: [
                                                "Quick 60-second setup",
                                                "High-resolution graphics",
                                                "Lightweight & portable",
                                                "Multiple sizes available",
                                                "Includes carry case"
                                            ].map((feature, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-4 h-4 mr-2 text-blue-300",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            })
                                                        }),
                                                        feature
                                                    ]
                                                }, i))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative h-80 md:h-96 flex justify-center overflow-hidden rounded-xl shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute inset-0 flex",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/images/ifa/heroh/rollup/3.png",
                                                alt: "Professional Roll-Up Banner",
                                                fill: true,
                                                className: "object-cover"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/70 to-transparent"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 opacity-10",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            className: "h-full w-full",
                            viewBox: "0 0 100 100",
                            preserveAspectRatio: "none",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("pattern", {
                                        id: "mesh-gradient",
                                        x: "0",
                                        y: "0",
                                        width: "40",
                                        height: "40",
                                        patternUnits: "userSpaceOnUse",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                x: "0",
                                                y: "0",
                                                width: "100%",
                                                height: "100%",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M0 20 L40 20 M20 0 L20 40",
                                                stroke: "currentColor",
                                                strokeWidth: "1"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    d: "M0,0 L100,0 L100,100 L0,100 Z",
                                    fill: "url(#mesh-gradient)"
                                })
                            ]
                        })
                    })
                ]
            }),
            product.id === "posters" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 opacity-20",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            className: "h-full w-full",
                            viewBox: "0 0 100 100",
                            preserveAspectRatio: "none",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("pattern", {
                                        id: "poster-grid",
                                        width: "10",
                                        height: "10",
                                        patternUnits: "userSpaceOnUse",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            d: "M 10 0 L 0 0 0 10",
                                            fill: "none",
                                            stroke: "white",
                                            strokeWidth: "0.5",
                                            opacity: "0.5"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                    width: "100",
                                    height: "100",
                                    fill: "url(#poster-grid)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container mx-auto px-4 py-16 md:py-24 relative z-10",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-white space-y-6 relative z-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "inline-block bg-pink-500/30 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-4",
                                            children: "Premium Quality Prints"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            className: "text-4xl md:text-5xl font-bold leading-tight",
                                            children: [
                                                "Custom Posters That ",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-pink-300",
                                                    children: "Demand Attention"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-xl text-indigo-100",
                                            children: "Make your message impossible to miss with our vibrant eco-solvent poster prints on premium 170gsm and 200gsm paper."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "grid grid-cols-2 gap-4 mt-8",
                                            children: [
                                                {
                                                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                                    title: "Premium Quality",
                                                    desc: "170-200gsm paper"
                                                },
                                                {
                                                    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                                                    title: "Eco-Solvent",
                                                    desc: "Vibrant colors"
                                                },
                                                {
                                                    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
                                                    title: "Custom Sizes",
                                                    desc: "A4 to A0 & beyond"
                                                },
                                                {
                                                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                                    title: "Fast Turnaround",
                                                    desc: "1-3 business days"
                                                }
                                            ].map((feature, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center mb-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    className: "w-6 h-6 text-pink-300 group-hover:text-pink-200 transition-colors mr-2",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: feature.icon
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                    className: "font-semibold",
                                                                    children: feature.title
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-indigo-200 text-sm",
                                                            children: feature.desc
                                                        })
                                                    ]
                                                }, i))
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-wrap gap-4 mt-8",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/contact",
                                                    className: "bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1",
                                                    children: "Get Quote Now"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "#sizes",
                                                    className: "bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-5 h-5 mr-2",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                                                            })
                                                        }),
                                                        "Explore Sizes"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative h-[400px] rounded-xl overflow-hidden shadow-2xl transform rotate-3 z-10 transition-transform duration-500 hover:rotate-0 border-8 border-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: "/ifa/product/Poster/PosterPrinting-4.jpg",
                                                    alt: "Poster Printing",
                                                    fill: true,
                                                    className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-white font-semibold",
                                                        children: "Premium Poster Printing"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute top-20 -right-10 w-48 h-64 rounded-lg overflow-hidden shadow-xl transform -rotate-6 z-20 transition-transform duration-500 hover:rotate-0 border-4 border-white",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/ifa/product/Poster/1.webp",
                                                alt: "A4 Poster",
                                                fill: true,
                                                className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute -bottom-10 -left-10 w-48 h-64 rounded-lg overflow-hidden shadow-xl transform rotate-12 z-0 transition-transform duration-500 hover:rotate-0 border-4 border-white",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/ifa/product/Poster/2.webp",
                                                alt: "A3 Poster",
                                                fill: true,
                                                className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute top-10 -left-20 w-40 h-56 rounded-lg overflow-hidden shadow-xl transform -rotate-12 transition-transform duration-500 hover:rotate-0 border-4 border-white",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/ifa/product/Poster/single_poster.jpg",
                                                alt: "Single Poster",
                                                fill: true,
                                                className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute -right-2 top-0 bg-white text-indigo-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30",
                                            children: "A0 - A4 Sizes"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute bottom-8 right-8 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30 animate-pulse",
                                            children: "Custom Dimensions"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute bottom-0 left-0 right-0",
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            viewBox: "0 0 1200 120",
                            preserveAspectRatio: "none",
                            className: "w-full h-12 text-white",
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                                fill: "currentColor"
                            })
                        })
                    })
                ]
            }),
            product && product.id === "custom-posters" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 border-b border-gray-200",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 opacity-20",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            className: "h-full w-full",
                            viewBox: "0 0 100 100",
                            preserveAspectRatio: "none",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("pattern", {
                                        id: "leaflet-grid",
                                        width: "10",
                                        height: "10",
                                        patternUnits: "userSpaceOnUse",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            d: "M 10 0 L 0 0 0 10",
                                            fill: "none",
                                            stroke: "white",
                                            strokeWidth: "0.5",
                                            opacity: "0.3"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                    width: "100",
                                    height: "100",
                                    fill: "url(#leaflet-grid)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container mx-auto px-4 py-12 md:py-20 relative z-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "md:hidden mb-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative h-64 rounded-xl overflow-hidden shadow-2xl mx-auto max-w-sm",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: product.imageSrc || "/ifa/product/Leaflet/leaflet-hero.jpg",
                                            alt: `${product.name} printing services`,
                                            fill: true,
                                            className: "object-cover",
                                            priority: true,
                                            sizes: "(max-width: 768px) 100vw, 50vw"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute bottom-4 left-4 right-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2",
                                                children: product.id.includes("a6") ? "A6 SIZE" : product.id.includes("a5") ? "A5 SIZE" : product.id.includes("a4") ? "A4 SIZE" : "A3 SIZE"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6",
                                                children: product.category
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                                className: "text-4xl md:text-6xl font-bold mb-6 leading-tight",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-yellow-300",
                                                        children: "Professional"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                    product.name
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-xl text-blue-100 mb-8 max-w-lg",
                                                children: "High-quality printed leaflets and flyers with premium paper options, vibrant colors, and fast turnaround."
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "grid sm:grid-cols-2 gap-4 mb-8",
                                                children: product.features.slice(0, 6).map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "flex-shrink-0 mr-2",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    className: "w-5 h-5 text-yellow-300",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M5 13l4 4L19 7"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-blue-50",
                                                                children: feature
                                                            })
                                                        ]
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-wrap gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "#paper-options",
                                                        className: "bg-white hover:bg-gray-100 text-blue-700 py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-white",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5 mr-2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                                })
                                                            }),
                                                            "Paper Options"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "#fold-calculator",
                                                        className: "bg-yellow-300 hover:bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5 mr-2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                                })
                                                            }),
                                                            "Fold Calculator"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative hidden md:block",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "relative h-[400px] rounded-xl overflow-hidden shadow-2xl z-10 bg-white p-6",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "relative h-full w-full",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: product.imageSrc || "/ifa/product/Leaflet/leaflet-hero.jpg",
                                                        alt: `${product.name} printing example`,
                                                        fill: true,
                                                        className: "object-contain"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -right-2 top-0 bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30",
                                                children: product.id.includes("a6") ? "A6 Size" : product.id.includes("a5") ? "A5 Size" : product.id.includes("a4") ? "A4 Size" : "A3 Size"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30",
                                                children: product.id.includes("a6") ? "105 \xd7 148mm" : product.id.includes("a5") ? "148 \xd7 210mm" : product.id.includes("a4") ? "210 \xd7 297mm" : "297 \xd7 420mm"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[85%] h-[10px] bg-gray-300 rounded-b-xl z-0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[70%] h-[10px] bg-gray-400 rounded-b-xl z-0"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute bottom-0 left-0 right-0",
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            viewBox: "0 0 1200 120",
                            preserveAspectRatio: "none",
                            className: "w-full h-12 text-white",
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                                fill: "currentColor"
                            })
                        })
                    })
                ]
            }),
            product && (product.id === "leaflets-a6" || product.id === "leaflets-a5" || product.id === "leaflets-a4" || product.id === "leaflets-a3") && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 border-b border-gray-200",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 opacity-20",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            className: "h-full w-full",
                            viewBox: "0 0 100 100",
                            preserveAspectRatio: "none",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("pattern", {
                                        id: "leaflet-grid",
                                        width: "10",
                                        height: "10",
                                        patternUnits: "userSpaceOnUse",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            d: "M 10 0 L 0 0 0 10",
                                            fill: "none",
                                            stroke: "white",
                                            strokeWidth: "0.5",
                                            opacity: "0.3"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                    width: "100",
                                    height: "100",
                                    fill: "url(#leaflet-grid)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container mx-auto px-4 py-12 md:py-20 relative z-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "md:hidden mb-8",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative h-64 rounded-xl overflow-hidden shadow-2xl mx-auto max-w-sm",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: product.imageSrc || "/ifa/product/leaflet/leaflet-hero.jpg",
                                            alt: `${product.name} printing services`,
                                            fill: true,
                                            className: "object-cover",
                                            priority: true,
                                            sizes: "(max-width: 768px) 100vw, 50vw"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute bottom-4 left-4 right-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2",
                                                children: product.id.includes("a6") ? "A6 SIZE" : product.id.includes("a5") ? "A5 SIZE" : product.id.includes("a4") ? "A4 SIZE" : "A3 SIZE"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6",
                                                children: product.category
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                                className: "text-4xl md:text-6xl font-bold mb-6 leading-tight",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-yellow-300",
                                                        children: "Professional"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                    product.name
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-xl text-blue-100 mb-8 max-w-lg",
                                                children: "High-quality printed leaflets and flyers with premium paper options, vibrant colors, and fast turnaround."
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "grid sm:grid-cols-2 gap-4 mb-8",
                                                children: product.features.slice(0, 6).map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "flex-shrink-0 mr-2",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    className: "w-5 h-5 text-yellow-300",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M5 13l4 4L19 7"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-blue-50",
                                                                children: feature
                                                            })
                                                        ]
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-wrap gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "#paper-options",
                                                        className: "bg-white hover:bg-gray-100 text-blue-700 py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-white",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5 mr-2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                                })
                                                            }),
                                                            "Paper Options"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "#fold-calculator",
                                                        className: "bg-yellow-300 hover:bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5 mr-2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                                })
                                                            }),
                                                            "Fold Calculator"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative hidden md:block",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "relative h-[400px] rounded-xl overflow-hidden shadow-2xl z-10 bg-white p-6",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "relative h-full w-full",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: product.imageSrc || "/ifa/product/leaflet/leaflet-hero.jpg",
                                                        alt: `${product.name} printing example`,
                                                        fill: true,
                                                        className: "object-contain"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -right-2 top-0 bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30",
                                                children: product.id.includes("a6") ? "A6 Size" : product.id.includes("a5") ? "A5 Size" : product.id.includes("a4") ? "A4 Size" : "A3 Size"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg z-30",
                                                children: product.id.includes("a6") ? "105 \xd7 148mm" : product.id.includes("a5") ? "148 \xd7 210mm" : product.id.includes("a4") ? "210 \xd7 297mm" : "297 \xd7 420mm"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[85%] h-[10px] bg-gray-300 rounded-b-xl z-0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[70%] h-[10px] bg-gray-400 rounded-b-xl z-0"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute bottom-0 left-0 right-0",
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            viewBox: "0 0 1200 120",
                            preserveAspectRatio: "none",
                            className: "w-full h-12 text-white",
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                                fill: "currentColor"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-gradient-to-b from-gray-50 to-white py-16",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col items-center text-center mb-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4",
                                    children: product.category
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    className: "text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl",
                                    children: product.name
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xl text-gray-700 mb-6 max-w-3xl",
                                    children: product.description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-wrap justify-center gap-4 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "/contact",
                                            className: "bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-medium text-center transition-colors transform hover:scale-105 inline-flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    className: "w-5 h-5 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                    })
                                                }),
                                                "Request a Quote"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "/contact?subject=Sample Request",
                                            className: "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-4 px-8 rounded-lg font-medium text-center transition-colors transform hover:scale-105 inline-flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    className: "w-5 h-5 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                                    })
                                                }),
                                                "Get Free Samples"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "lg:col-span-7 relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative overflow-hidden rounded-xl shadow-xl border border-gray-200 bg-white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "aspect-[4/3] relative",
                                                    children: product.images.map((image, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            id: `gallery-main-${idx}`,
                                                            className: "absolute inset-0 transition-opacity duration-500 ease-in-out",
                                                            style: {
                                                                opacity: idx === 0 ? 1 : 0,
                                                                pointerEvents: idx === 0 ? "auto" : "none"
                                                            },
                                                            children: [
                                                                image.includes("css-placeholder-image") ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: `absolute inset-0 css-placeholder ${idx % 2 === 0 ? "banner" : "poster"}`
                                                                }) : /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                    src: image,
                                                                    alt: `${product.name} view ${idx + 1}`,
                                                                    fill: true,
                                                                    className: "object-contain p-6"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                            onClick: (e)=>{
                                                                                e.preventDefault();
                                                                                const prevIdx = (idx - 1 + product.images.length) % product.images.length;
                                                                                document.querySelector(`#gallery-main-${idx}`).style.opacity = 0;
                                                                                document.querySelector(`#gallery-main-${idx}`).style.pointerEvents = "none";
                                                                                document.querySelector(`#gallery-main-${prevIdx}`).style.opacity = 1;
                                                                                document.querySelector(`#gallery-main-${prevIdx}`).style.pointerEvents = "auto";
                                                                                document.querySelector(`#gallery-thumb-${prevIdx}`).scrollIntoView({
                                                                                    behavior: "smooth",
                                                                                    block: "nearest",
                                                                                    inline: "center"
                                                                                });
                                                                            },
                                                                            className: "bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors",
                                                                            "aria-label": "Previous image",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                                className: "w-6 h-6 text-gray-800",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M15 19l-7-7 7-7"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                            onClick: (e)=>{
                                                                                e.preventDefault();
                                                                                const nextIdx = (idx + 1) % product.images.length;
                                                                                document.querySelector(`#gallery-main-${idx}`).style.opacity = 0;
                                                                                document.querySelector(`#gallery-main-${idx}`).style.pointerEvents = "none";
                                                                                document.querySelector(`#gallery-main-${nextIdx}`).style.opacity = 1;
                                                                                document.querySelector(`#gallery-main-${nextIdx}`).style.pointerEvents = "auto";
                                                                                document.querySelector(`#gallery-thumb-${nextIdx}`).scrollIntoView({
                                                                                    behavior: "smooth",
                                                                                    block: "nearest",
                                                                                    inline: "center"
                                                                                });
                                                                            },
                                                                            className: "bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors",
                                                                            "aria-label": "Next image",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                                className: "w-6 h-6 text-gray-800",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M9 5l7 7-7 7"
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-800 shadow-lg flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                            className: "w-4 h-4 mr-1",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                                                            })
                                                                        }),
                                                                        "Click to zoom"
                                                                    ]
                                                                })
                                                            ]
                                                        }, idx))
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute top-4 right-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium",
                                                    children: "Premium Quality"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-6 relative",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "overflow-x-auto pb-2 hide-scrollbar thumbnail-container",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "flex justify-center md:justify-start gap-4 px-1 w-full",
                                                        children: product.images.map((image, index)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                id: `gallery-thumb-${index}`,
                                                                onClick: (e)=>{
                                                                    // Hide all main images
                                                                    product.images.forEach((_, idx)=>{
                                                                        const mainEl = document.querySelector(`#gallery-main-${idx}`);
                                                                        if (mainEl) {
                                                                            mainEl.style.opacity = 0;
                                                                            mainEl.style.pointerEvents = "none";
                                                                        }
                                                                        // Reset all thumbnail borders
                                                                        const thumbEl = document.querySelector(`#gallery-thumb-${idx}`);
                                                                        if (thumbEl) {
                                                                            thumbEl.classList.remove("border-blue-500");
                                                                            thumbEl.classList.add("border-gray-200");
                                                                        }
                                                                    });
                                                                    // Show current image
                                                                    const currentMain = document.querySelector(`#gallery-main-${index}`);
                                                                    if (currentMain) {
                                                                        currentMain.style.opacity = 1;
                                                                        currentMain.style.pointerEvents = "auto";
                                                                    }
                                                                    // Highlight current thumbnail
                                                                    e.currentTarget.classList.remove("border-gray-200");
                                                                    e.currentTarget.classList.add("border-blue-500");
                                                                },
                                                                className: `relative flex-shrink-0 border-2 rounded-lg overflow-hidden transition-all h-28 w-28 md:h-32 md:w-32 focus:outline-none hover:shadow-md thumbnail-item ${index === 0 ? "border-blue-500" : "border-gray-200 hover:border-blue-300"}`,
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute inset-0",
                                                                    children: image.includes("css-placeholder-image") ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: `absolute inset-0 css-placeholder ${index % 2 === 0 ? "banner" : "poster"}`
                                                                    }) : /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                        src: image,
                                                                        alt: `${product.name} thumbnail ${index + 1}`,
                                                                        fill: true,
                                                                        className: "object-contain p-2"
                                                                    })
                                                                })
                                                            }, index))
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "absolute -top-3 right-0 flex space-x-1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            className: "bg-white rounded-full p-1 shadow-md hover:bg-gray-100 border border-gray-200",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5 text-gray-600",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            className: "bg-white rounded-full p-1 shadow-md hover:bg-gray-100 border border-gray-200",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5 text-gray-600",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-6 flex flex-wrap justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-4 h-4 mr-2 text-blue-600",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                clipRule: "evenodd"
                                                            })
                                                        }),
                                                        "Premium Quality"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-4 h-4 mr-2 text-blue-600",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                                                clipRule: "evenodd"
                                                            })
                                                        }),
                                                        "Fast Shipping"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-4 h-4 mr-2 text-blue-600",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                                                                clipRule: "evenodd"
                                                            })
                                                        }),
                                                        "Customer Favorite"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "lg:col-span-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-xl border border-gray-200 shadow-lg p-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                                className: "text-2xl font-bold mb-6 text-gray-800 border-b pb-4",
                                                children: [
                                                    "Why Our ",
                                                    product.name,
                                                    " Stand Out"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "space-y-6",
                                                children: product.features && product.features.length > 0 && product.features.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "flex-shrink-0 h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center mr-4",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    className: "h-6 w-6 text-blue-600",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        fillRule: "evenodd",
                                                                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                        clipRule: "evenodd"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "text-base font-medium text-gray-900",
                                                                    children: feature
                                                                })
                                                            })
                                                        ]
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mt-8 bg-gray-50 p-4 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "Starting Price:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "font-bold text-blue-600",
                                                                children: product.price
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "Minimum Order:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "font-semibold",
                                                                children: product.moq ? `${product.moq} units` : "Contact for details"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex justify-between mb-4",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-gray-600",
                                                                children: "Lead Time:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "font-semibold",
                                                                children: product.leadTime
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/contact",
                                                        className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors block",
                                                        children: product.quoteRequired ? "Request Your Custom Quote" : "Get Your Custom Quote Today"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-xs text-center text-gray-500 mt-2",
                                                        children: "No obligation • Free consultation"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            product && product.id === "brown-pizza-boxes" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-white py-12 border-t border-gray-200",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "text-3xl font-bold mb-8 text-center text-gray-800",
                                children: "Size Comparison"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm overflow-hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex justify-center items-end space-x-2 sm:space-x-4 h-48 sm:h-64 mb-4 overflow-x-auto no-scrollbar",
                                        children: [
                                            "7",
                                            "9",
                                            "10",
                                            "12",
                                            "14"
                                        ].map((size, idx)=>{
                                            const dimensions = {
                                                "7": '7" (18cm)',
                                                "9": '9" (23cm)',
                                                "10": '10" (25cm)',
                                                "12": '12" (30.5cm)',
                                                "14": '14" (35.5cm)'
                                            };
                                            const isActive = idx === 2; // Default to 10" as active
                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: `${isActive ? "bg-orange-50 border-orange-400" : "bg-gray-100 border-gray-300"} border-2 rounded-lg mb-2 transition-all duration-300 flex items-center justify-center`,
                                                        style: {
                                                            transform: isActive ? "translateY(-8px) scale(1.1)" : "translateY(0) scale(1)",
                                                            width: `${Math.min(parseInt(size) * 0.5, 10)}rem`,
                                                            height: `${Math.min(parseInt(size) * 0.5, 10)}rem`,
                                                            minWidth: "2.5rem",
                                                            minHeight: "2.5rem",
                                                            maxWidth: "10rem"
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            className: `font-bold ${isActive ? "text-orange-900" : "text-gray-500"} text-xs sm:text-sm`,
                                                            children: [
                                                                size,
                                                                '"'
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-medium text-gray-500",
                                                        children: dimensions[size]
                                                    })
                                                ]
                                            }, idx);
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg-white h-2 rounded-full relative mb-4 mx-2",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "absolute inset-x-0 bottom-3 flex justify-between px-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-xs font-medium text-gray-500",
                                                    children: '7"'
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-xs font-medium text-gray-500",
                                                    children: '14"'
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mt-6 text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-600 max-w-3xl mx-auto text-sm sm:text-base",
                                                children: 'Our brown pizza boxes come in 5 standard sizes to fit all your pizza offerings, from personal 7" pizzas to large 14" party-size pizzas.'
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                href: "#pizza-box-options",
                                                className: "inline-flex items-center text-blue-600 hover:text-blue-800 mt-4 font-medium",
                                                children: [
                                                    "Explore detailed specifications",
                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "w-4 h-4 ml-1",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            fillRule: "evenodd",
                                                            d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                                                            clipRule: "evenodd"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-gray-50 py-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "border-b border-gray-200 mb-8",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex overflow-x-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "px-6 py-3 border-b-2 border-blue-600 text-blue-600 font-medium",
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "px-6 py-3 text-gray-500 hover:text-gray-700",
                                        children: "Specifications"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "px-6 py-3 text-gray-500 hover:text-gray-700",
                                        children: "Customization"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "px-6 py-3 text-gray-500 hover:text-gray-700",
                                        children: "Shipping"
                                    }),
                                    product.weeklyDelivery && /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "px-6 py-3 text-gray-500 hover:text-gray-700",
                                        children: "Weekly Delivery"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "prose max-w-none",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "Product Description"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mb-6",
                                    children: product.detailedDescription
                                }),
                                product.id === "wide-format-products" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mb-10 border border-gray-200 rounded-lg p-6 bg-white shadow-md",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "text-xl font-bold mb-4",
                                            children: "Common Formats & Sizes"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mb-4",
                                            children: "Browse our most popular sizes for wide format printing or request a custom size for your specific needs."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6",
                                            children: [
                                                {
                                                    name: "Standard Poster A1",
                                                    size: "594mm \xd7 841mm",
                                                    usage: "Ideal for indoor promotional displays"
                                                },
                                                {
                                                    name: "Standard Poster A0",
                                                    size: "841mm \xd7 1189mm",
                                                    usage: "Perfect for high-visibility areas"
                                                },
                                                {
                                                    name: "Medium Banner",
                                                    size: '24" \xd7 36" (60cm \xd7 91cm)',
                                                    usage: "Trade shows and retail displays"
                                                },
                                                {
                                                    name: "Large Banner",
                                                    size: '36" \xd7 48" (91cm \xd7 122cm)',
                                                    usage: "Exhibition and event signage"
                                                },
                                                {
                                                    name: "X-Banner Stand",
                                                    size: '31.5" \xd7 71" (80cm \xd7 180cm)',
                                                    usage: "Portable marketing display"
                                                },
                                                {
                                                    name: "Billboard Poster",
                                                    size: '48" \xd7 72" (122cm \xd7 183cm)',
                                                    usage: "High-impact outdoor advertising"
                                                },
                                                {
                                                    name: "Roll-Up Banner",
                                                    size: '33.5" \xd7 79" (85cm \xd7 200cm)',
                                                    usage: "Conferences and presentations"
                                                },
                                                {
                                                    name: "Vinyl Banner",
                                                    size: "4' \xd7 8' (122cm \xd7 244cm)",
                                                    usage: "Outdoor events and storefronts"
                                                },
                                                {
                                                    name: "Custom Size",
                                                    size: "Your specifications",
                                                    usage: "Tailored to your exact requirements"
                                                }
                                            ].map((format, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            className: "font-bold text-md",
                                                            children: format.name
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-sm text-gray-600 mt-1",
                                                            children: format.size
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-xs text-gray-500 mt-1",
                                                            children: format.usage
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                            href: `/contact?product=Wide Format - ${format.name}&subject=Wide Format Quote Request`,
                                                            className: "mt-3 text-blue-600 text-sm font-medium hover:text-blue-800 inline-flex items-center",
                                                            children: [
                                                                "Request Quote",
                                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    className: "w-4 h-4 ml-1",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, index))
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "w-6 h-6 text-blue-600 mr-3 mt-0.5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                className: "font-semibold mb-1",
                                                                children: "Need a different size?"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-sm text-gray-700",
                                                                children: "We can accommodate virtually any size for your project. Contact our team for custom dimensions."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                product.id === "roll-up-banner-stands" && product.models && product.models.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "text-xl font-bold mb-6",
                                            children: "Choose Your Perfect Roll-Up Banner Stand"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                                            children: product.models.map((model, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "p-5 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-start justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                        className: "text-lg font-bold text-blue-800",
                                                                        children: model.name
                                                                    }),
                                                                    index === 1 && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "bg-blue-600 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold",
                                                                        children: "Most Popular"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-gray-700 mt-2",
                                                                children: model.description
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                className: "mt-4 space-y-2",
                                                                children: model.features && model.features.map((feature, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                        className: "flex items-start",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                                className: "w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M5 13l4 4L19 7"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "text-sm",
                                                                                children: feature
                                                                            })
                                                                        ]
                                                                    }, idx))
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "mt-4 pt-4 border-t border-gray-100",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            className: "font-medium",
                                                                            children: "Recommended for:"
                                                                        }),
                                                                        " ",
                                                                        model.recommendedFor
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: `/contact?product=Roll-Up Banner - ${model.name}&subject=Roll-Up Banner Quote Request`,
                                                                className: "mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors block",
                                                                children: "Request Personalized Quote"
                                                            })
                                                        ]
                                                    })
                                                }, index))
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10 border border-blue-100 shadow-md",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                    className: "text-2xl font-bold mb-6 text-center text-blue-800 border-b border-blue-200 pb-3",
                                                    children: "Perfect For These Applications"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                                                    children: product.applications && product.applications.length > 0 && product.applications.map((application, idx)=>{
                                                        // Define icons for common applications
                                                        let icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "h-8 w-8",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            })
                                                        });
                                                        // Match icons to common application types
                                                        if (application.toLowerCase().includes("trade show") || application.toLowerCase().includes("exhibition")) {
                                                            icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "h-8 w-8",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                                })
                                                            });
                                                        } else if (application.toLowerCase().includes("retail") || application.toLowerCase().includes("store")) {
                                                            icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "h-8 w-8",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                                })
                                                            });
                                                        }
                                                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-start p-4 bg-white/50 rounded-lg border border-blue-50",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-blue-600 mr-4 mt-1",
                                                                    children: icon
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "font-medium text-gray-800",
                                                                        children: application
                                                                    })
                                                                })
                                                            ]
                                                        }, idx);
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                product.applications && product.applications.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10 border border-blue-100 shadow-md",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "text-2xl font-bold mb-6 text-center text-blue-800 border-b border-blue-200 pb-3",
                                            children: "Perfect For These Applications"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                                            children: product.applications && product.applications.length > 0 && product.applications.map((application, idx)=>{
                                                // Define icons for common applications
                                                let icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    className: "h-8 w-8",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M5 13l4 4L19 7"
                                                    })
                                                });
                                                // Match icons to common application types
                                                if (application.toLowerCase().includes("trade show") || application.toLowerCase().includes("exhibition")) {
                                                    icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "h-8 w-8",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                        })
                                                    });
                                                } else if (application.toLowerCase().includes("retail") || application.toLowerCase().includes("store")) {
                                                    icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "h-8 w-8",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                        })
                                                    });
                                                } else if (application.toLowerCase().includes("conference") || application.toLowerCase().includes("event")) {
                                                    icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "h-8 w-8",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                        })
                                                    });
                                                } else if (application.toLowerCase().includes("corporate") || application.toLowerCase().includes("reception")) {
                                                    icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "h-8 w-8",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                        })
                                                    });
                                                } else if (application.toLowerCase().includes("sales") || application.toLowerCase().includes("pitch")) {
                                                    icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "h-8 w-8",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                        })
                                                    });
                                                } else if (application.toLowerCase().includes("lecture") || application.toLowerCase().includes("training")) {
                                                    icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "h-8 w-8",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        })
                                                    });
                                                } else if (application.toLowerCase().includes("pop-up") || application.toLowerCase().includes("temporary")) {
                                                    icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "h-8 w-8",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        })
                                                    });
                                                } else if (application.toLowerCase().includes("product") || application.toLowerCase().includes("launch")) {
                                                    icon = /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "h-8 w-8",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                                        })
                                                    });
                                                }
                                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "bg-white rounded-lg p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-blue-200 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "flex-shrink-0 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 text-blue-600",
                                                            children: icon
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "text-lg font-medium text-gray-800",
                                                                    children: application
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "mt-1 w-12 h-1 bg-blue-500 rounded-full"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, idx);
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mb-12 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-5",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                                className: "text-xl font-bold text-white flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "w-6 h-6 mr-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        })
                                                    }),
                                                    "Frequently Asked Questions"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "divide-y divide-gray-200",
                                            children: product.faq && product.faq.map((item, idx)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "hover:bg-blue-50 transition-colors duration-150",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("summary", {
                                                                className: "flex justify-between items-center font-medium cursor-pointer px-8 py-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                        className: "text-gray-800 text-lg flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 font-semibold text-sm",
                                                                                children: idx + 1
                                                                            }),
                                                                            item.question
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "transition-transform duration-300 group-open:rotate-180",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                            className: "w-6 h-6 text-blue-500",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M19 9l-7 7-7-7"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "px-8 pb-6 pt-2",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "ml-11",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "h-0.5 w-12 bg-blue-200 mb-3"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                            className: "text-gray-700 leading-relaxed",
                                                                            children: item.answer
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }, idx))
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "bg-blue-50 px-8 py-5 border-t border-blue-100",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "text-blue-800 flex items-center text-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "w-5 h-5 mr-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        })
                                                    }),
                                                    "Have more questions? ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "/contact",
                                                        className: "ml-1 font-medium underline",
                                                        children: "Contact our support team"
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
            }),
            product.specifications && product.specifications.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "py-16 bg-gray-50",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mb-12 text-center max-w-3xl mx-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "text-3xl font-bold mb-4",
                                    children: "Technical Specifications"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: "text-gray-600 text-lg",
                                    children: [
                                        "Detailed specifications and requirements for our high-quality ",
                                        product.name,
                                        "."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200",
                                    children: product.specifications.slice(0, 3).map((spec, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "font-medium text-gray-900 mb-2",
                                                    children: spec.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-600",
                                                    children: spec.value
                                                })
                                            ]
                                        }, index))
                                }),
                                product.specifications.length > 3 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "border-t border-gray-200 px-6 py-4 bg-gray-50",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                        children: product.specifications.slice(3).map((spec, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-blue-600 mr-3",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                clipRule: "evenodd"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: spec.name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "block text-sm text-gray-500",
                                                                children: spec.value
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            product.id === "roll-up-banner-stands" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "py-16 bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mb-12 text-center max-w-3xl mx-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "text-3xl font-bold mb-4",
                                    children: "Make an Impact with Roll-Up Banners"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-gray-600 text-lg",
                                    children: "Our premium roll-up banner stands offer exceptional quality and versatility for any promotional event."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-gray-50 rounded-xl overflow-hidden shadow-lg relative group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "aspect-[4/3] relative overflow-hidden",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/images/ifa/heroh/rollup/1.png",
                                                alt: "Premium Roll-Up Banner",
                                                fill: true,
                                                className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-6 text-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-xl font-bold mb-2",
                                                        children: "Premium Quality Hardware"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Durable aluminum cassette with stable base design for professional presentations."
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-gray-50 rounded-xl overflow-hidden shadow-lg relative group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "aspect-[4/3] relative overflow-hidden",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/images/ifa/heroh/rollup/4.png",
                                                alt: "Versatile Roll-Up Banner",
                                                fill: true,
                                                className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-6 text-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-xl font-bold mb-2",
                                                        children: "High-Resolution Graphics"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Crystal-clear printing with vibrant colors that catch attention from every angle."
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-gray-50 rounded-xl overflow-hidden shadow-lg relative group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "aspect-square relative overflow-hidden",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/images/ifa/heroh/rollup/2.png",
                                                alt: "Easy Setup Roll-Up Banner",
                                                fill: true,
                                                className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-6 text-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-xl font-bold mb-2",
                                                        children: "Quick 60-Second Setup"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "No tools required - simple and fast assembly for busy events."
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-gray-50 rounded-xl overflow-hidden shadow-lg relative group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "aspect-square relative overflow-hidden",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/images/ifa/heroh/rollup/5.png",
                                                alt: "Portable Roll-Up Banner",
                                                fill: true,
                                                className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-6 text-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-xl font-bold mb-2",
                                                        children: "Lightweight & Portable"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Includes padded carry case for easy transportation between events."
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-gray-50 rounded-xl overflow-hidden shadow-lg relative group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "aspect-square relative overflow-hidden",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/images/ifa/heroh/rollup/6.png",
                                                alt: "Multiple Sizes Roll-Up Banner",
                                                fill: true,
                                                className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-6 text-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-xl font-bold mb-2",
                                                        children: "Multiple Size Options"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Available in standard, economy, wide and desktop variants to suit your needs."
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mt-12 text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/contact",
                                className: "inline-block bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-medium text-center transition-colors transform hover:scale-105",
                                children: "Request Your Custom Roll-Up Banner Today"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-16",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-3xl font-bold mb-4",
                                children: "Choose Your Perfect Solution"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-gray-600 max-w-3xl mx-auto",
                                children: "Select from our range of premium options to find the ideal packaging solution for your specific business needs."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: product.variants && product.variants.length > 0 ? product.variants.map((variant, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col h-full",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "h-64 relative bg-gray-50",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: variant.imageSrc,
                                                        alt: variant.name,
                                                        fill: true,
                                                        className: "object-contain p-4"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium",
                                                    children: index === 0 ? "Best Seller" : "Popular Choice"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "p-6 flex-grow flex flex-col",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: variant.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-600 mb-4",
                                                    children: variant.description
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "flex-grow",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "border-t border-gray-100 pt-4 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                className: "font-semibold text-gray-900 mb-3",
                                                                children: "Key Advantages:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                className: "space-y-2",
                                                                children: variant.features.map((feature, featureIdx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                        className: "flex items-start text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                                className: "h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0",
                                                                                fill: "currentColor",
                                                                                viewBox: "0 0 20 20",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                                    clipRule: "evenodd"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                className: "text-gray-700",
                                                                                children: feature
                                                                            })
                                                                        ]
                                                                    }, featureIdx))
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mt-auto",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex flex-col sm:flex-row gap-3 mt-6",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: `/contact?product=${encodeURIComponent(variant.name)}`,
                                                                className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors",
                                                                children: "Request Quote"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: `/contact?product=${encodeURIComponent(variant.name)}&subject=Sample Request`,
                                                                className: "flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium text-center transition-colors",
                                                                children: "Get Samples"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, index)) : null
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col md:flex-row md:items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "md:flex-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "text-2xl font-bold mb-2",
                                            children: "Need a Custom Solution?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mb-4 md:mb-0 text-blue-100",
                                            children: "We can tailor our products to your exact specifications. Contact our team to discuss your unique requirements."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "md:ml-8",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/contact?subject=Custom Solution",
                                        className: "inline-block bg-white text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-medium text-center transition-colors",
                                        children: "Get Custom Solution"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            product.weeklyDelivery && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-16 mb-20 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative bg-blue-600 py-8 rounded-t-2xl",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute top-0 left-0 w-full overflow-hidden",
                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 1200 120",
                                    preserveAspectRatio: "none",
                                    className: "w-full h-12 text-blue-500 opacity-20",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                                        fill: "currentColor"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "container mx-auto px-4 relative z-10",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col md:flex-row items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mb-6 md:mb-0 md:mr-8",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-lg",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    className: "h-10 w-10 text-blue-600",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-center md:text-left",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                    className: "text-3xl md:text-4xl font-bold text-white mb-2",
                                                    children: "Weekly Delivery Service"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-blue-100 max-w-3xl",
                                                    children: "Never worry about running out of packaging again"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "bg-gradient-to-b from-blue-500 to-blue-600 text-white p-6 md:p-10",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container mx-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "md:ml-28 mb-8",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-lg leading-relaxed",
                                        children: product.weeklyDelivery
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 my-10",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-xl",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "bg-white/20 w-16 h-16 rounded-lg mb-6 p-3 shadow-inner",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "h-full w-full text-white",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-xl font-bold mb-3",
                                                    children: "Inventory Management"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-blue-100",
                                                    children: "Never run out of essential packaging supplies. Our system ensures you always have what you need."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-xl",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "bg-white/20 w-16 h-16 rounded-lg mb-6 p-3 shadow-inner",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "h-full w-full text-white",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-xl font-bold mb-3",
                                                    children: "Time Savings"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-blue-100",
                                                    children: "Automated scheduling saves you time and hassle. Spend less time ordering and more time on your business."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-xl",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "bg-white/20 w-16 h-16 rounded-lg mb-6 p-3 shadow-inner",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "h-full w-full text-white",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-xl font-bold mb-3",
                                                    children: "Storage Optimization"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-blue-100",
                                                    children: "Reduce storage space needs with regular deliveries. Optimize your valuable workspace for operations."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-center mt-10 mb-6",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/contact?subject=Weekly Delivery Service",
                                        className: "inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl",
                                        children: "Schedule Your Weekly Deliveries"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "bg-blue-600 h-16 relative rounded-b-2xl",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full overflow-hidden",
                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 1200 120",
                                preserveAspectRatio: "none",
                                className: "w-full h-12 text-gray-50",
                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                                    fill: "currentColor"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        className: "text-2xl font-bold mb-6",
                        children: "Common Applications"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-gray-50 p-5 rounded-lg text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                            className: "h-6 w-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "font-semibold mb-2",
                                        children: "Restaurants"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Perfect for takeout and delivery services"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-gray-50 p-5 rounded-lg text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                            className: "h-6 w-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "font-semibold mb-2",
                                        children: "Retail Stores"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Enhance customer experience with branded packaging"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-gray-50 p-5 rounded-lg text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                            className: "h-6 w-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "font-semibold mb-2",
                                        children: "Food Production"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Store and display food products safely and hygienically"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        className: "text-2xl font-bold mb-6",
                        children: "Technical Information"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white rounded-lg border border-gray-200 p-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "font-semibold mb-4",
                                        children: "Material Composition"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex space-x-2 mb-4",
                                        children: [
                                            "Durability",
                                            "Eco-Friendly",
                                            "Food Safe"
                                        ].map((tag, i)=>/*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs",
                                                children: tag
                                            }, i))
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-sm text-gray-600 mb-4",
                                        children: "Our products are manufactured using premium materials that ensure durability, reliability, and food safety while minimizing environmental impact."
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "font-medium text-sm mb-2",
                                        children: "Certification Standards:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        className: "text-sm text-gray-600 space-y-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: "• ISO 9001 Certified Manufacturing"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: "• FDA Food-Safe Materials"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: "• Sustainable Forestry Certified (for paper products)"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white rounded-lg border border-gray-200 p-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "font-semibold mb-4",
                                        children: "Size & Dimensions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "relative h-48 mb-4 bg-gray-50",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: "/images/product-dimensions.svg",
                                            alt: "Product dimensions diagram",
                                            fill: true,
                                            className: "object-contain p-2"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Precise dimensions ensure a perfect fit for your products. All measurements follow industry standards and can be customized to your specific requirements."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            relatedProducts && relatedProducts.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mx-auto px-4 py-12",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-2xl font-bold mb-8",
                        children: "Related Products"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: relatedProducts.map((relatedProduct)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "h-48 relative bg-gray-50",
                                        children: [
                                            !relatedProduct.imageSrc || relatedProduct.imageSrc.includes("css-placeholder-image") ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute inset-0 css-placeholder banner"
                                            }) : /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: relatedProduct.imageSrc,
                                                alt: relatedProduct.name,
                                                fill: true,
                                                className: "object-contain group-hover:scale-105 transition-transform duration-500"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute top-2 left-2",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full",
                                                    children: relatedProduct.category
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "font-semibold text-gray-900",
                                                children: relatedProduct.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-gray-500 line-clamp-2",
                                                children: relatedProduct.description
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                href: `/products/${relatedProduct.id}`,
                                                className: "mt-3 inline-flex items-center text-blue-600 hover:text-blue-800",
                                                children: [
                                                    "View Details",
                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "w-4 h-4 ml-1",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 5l7 7-7 7"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, relatedProduct.id))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-blue-600 text-white py-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto px-4 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                            className: "text-2xl md:text-3xl font-bold mb-4",
                            children: [
                                "Need Custom ",
                                product.name,
                                "?"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-lg mb-8 max-w-2xl mx-auto",
                            children: "Contact our team today to discuss your specific requirements and get a customized quote."
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/contact",
                            className: "inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors",
                            children: "Contact Us"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "border-t border-gray-200 mt-16 pt-16"
            }),
            product && product.id === "posters" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "sizes",
                className: "container mx-auto px-4 py-16 scroll-mt-24",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                                    children: "Poster Sizing Guide"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                    children: "Choose the perfect size for your promotional needs or create custom dimensions for your unique space"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",
                            children: [
                                {
                                    name: "A4 Poster",
                                    dimensions: "210mm \xd7 297mm",
                                    idealFor: "Close-up viewing, tabletop displays, information sheets",
                                    image: "/ifa/product/Poster/1.webp",
                                    popular: false
                                },
                                {
                                    name: "A3 Poster",
                                    dimensions: "297mm \xd7 420mm",
                                    idealFor: "Retail counter displays, meeting room notices, small ads",
                                    image: "/ifa/product/Poster/5.webp",
                                    popular: false
                                },
                                {
                                    name: "A2 Poster",
                                    dimensions: "420mm \xd7 594mm",
                                    idealFor: "Small shop windows, conference signage, menu displays",
                                    image: "/ifa/product/Poster/3.webp",
                                    popular: true
                                },
                                {
                                    name: "A1 Poster",
                                    dimensions: "594mm \xd7 841mm",
                                    idealFor: "Retail promotions, event announcements, exhibition displays",
                                    image: "/ifa/product/Poster/PosterPrinting-5.jpg",
                                    popular: true
                                },
                                {
                                    name: "A0 Poster",
                                    dimensions: "841mm \xd7 1189mm",
                                    idealFor: "Maximum impact displays, trade shows, large format advertising",
                                    image: "/ifa/product/Poster/PosterPrinting-4.jpg",
                                    popular: false
                                },
                                {
                                    name: "Custom Sizes",
                                    dimensions: "Up to 1.5m width",
                                    idealFor: "Specialized displays, non-standard frames, unique spaces",
                                    image: "/ifa/product/Poster/100-GSM-Map-Print-Spot-Vertical-Poster_05-1024x1024.webp",
                                    popular: false
                                }
                            ].map((size, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 group relative",
                                    children: [
                                        size.popular && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute top-4 right-4 z-20",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md",
                                                children: "POPULAR"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative h-48 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: size.image,
                                                    alt: size.name,
                                                    fill: true,
                                                    className: "object-cover group-hover:scale-110 transition-transform duration-500"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "absolute bottom-4 left-4 right-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "text-white font-bold text-xl",
                                                            children: size.name
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-white/80 text-sm",
                                                            children: size.dimensions
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            className: "text-gray-700 font-medium text-sm mb-2",
                                                            children: "IDEAL FOR:"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-gray-600",
                                                            children: size.idealFor
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/contact",
                                                    className: "inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group-hover:translate-x-1 transition-transform",
                                                    children: [
                                                        "Request Quote",
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-5 h-5 ml-1",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
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
                                }, i))
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "p-8 md:p-12",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "inline-flex items-center bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "w-4 h-4 mr-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                                                        })
                                                    }),
                                                    "Eco-Friendly Technology"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4",
                                                children: "Vibrant Eco-Solvent Printing"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-700 mb-6",
                                                children: "Our eco-solvent printing technology delivers exceptional color reproduction and durability while being kinder to the environment than traditional methods. These inks provide:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                className: "space-y-3 text-gray-600 mb-8",
                                                children: [
                                                    "Vibrant, true-to-life colors that pop",
                                                    "Excellent UV resistance for longer-lasting prints",
                                                    "Reduced environmental impact with lower VOCs",
                                                    "Superior adhesion and durability on our premium papers",
                                                    "Suitability for both indoor and short-term outdoor use"
                                                ].map((benefit, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M5 13l4 4L19 7"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: benefit
                                                            })
                                                        ]
                                                    }, i))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                href: "/contact",
                                                className: "inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",
                                                children: [
                                                    "Request Samples",
                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "w-5 h-5 ml-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative h-full min-h-[300px] md:min-h-[400px]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: "/ifa/product/Poster/single_poster.jpg",
                                                alt: "Eco-solvent poster printing",
                                                fill: true,
                                                className: "object-cover"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/40 md:bg-gradient-to-l"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mt-20",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12",
                                    children: "Popular Poster Applications"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                                    children: [
                                        {
                                            icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                                            title: "Retail Promotions",
                                            desc: "Boost in-store sales with eye-catching promotional posters"
                                        },
                                        {
                                            icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                                            title: "Event Announcements",
                                            desc: "Promote concerts, exhibitions, and special events"
                                        },
                                        {
                                            icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
                                            title: "Cinema & Theater",
                                            desc: "Display movie listings and show times"
                                        },
                                        {
                                            icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                                            title: "Educational Displays",
                                            desc: "Create informative posters for schools and colleges"
                                        },
                                        {
                                            icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                                            title: "Restaurant Menus",
                                            desc: "Display specials and menu items with appetizing visuals"
                                        },
                                        {
                                            icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                            title: "Corporate Messaging",
                                            desc: "Communicate company values and announcements"
                                        },
                                        {
                                            icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                            title: "Trade Shows",
                                            desc: "Create impactful booth graphics and information displays"
                                        },
                                        {
                                            icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                                            title: "Art Reproductions",
                                            desc: "High-quality art prints for galleries and home decoration"
                                        }
                                    ].map((app, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        className: "w-6 h-6 text-indigo-600",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: app.icon
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                    className: "font-bold text-gray-900 mb-2",
                                                    children: app.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-600 text-sm",
                                                    children: app.desc
                                                })
                                            ]
                                        }, i))
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-gray-50 py-16",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto px-4 py-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-2xl font-bold mb-8",
                            children: "Related Products"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: relatedProducts.map((relatedProduct)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "h-48 relative bg-gray-50",
                                            children: [
                                                !relatedProduct.imageSrc || relatedProduct.imageSrc.includes("css-placeholder-image") ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute inset-0 css-placeholder banner"
                                                }) : /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: relatedProduct.imageSrc,
                                                    alt: relatedProduct.name,
                                                    fill: true,
                                                    className: "object-contain group-hover:scale-105 transition-transform duration-500"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute top-2 left-2",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full",
                                                        children: relatedProduct.category
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "font-semibold text-gray-900",
                                                    children: relatedProduct.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "mt-1 text-sm text-gray-500 line-clamp-2",
                                                    children: relatedProduct.description
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: `/products/${relatedProduct.id}`,
                                                    className: "mt-3 inline-flex items-center text-blue-600 hover:text-blue-800",
                                                    children: [
                                                        "View Details",
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-4 h-4 ml-1",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 5l7 7-7 7"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, relatedProduct.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-white py-16",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "text-3xl font-bold mb-8 text-center text-gray-800",
                                children: "Product Specifications"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "divide-y divide-gray-200",
                                    children: product.specifications && product.specifications.map((spec, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 text-sm sm:text-base",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "bg-gray-50 p-4 md:p-6 flex items-center font-medium text-gray-700",
                                                    children: spec.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-span-2 p-4 md:p-6 text-gray-600",
                                                    children: spec.value
                                                })
                                            ]
                                        }, index))
                                })
                            })
                        ]
                    })
                })
            }),
            product && (product.id === "leaflets-a6" || product.id === "leaflets-a5" || product.id === "leaflets-a4" || product.id === "leaflets-a3") && /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "fold-calculator",
                className: "bg-gray-50 py-16 border-t border-gray-200",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "text-3xl font-bold mb-4 text-gray-800",
                                        children: "Leaflet Size & Fold Calculator"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-lg text-gray-600 max-w-3xl mx-auto",
                                        children: "Visualize different fold options and understand exactly how your final printed piece will look and fold."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white p-6 rounded-xl shadow-lg border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-xl font-bold mb-4 text-gray-700",
                                                children: "Interactive Preview"
                                            }),
                                            product.id === "leaflets-a6" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "relative aspect-[105/148] bg-blue-50 border-2 border-blue-300 rounded-sm mx-auto max-w-[260px] mb-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "absolute inset-0 flex flex-col items-center justify-center p-4 text-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-3xl font-bold text-blue-800 mb-1",
                                                            children: "A6"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-sm text-blue-700 font-medium",
                                                            children: "105mm \xd7 148mm"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text-xs text-blue-600 mt-2",
                                                            children: "Single sheet"
                                                        })
                                                    ]
                                                })
                                            }),
                                            product.id === "leaflets-a5" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "relative aspect-[148/210] bg-blue-50 border-2 border-blue-300 rounded-sm mx-auto max-w-[260px] mb-6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "absolute inset-0 flex flex-col items-center justify-center p-4 text-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-3xl font-bold text-blue-800 mb-1",
                                                                    children: "A5"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-sm text-blue-700 font-medium",
                                                                    children: "148mm \xd7 210mm"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-xs text-blue-600 mt-2",
                                                                    children: "Single sheet"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute left-0 right-0 top-1/2 border-t-2 border-blue-400 border-dashed"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "bg-gray-50 p-4 rounded-lg mb-6",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                className: "font-medium text-gray-800 mb-2",
                                                                children: "Half-fold dimensions:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-gray-700",
                                                                children: "When folded: 105mm \xd7 148mm (A6 size)"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            product.id === "leaflets-a4" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "relative aspect-[210/297] bg-blue-50 border-2 border-blue-300 rounded-sm mx-auto max-w-[260px] mb-6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "absolute inset-0 flex flex-col items-center justify-center p-4 text-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-3xl font-bold text-blue-800 mb-1",
                                                                    children: "A4"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-sm text-blue-700 font-medium",
                                                                    children: "210mm \xd7 297mm"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute left-0 right-0 top-1/2 border-t-2 border-blue-400 border-dashed"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute left-1/3 top-0 bottom-0 border-l-2 border-blue-400 border-dashed"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute left-2/3 top-0 bottom-0 border-l-2 border-blue-400 border-dashed"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "bg-gray-50 p-4 rounded-lg mb-6",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                className: "font-medium text-gray-800 mb-2",
                                                                children: "Fold dimensions:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-gray-700",
                                                                children: "Half-fold: 148mm \xd7 210mm (A5 size)"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-gray-700 mt-1",
                                                                children: "Tri-fold: 99mm \xd7 210mm"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-gray-700 mt-1",
                                                                children: "Z-fold: 99mm \xd7 210mm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            product.id === "leaflets-a3" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "relative aspect-[297/420] bg-blue-50 border-2 border-blue-300 rounded-sm mx-auto max-w-[260px] mb-6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "absolute inset-0 flex flex-col items-center justify-center p-4 text-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-3xl font-bold text-blue-800 mb-1",
                                                                    children: "A3"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-sm text-blue-700 font-medium",
                                                                    children: "297mm \xd7 420mm"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute left-0 right-0 top-1/2 border-t-2 border-blue-400 border-dashed"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute left-0 right-0 top-1/4 border-t-2 border-blue-400 border-dashed"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute left-0 right-0 top-3/4 border-t-2 border-blue-400 border-dashed"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "bg-gray-50 p-4 rounded-lg mb-6",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                className: "font-medium text-gray-800 mb-2",
                                                                children: "Fold dimensions:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-gray-700",
                                                                children: "Half-fold: 210mm \xd7 297mm (A4 size)"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-gray-700 mt-1",
                                                                children: "Quarter-fold: 148mm \xd7 210mm (A5 size)"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-gray-700 mt-1",
                                                                children: "Roll-fold: Variable depending on number of folds"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-xl font-bold mb-6 text-gray-700",
                                                children: "Available Fold Options"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "space-y-6",
                                                children: product.foldOptions && product.foldOptions.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                className: "text-lg font-bold text-gray-800 mb-2",
                                                                children: option.name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "text-gray-600 mb-3",
                                                                children: option.description
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "bg-blue-50 p-3 rounded-md",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "text-sm font-medium text-blue-800",
                                                                        children: "Dimensions:"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "text-sm text-blue-700",
                                                                        children: option.dimensions
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-start",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "flex-shrink-0",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                className: "w-5 h-5 text-yellow-500",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                                                    clipRule: "evenodd"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "ml-3",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                    className: "text-sm font-medium text-yellow-800",
                                                                    children: "Pro Tip"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "text-sm text-yellow-700 mt-1",
                                                                    children: "When designing folded leaflets, remember to account for the fold line and ensure important content isn't positioned where it will be affected by the fold."
                                                                })
                                                            ]
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
                })
            }),
            product && (product.id === "leaflets-a6" || product.id === "leaflets-a5" || product.id === "leaflets-a4" || product.id === "leaflets-a3") && /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "paper-options",
                className: "bg-white py-16 border-t border-gray-200",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "text-3xl font-bold mb-4 text-gray-800",
                                        children: "Paper Options"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-lg text-gray-600 max-w-3xl mx-auto",
                                        children: "Choose from a range of high-quality paper stocks to find the perfect match for your leaflet design and purpose."
                                    })
                                ]
                            }),
                            product.paperWeights && product.paperFinishes && /*#__PURE__*/ jsx_runtime.jsx(components_PaperOptionsExplorer, {
                                paperWeights: product.paperWeights,
                                paperFinishes: product.paperFinishes,
                                laminationOptions: product.laminationOptions
                            }),
                            !product.paperWeights && product.paperOptions && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: product.paperOptions.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "h-2 bg-gradient-to-r from-blue-500 to-blue-700"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-bold text-lg text-gray-800 mb-2",
                                                        children: option.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-gray-600 text-sm mb-4",
                                                        children: option.description
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "mt-auto",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-sm font-medium text-blue-700 mt-3",
                                                            children: option.recommended
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-12 bg-blue-50 p-6 rounded-xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "font-bold text-xl text-blue-900 mb-3",
                                        children: "Not sure which paper to choose?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-blue-800 mb-4",
                                        children: "We can send you a sample pack with all our paper options so you can feel the quality before placing your order."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "/contact?subject=Paper Sample Request",
                                        className: "inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-medium transition-colors",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                className: "w-5 h-5 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                                })
                                            }),
                                            "Request Paper Samples"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            product && product.id === "brown-pizza-boxes" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "pizza-box-options",
                className: "bg-white py-16 border-t border-gray-200",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "text-3xl font-bold mb-4 text-gray-800",
                                        children: "Box Size Options"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-lg text-gray-600 max-w-3xl mx-auto",
                                        children: "Explore our eco-friendly pizza box sizes to find the perfect fit for your pizzas. All boxes feature 4.5-5cm height for optimal pizza protection."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(components_PizzaBoxExplorer, {}),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mt-12 bg-blue-50 p-6 rounded-xl",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col md:flex-row items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "md:w-2/3 mb-6 md:mb-0 md:pr-8",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "font-bold text-xl text-blue-900 mb-3",
                                                    children: "Ready to Order?"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-blue-800 mb-4",
                                                    children: "With a minimum order quantity of just 100 pieces, our brown pizza boxes are perfect for businesses of all sizes."
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "space-y-2 mb-4 text-blue-800",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    className: "w-5 h-5 text-green-500 mr-2 mt-0.5",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M5 13l4 4L19 7"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: "Quick 7-10 day turnaround time"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    className: "w-5 h-5 text-green-500 mr-2 mt-0.5",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M5 13l4 4L19 7"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: "Custom branding with your logo and colors"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            className: "flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                    className: "w-5 h-5 text-green-500 mr-2 mt-0.5",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M5 13l4 4L19 7"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: "Volume discounts available for larger orders"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "md:w-1/3 bg-white p-5 rounded-lg shadow-sm border border-blue-100",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                    className: "font-bold text-gray-800 mb-4",
                                                    children: "Quick Specs"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Minimum Order:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: "100 pieces"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Material:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: "Recycled Kraft"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Lead Time:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: "7-10 Days"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Box Height:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: "4.5-5cm"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mt-6",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/contact?subject=Pizza Box Quote",
                                                        className: "block w-full bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-bold transition-colors",
                                                        children: "Request Quote"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            product.applications && product.applications.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-gray-50 py-16 border-t border-gray-200",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "text-3xl font-bold mb-8 text-center text-gray-800",
                                children: "Ideal Applications"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: product.applications.map((application, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    className: "w-5 h-5 text-blue-600",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M5 13l4 4L19 7"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "text-gray-700",
                                                children: application
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-gray-50 py-16",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto px-4 py-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-2xl font-bold mb-8",
                            children: "Related Products"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: relatedProducts.map((relatedProduct)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "h-48 relative bg-gray-50",
                                            children: [
                                                !relatedProduct.imageSrc || relatedProduct.imageSrc.includes("css-placeholder-image") ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute inset-0 css-placeholder banner"
                                                }) : /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: relatedProduct.imageSrc,
                                                    alt: relatedProduct.name,
                                                    fill: true,
                                                    className: "object-contain p-4"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "absolute top-2 left-2",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full",
                                                        children: relatedProduct.category
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "font-semibold text-gray-900",
                                                    children: relatedProduct.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "mt-1 text-sm text-gray-500 line-clamp-2",
                                                    children: relatedProduct.description
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: `/products/${relatedProduct.id}`,
                                                    className: "mt-3 inline-flex items-center text-blue-600 hover:text-blue-800",
                                                    children: [
                                                        "View Details",
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-4 h-4 ml-1",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 5l7 7-7 7"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, relatedProduct.id))
                        })
                    ]
                })
            }),
            product.foldOptions && product.foldOptions.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "py-16 bg-gray-50",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "text-3xl font-extrabold text-gray-900 sm:text-4xl",
                                    children: "Available Fold Options"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mt-4 text-lg text-gray-500",
                                    children: "Choose the perfect fold style for your leaflet"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
                            children: product.foldOptions.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "relative h-64",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: option.image,
                                                alt: `${product.name} - ${option.name}`,
                                                layout: "fill",
                                                objectFit: "cover",
                                                className: "group-hover:scale-105 transition-transform duration-500"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-xl font-semibold text-gray-900",
                                                    children: option.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "mt-2 text-gray-500",
                                                    children: option.description
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mt-4",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "text-sm font-medium text-gray-500",
                                                        children: [
                                                            "Folded dimensions: ",
                                                            option.dimensions
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }, index))
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mt-12 bg-blue-50 rounded-lg p-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                            className: "h-6 w-6 text-blue-400",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "ml-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-lg font-medium text-blue-900",
                                                children: "Pro Tip: Designing for Folded Leaflets"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mt-2 text-sm text-blue-700",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "When designing your leaflet, remember to account for the fold lines in your layout. For best results:"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "mt-2 list-disc list-inside",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: "Keep important content away from fold lines"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: "Use the front panel for your main message"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: "Consider the reading order of folded sections"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: "Test your design with a physical mockup"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            product && product.id === "white-pizza-boxes" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "size-comparison",
                className: "bg-white py-12 border-t border-gray-200",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "text-3xl font-bold mb-8 text-center text-gray-800",
                                children: "Size Comparison"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm overflow-hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex justify-center items-end space-x-2 sm:space-x-4 h-48 sm:h-64 mb-4 overflow-x-auto no-scrollbar",
                                        children: [
                                            "7",
                                            "9",
                                            "10",
                                            "12",
                                            "14"
                                        ].map((size, idx)=>{
                                            const dimensions = {
                                                "7": '7" (18cm)',
                                                "9": '9" (23cm)',
                                                "10": '10" (25cm)',
                                                "12": '12" (30.5cm)',
                                                "14": '14" (35.5cm)'
                                            };
                                            const isActive = idx === 2; // Default to 10" as active
                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: `${isActive ? "bg-blue-50 border-blue-400" : "bg-gray-100 border-gray-300"} border-2 rounded-lg mb-2 transition-all duration-300 flex items-center justify-center`,
                                                        style: {
                                                            transform: isActive ? "translateY(-8px) scale(1.1)" : "translateY(0) scale(1)",
                                                            width: `${Math.min(parseInt(size) * 0.5, 10)}rem`,
                                                            height: `${Math.min(parseInt(size) * 0.5, 10)}rem`,
                                                            minWidth: "2.5rem",
                                                            minHeight: "2.5rem",
                                                            maxWidth: "10rem"
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            className: `font-bold ${isActive ? "text-blue-900" : "text-gray-500"} text-xs sm:text-sm`,
                                                            children: [
                                                                size,
                                                                '"'
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-medium text-gray-500",
                                                        children: dimensions[size]
                                                    })
                                                ]
                                            }, idx);
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg-white h-2 rounded-full relative mb-4 mx-2",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "absolute inset-x-0 bottom-3 flex justify-between px-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-xs font-medium text-gray-500",
                                                    children: '7"'
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-xs font-medium text-gray-500",
                                                    children: '14"'
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mt-6 text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-gray-600 max-w-3xl mx-auto text-sm sm:text-base",
                                                children: 'Our white pizza boxes come in 5 standard sizes to fit all your pizza offerings, from personal 7" pizzas to large 14" party-size pizzas.'
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-blue-600 mt-2 text-sm sm:text-base",
                                                children: "All boxes offer exceptional quality with 1.5-3mm thickness for optimal pizza protection."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            product && product.id === "sos-grab-bags" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative overflow-hidden",
                ref: sosHeroRef,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute inset-0 opacity-20",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                    className: "h-full w-full",
                                    viewBox: "0 0 100 100",
                                    preserveAspectRatio: "none",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("pattern", {
                                                    id: "sos-grid",
                                                    width: "10",
                                                    height: "10",
                                                    patternUnits: "userSpaceOnUse",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        d: "M 10 0 L 0 0 0 10",
                                                        fill: "none",
                                                        stroke: "brown",
                                                        strokeWidth: "0.5",
                                                        opacity: "0.3"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                                                    id: "spark-gradient",
                                                    x1: "0%",
                                                    y1: "0%",
                                                    x2: "100%",
                                                    y2: "100%",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                                            offset: "0%",
                                                            stopColor: "rgba(217, 119, 6, 0.7)"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                                            offset: "100%",
                                                            stopColor: "rgba(120, 53, 15, 0.5)"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                            width: "100",
                                            height: "100",
                                            fill: "url(#sos-grid)"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute inset-0 overflow-hidden pointer-events-none",
                                children: [
                                    ...Array(15)
                                ].map((_, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "absolute rounded-full bg-amber-600/30 animate-float",
                                        style: {
                                            width: `${Math.random() * 30 + 10}px`,
                                            height: `${Math.random() * 30 + 10}px`,
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            animationDuration: `${Math.random() * 10 + 10}s`,
                                            animationDelay: `${Math.random() * 5}s`,
                                            opacity: Math.random() * 0.5 + 0.3
                                        },
                                        "data-parallax": 0.03 + (Math.random() * 0.05).toFixed(2)
                                    }, i))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container mx-auto px-4 py-12 md:py-20 relative z-10",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-7xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative h-[300px] sm:h-[400px] md:h-[500px] mb-10 md:mb-16",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "sos-bag-carousel absolute inset-0",
                                            children: product.images.map((img, idx)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "sos-carousel-item absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000",
                                                    style: {
                                                        zIndex: currentImageIndex === idx ? 10 : 0,
                                                        opacity: currentImageIndex === idx ? 1 : 0,
                                                        transform: `translate(-50%, -50%) 
                          scale(${currentImageIndex === idx ? 1 : 0.8}) 
                          rotate(${currentImageIndex === idx ? 0 : idx < currentImageIndex ? -5 : 5}deg)`,
                                                        filter: `blur(${currentImageIndex === idx ? 0 : 5}px)`
                                                    },
                                                    "data-parallax": idx % 2 === 0 ? "-0.05" : "0.08",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "relative w-full h-full flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative w-[250px] h-[350px] sm:w-[300px] sm:h-[400px] md:w-[400px] md:h-[500px] transition-transform duration-1000 animate-bob",
                                                            style: {
                                                                transform: `perspective(1000px) rotateY(${Math.sin(Date.now() / 3000 + idx) * 15}deg) rotateX(${Math.cos(Date.now() / 4000 + idx) * 10}deg)`
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute inset-0 bg-white rounded-xl shadow-2xl overflow-hidden",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                                        src: img,
                                                                        alt: `${product.name} - Image ${idx + 1}`,
                                                                        fill: true,
                                                                        className: "object-contain p-4 hover:scale-105 transition-transform duration-500",
                                                                        priority: idx === 0
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute -top-3 -right-3 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-amber-500/80 rounded-full animate-pulse",
                                                                    "data-parallax": "-0.15"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 h-8 md:w-10 md:h-10 bg-amber-700/60 rounded-full animate-bounce",
                                                                    "data-parallax": "0.12"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-black/20 rounded-full blur-md"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "absolute bottom-3 right-3 bg-white text-amber-800 px-3 py-1 rounded-full font-bold shadow-lg transform -rotate-3 text-sm animate-wiggle",
                                                                    children: idx % 2 === 0 ? "Small" : "Medium"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }, idx))
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20",
                                            children: product.images.map((_, idx)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    onClick: ()=>setCurrentImageIndex(idx),
                                                    className: `w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${currentImageIndex === idx ? "bg-amber-600 scale-125" : "bg-amber-300 hover:bg-amber-400"}`,
                                                    "aria-label": `View image ${idx + 1}`
                                                }, idx))
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: ()=>setCurrentImageIndex((prev)=>(prev - 1 + product.images.length) % product.images.length),
                                            className: "absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-amber-800 rounded-full p-2 shadow-md hover:bg-white z-20",
                                            "aria-label": "Previous image",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 2,
                                                stroke: "currentColor",
                                                className: "w-6 h-6",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M15.75 19.5L8.25 12l7.5-7.5"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            onClick: ()=>setCurrentImageIndex((prev)=>(prev + 1) % product.images.length),
                                            className: "absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-amber-800 rounded-full p-2 shadow-md hover:bg-white z-20",
                                            "aria-label": "Next image",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 2,
                                                stroke: "currentColor",
                                                className: "w-6 h-6",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-center md:text-left mb-10",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col md:flex-row justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mb-8 md:mb-0 md:mr-8 max-w-2xl",
                                                "data-parallax": "0.05",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "inline-block bg-amber-600/20 backdrop-blur-sm text-amber-900 px-4 py-1 rounded-full text-sm font-medium mb-4",
                                                        children: product.category
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                                        className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 tracking-tight",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-amber-800",
                                                                children: "Stand-Up"
                                                            }),
                                                            " Square Bottom Bags"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-lg text-gray-700 mb-6 max-w-lg mx-auto md:mx-0",
                                                        children: "Versatile SOS grab bags with a sturdy self-opening design, perfect for takeaway food, coffee shops, bakeries, and retail."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-6",
                                                        children: product.features.slice(0, 4).map((feature, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex items-start",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "flex-shrink-0 mt-1",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                            className: "h-5 w-5 text-amber-600",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "2",
                                                                                d: "M5 13l4 4L19 7"
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "ml-2 text-gray-700",
                                                                        children: feature
                                                                    })
                                                                ]
                                                            }, idx))
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex flex-col sm:flex-row gap-3 mt-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "#size-options",
                                                                className: "w-full sm:w-auto text-center inline-flex justify-center items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-bold transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        className: "w-5 h-5 mr-2",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                                        })
                                                                    }),
                                                                    "Explore Sizes"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                                href: "/contact?subject=SOS Bags Quote",
                                                                className: "w-full sm:w-auto text-center inline-flex justify-center items-center bg-transparent hover:bg-amber-600/10 text-amber-700 border-2 border-amber-600 px-6 py-3 rounded-lg font-bold transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        className: "w-5 h-5 mr-2",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                                        })
                                                                    }),
                                                                    "Request Quote"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg w-full md:w-auto",
                                                "data-parallax": "-0.03",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-lg font-semibold text-amber-800 mb-4",
                                                        children: "Key Specifications"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            product.specifications.slice(0, 5).map((spec, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "flex-shrink-0 w-24 text-sm font-medium text-gray-500",
                                                                            children: [
                                                                                spec.name,
                                                                                ":"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "ml-2 text-gray-800",
                                                                            children: spec.value
                                                                        })
                                                                    ]
                                                                }, idx)),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "pt-3 border-t border-gray-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                className: "text-gray-500 text-sm",
                                                                                children: "Starting price:"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                className: "text-xl font-bold text-amber-800",
                                                                                children: product.price
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "text-sm text-gray-500 mt-1",
                                                                        children: [
                                                                            "Minimum order: ",
                                                                            product.moq,
                                                                            " units"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute inset-0 pointer-events-none opacity-10 bg-repeat animate-paper-texture",
                        style: {
                            backgroundImage: "url(/images/textures/kraft-paper-texture.png)"
                        },
                        "data-parallax": "0.02"
                    })
                ]
            }),
            product && (product.id === "flat-handle-paper-bags" || product.id === "twisted-handle-paper-bags") && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-gradient-to-b from-blue-50 to-white py-10 border-b border-gray-200 shadow-sm",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center mb-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "text-3xl md:text-4xl font-bold text-blue-900 mb-4",
                                        children: "Premium Quality Paper Bags in Three Perfect Sizes"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "text-lg text-gray-600 max-w-3xl mx-auto",
                                        children: [
                                            "Our ",
                                            product.id === "flat-handle-paper-bags" ? "flat handle" : "twisted handle",
                                            " paper bags are available in three convenient sizes to suit all your packaging needs."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-16",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "h-48 bg-gray-100 flex items-center justify-center p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative w-32 h-40 bg-blue-100 rounded",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute inset-x-0 top-0 h-2 bg-blue-600 rounded-t"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute inset-x-0 top-2 h-6 bg-white flex items-center justify-center",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-xs font-medium text-blue-800",
                                                                children: "SMALL"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-bold text-lg text-blue-900 mb-2",
                                                        children: "Small Size"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-gray-700 mb-3",
                                                        children: product.id === "flat-handle-paper-bags" ? '8"\xd75"\xd710"' : '8"\xd74.5"\xd710"'
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Perfect for small items, accessories, gifts, and boutique purchases."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "h-48 bg-gray-100 flex items-center justify-center p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative w-36 h-44 bg-blue-100 rounded",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute inset-x-0 top-0 h-2 bg-blue-600 rounded-t"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute inset-x-0 top-2 h-6 bg-white flex items-center justify-center",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-xs font-medium text-blue-800",
                                                                children: "MEDIUM"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-bold text-lg text-blue-900 mb-2",
                                                        children: "Medium Size"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-gray-700 mb-3",
                                                        children: product.id === "flat-handle-paper-bags" ? '10"\xd76"\xd712"' : '10"\xd75"\xd713"'
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Our most popular size for retail items, clothing, and general merchandise."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "h-48 bg-gray-100 flex items-center justify-center p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative w-40 h-48 bg-blue-100 rounded",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute inset-x-0 top-0 h-2 bg-blue-600 rounded-t"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "absolute inset-x-0 top-2 h-6 bg-white flex items-center justify-center",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-xs font-medium text-blue-800",
                                                                children: "LARGE"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "font-bold text-lg text-blue-900 mb-2",
                                                        children: "Large Size"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-gray-700 mb-3",
                                                        children: product.id === "flat-handle-paper-bags" ? '12"\xd77"\xd714"' : '12"\xd76"\xd715.5"'
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Ideal for larger purchases, multiple items, and premium products."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "md:flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 flex items-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-2xl font-bold mb-4",
                                                        children: "Advanced Digital Printing Technology"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "mb-6",
                                                        children: "Our state-of-the-art digital CMYK printing delivers exceptional quality without the expense of traditional printing methods."
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                className: "flex items-start",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        className: "w-5 h-5 text-blue-200 mr-2 mt-0.5",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                            clipRule: "evenodd"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: "No expensive printing plates or setup costs"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                className: "flex items-start",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        className: "w-5 h-5 text-blue-200 mr-2 mt-0.5",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                            clipRule: "evenodd"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: "Unlimited color options with exceptional accuracy"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                className: "flex items-start",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        className: "w-5 h-5 text-blue-200 mr-2 mt-0.5",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                            clipRule: "evenodd"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: "Fine detail reproduction for complex designs"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                className: "flex items-start",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        className: "w-5 h-5 text-blue-200 mr-2 mt-0.5",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                            clipRule: "evenodd"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: "Perfect for both simple logos and complex graphics"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "md:w-1/2 p-8",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-2xl font-bold text-gray-800 mb-4",
                                                    children: "Transparent Cost Structure"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-600 mb-6",
                                                    children: "Our pricing is based solely on ink coverage and design complexity, with no hidden fees or minimum charges."
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "border-l-4 border-blue-500 pl-4 py-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    className: "font-semibold text-gray-800",
                                                                    children: "Simple Designs"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Small logos and simple graphics use less ink and cost less."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "border-l-4 border-blue-500 pl-4 py-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    className: "font-semibold text-gray-800",
                                                                    children: "Medium Complexity"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Average designs with moderate ink coverage at standard rates."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "border-l-4 border-blue-500 pl-4 py-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    className: "font-semibold text-gray-800",
                                                                    children: "Complex Designs"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Elaborate, colorful designs with high ink coverage cost more but deliver maximum impact."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
// This function gets called at build time
async function getStaticPaths() {
    // Get the paths we want to pre-render based on products
    const paths = products/* default */.ZP.map((product)=>({
            params: {
                slug: product.id
            }
        }));
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    // { fallback: true } would generate the page on-demand
    return {
        paths,
        fallback: true
    };
}
// This function gets called at build time
async function getStaticProps({ params }) {
    const product = (0,products/* getProductBySlug */.Co)(params.slug);
    // Get related products
    const relatedProducts = product ? (0,products/* getRelatedProducts */.Er)(product.id) : [];
    // If no product is found, return 404 page
    if (!product) {
        return {
            notFound: true
        };
    }
    // Pass product data to the page via props
    return {
        props: {
            product,
            relatedProducts
        },
        // Re-generate the page at most once per hour
        revalidate: 3600
    };
}
/* harmony default export */ const _slug_ = (ProductDetail);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fproducts%2F%5Bslug%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fproducts%2F%5Bslug%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps");
const next_route_loaderkind_PAGES_page_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_slug_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_slug_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/products/[slug]",
        pathname: "/products/[slug]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: _slug_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [698,719,61,400,869], () => (__webpack_exec__(3197)));
module.exports = __webpack_exports__;

})();