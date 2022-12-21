import { IPaginationItem, paginationItemType } from '../Pagination.types';

import { getPagesToRender } from './getPagesToRender';
import { useBreakpointHook } from './useBreakpoint.hook';

interface usePaginationProps {
  currentPage: number;
  totalPages: number;
}

const shouldInsert = (condition: boolean, obj: IPaginationItem) => {
  if (condition) {
    return [obj];
  } else {
    return [];
  }
};

const usePagination = ({ currentPage, totalPages }: usePaginationProps) => {
  const breakpoint = useBreakpointHook();
  const isDesktop = breakpoint && breakpoint >= 1024;

  const shouldShowPreDots = currentPage > 3;
  const shouldShowPostDots = currentPage < totalPages - 2;

  const pagesToRender = getPagesToRender(totalPages, currentPage);

  const items: IPaginationItem[] = isDesktop
    ? [
        // Previous button
        {
          type: paginationItemType.previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
        },
        // First page
        {
          type: paginationItemType.page,
          page: 1,
          isCurrentPage: currentPage === 1,
        },
        // Ellipsis
        ...shouldInsert(shouldShowPreDots, {
          type: paginationItemType.ellipsis,
        }),
        // Siblings
        ...pagesToRender.map(page => ({
          type: paginationItemType.page,
          page: page,
          isCurrentPage: currentPage === page,
        })),
        // Ellipsis
        ...shouldInsert(shouldShowPostDots, {
          type: paginationItemType.ellipsis,
        }),
        // Last Page
        ...shouldInsert(totalPages > 1, {
          type: paginationItemType.page,
          page: totalPages,
          isCurrentPage: currentPage === totalPages,
        }),
        // Next button
        {
          type: paginationItemType.next,
          page: totalPages,
          isDisabled: currentPage === totalPages,
        },
      ]
    : [
        // Previous button
        {
          type: paginationItemType.previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
        },
        // Current page
        {
          type: paginationItemType.page,
          page: currentPage,
        },
        // Slash
        ...shouldInsert(totalPages > 1 && currentPage !== totalPages, {
          type: paginationItemType.slash,
        }),
        // Last Page
        ...shouldInsert(totalPages > 1 && currentPage !== totalPages, {
          type: paginationItemType.page,
          page: totalPages,
        }),
        // Next button
        {
          type: paginationItemType.next,
          page: totalPages,
          isDisabled: currentPage === totalPages,
        },
      ];

  return { items };
};

export default usePagination;
