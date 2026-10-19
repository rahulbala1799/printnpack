import React from 'react';
import VinylCutLetterConfigurator from '../../vinyl-cut-letters/VinylCutLetterConfigurator';
import { buildVinylLetterQuoteLine } from '../../../data/vinyl-cut-letters';

export default function VinylCutLetterQuoteModule({ catalogItem, existing, onSave }) {
  return (
    <VinylCutLetterConfigurator
      key={catalogItem.id}
      align="center"
      initial={{ ...(existing?.options || {}), qty: existing?.qty }}
      submitLabel={existing ? 'Update quote' : 'Add to quote'}
      onSubmit={(priced) => onSave(buildVinylLetterQuoteLine(catalogItem, priced))}
    />
  );
}
