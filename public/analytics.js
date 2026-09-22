// printNpack Analytics Tracking Script
// This script tracks page visits, user behavior, and performance metrics

(function() {
  'use strict';

  // Configuration
  const ANALYTICS_ENDPOINT = '/api/analytics/track';
  const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  
  // Analytics state
  let sessionId = null;
  let pageStartTime = Date.now();
  let currentVisitId = null;
  let lastTrackedPath = '';
  let lastTrackedAt = 0;
  
  // Initialize analytics
  function initAnalytics() {
    try {
      sessionId = getSessionId();
      if (shouldSkip(window.location.pathname)) return;
      trackPageVisit();
      setupVisibilityTracking();
      setupBeforeUnloadTracking();
      trackPhoneClicks();
      watchQuoteSubmits();
    } catch (error) {
      console.error('Analytics initialization error:', error);
    }
  }

  function shouldSkip(pathname) {
    return pathname.startsWith('/admin') || pathname.startsWith('/staff') || pathname === '/login';
  }
  
  // Generate unique session ID
  function getSessionId() {
    let id = localStorage.getItem('analytics_session_id');
    
    if (!id) {
      id = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('analytics_session_id', id);
    }
    
    // Check if session has expired
    const lastActivity = localStorage.getItem('analytics_last_activity');
    if (lastActivity && (Date.now() - parseInt(lastActivity)) > SESSION_TIMEOUT) {
      id = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('analytics_session_id', id);
    }
    
    localStorage.setItem('analytics_last_activity', Date.now().toString());
    return id;
  }
  
  function buildPayload(eventType, extra) {
    const utm = getUtmParams();
    const params = new URLSearchParams(window.location.search);
    return Object.assign({
      eventType: eventType,
      pageUrl: window.location.href,
      pageTitle: document.title || 'Unknown Page',
      referrer: document.referrer || '',
      userAgent: navigator.userAgent,
      sessionId: sessionId,
      timeOnPage: Math.round((Date.now() - pageStartTime) / 1000),
      isBounce: eventType === 'pageview',
      utmSource: utm.utmSource,
      utmMedium: utm.utmMedium,
      utmCampaign: utm.utmCampaign,
      searchTerm: params.get('q') || '',
    }, extra || {});
  }

  function trackPageVisit() {
    const path = window.location.pathname;
    if (shouldSkip(path)) return;
    if (path === lastTrackedPath && Date.now() - lastTrackedAt < 4000) return;
    lastTrackedPath = path;
    lastTrackedAt = Date.now();
    pageStartTime = Date.now();
    currentVisitId = null;

    sendAnalyticsData(buildPayload('pageview')).then((json) => {
      if (json && json.visitId) currentVisitId = json.visitId;
    });
  }
  
  function getUtmParams() {
    try {
      const params = new URLSearchParams(window.location.search);
      return {
        utmSource: params.get('utm_source') || '',
        utmMedium: params.get('utm_medium') || '',
        utmCampaign: params.get('utm_campaign') || '',
      };
    } catch {
      return { utmSource: '', utmMedium: '', utmCampaign: '' };
    }
  }

  // Track page visibility changes
  function setupVisibilityTracking() {
    let hiddenTime = 0;
    let isHidden = false;
    
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        hiddenTime = Date.now();
        isHidden = true;
      } else if (isHidden) {
        // Page became visible again, adjust time calculation
        const hiddenDuration = Date.now() - hiddenTime;
        pageStartTime += hiddenDuration;
        isHidden = false;
      }
    });
  }
  
  // Track beforeunload (page exit)
  function setupBeforeUnloadTracking() {
    const sendEngagement = () => {
      if (!sessionId || shouldSkip(window.location.pathname)) return;
      const payload = buildPayload('engagement', { visitId: currentVisitId });
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(ANALYTICS_ENDPOINT, blob);
      }
    };
    window.addEventListener('pagehide', sendEngagement);
  }
  
  // Send analytics data to server
  async function sendAnalyticsData(data) {
    try {
      const response = await fetch(ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) return null;
      return response.json();
    } catch (error) {
      return null;
    }
  }
  
  // Track custom events
  function trackEvent(eventName, eventData = {}, options = {}) {
    const eventTrackingData = buildPayload(eventName === 'quote_submit' ? 'quote_submit' : 'event', {
      eventName: eventName,
      eventData: eventData,
    });

    if (options.useBeacon && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(eventTrackingData)], { type: 'application/json' });
      navigator.sendBeacon(ANALYTICS_ENDPOINT, blob);
      return;
    }

    sendAnalyticsData(eventTrackingData);
  }

  function inferPhoneLinkLocation(link) {
    if (link.dataset.phoneLocation) return link.dataset.phoneLocation;
    if (link.closest('header')) return 'header';
    if (link.closest('footer')) return 'footer';
    if (link.closest('nav')) return 'navigation';
    const section = link.closest('section[id]');
    if (section?.id) return section.id;
    if (link.closest('main')) return 'page-content';
    return 'other';
  }

  function trackPhoneClicks() {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="tel:"]');
      if (!link) return;

      trackEvent('phone_click', {
        phoneHref: link.getAttribute('href') || 'tel:unknown',
        linkText: (link.textContent || '').trim().slice(0, 300) || 'unknown',
        location: inferPhoneLinkLocation(link),
        pagePath: window.location.pathname,
      }, { useBeacon: true });
    }, true);
  }
  
  function watchQuoteSubmits() {
    const originalFetch = window.fetch;
    if (!originalFetch || window.__printnpackQuoteWatch) return;
    window.__printnpackQuoteWatch = true;
    window.fetch = function () {
      const args = arguments;
      const input = args[0];
      const init = args[1] || {};
      const url = typeof input === 'string' ? input : (input && input.url) || '';
      const method = (init.method || (input && input.method) || 'GET').toUpperCase();
      const response = originalFetch.apply(this, args);
      if (method === 'POST' && String(url).indexOf('/api/contact') !== -1) {
        response.then((res) => {
          if (res && res.ok) trackEvent('quote_submit', {}, { useBeacon: true });
        }).catch(() => {});
      }
      return response;
    };
  }

  window.printNpackAnalytics = {
    init: initAnalytics,
    pageview: trackPageVisit,
    trackEvent: trackEvent,
    trackPhoneClicks: trackPhoneClicks,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnalytics);
  } else {
    initAnalytics();
  }
})();
