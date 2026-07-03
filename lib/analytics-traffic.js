function normalizeHost(hostname = '') {
  return hostname.replace(/^www\./i, '').toLowerCase();
}

export function getReferrerDomain(referrer = '') {
  if (!referrer) return null;
  try {
    return normalizeHost(new URL(referrer).hostname);
  } catch {
    return null;
  }
}

export function parseTrafficSource({
  referrer = '',
  utmSource = '',
  utmMedium = '',
  pageUrl = '',
} = {}) {
  const utm_source = (utmSource || '').trim() || null;
  const utm_medium = (utmMedium || '').trim() || null;
  const referrerDomain = getReferrerDomain(referrer);

  let pageHost = null;
  try {
    pageHost = normalizeHost(new URL(pageUrl).hostname);
  } catch {
    pageHost = null;
  }

  if (utm_source) {
    return {
      traffic_source: utm_source,
      referrer_domain: referrerDomain,
      utm_source,
      utm_medium,
      source_detail: utm_medium ? `${utm_source} / ${utm_medium}` : utm_source,
    };
  }

  if (!referrer || !referrerDomain) {
    return {
      traffic_source: 'Direct',
      referrer_domain: null,
      utm_source: null,
      utm_medium: null,
      source_detail: 'Direct',
    };
  }

  if (pageHost && referrerDomain === pageHost) {
    return {
      traffic_source: 'Internal',
      referrer_domain: referrerDomain,
      utm_source: null,
      utm_medium: null,
      source_detail: 'Internal navigation',
    };
  }

  const ref = referrer.toLowerCase();
  let traffic_source = 'Other';

  if (ref.includes('google.')) traffic_source = 'Google';
  else if (ref.includes('bing.')) traffic_source = 'Bing';
  else if (ref.includes('yahoo.')) traffic_source = 'Yahoo';
  else if (ref.includes('duckduckgo.')) traffic_source = 'DuckDuckGo';
  else if (ref.includes('facebook.') || ref.includes('fb.')) traffic_source = 'Facebook';
  else if (ref.includes('instagram.')) traffic_source = 'Instagram';
  else if (ref.includes('linkedin.')) traffic_source = 'LinkedIn';
  else if (ref.includes('twitter.') || ref.includes('t.co') || ref.includes('x.com')) {
    traffic_source = 'X / Twitter';
  }
  else if (ref.includes('youtube.')) traffic_source = 'YouTube';
  else if (ref.includes('tiktok.')) traffic_source = 'TikTok';
  else if (ref.includes('pinterest.')) traffic_source = 'Pinterest';

  return {
    traffic_source,
    referrer_domain: referrerDomain,
    utm_source: null,
    utm_medium: null,
    source_detail: referrerDomain || traffic_source,
  };
}

export function parseUtmFromUrl(pageUrl = '') {
  try {
    const url = new URL(pageUrl);
    return {
      utmSource: url.searchParams.get('utm_source') || '',
      utmMedium: url.searchParams.get('utm_medium') || '',
      utmCampaign: url.searchParams.get('utm_campaign') || '',
    };
  } catch {
    return { utmSource: '', utmMedium: '', utmCampaign: '' };
  }
}
