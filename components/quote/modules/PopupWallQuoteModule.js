import React from 'react';
import PopupWallConfigurator from '../../popup-walls/PopupWallConfigurator';
import { buildPopupWallQuoteLine } from '../../../data/popup-walls';

export default function PopupWallQuoteModule({ catalogItem, existing, onSave }) {
  return (
    <PopupWallConfigurator
      key={catalogItem.id}
      align="center"
      initial={{ ...(existing?.options || {}), qty: existing?.qty }}
      submitLabel={existing ? 'Update quote' : 'Add to quote'}
      onSubmit={(priced) => onSave(buildPopupWallQuoteLine(catalogItem, priced))}
    />
  );
}
