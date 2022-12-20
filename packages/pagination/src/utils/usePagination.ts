import { IPaginationItem, paginationItemType } from '../Pagination.types';

import { getPagesToRender } from './getPagesToRender';
import { useBreakpointHook } from './useBreakpoint.hook';

interface usePaginationProps {
  currentPage: number;
  totalPages: number;
}

const shouldInsert = (condition: boolean, obj: any) => {
  if (condition) {
    return [obj];
  } else {
    return [];
  }
};

const usePagination = ({ currentPage, totalPages }: usePaginationProps) => {
  const breakpoint = useBreakpointHook();
  const isDesktop = true; //breakpoint && breakpoint >= 1024;

  const shouldShowPreDots = currentPage > 3;
  const shouldShowPostDots = currentPage < totalPages - 2;

  const pagesToRender = getPagesToRender(totalPages, currentPage);

  const items: IPaginationItem[] = [
    // Previous button
    {
      type: paginationItemType.previous,
      page: currentPage - 1,
      isDisabled: currentPage === 1,
    },
    // First page
    { type: paginationItemType.page, page: 1 },
    // Ellipsis
    ...shouldInsert(shouldShowPreDots, {
      type: paginationItemType.ellipsis,
    }),
    // Siblings
    ...pagesToRender.map(page => ({
      type: paginationItemType.page,
      page: page,
    })),
    // Ellipsis
    ...shouldInsert(shouldShowPostDots, {
      type: paginationItemType.ellipsis,
    }),
    // Last Page
    ...shouldInsert(totalPages > 1, {
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
