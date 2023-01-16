import { PaginationItemProps, paginationItemType } from '../Pagination.types';

import { getPagesToRender } from './getPagesToRender';
import { useBreakpointHook } from './useBreakpoint.hook';

interface Props {
  onClick?: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

const shouldInsert = (condition: boolean, obj: PaginationItemProps) => {
  if (condition) {
    return [obj];
  } else {
    return [];
  }
};

const usePagination = ({ onClick, currentPage, totalPages }: Props) => {
  const breakpoint = useBreakpointHook();
  const isDesktop = breakpoint && breakpoint >= 1024;

  const shouldShowPreDots = currentPage > 3;
  const shouldShowPostDots = currentPage < totalPages - 2;

  const pagesToRender = getPagesToRender(totalPages, currentPage);

  const handleClick = (page: number, isDisabled: boolean) => {
    if (onClick && !isDisabled) {
      onClick(page);
    }
  };

  const items: PaginationItemProps[] = isDesktop
    ? [
        // Previous button
        {
          type: paginationItemType.previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
          onClick: () => handleClick(currentPage - 1, currentPage === 1),
        },
        // First page
        {
          type: paginationItemType.page,
          page: 1,
          isCurrentPage: currentPage === 1,
          onClick: () => handleClick(1, false),
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
          onClick: () => handleClick(page, false),
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
          // TODO transform this function as param to a called function to instantly define null or onClick existing.
          onClick: () => handleClick(totalPages, false),
        }),
        // Next button
        {
          type: paginationItemType.next,
          page: currentPage + 1,
          isDisabled: currentPage === totalPages,
          onClick: () =>
            handleClick(currentPage + 1, currentPage === totalPages),
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
