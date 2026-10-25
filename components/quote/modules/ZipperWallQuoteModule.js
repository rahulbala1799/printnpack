import React from 'react';
import ZipperWallConfigurator from '../../zipper-walls/ZipperWallConfigurator';
import { buildZipperWallQuoteLine } from '../../../data/zipper-walls';

export default function ZipperWallQuoteModule({ catalogItem, existing, onSave }) {
  return (
    <ZipperWallConfigurator
      key={catalogItem.id}
      familyId={catalogItem.id}
      align="center"
      initial={{ ...(existing?.options || {}), qty: existing?.qty }}
      submitLabel={existing ? 'Update quote' : 'Add to quote'}
      onSubmit={(priced) => onSave(buildZipperWallQuoteLine(catalogItem, priced))}
    />
  );
}
