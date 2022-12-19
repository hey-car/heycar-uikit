import React from 'react';
import cn from 'classnames';

import { ChevronLeft, ChevronRight } from '@heycar-uikit/icons';

import { generateUrlForPagination } from './utils/generateUrlForPagination';
import { getPagesToRender } from './utils/getPagesToRender';
import { useBreakpointHook } from './utils/useBreakpoint.hook';
import { PaginationProps } from './Pagination.types';

import styles from './styles/default.module.css';

const PaginationItem: React.FC = ({ children }) => {
  return <a className={styles.button}>{children}</a>;
};

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ scrollToElementId, totalPages, currentPage, className, url }) => {
    const breakpoint = useBreakpointHook();
    const isDesktop = true; //breakpoint && breakpoint >= 1024;
    const classNames = cn(styles.pagination, className);
    const shouldShowPreDots = currentPage > 3;
    const shouldShowPostDots = currentPage < totalPages - 2;

    const generateUrlFromPageNumber = generateUrlForPagination(
      url ?? '',
      scrollToElementId ?? '',
    );

    const pagesToRender = getPagesToRender(totalPages, currentPage);

    console.log({ shouldShowPreDots, pagesToRender });

    return (
      <div>
        <nav className={classNames}>
          <ul>
            <li>
              <PaginationItem>
                <ChevronLeft />
              </PaginationItem>
            </li>
            {isDesktop && (
              <React.Fragment>
                <li>
                  <PaginationItem>1</PaginationItem>
                </li>
                {shouldShowPreDots && (
                  <li>
                    <div className={styles.ellipsis}>...</div>
                  </li>
                )}
                {pagesToRender.map(page => (
                  <li>
                    <PaginationItem>{page}</PaginationItem>
                  </li>
                ))}
                {shouldShowPostDots && (
                  <li>
                    <div className={styles.ellipsis}>...</div>
                  </li>
                )}
                {totalPages > 1 && (
                  <li>
                    <PaginationItem>{totalPages}</PaginationItem>
                  </li>
                )}
              </React.Fragment>
            )}
            <PaginationItem>
              <ChevronRight />
            </PaginationItem>
          </ul>
        </nav>
      </div>
    );
  },
);

Pagination.displayName = 'Pagination';

export default Pagination;
