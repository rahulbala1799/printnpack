import React from 'react';
import BeachFlagConfigurator from '../../beach-flags/BeachFlagConfigurator';
import { buildBeachFlagQuoteLine } from '../../../data/beach-flags';

export default function BeachFlagQuoteModule({ catalogItem, existing, onSave }) {
  return (
    <BeachFlagConfigurator
      align="center"
      initial={existing?.options}
      submitLabel={existing ? 'Update quote' : 'Add to quote'}
      onSubmit={(priced) => {
        const line = buildBeachFlagQuoteLine(catalogItem, priced);
        if (line) onSave(line);
      }}
    />
  );
}
