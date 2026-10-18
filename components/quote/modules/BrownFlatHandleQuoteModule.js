import React from 'react';
import BrownFlatHandleConfigurator from '../../flat-handle-bags/BrownFlatHandleConfigurator';
import { buildBrownFlatHandleQuoteLine } from '../../../data/brown-flat-handle-bags';

export default function BrownFlatHandleQuoteModule({ catalogItem, existing, onSave }) {
  return (
    <BrownFlatHandleConfigurator
      key={catalogItem.id}
      align="center"
      initial={{ ...(existing?.options || {}), qty: existing?.qty }}
      submitLabel={existing ? 'Update quote' : 'Add to quote'}
      onSubmit={(priced) => onSave(buildBrownFlatHandleQuoteLine(catalogItem, priced))}
    />
  );
}
