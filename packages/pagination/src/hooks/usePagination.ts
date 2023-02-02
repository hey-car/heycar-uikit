import useBreakpoint from '../../../vars/src/hooks/useBreakpoint.hook';
import {
  PaginationItemProps,
  paginationItemType,
  UsePaginationProps,
} from '../Pagination.types';
import { getSiblingsToRender } from '../utils/getSiblingsToRender';
import parseOnClick from '../utils/parseOnClick';
import shouldReturnObj from '../utils/shouldReturnObj';

const usePagination = ({
  onClick,
  currentPage,
  totalPages,
}: UsePaginationProps) => {
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
          type: paginationItemType.previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
          onClick: parseOnClick(onClick, currentPage - 1, currentPage === 1),
        },
        // First page
        {
          type: paginationItemType.page,
          page: 1,
          isCurrentPage: currentPage === 1,
          onClick: parseOnClick(onClick, 1, false),
        },
        // Ellipsis
        ...shouldReturnObj(shouldShowPreDots, {
          type: paginationItemType.ellipsis,
        }),
        // Siblings
        ...siblingsToRender.map(page => ({
          type: paginationItemType.page,
          page: page,
          isCurrentPage: currentPage === page,
          onClick: parseOnClick(onClick, page, false),
        })),
        // Ellipsis
        ...shouldReturnObj(shouldShowPostDots, {
          type: paginationItemType.ellipsis,
        }),
        // Last Page
        ...shouldReturnObj(totalPages > 1, {
          type: paginationItemType.page,
          page: totalPages,
          isCurrentPage: currentPage === totalPages,
          onClick: parseOnClick(onClick, totalPages, false),
        }),
        // Next button
        {
          type: paginationItemType.next,
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
          type: paginationItemType.previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
          onClick: parseOnClick(onClick, currentPage - 1, currentPage === 1),
        },
        // Current page
        ...shouldReturnObj(currentPage !== totalPages || totalPages === 1, {
          type: paginationItemType.page,
          page: currentPage,
          onClick: parseOnClick(onClick, currentPage, false),
        }),
        // Slash
        ...shouldReturnObj(currentPage !== totalPages, {
          type: paginationItemType.slash,
        }),
        // Last Page
        ...shouldReturnObj(totalPages > 1, {
          type: paginationItemType.page,
          page: totalPages,
          onClick: parseOnClick(onClick, totalPages, false),
        }),
        // Next button
        {
          type: paginationItemType.next,
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
