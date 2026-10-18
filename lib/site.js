/** Canonical production URL — all redirects, sitemaps, and meta tags use this. */
export const SITE_URL = 'https://www.printnpack.ie';

/** Primary business phone (call / tel: links and schema). */
export const SITE_PHONE_TEL = '+353894157369';
export const SITE_PHONE_DISPLAY = '+353 89 415 7369';

/** WhatsApp uses the same business mobile as the phone number above. */
export const SITE_WHATSAPP_TEL = SITE_PHONE_TEL.replace(/^\+/, '');
export const SITE_WHATSAPP_DISPLAY = SITE_PHONE_DISPLAY;
export const SITE_WHATSAPP_URL = `https://wa.me/${SITE_WHATSAPP_TEL}`;
