import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getQuoteCatalogItem, repriceQuoteLine } from '../data/quote-modules';
import { isWeddingRef, trackFunnel, trackWedding } from './track-funnel';

const STORAGE_KEY = 'pnp-quote-cart-v1';
const QuoteCartContext = createContext(null);

function newLineId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function QuoteCartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(false);
  const [builderProductId, setBuilderProductId] = useState(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryProductId, setEnquiryProductId] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const upsertItem = useCallback((line) => {
    setItems((prev) => {
      const match = prev.find((item) => item.productId === line.productId);
      if (!match) {
        trackFunnel('quote_builder', 'product', {
          productId: line.productId,
          productName: line.name,
        });
        if (isWeddingRef(line.moduleId, line.productId, line.href)) {
          trackWedding('product', { productId: line.productId, productName: line.name });
        }
      }
      if (match) {
        return prev.map((item) => (item.productId === line.productId ? { ...line, id: match.id } : item));
      }
      return [...prev, { ...line, id: newLineId() }];
    });
  }, []);

  const openCart = useCallback((next = true) => {
    setOpen(Boolean(next));
    if (next) trackFunnel('quote_cart', 'open');
  }, []);

  const addItem = useCallback((line) => {
    upsertItem(line);
    openCart(true);
  }, [upsertItem, openCart]);

  const findByProductId = useCallback(
    (productId) => items.find((item) => item.productId === productId) || null,
    [items]
  );

  const openBuilder = useCallback((productId = null) => {
    setBuilderProductId(productId);
    setBuilderOpen(true);
    setOpen(false);
    const catalogItem = productId ? getQuoteCatalogItem(productId) : null;
    trackFunnel('quote_builder', 'open', {
      productId: productId || null,
      productName: catalogItem?.name || null,
    });
    const onWeddingPage = typeof window !== 'undefined' && isWeddingRef(window.location.pathname);
    if (onWeddingPage || isWeddingRef(catalogItem?.id, catalogItem?.group, catalogItem?.href, catalogItem?.moduleId)) {
      trackWedding('start', {
        productId: catalogItem?.id || null,
        productName: catalogItem?.name || null,
      });
    }
  }, []);

  const openEnquiry = useCallback((productId = null) => {
    setEnquiryProductId(productId);
    setEnquiryOpen(true);
    const catalogItem = productId ? getQuoteCatalogItem(productId) : null;
    const productName = catalogItem?.name || (productId ? String(productId).slice(0, 200) : null);
    trackFunnel('quote_enquiry', 'open', {
      productId: catalogItem?.id || null,
      productName,
    });
    const onWeddingPage = typeof window !== 'undefined' && isWeddingRef(window.location.pathname);
    if (onWeddingPage || isWeddingRef(catalogItem?.id, catalogItem?.group, productId, productName)) {
      trackWedding('start', { productId: catalogItem?.id || null, productName });
    }
  }, []);

  const closeEnquiry = useCallback(() => setEnquiryOpen(false), []);

  const closeBuilder = useCallback(() => {
    setBuilderOpen(false);
    setBuilderProductId(null);
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    setItems((prev) => prev.map((item) => (item.id === id ? repriceQuoteLine(item, qty) : item)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = items.reduce((sum, item) => sum + (Number(item.qty) || 1), 0);
  const subtotal = items.reduce((sum, item) => sum + (Number(item.lineTotal) || 0), 0);

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      open,
      setOpen: openCart,
      builderOpen,
      builderProductId,
      setBuilderProductId,
      openBuilder,
      closeBuilder,
      enquiryOpen,
      enquiryProductId,
      openEnquiry,
      closeEnquiry,
      addItem,
      upsertItem,
      findByProductId,
      removeItem,
      updateQty,
      clear,
    }),
    [items, count, subtotal, open, builderOpen, builderProductId, openCart, openBuilder, closeBuilder, enquiryOpen, enquiryProductId, openEnquiry, closeEnquiry, addItem, upsertItem, findByProductId, removeItem, updateQty, clear]
  );

  return <QuoteCartContext.Provider value={value}>{children}</QuoteCartContext.Provider>;
}

export function useQuoteCart() {
  const ctx = useContext(QuoteCartContext);
  if (!ctx) {
    throw new Error('useQuoteCart must be used inside QuoteCartProvider');
  }
  return ctx;
}
