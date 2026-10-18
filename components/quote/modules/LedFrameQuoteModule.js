import React from 'react';
import LedFrameConfigurator from '../../led-frames/LedFrameConfigurator';
import { buildLedFrameQuoteLine } from '../../../data/led-frames';

export default function LedFrameQuoteModule({ catalogItem, existing, onSave }) {
  return (
    <LedFrameConfigurator
      key={catalogItem.id}
      align="center"
      initial={{ ...(existing?.options || {}), qty: existing?.qty }}
      submitLabel={existing ? 'Update quote' : 'Add to quote'}
      onSubmit={(priced) => onSave(buildLedFrameQuoteLine(catalogItem, priced))}
    />
  );
}
