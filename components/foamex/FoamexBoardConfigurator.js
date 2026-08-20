import React from 'react';
import RigidBoardConfigurator from '../boards/RigidBoardConfigurator';
import {
  FOAMEX_THICKNESSES,
  FOAMEX_STANDARD_SIZES,
  FOAMEX_FINISHING,
  FOAMEX_SIZE,
  DEFAULT_FOAMEX_CONFIG,
  FOAMEX_QUOTE_META,
  getFoamexThickness,
  getFoamexFinishing,
  formatFoamexQuoteSummary,
} from '../../data/foamex-boards-options';

export default function FoamexBoardConfigurator() {
  return (
    <RigidBoardConfigurator
      theme="blue"
      productLabel="Foamex board"
      thicknesses={FOAMEX_THICKNESSES}
      standardSizes={FOAMEX_STANDARD_SIZES}
      finishingOptions={FOAMEX_FINISHING}
      sizeLimits={FOAMEX_SIZE}
      defaultConfig={DEFAULT_FOAMEX_CONFIG}
      getThickness={getFoamexThickness}
      getFinishing={getFoamexFinishing}
      formatSummary={formatFoamexQuoteSummary}
      quoteMeta={FOAMEX_QUOTE_META}
    />
  );
}
