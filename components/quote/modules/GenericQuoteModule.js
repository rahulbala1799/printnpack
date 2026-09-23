import React, { useState } from 'react';
import { buildCatalogQuoteLine, getModuleFields } from '../../../data/quote-modules';
import { cn } from '../../../lib/cn';
import QuantityField from '../QuantityField';
import QuoteOptionField, { quoteControlClass } from '../QuoteOptionField';

export default function GenericQuoteModule({ catalogItem, existing, onSave }) {
  const fields = getModuleFields(catalogItem.moduleId);
  const initial = { ...(existing?.options || {}) };
  if (existing?.qty) initial.qty = existing.qty;

  const [values, setValues] = useState(() => {
    const next = { ...initial };
    fields.forEach((field) => {
      if (field.type === 'chips' && next[field.key] == null) next[field.key] = field.options[0];
      if (field.type === 'qty' && next.qty == null) next.qty = field.min || 1;
      if (field.type === 'dimensions') {
        if (next.width == null) next.width = '';
        if (next.length == null) next.length = '';
      }
      if (field.type === 'text' && next[field.key] == null) next[field.key] = '';
    });
    return next;
  });

  const setField = (key, value) => {
    setValues((prev) => {
      const next = { ...prev, [key]: value };
      if (key === 'sizePreset' && value !== 'Custom') {
        next.width = '';
        next.length = '';
      }
      return next;
    });
  };

  return (
    <div className="space-y-6">
      {fields.map((field) => {
        if (field.type === 'chips') {
          return (
            <QuoteOptionField key={field.key} label={field.label}>
              <div className="flex flex-wrap justify-center gap-1.5">
                {field.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setField(field.key, option)}
                    className={cn(
                      'h-8 rounded-md border px-2.5 text-xs font-medium',
                      values[field.key] === option
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </QuoteOptionField>
          );
        }

        if (field.type === 'note') {
          return (
            <QuoteOptionField key={field.key} label={field.label}>
              <p className="text-sm font-medium text-stone-800">{field.text}</p>
            </QuoteOptionField>
          );
        }

        if (field.type === 'qty') {
          return (
            <QuoteOptionField key={field.key} label={field.label}>
              <QuantityField value={values.qty} min={field.min || 1} onCommit={(qty) => setField('qty', qty)} />
            </QuoteOptionField>
          );
        }

        if (field.type === 'dimensions') {
          if (field.whenCustom && values.sizePreset !== 'Custom' && values.shape !== 'Custom') {
            return null;
          }
          const unit = field.unit || 'mm';
          return (
            <QuoteOptionField key={`${field.key}-dimensions`} label={`${field.label} (${unit})`}>
              <div className="flex items-end justify-center gap-3">
                <label className="flex flex-col items-center gap-1">
                  <span className="text-[11px] font-medium text-stone-500">Width</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={values.width || ''}
                    onChange={(e) => setField('width', e.target.value.replace(/[^\d.]/g, ''))}
                    placeholder="0"
                    className={cn(quoteControlClass, 'w-20 text-center')}
                  />
                </label>
                <span className="mb-2 text-stone-400">×</span>
                <label className="flex flex-col items-center gap-1">
                  <span className="text-[11px] font-medium text-stone-500">Length</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={values.length || ''}
                    onChange={(e) => setField('length', e.target.value.replace(/[^\d.]/g, ''))}
                    placeholder="0"
                    className={cn(quoteControlClass, 'w-20 text-center')}
                  />
                </label>
              </div>
            </QuoteOptionField>
          );
        }

        return (
          <QuoteOptionField key={field.key} label={field.label}>
            <input
              type="text"
              value={values[field.key] || ''}
              onChange={(e) => setField(field.key, e.target.value)}
              placeholder={field.key === 'notes' || field.label === 'Size' ? 'e.g. 100 mm' : ''}
              className={cn(quoteControlClass, 'w-40')}
            />
          </QuoteOptionField>
        );
      })}

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => onSave(buildCatalogQuoteLine(catalogItem, values))}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {existing ? 'Update quote' : 'Add to quote'}
        </button>
      </div>
    </div>
  );
}
