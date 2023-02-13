import useBreakpoint from '../../../vars/src/hooks/useBreakpoint.hook';
import {
  PaginationItemProps,
  PaginationItemType,
  UsePaginationArgs,
} from '../Pagination.types';
import { getSiblingsToRender } from '../utils/getSiblingsToRender';
import parseOnClick from '../utils/parseOnClick';

const shouldReturnObj = (condition: boolean, obj: PaginationItemProps) => {
  if (condition) {
    return [obj];
  } else {
    return [];
  }
};

const usePagination = ({
  onClick,
  currentPage,
  totalPages,
}: UsePaginationArgs) => {
  const { breakpoints } = useBreakpoint();
  const isDesktop = breakpoints.isDesktop;

  const shouldShowPreDots =
    (currentPage > 3 && totalPages !== 4) || currentPage > 4;
  const shouldShowPostDots =
    (currentPage < totalPages - 2 && totalPages !== 4) ||
    currentPage < totalPages - 3;

  const siblingsToRender = getSiblingsToRender(totalPages, currentPage);

  const items: PaginationItemProps[] = isDesktop
    ? [
        // Previous button
        {
          type: PaginationItemType.Previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
          onClick: parseOnClick(onClick, currentPage - 1, currentPage === 1),
        },
        // First page
        {
          type: PaginationItemType.Page,
          page: 1,
          isCurrentPage: currentPage === 1,
          onClick: parseOnClick(onClick, 1, false),
        },
        // Ellipsis
        ...shouldReturnObj(shouldShowPreDots, {
          type: PaginationItemType.Ellipsis,
        }),
        // Siblings
        ...siblingsToRender.map(page => ({
          type: PaginationItemType.Page,
          page: page,
          isCurrentPage: currentPage === page,
          onClick: parseOnClick(onClick, page, false),
        })),
        // Ellipsis
        ...shouldReturnObj(shouldShowPostDots, {
          type: PaginationItemType.Ellipsis,
        }),
        // Last Page
        ...shouldReturnObj(totalPages > 1, {
          type: PaginationItemType.Page,
          page: totalPages,
          isCurrentPage: currentPage === totalPages,
          onClick: parseOnClick(onClick, totalPages, false),
        }),
        // Next button
        {
          type: PaginationItemType.Next,
          page: currentPage + 1,
          isDisabled: currentPage === totalPages,
          onClick: parseOnClick(
            onClick,
            currentPage + 1,
            currentPage === totalPages,
          ),
        },
      ]
    : [
        // Previous button
        {
          type: PaginationItemType.Previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
          onClick: parseOnClick(onClick, currentPage - 1, currentPage === 1),
        },
        // Current page
        ...shouldReturnObj(currentPage !== totalPages || totalPages === 1, {
          type: PaginationItemType.Page,
          page: currentPage,
          onClick: parseOnClick(onClick, currentPage, false),
        }),
        // Slash
        ...shouldReturnObj(currentPage !== totalPages, {
          type: PaginationItemType.Slash,
        }),
        // Last Page
        ...shouldReturnObj(totalPages > 1, {
          type: PaginationItemType.Page,
          page: totalPages,
          onClick: parseOnClick(onClick, totalPages, false),
        }),
        // Next button
        {
          type: PaginationItemType.Next,
          page: currentPage + 1,
          isDisabled: currentPage === totalPages,
          onClick: parseOnClick(
            onClick,
            currentPage + 1,
            currentPage === totalPages,
          ),
        },
      ];

  return { items };
};

export default usePagination;
