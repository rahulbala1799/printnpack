import React from 'react';
import RigidBoardConfigurator from '../boards/RigidBoardConfigurator';
import {
  POSTER_PAPERS,
  POSTER_STANDARD_SIZES,
  POSTER_FINISHING,
  POSTER_SIZE,
  DEFAULT_POSTER_CONFIG,
  POSTER_QUOTE_META,
  getPosterPaper,
  getPosterFinishing,
  formatPosterQuoteSummary,
} from '../../data/posters-options';

export default function PosterConfigurator() {
  return (
    <RigidBoardConfigurator
      theme="blue"
      productLabel="Poster"
      thicknesses={POSTER_PAPERS}
      standardSizes={POSTER_STANDARD_SIZES}
      finishingOptions={POSTER_FINISHING}
      sizeLimits={POSTER_SIZE}
      defaultConfig={DEFAULT_POSTER_CONFIG}
      getThickness={getPosterPaper}
      getFinishing={getPosterFinishing}
      formatSummary={formatPosterQuoteSummary}
      quoteMeta={POSTER_QUOTE_META}
      primaryIdKey="paperId"
      primaryStepTitle="Paper"
      summaryPrimaryLabel="Paper"
    />
  );
}
