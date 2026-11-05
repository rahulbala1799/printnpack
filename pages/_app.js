import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { QuoteCartProvider } from '../lib/quote-cart-context';
import SiteChatWidget from '../components/chat/SiteChatWidget';
import AgentInvite from '../components/chat/AgentInvite';
import CookieConsent from '../components/consent/CookieConsent';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const trackRoute = (url) => {
      if (window.printNpackAnalytics && window.printNpackAnalytics.pageview) {
        window.printNpackAnalytics.pageview();
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_path: url || window.location.pathname,
          page_location: window.location.href,
          page_title: document.title,
        });
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Analytics Script */}
      <Script
        src="/analytics.js?v=3"
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
        <AgentInvite />
        <SiteChatWidget />
        <CookieConsent />
      </QuoteCartProvider>
    </>
  );
}

export default MyApp;
