import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="printNpack - Professional printing and packaging solutions in Ireland" />
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
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
} 