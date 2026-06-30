import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Reusable product page template. Renders breadcrumb, hero (2-col gallery + copy),
 * features, gallery + lightbox, specs, and CTA from product data (data/products.js).
 */
const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const FeatureIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.12 14.31l6.172-6.172a.75.75 0 011.06 1.06l-6.171 6.172a.75.75 0 01-1.061 0zM3 10.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" />
  </svg>
);

export default function ProductPageTemplate({ product, seoOverride, skipBreadcrumb = false }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const timeoutRef = useRef(null);

  const images = product.images && product.images.length ? product.images : (product.imageSrc ? [product.imageSrc] : []);
  const features = Array.isArray(product.features) ? product.features : [];
  const specs = Array.isArray(product.specifications) ? product.specifications : [];

  const goToImage = useCallback((nextIndex) => {
    if (images.length === 0 || nextIndex === currentImage) return;
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setCurrentImage(nextIndex);
      requestAnimationFrame(() => setIsTransitioning(false));
    }, 400);
  }, [currentImage, images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => goToImage((currentImage + 1) % images.length), 5000);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentImage, images.length, goToImage]);

  const quoteUrl = `/quote?product=${encodeURIComponent(product.name)}`;
  const baseUrl = 'https://www.printnpack.ie';
  const productUrl = `${baseUrl}/products/${product.id}`;
  const ogImage = images[0] ? (images[0].startsWith('http') ? images[0] : `${baseUrl}${images[0]}`) : '';

  const displayName = seoOverride?.h1 || product.name;
  const heroIntro = seoOverride?.intro;

  return (
    <>
      {/* Breadcrumb */}
      {!skipBreadcrumb && (
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-gray-700">Products</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{product.name}</li>
          </ol>
        </div>
      </nav>
      )}

      {/* Hero / Product Overview */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              {images.length > 0 ? (
                <>
                  <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-3">
                    {images.map((img, i) => (
                      <div
                        key={i}
                        className="absolute inset-0"
                        style={{
                          transition: 'opacity 0.8s ease',
                          opacity: i === currentImage && !isTransitioning ? 1 : 0,
                        }}
                      >
                        <Image
                          src={img}
                          alt={`${product.name} ${i + 1}`}
                          fill
                          className="object-cover"
                          priority={i === 0}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                  {images.length > 1 && (
                    <div className={`grid gap-2 ${images.length <= 6 ? 'grid-cols-6' : 'grid-cols-4'}`}>
                      {images.slice(0, 8).map((img, i) => (
                        <button
                          key={i}
                          onClick={() => goToImage(i)}
                          className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                            i === currentImage ? 'border-blue-500 ring-1 ring-blue-300' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                  No image
                </div>
              )}
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-blue-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                {product.category || 'Product'}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                {displayName}
              </h1>
              {heroIntro && (
                <p className="text-gray-600 leading-relaxed mb-4">{heroIntro}</p>
              )}

              <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {product.price && (
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2">{typeof product.price === 'string' ? product.price : 'Quote'}</div>
                    <div className="text-xs text-gray-500">price</div>
                  </div>
                )}
                {product.moq != null && (
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-lg sm:text-xl font-bold text-gray-900">{product.moq}+</div>
                    <div className="text-xs text-gray-500">min. order</div>
                  </div>
                )}
                {product.leadTime && (
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2">{typeof product.leadTime === 'string' ? product.leadTime.replace(/ business days?/gi, '') : product.leadTime}</div>
                    <div className="text-xs text-gray-500">production</div>
                  </div>
                )}
              </div>

              {features.length > 0 && (
                <ul className="space-y-2.5 mb-6">
                  {features.slice(0, 6).map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckIcon />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  href={quoteUrl}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center"
                >
                  Get Custom Quote
                </Link>
                <a
                  href="tel:+353894400155"
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center"
                >
                  Call +353 89 440 0155
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Irish Business
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      {features.length > 0 && (
        <section className="bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Choose {product.name}?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">{product.description?.slice(0, 120)}…</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3">
                    <FeatureIcon />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {images.length > 1 && (
        <section id="gallery" className="bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Gallery</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Examples of our {product.name}.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </button>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={quoteUrl}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-300 transition-colors"
              >
                Get Your Custom Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && images[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button className="absolute top-4 right-4 text-white/80 hover:text-white p-2" onClick={() => setLightboxIndex(null)}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length); }}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length); }}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="relative w-full max-w-3xl aspect-square" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightboxIndex]}
              alt={`${product.name} ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}

      {/* Specifications */}
      {specs.length > 0 && (
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Technical Specifications</h2>
                <p className="text-gray-500 mb-6">Details for {product.name}.</p>
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  {specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                    >
                      <span className="font-medium text-gray-700">{spec.name || spec.label}</span>
                      <span className="text-gray-500 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              {images[0] && (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                  <Image src={images[0]} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to order {product.name}?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get a free quote with no obligation. We'll help you with sizes, quantities, and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={quoteUrl}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+353894400155"
              className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors"
            >
              Call +353 89 440 0155
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><CheckIcon /> No obligation</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> Ireland-wide delivery</span>
          </div>
        </div>
      </section>
    </>
  );
}

export { CheckIcon, FeatureIcon };
