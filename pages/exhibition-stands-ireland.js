import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductListItem } from '../lib/schema';
import {
  EXHIBITION_HERO,
  EXHIBITION_PATH,
  EXHIBITION_SERVICE,
  exhibitionCompanions,
  exhibitionFaqs,
  exhibitionHall,
  exhibitionMachineRecord,
  exhibitionStands,
} from '../data/exhibition-stands';

const PAGE_URL = `${SITE_URL}${EXHIBITION_PATH}`;
const HALL = exhibitionHall();
const STANDS = exhibitionStands();
const FAQS = exhibitionFaqs();
const SERVICE = Object.values(EXHIBITION_SERVICE);
const MACHINE = exhibitionMachineRecord(SITE_URL);

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Banners Ireland', item: `${SITE_URL}/banners-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Exhibition stands', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Exhibition stands in Ireland',
  itemListElement: STANDS.map((stand, index) => (
    stand.price
      ? buildProductListItem({
        position: index + 1,
        name: stand.name,
        url: `${SITE_URL}${stand.href}`,
        price: stand.price,
        image: stand.image ? `${SITE_URL}${stand.image}` : undefined,
      })
      : {
        '@type': 'ListItem',
        position: index + 1,
        name: stand.name,
        url: `${SITE_URL}${stand.href}`,
      }
  )),
};

const datasetLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Exhibition stands, service and prices',
  description: `${EXHIBITION_SERVICE.speed.text} ${EXHIBITION_SERVICE.artwork.text} ${EXHIBITION_SERVICE.delivery.text}`,
  url: MACHINE.specificationJsonUrl,
  creator: { '@type': 'Organization', name: 'PrintNPack Ireland', url: SITE_URL },
  distribution: [
    { '@type': 'DataDownload', encodingFormat: 'text/plain', contentUrl: MACHINE.specificationUrl },
    { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: MACHINE.specificationJsonUrl },
  ],
};

const speakableLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Exhibition stands in Ireland',
  url: PAGE_URL,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: SERVICE.map((item) => `#${item.id}`),
  },
};

const HALL_CSS = `
.exh {
  background:
    radial-gradient(ellipse 90px 280px at 8% 0%, rgba(255, 214, 150, 0.16), transparent 72%),
    radial-gradient(ellipse 90px 280px at 32% 0%, rgba(255, 214, 150, 0.12), transparent 72%),
    radial-gradient(ellipse 90px 280px at 58% 0%, rgba(255, 214, 150, 0.15), transparent 72%),
    radial-gradient(ellipse 90px 280px at 84% 0%, rgba(255, 214, 150, 0.11), transparent 72%),
    linear-gradient(180deg, #171c24 0%, #0d1117 28%, #12100e 100%);
  color: #f5f1ea;
}
.exh-truss {
  height: 14px;
  background: repeating-linear-gradient(90deg, #3a424e 0 10px, #232830 10px 18px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
}
.exh-crumbs {
  position: relative;
  z-index: 2;
}
.exh-entrance {
  position: relative;
  padding: 8px 0 36px;
  overflow: hidden;
}
.exh-floor {
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 120px;
  background:
    linear-gradient(90deg, transparent 0 14%, rgba(120, 92, 48, 0.28) 14% 86%, transparent 86%),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 72px),
    linear-gradient(180deg, transparent, rgba(18, 14, 10, 0.2));
  transform: perspective(520px) rotateX(58deg);
  transform-origin: center bottom;
}
.exh-entrance-inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 36px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 28px 20px 8px;
}
.exh-pass {
  display: inline-flex;
  flex-direction: column;
  width: fit-content;
  min-width: 148px;
  padding: 8px 12px 10px;
  background: #f7f1e6;
  color: #1c1917;
  box-shadow: 0 10px 24px rgba(0,0,0,0.28);
}
.exh-pass b { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; }
.exh-pass span { margin-top: 2px; font-size: 13px; font-weight: 700; }
.exh-kicker {
  margin-top: 18px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f0d7a8;
}
.exh h1 {
  margin: 10px 0 0;
  max-width: 14ch;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
}
.exh-lead { margin-top: 18px; max-width: 38rem; font-size: 1.05rem; line-height: 1.6; color: #ddd6cb; }
.exh-meta { margin-top: 10px; max-width: 36rem; font-size: 0.9rem; line-height: 1.55; color: #b7b0a4; }
.exh-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
.exh-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 18px;
  background: #f0d7a8;
  color: #1c1917;
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
}
.exh-btn:hover { background: #f7e4c2; }
.exh-btn-ghost {
  background: transparent;
  color: #f5f1ea;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.35);
}
.exh-btn-ghost:hover { background: rgba(255,255,255,0.06); }
.exh-lightbox {
  background: #07090c;
  padding: 12px 12px 16px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 0 48px rgba(240, 200, 120, 0.16), 0 28px 50px rgba(0,0,0,0.45);
}
.exh-lightbox-screen { position: relative; aspect-ratio: 4/3; background: #111; }
.exh-lightbox-caption {
  margin: 10px 2px 0;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #d9c7a2;
}
.exh-wayfinding {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 18px;
  justify-content: center;
  overflow-x: auto;
  padding: 8px 20px 10px;
}
.exh-hang {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  color: #1c1917;
  text-decoration: none;
}
.exh-hang i {
  display: block;
  width: 2px;
  height: 26px;
  background: linear-gradient(#f0d7a8, #8d6b32);
}
.exh-hang span {
  display: block;
  min-width: 168px;
  padding: 12px 14px;
  background: #f6f1ea;
  text-align: center;
  box-shadow: 0 14px 28px rgba(0,0,0,0.35);
}
.exh-hang strong { display: block; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; }
.exh-hang em { display: block; margin-top: 2px; font-style: normal; font-size: 12px; color: #57534e; }
.exh-hang:hover span { background: #fffaf3; }
.exh-reception, .exh-aisles, .exh-info, .exh-kiosks, .exh-exit {
  position: relative;
  z-index: 1;
  max-width: 1120px;
  margin: 0 auto;
  padding: 8px 20px 28px;
}
.exh-counter {
  background: #f4efe6;
  color: #1c1917;
  box-shadow: 0 24px 50px rgba(0,0,0,0.38);
}
.exh-counter-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 18px;
  background: #1c1917;
  color: #f0d7a8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.exh-counter h2 { margin: 0; padding: 22px 22px 0; font-size: clamp(1.5rem, 2vw, 1.9rem); }
.exh-plaques {
  display: grid;
  gap: 14px;
  padding: 18px 22px 22px;
}
.exh-plaque {
  background: #fffdf8;
  padding: 16px;
  box-shadow: inset 0 3px 0 #c9a36a;
}
.exh-plaque h3 { margin: 0; font-size: 1.05rem; }
.exh-plaque p { margin: 8px 0 0; font-size: 0.92rem; line-height: 1.55; color: #44403c; }
.exh-counter-lip { height: 16px; background: linear-gradient(#5c5144, #2c261f); }
.exh-aisle { position: relative; padding-top: 18px; scroll-margin-top: 7rem; }
.exh-aisle-head { position: relative; max-width: 40rem; margin-bottom: 22px; padding-top: 8px; }
.exh-aisle h2 { margin: 0; font-size: clamp(1.6rem, 3vw, 2.1rem); }
.exh-aisle-head p { margin: 8px 0 0; color: #d4cdc2; font-size: 0.95rem; line-height: 1.55; }
.exh-aisle-head a { color: #f0d7a8; font-weight: 700; }
.exh-row { display: grid; gap: 26px; }
.exh-booth {
  position: relative;
  display: flex;
  flex-direction: column;
  color: inherit;
  text-decoration: none;
  padding: 6px 8px 10px;
  background: linear-gradient(#d5dbe3, #8e97a3);
  box-shadow: 0 22px 40px rgba(0,0,0,0.4);
  transition: transform 0.2s ease;
}
.exh-booth:hover { transform: translateY(-6px); }
.exh-booth:focus-visible { outline: 2px solid #f0d7a8; outline-offset: 3px; }
.exh-spot {
  position: absolute;
  left: 50%;
  top: -28px;
  width: 64%;
  height: 54px;
  transform: translateX(-50%);
  background: radial-gradient(ellipse at center, rgba(255, 224, 170, 0.55), transparent 70%);
  pointer-events: none;
}
.exh-fascia {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 14px;
  background: linear-gradient(#f8f4ec, #e7dfd2);
  color: #1c1917;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  border-bottom: 4px solid #c9a36a;
}
.exh-graphic { position: relative; aspect-ratio: 4/3; overflow: hidden; background: #101216; }
.exh-cloth {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  padding: 18px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.28), transparent 34%),
    repeating-linear-gradient(90deg, #e6dfd3 0 3px, #d8d0c2 3px 16px);
  color: #1c1917;
}
.exh-cloth span { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
.exh-cloth strong { margin-top: 4px; font-size: 1.25rem; line-height: 1.15; letter-spacing: -0.02em; }
.exh-plinth {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px 16px 18px;
  background: linear-gradient(#2a241c, #171410);
  border-top: 10px solid #3d342b;
}
.exh-plinth h3 { margin: 0; font-size: 1.2rem; color: #fffaf3; }
.exh-plinth .exh-summary { margin: 8px 0 0; font-size: 0.9rem; line-height: 1.5; color: #ddd4c8; }
.exh-plinth .exh-caption { margin: 8px 0 0; font-size: 0.75rem; color: #b7ad9f; }
.exh-price {
  margin-top: auto;
  padding: 10px 12px;
  background: #f6f1ea;
  color: #1c1917;
}
.exh-price b { display: block; color: #1c1917; font-size: 0.95rem; }
.exh-price span { display: block; margin-top: 2px; color: #57534e; font-size: 0.75rem; }
.exh-visit { margin-top: 12px; font-size: 0.85rem; font-weight: 700; color: #f0d7a8; }
.exh-info-desk, .exh-kiosk-wrap, .exh-exit-panel {
  background: #f4efe6;
  color: #1c1917;
  box-shadow: 0 18px 40px rgba(0,0,0,0.28);
}
.exh-info-desk { padding: 0 0 12px; }
.exh-info-desk h2, .exh-kiosk-wrap h2, .exh-exit-panel h2 { margin: 0; font-size: clamp(1.5rem, 2vw, 2rem); }
.exh-info-desk dt { margin-top: 18px; font-weight: 700; }
.exh-info-desk dd { margin: 4px 0 0; font-size: 0.92rem; line-height: 1.55; color: #44403c; }
.exh-info-desk a { color: #1c1917; }
.exh-kiosk-wrap { padding: 26px 22px 28px; }
.exh-kiosk-grid { display: grid; gap: 12px; margin-top: 16px; }
.exh-kiosk {
  display: block;
  padding: 14px;
  background: #fffdf8;
  color: #1c1917;
  text-decoration: none;
  box-shadow: inset 3px 0 0 #c9a36a;
}
.exh-kiosk:hover { background: #fff; }
.exh-kiosk strong { display: block; }
.exh-kiosk span { display: block; margin-top: 4px; font-size: 0.85rem; color: #57534e; }
.exh-exit { padding-bottom: 48px; }
.exh-exit-panel { padding: 32px 22px; text-align: center; background: #14120f; color: #f5f1ea; }
.exh-exit-panel p { margin: 10px auto 0; max-width: 36rem; color: #d4cdc2; }
@media (min-width: 700px) {
  .exh-plaques, .exh-kiosk-grid { grid-template-columns: 1fr 1fr; }
  .exh-row-2 { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 1024px) {
  .exh-entrance { min-height: calc(100vh - 132px); display: flex; flex-direction: column; justify-content: center; }
  .exh-entrance-inner { grid-template-columns: 1.05fr 0.95fr; align-items: center; padding-top: 12px; }
  .exh-plaques { grid-template-columns: 1fr 1fr 1fr; }
  .exh-row-3 { grid-template-columns: 1fr 1fr 1fr; }
  .exh-kiosk-grid { grid-template-columns: 1fr 1fr 1fr; }
}
`;

function StandBooth({ stand }) {
  return (
    <Link href={stand.href} className="exh-booth">
      <span className="exh-spot" aria-hidden="true" />
      <div className="exh-fascia">
        <span>Stand {stand.stand}</span>
        <span>PrintNPack</span>
      </div>
      <div className="exh-graphic">
        {stand.image ? (
          <Image
            src={stand.image}
            alt={stand.imageAlt}
            fill
            sizes="(max-width: 700px) 100vw, 33vw"
            className="object-cover"
            unoptimized={process.env.NODE_ENV === 'production'}
          />
        ) : (
          <div className="exh-cloth">
            <span>Blank wall</span>
            <strong>Your artwork goes here</strong>
          </div>
        )}
      </div>
      <div className="exh-plinth">
        <h3>{stand.name}</h3>
        <p className="exh-summary">{stand.summary}</p>
        {stand.caption ? <p className="exh-caption">{stand.caption}</p> : <p className="exh-caption">Your own artwork goes on the fabric.</p>}
        <div className="exh-price">
          <b>{stand.priceLabel}</b>
          <span>{stand.priceNote}</span>
        </div>
        <span className="exh-visit">Visit stand {stand.stand}</span>
      </div>
    </Link>
  );
}

export default function ExhibitionStandsIreland() {
  const title = 'Exhibition Stands Ireland | Trade Show Displays | PrintNPack';
  const description = 'Exhibition stands in Ireland, printed in Ashbourne. Pop-up walls, zipper walls, rigid panels and fabric stands. Fast production, full artwork help, and delivery planned for your show date.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="exhibition stands Ireland, trade show displays Ireland, exhibition printing Ireland, pop-up display stand Ireland, zipper wall Ireland, exhibition wall Ireland, fabric banner stand, trade show stand Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="alternate" type="text/plain" href={MACHINE.specificationUrl} title="Exhibition stands specification" />
        <link rel="alternate" type="application/json" href={MACHINE.specificationJsonUrl} title="Exhibition stands specification" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${EXHIBITION_HERO.src}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableLd) }} />
      </Head>

      <div className="exh">
        <style dangerouslySetInnerHTML={{ __html: HALL_CSS }} />
        <div className="exh-truss" aria-hidden="true" />

        <nav className="exh-crumbs" aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-2 px-5 py-3 text-sm text-[#cfc6b8]">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/banners-ireland" className="hover:text-white">Banners</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-white">Exhibition stands</li>
          </ol>
        </nav>

        <header className="exh-entrance">
          <div className="exh-floor" aria-hidden="true" />
          <div className="exh-entrance-inner">
            <div>
              <p className="exh-pass">
                <b>PrintNPack</b>
                <span>Visitor · Hall 1</span>
              </p>
              <p className="exh-kicker">Ashbourne · Ireland</p>
              <h1>Exhibition stands in Ireland</h1>
              <p className="exh-lead">
                Walk the hall. Each stand is a real PrintNPack product: a pop-up wall, a zipper wall, a rigid exhibition panel, a fabric stand, a lit frame or a table cover. Open a stand for its sizes and price.
              </p>
              <p className="exh-meta">
                Printed at Unit 14 Ashbourne Business Centre, Co. Meath, and delivered to every county in Ireland.
              </p>
              <div className="exh-actions">
                <Link href="/quote" className="exh-btn">Build a quote</Link>
                <a href="tel:+353894157369" className="exh-btn exh-btn-ghost">Call +353 89 415 7369</a>
              </div>
            </div>
            <div className="exh-lightbox">
              <div className="exh-lightbox-screen">
                <Image
                  src={EXHIBITION_HERO.src}
                  alt={EXHIBITION_HERO.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <p className="exh-lightbox-caption">Feature wall · example print</p>
            </div>
          </div>
          <nav className="exh-wayfinding" aria-label="Aisles">
            {HALL.map((aisle) => (
              <a key={aisle.id} href={`#${aisle.id}`} className="exh-hang">
                <i aria-hidden="true" />
                <span>
                  <strong>Aisle {aisle.stand}</strong>
                  <em>{aisle.name.replace(/^Aisle [A-C] · /, '')}</em>
                </span>
              </a>
            ))}
          </nav>
        </header>

        <section className="exh-reception">
          <div className="exh-counter">
            <div className="exh-counter-top">
              <span>Reception</span>
              <span>Hall 1</span>
            </div>
            <h2>How an exhibition order is handled</h2>
            <div className="exh-plaques">
              {SERVICE.map((item) => (
                <article key={item.id} className="exh-plaque">
                  <h3>{item.title}</h3>
                  <p id={item.id}>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="exh-counter-lip" aria-hidden="true" />
          </div>
        </section>

        <div className="exh-aisles">
          {HALL.map((aisle) => (
            <section key={aisle.id} id={aisle.id} className="exh-aisle">
              <div className="exh-aisle-head">
                <h2>{aisle.name}</h2>
                <p>{aisle.intro}</p>
                {aisle.id === 'aisle-zipper' ? (
                  <p><Link href="/zipper-walls-ireland">All zipper walls</Link></p>
                ) : null}
              </div>
              <div className={aisle.stands.length > 4 ? 'exh-row exh-row-3' : 'exh-row exh-row-2'}>
                {aisle.stands.map((stand) => (
                  <StandBooth key={stand.stand} stand={stand} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="exh-info">
          <div className="exh-info-desk">
            <div className="exh-counter-top">
              <span>Information</span>
              <span>Ask the desk</span>
            </div>
            <h2 className="px-[22px] pt-5">Exhibition stand questions</h2>
            <dl className="px-[22px] pb-2">
              {FAQS.map((item) => (
                <div key={item.q}>
                  <dt>{item.q}</dt>
                  <dd>{item.a}</dd>
                </div>
              ))}
            </dl>
            <p className="px-[22px] pb-6 text-sm text-[#57534e]">
              A plain-text copy of this hall, including the service and each from-price, is at{' '}
              <a href={MACHINE.specificationUrl} className="font-medium underline">the exhibition stands record</a>.
            </p>
          </div>
        </section>

        <section className="exh-kiosks">
          <div className="exh-kiosk-wrap">
            <div className="exh-counter-top">
              <span>Also in the hall</span>
              <span>Often ordered with a stand</span>
            </div>
            <h2 className="px-[22px] pt-5">Often ordered with a stand</h2>
            <div className="exh-kiosk-grid px-[22px] pb-6">
              {exhibitionCompanions().map((item) => (
                <Link key={item.href} href={item.href} className="exh-kiosk">
                  <strong>{item.label}</strong>
                  <span>{item.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="exh-exit">
          <div className="exh-exit-panel">
            <h2>Tell us the show date</h2>
            <p>Send the stand, the size and the artwork you have. We reply with a price, a proof, and whether the date can be met.</p>
            <div className="exh-actions" style={{ justifyContent: 'center' }}>
              <Link href="/quote" className="exh-btn">Build a quote</Link>
              <a href="https://wa.me/353894157369" className="exh-btn exh-btn-ghost">WhatsApp your logo</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
