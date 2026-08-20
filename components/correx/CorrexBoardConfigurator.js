import React from 'react';
import RigidBoardConfigurator from '../boards/RigidBoardConfigurator';
import {
  CORREX_THICKNESSES,
  CORREX_STANDARD_SIZES,
  CORREX_FINISHING,
  CORREX_SIZE,
  DEFAULT_CORREX_CONFIG,
  CORREX_QUOTE_META,
  getCorrexThickness,
  getCorrexFinishing,
  formatCorrexQuoteSummary,
} from '../../data/correx-boards-options';

export default function CorrexBoardConfigurator() {
  return (
    <RigidBoardConfigurator
      theme="emerald"
      productLabel="Correx board"
      thicknesses={CORREX_THICKNESSES}
      standardSizes={CORREX_STANDARD_SIZES}
      finishingOptions={CORREX_FINISHING}
      sizeLimits={CORREX_SIZE}
      defaultConfig={DEFAULT_CORREX_CONFIG}
      getThickness={getCorrexThickness}
      getFinishing={getCorrexFinishing}
      formatSummary={formatCorrexQuoteSummary}
      quoteMeta={CORREX_QUOTE_META}
    />
  );
}
