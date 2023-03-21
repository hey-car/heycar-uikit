import React, { FC } from 'react';

import { DEFAULT_LOCALE, Locale } from '../locale/defaultLocale';
import { Pagination } from '../Pagination';
import { PaginationProps } from '../Pagination.types';

interface PaginationCanvasProps extends PaginationProps {
  pageLabel?: string;
  gotoLabel?: string;
  prevPageLabel?: string;
  nextPageLabel?: string;
}

export const PaginationCanvas: FC<PaginationCanvasProps> = ({
  pageLabel,
  gotoLabel,
  prevPageLabel,
  nextPageLabel,
  ...rest
}) => {
  const locale: Locale = {
    page: pageLabel || DEFAULT_LOCALE.page,
    goto: gotoLabel || DEFAULT_LOCALE.goto,
    prevPage: prevPageLabel || DEFAULT_LOCALE.prevPage,
    nextPage: nextPageLabel || DEFAULT_LOCALE.nextPage,
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <Pagination {...rest} locale={locale} />
    </div>
  );
};
