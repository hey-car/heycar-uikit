import { PaginationItemProps, paginationItemType } from '../Pagination.types';
import { getSiblingsToRender } from '../utils/getSiblingsToRender';

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

  const siblingsToRender = getSiblingsToRender(totalPages, currentPage);

  const parseClick = (page: number, isDisabled: boolean) => {
    if (onClick && !isDisabled) {
      return () => onClick(page);
    }

    return undefined;
  };

  const items: PaginationItemProps[] = isDesktop
    ? [
        // Previous button
        {
          type: paginationItemType.previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
          onClick: parseClick(currentPage - 1, currentPage === 1),
        },
        // First page
        {
          type: paginationItemType.page,
          page: 1,
          isCurrentPage: currentPage === 1,
          onClick: parseClick(1, false),
        },
        // Ellipsis
        ...shouldInsert(shouldShowPreDots, {
          type: paginationItemType.ellipsis,
        }),
        // Siblings
        ...siblingsToRender.map(page => ({
          type: paginationItemType.page,
          page: page,
          isCurrentPage: currentPage === page,
          onClick: parseClick(page, false),
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
          onClick: parseClick(totalPages, false),
        }),
        // Next button
        {
          type: paginationItemType.next,
          page: currentPage + 1,
          isDisabled: currentPage === totalPages,
          onClick: parseClick(currentPage + 1, currentPage === totalPages),
        },
      ]
    : [
        // Previous button
        {
          type: paginationItemType.previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
          onClick: parseClick(currentPage - 1, currentPage === 1),
        },
        // Current page
        {
          type: paginationItemType.page,
          page: currentPage,
          isCurrentPage: true,
          onClick: parseClick(currentPage, false),
        },
        // Slash
        {
          type: paginationItemType.slash,
        },
        // Last Page
        ...shouldInsert(totalPages > 1, {
          type: paginationItemType.page,
          page: totalPages,
          isCurrentPage: currentPage === totalPages,
          onClick: parseClick(totalPages, false),
        }),
        // Next button
        {
          type: paginationItemType.next,
          page: currentPage + 1,
          isDisabled: currentPage === totalPages,
          onClick: parseClick(currentPage + 1, currentPage === totalPages),
        },
      ];

  return { items };
};

export default usePagination;
