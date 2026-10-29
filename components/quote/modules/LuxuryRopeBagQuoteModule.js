import React from 'react';
import LuxuryRopeBagConfigurator from '../../luxury-rope-bags/LuxuryRopeBagConfigurator';
import { buildRopeBagQuoteLine } from '../../../data/luxury-rope-handle-bags';

export default function LuxuryRopeBagQuoteModule({ catalogItem, existing, onSave }) {
  return (
    <LuxuryRopeBagConfigurator
      key={catalogItem.id}
      align="center"
      showPreview={false}
      initial={{ ...(existing?.options || {}), qty: existing?.qty }}
      submitLabel={existing ? 'Update quote' : 'Add to quote'}
      onSubmit={(priced) => onSave(buildRopeBagQuoteLine(catalogItem, priced))}
    />
  );
}
