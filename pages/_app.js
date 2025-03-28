import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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