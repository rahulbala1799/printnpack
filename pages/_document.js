import Document, { Html, Head, Main, NextScript } from 'next/document'
import { documentLangFromPage } from '../data/eu-language-pages'

class MyDocument extends Document {
  render() {
    const lang = documentLangFromPage(this.props.__NEXT_DATA__?.page || '')
    return (
    <Html lang={lang}>
      <Head>
        {/* Consent Mode v2 must run before Google Tag Manager and the Google tag. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500,
                regions: ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']
              });
              gtag('consent', 'default', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted'
              });
              try {
                var savedConsent = localStorage.getItem('pnp_ads_consent');
                if (savedConsent === 'granted' || savedConsent === 'denied') {
                  gtag('consent', 'update', {
                    ad_storage: savedConsent,
                    ad_user_data: savedConsent,
                    ad_personalization: savedConsent,
                    analytics_storage: savedConsent
                  });
                }
              } catch (e) {}
              gtag('set', 'ads_data_redaction', true);
              gtag('set', 'url_passthrough', true);
            `
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NFDS5NR9');`
          }}
        />
        {/* Google Ads. The published GTM container has no tags, so this tag records ad clicks and conversions. */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17101649834" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('js', new Date());
              gtag('config', 'AW-17101649834', { allow_enhanced_conversions: true });
            `
          }}
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFDS5NR9"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}

export default MyDocument 