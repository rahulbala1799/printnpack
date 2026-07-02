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
  let isTracking = false;
  let pageLoadTime = 0;
  
  // Initialize analytics
  function initAnalytics() {
    if (isTracking) return;
    
    try {
      // Generate or retrieve session ID
      sessionId = getSessionId();
      
      // Track page load performance
      trackPageLoad();
      
      // Track page visit
      trackPageVisit();
      
      // Set up page visibility tracking
      setupVisibilityTracking();
      
      // Set up beforeunload tracking
      setupBeforeUnloadTracking();

      // Track all tel: link clicks site-wide
      trackPhoneClicks();
      
      isTracking = true;
      console.log('📊 Analytics tracking initialized');
      
    } catch (error) {
      console.error('Analytics initialization error:', error);
    }
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
  
  // Track page load performance
  function trackPageLoad() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          if (perfData) {
            pageLoadTime = Math.round(perfData.loadEventEnd - perfData.loadEventStart);
          }
        }, 0);
      });
    }
  }
  
  // Track page visit
  function trackPageVisit() {
    const trackingData = {
      pageUrl: window.location.href,
      pageTitle: document.title || 'Unknown Page',
      referrer: document.referrer || '',
      userAgent: navigator.userAgent,
      ipAddress: '127.0.0.1', // Will be replaced by server
      sessionId: sessionId,
      loadTime: pageLoadTime,
      timeOnPage: 0,
      isBounce: true
    };
    
    // Send tracking data
    sendAnalyticsData(trackingData);
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
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Math.round((Date.now() - pageStartTime) / 1000);
      
      // Send final tracking data (navigator.sendBeacon for reliability)
      const finalData = {
        pageUrl: window.location.href,
        pageTitle: document.title || 'Unknown Page',
        referrer: document.referrer || '',
        userAgent: navigator.userAgent,
        ipAddress: '127.0.0.1',
        sessionId: sessionId,
        loadTime: pageLoadTime,
        timeOnPage: timeOnPage,
        isBounce: false
      };
      
      // Use sendBeacon for reliable data transmission on page exit
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(finalData)], { type: 'application/json' });
        navigator.sendBeacon(ANALYTICS_ENDPOINT, blob);
      }
    });
  }
  
  // Send analytics data to server
  async function sendAnalyticsData(data) {
    try {
      const response = await fetch(ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        console.log('📊 Analytics data sent successfully');
      } else {
        console.warn('⚠️ Analytics data send failed:', response.status);
      }
    } catch (error) {
      console.error('❌ Analytics data send error:', error);
    }
  }
  
  // Track custom events
  function trackEvent(eventName, eventData = {}, options = {}) {
    const eventTrackingData = {
      pageUrl: window.location.href,
      pageTitle: document.title || 'Unknown Page',
      referrer: document.referrer || '',
      userAgent: navigator.userAgent,
      ipAddress: '127.0.0.1',
      sessionId: sessionId,
      loadTime: pageLoadTime,
      timeOnPage: Math.round((Date.now() - pageStartTime) / 1000),
      isBounce: false,
      eventName: eventName,
      eventData: eventData
    };

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
  
  // Track form submissions
  function trackFormSubmission(formSelector, formData = {}) {
    const forms = document.querySelectorAll(formSelector);
    forms.forEach(form => {
      form.addEventListener('submit', () => {
        trackEvent('form_submit', {
          formId: form.id || 'unknown',
          formAction: form.action || 'unknown',
          ...formData
        });
      });
    });
  }
  
  // Track button clicks
  function trackButtonClicks(buttonSelector, buttonData = {}) {
    const buttons = document.querySelectorAll(buttonSelector);
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        trackEvent('button_click', {
          buttonId: button.id || 'unknown',
          buttonText: button.textContent?.trim() || 'unknown',
          buttonClass: button.className || 'unknown',
          ...buttonData
        });
      });
    });
  }
  
  // Track external links
  function trackExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    links.forEach(link => {
      link.addEventListener('click', () => {
        trackEvent('external_link_click', {
          linkUrl: link.href,
          linkText: link.textContent?.trim() || 'unknown'
        });
      });
    });
  }
  
  // Track scroll depth
  function trackScrollDepth() {
    let maxScrollDepth = 0;
    let scrollTracked = false;
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        // Track at 25%, 50%, 75%, and 100%
        if (!scrollTracked && (scrollPercent >= 25)) {
          trackEvent('scroll_depth', { depth: scrollPercent });
          scrollTracked = true;
        }
      }
    });
  }
  
  // Public API
  window.printNpackAnalytics = {
    init: initAnalytics,
    trackEvent: trackEvent,
    trackFormSubmission: trackFormSubmission,
    trackButtonClicks: trackButtonClicks,
    trackExternalLinks: trackExternalLinks,
    trackScrollDepth: trackScrollDepth,
    trackPhoneClicks: trackPhoneClicks,
  };
  
  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnalytics);
  } else {
    initAnalytics();
  }
  
  // Auto-initialize additional tracking
  document.addEventListener('DOMContentLoaded', () => {
    // Track form submissions
    window.printNpackAnalytics.trackFormSubmission('form');
    
    // Track button clicks
    window.printNpackAnalytics.trackButtonClicks('button, .btn, [role="button"]');
    
    // Track external links
    window.printNpackAnalytics.trackExternalLinks();
    
    // Track scroll depth
    window.printNpackAnalytics.trackScrollDepth();
  });
  
})();
