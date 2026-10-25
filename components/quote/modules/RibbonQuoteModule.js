import React from 'react';
import RibbonConfigurator from '../../ribbons/RibbonConfigurator';
import { buildRibbonQuoteLine } from '../../../data/ribbons';

export default function RibbonQuoteModule({ catalogItem, existing, onSave }) {
  return (
    <RibbonConfigurator
      key={catalogItem.id}
      align="center"
      initial={existing?.options || {}}
      submitLabel={existing ? 'Update quote' : 'Add to quote'}
      onSubmit={(priced) => onSave(buildRibbonQuoteLine(catalogItem, priced))}
    />
  );
}
