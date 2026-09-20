import React, { useEffect, useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { QUOTE_CATALOG, getQuoteCategories } from '../../data/quote-modules';
import { useQuoteCart } from '../../lib/quote-cart-context';
import QuoteCategoryPicker from './QuoteCategoryPicker';
import QuoteConfigurePanel from './QuoteConfigurePanel';
import QuoteProductPicker from './QuoteProductPicker';

const CATEGORIES = getQuoteCategories();

function SliceStep({ current, onBack }) {
  const steps = [
    { id: 'categories', label: 'Category' },
    { id: 'products', label: 'Product' },
    { id: 'configure', label: 'Options' },
  ];
  const index = steps.findIndex((step) => step.id === current);

  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-white px-3 py-2 lg:hidden">
      <button
        type="button"
        onClick={onBack}
        disabled={index <= 0}
        className="rounded-lg px-2 py-1 text-sm font-medium text-blue-600 disabled:text-stone-300"
      >
        Back
      </button>
      <ol className="flex items-center gap-1.5">
        {steps.map((step, stepIndex) => (
          <li key={step.id} className="flex items-center gap-1.5">
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                stepIndex === index
                  ? 'bg-slate-900 text-white'
                  : stepIndex < index
                    ? 'bg-blue-50 text-blue-700'
                    : 'bg-stone-100 text-stone-400'
              }`}
            >
              {step.label}
            </span>
            {stepIndex < steps.length - 1 && <span className="text-stone-300">/</span>}
          </li>
        ))}
      </ol>
      <span className="w-10" />
    </div>
  );
}

export default function ProductQuoteBuilder() {
  const {
    builderOpen,
    builderProductId,
    setBuilderProductId,
    closeBuilder,
    findByProductId,
    upsertItem,
    setOpen,
  } = useQuoteCart();

  const [group, setGroup] = useState('All');
  const [mobilePane, setMobilePane] = useState('categories');

  const selected = QUOTE_CATALOG.find((item) => item.id === builderProductId) || null;
  const existing = selected ? findByProductId(selected.id) : null;
  const selectedCategory = CATEGORIES.find((item) => item.id === group) || CATEGORIES[0];

  const visible = useMemo(
    () => (group === 'All' ? QUOTE_CATALOG : QUOTE_CATALOG.filter((item) => item.group === group)),
    [group]
  );

  useEffect(() => {
    if (!builderOpen) return;
    const item = QUOTE_CATALOG.find((entry) => entry.id === builderProductId);
    if (item) {
      setGroup(item.group);
      setMobilePane('configure');
    } else {
      setMobilePane('categories');
    }
  }, [builderOpen]);

  const pickCategory = (id) => {
    setGroup(id);
    if (selected && id !== 'All' && selected.group !== id) {
      setBuilderProductId(null);
    }
    setMobilePane('products');
  };

  const pickProduct = (id) => {
    setBuilderProductId(id);
    setMobilePane('configure');
  };

  const backSlice = () => {
    if (mobilePane === 'configure') {
      setMobilePane('products');
      return;
    }
    if (mobilePane === 'products') setMobilePane('categories');
  };

  const save = (line) => {
    upsertItem(line);
    closeBuilder();
    setOpen(true);
  };

  const productPicker = (
    <QuoteProductPicker
      items={visible}
      selectedId={selected?.id}
      inQuote={(id) => findByProductId(id)}
      onSelect={pickProduct}
      title={selectedCategory?.name || 'All products'}
    />
  );

  return (
    <Dialog open={builderOpen} onOpenChange={(next) => !next && closeBuilder()}>
      <DialogContent onClose={closeBuilder}>
        <DialogHeader className="hidden lg:block">
          <DialogTitle>Build a quote</DialogTitle>
          <DialogDescription>
            Category, product, then options. Each product is unique — adding it again updates that line.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-between border-b border-stone-200 bg-white px-4 py-3 pr-12 lg:hidden">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-400">Quote builder</p>
            <p className="text-base font-semibold text-stone-900">
              {mobilePane === 'categories' && 'Pick a category'}
              {mobilePane === 'products' && selectedCategory?.name}
              {mobilePane === 'configure' && (selected?.name || 'Options')}
            </p>
          </div>
        </div>

        <SliceStep current={mobilePane} onBack={backSlice} />

        <div className="hidden min-h-0 flex-1 lg:grid lg:grid-cols-[220px_300px_minmax(0,1fr)]">
          <aside className="min-h-0 border-r border-stone-200">
            <QuoteCategoryPicker categories={CATEGORIES} selectedId={group} onSelect={pickCategory} variant="sidebar" />
          </aside>
          <aside className="min-h-0 border-r border-stone-200">
            <QuoteProductPicker
              items={visible}
              selectedId={selected?.id}
              inQuote={(id) => findByProductId(id)}
              onSelect={pickProduct}
              title={selectedCategory?.name || 'All products'}
            />
          </aside>
          <section className="min-h-0">
            <QuoteConfigurePanel selected={selected} existing={existing} onSave={save} />
          </section>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden lg:hidden">
          <div className="h-full min-h-0">
            {mobilePane === 'categories' && (
              <QuoteCategoryPicker categories={CATEGORIES} selectedId={group} onSelect={pickCategory} variant="slice" />
            )}
            {mobilePane === 'products' && productPicker}
            {mobilePane === 'configure' && (
              <QuoteConfigurePanel selected={selected} existing={existing} onSave={save} />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
