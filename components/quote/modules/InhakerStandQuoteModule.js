import React from 'react';
import InhakerStandConfigurator from '../../inhaker-stands/InhakerStandConfigurator';
import { buildInhakerQuoteLine } from '../../../data/inhaker-stands';

export default function InhakerStandQuoteModule({ catalogItem, existing, onSave }) {
  return (
    <InhakerStandConfigurator
      key={catalogItem.id}
      align="center"
      initial={{ ...(existing?.options || {}), qty: existing?.qty }}
      submitLabel={existing ? 'Update quote' : 'Add to quote'}
      onSubmit={(priced) => onSave(buildInhakerQuoteLine(catalogItem, priced))}
    />
  );
}
