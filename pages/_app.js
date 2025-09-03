import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';
import Script from 'next/script';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Analytics Script */}
      <Script
        src="/analytics.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('📊 Analytics script loaded successfully');
        }}
        onError={(e) => {
          console.error('❌ Analytics script failed to load:', e);
        }}
      />
      
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 