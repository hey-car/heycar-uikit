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
  }

  return [];
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
          onClick: parseOnClick({
            onClick,
            pageNumber: currentPage - 1,
            isDisabled: currentPage === 1,
          }),
        },
        // First page
        {
          type: PaginationItemType.PageNumber,
          page: 1,
          isCurrentPage: currentPage === 1,
          onClick: parseOnClick({ onClick, pageNumber: 1, isDisabled: false }),
        },
        // Ellipsis
        ...shouldReturnObj(shouldShowPreDots, {
          type: PaginationItemType.Ellipsis,
        }),
        // Siblings
        ...siblingsToRender.map(page => ({
          type: PaginationItemType.PageNumber,
          page: page,
          isCurrentPage: currentPage === page,
          onClick: parseOnClick({ onClick, pageNumber: page, isDisabled: false }),
        })),
        // Ellipsis
        ...shouldReturnObj(shouldShowPostDots, {
          type: PaginationItemType.Ellipsis,
        }),
        // Last Page
        ...shouldReturnObj(totalPages > 1, {
          type: PaginationItemType.PageNumber,
          page: totalPages,
          isCurrentPage: currentPage === totalPages,
          onClick: parseOnClick({
            onClick,
            pageNumber: totalPages,
            isDisabled: false,
          }),
        }),
        // Next button
        {
          type: PaginationItemType.Next,
          page: currentPage + 1,
          isDisabled: currentPage === totalPages,
          onClick: parseOnClick({
            onClick,
            pageNumber: currentPage + 1,
            isDisabled: currentPage === totalPages,
          }),
        },
      ]
    : [
        // Previous button
        {
          type: PaginationItemType.Previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
          onClick: parseOnClick({
            onClick,
            pageNumber: currentPage - 1,
            isDisabled: currentPage === 1,
          }),
        },
        // Current page
        ...shouldReturnObj(currentPage !== totalPages || totalPages === 1, {
          type: PaginationItemType.PageNumber,
          page: currentPage,
          onClick: parseOnClick({
            onClick,
            pageNumber: currentPage,
            isDisabled: false,
          }),
        }),
        // Slash
        ...shouldReturnObj(currentPage !== totalPages, {
          type: PaginationItemType.Slash,
        }),
        // Last Page
        ...shouldReturnObj(totalPages > 1, {
          type: PaginationItemType.PageNumber,
          page: totalPages,
          onClick: parseOnClick({
            onClick,
            pageNumber: totalPages,
            isDisabled: false,
          }),
        }),
        // Next button
        {
          type: PaginationItemType.Next,
          page: currentPage + 1,
          isDisabled: currentPage === totalPages,
          onClick: parseOnClick({
            onClick,
            pageNumber: currentPage + 1,
            isDisabled: currentPage === totalPages,
          }),
        },
      ];

  return { items };
};

export default usePagination;
