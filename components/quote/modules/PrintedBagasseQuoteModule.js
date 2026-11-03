import React from 'react';
import PrintedBagasseConfigurator from '../../bagasse-boxes/PrintedBagasseConfigurator';
import { buildPrintedBagasseQuoteLine } from '../../../data/printed-bagasse-boxes';

export default function PrintedBagasseQuoteModule({ catalogItem, existing, onSave }) {
  return (
    <PrintedBagasseConfigurator
      align="center"
      initial={{ ...(existing?.options || {}), qty: existing?.qty, sizeId: existing?.options?.sizeId || catalogItem?.sizeId }}
      submitLabel={existing ? 'Update quote' : 'Add to quote'}
      onSubmit={(priced) => onSave(buildPrintedBagasseQuoteLine(catalogItem, priced))}
    />
  );
}
