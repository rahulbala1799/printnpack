import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { QuoteCartProvider } from '../lib/quote-cart-context';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
  }, []);

  useEffect(() => {
    const trackRoute = () => {
      if (window.printNpackAnalytics && window.printNpackAnalytics.pageview) {
        window.printNpackAnalytics.pageview();
      }
    };
    router.events.on('routeChangeComplete', trackRoute);
    return () => router.events.off('routeChangeComplete', trackRoute);
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Analytics Script */}
      <Script
        src="/analytics.js?v=2"
        strategy="afterInteractive"
      />

      <style jsx global>{`
        html {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
      <QuoteCartProvider>
        <Component {...pageProps} />
      </QuoteCartProvider>
    </>
  );
}

export default MyApp;
