import React, { AnchorHTMLAttributes } from 'react';
import cn from 'classnames';

import { ChevronLeft, ChevronRight } from '@heycar-uikit/icons';

import { generateUrlForPagination } from './utils/generateUrlForPagination';
import { getPagesToRender } from './utils/getPagesToRender';
import { useBreakpointHook } from './utils/useBreakpoint.hook';
import {
  IPaginationItem,
  PaginationItemProps,
  paginationItemType,
  PaginationProps,
} from './Pagination.types';
import PaginationItem from './PaginationItem';

import styles from './styles/default.module.css';

interface LinkProps {
  className: string;
}
const Link: React.FC<LinkProps> = props => {
  return <button {...props}></button>;
};

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({
    totalPages,
    currentPage,
    renderItem = item => <PaginationItem {...item} />,
    className,
  }) => {
    const breakpoint = useBreakpointHook();
    const isDesktop = true; //breakpoint && breakpoint >= 1024;
    const classNames = cn(styles.pagination, className);
    const shouldShowPreDots = currentPage > 3;
    const shouldShowPostDots = currentPage < totalPages - 2;

    const generateUrlFromPageNumber = generateUrlForPagination('', '');

    const pagesToRender = getPagesToRender(totalPages, currentPage);

    console.log({ shouldShowPreDots, pagesToRender });

    const items: IPaginationItem[] = [
      { type: paginationItemType.page, page: 1 },
      { type: paginationItemType.page, page: 2 },
    ];

    return (
      <div>
        asdasd
        <nav className={classNames}>
          <ul>{items.map(renderItem)}</ul>
        </nav>
        {/*<div>hahahahahhahahahah</div>*/}
        {/*<nav className={classNames}>*/}
        {/*  <ul>*/}
        {/*    <li>*/}
        {/*      <PaginationItem>*/}
        {/*        <ChevronLeft />*/}
        {/*      </PaginationItem>*/}
        {/*    </li>*/}
        {/*    {isDesktop && (*/}
        {/*      <React.Fragment>*/}
        {/*        <li>*/}
        {/*          <PaginationItem>1</PaginationItem>*/}
        {/*        </li>*/}
        {/*        {shouldShowPreDots && (*/}
        {/*          <li>*/}
        {/*            <div className={styles.ellipsis}>...</div>*/}
        {/*          </li>*/}
        {/*        )}*/}
        {/*        {pagesToRender.map(page => (*/}
        {/*          <li>*/}
        {/*            <PaginationItem>{page}</PaginationItem>*/}
        {/*          </li>*/}
        {/*        ))}*/}
        {/*        {shouldShowPostDots && (*/}
        {/*          <li>*/}
        {/*            <div className={styles.ellipsis}>...</div>*/}
        {/*          </li>*/}
        {/*        )}*/}
        {/*        {totalPages > 1 && (*/}
        {/*          <li>*/}
        {/*            <PaginationItem>{totalPages}</PaginationItem>*/}
        {/*          </li>*/}
        {/*        )}*/}
        {/*      </React.Fragment>*/}
        {/*    )}*/}
        {/*    <PaginationItem>*/}
        {/*      <ChevronRight />*/}
        {/*    </PaginationItem>*/}
        {/*  </ul>*/}
        {/*</nav>*/}
      </div>
    );
  },
);

Pagination.displayName = 'Pagination';

export default Pagination;
