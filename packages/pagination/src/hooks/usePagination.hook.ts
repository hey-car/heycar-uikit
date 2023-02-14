import {
  PaginationItemProps,
  PaginationItemType,
  UsePaginationArgs,
} from '../Pagination.types';
import { getSiblingsToRender } from '../utils/getSiblingsToRender';
import parseOnClick from '../utils/parseOnClick';

import useBreakpoint from './useBreakpoint.hook';

const shouldReturnObjInArray = (
  condition: boolean,
  obj: PaginationItemProps,
) => {
  if (condition) {
    return [obj];
  }

  return [];
};

const usePagination = ({
  onClick,
  currentPage,
  totalPages,
  locale,
}: UsePaginationArgs) => {
  const { breakpoints } = useBreakpoint();
  const isDesktop = breakpoints.isDesktop;

  const shouldShowPreDots =
    (currentPage > 3 && totalPages !== 4) || currentPage > 4;
  const shouldShowPostDots =
    (currentPage < totalPages - 2 && totalPages !== 4) ||
    currentPage < totalPages - 3;

  const siblingsToRender = getSiblingsToRender(totalPages, currentPage);

  const getGotoPageLabel = (page: number) => {
    return locale.goto.replace('#{page}', page.toString());
  };
  const getPageLabel = (page: number) => {
    return locale.page.replace('#{page}', page.toString());
  };

  const items: PaginationItemProps[] = isDesktop
    ? [
        // Previous button
        {
          itemType: PaginationItemType.Previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
          onClick: parseOnClick({
            onClick,
            pageNumber: currentPage - 1,
            isDisabled: currentPage === 1,
          }),
          'aria-label': locale.prevPage,
        },
        // First page
        {
          itemType: PaginationItemType.PageNumber,
          page: 1,
          isCurrentPage: currentPage === 1,
          onClick: parseOnClick({ onClick, pageNumber: 1, isDisabled: false }),
          'aria-label': getGotoPageLabel(1),
        },
        // Ellipsis
        ...shouldReturnObjInArray(shouldShowPreDots, {
          itemType: PaginationItemType.Ellipsis,
        }),
        // Siblings
        ...siblingsToRender.map(page => ({
          itemType: PaginationItemType.PageNumber,
          page: page,
          isCurrentPage: currentPage === page,
          onClick: parseOnClick({
            onClick,
            pageNumber: page,
            isDisabled: false,
          }),
          'aria-label': getGotoPageLabel(page),
        })),
        // Ellipsis
        ...shouldReturnObjInArray(shouldShowPostDots, {
          itemType: PaginationItemType.Ellipsis,
        }),
        // Last Page
        ...shouldReturnObjInArray(totalPages > 1, {
          itemType: PaginationItemType.PageNumber,
          page: totalPages,
          isCurrentPage: currentPage === totalPages,
          onClick: parseOnClick({
            onClick,
            pageNumber: totalPages,
            isDisabled: false,
          }),
          'aria-label': getGotoPageLabel(totalPages),
        }),
        // Next button
        {
          itemType: PaginationItemType.Next,
          page: currentPage + 1,
          isDisabled: currentPage === totalPages,
          onClick: parseOnClick({
            onClick,
            pageNumber: currentPage + 1,
            isDisabled: currentPage === totalPages,
          }),
          'aria-label': locale.nextPage,
        },
      ]
    : [
        // Previous button
        {
          itemType: PaginationItemType.Previous,
          page: currentPage - 1,
          isDisabled: currentPage === 1,
          onClick: parseOnClick({
            onClick,
            pageNumber: currentPage - 1,
            isDisabled: currentPage === 1,
          }),
          'aria-label': locale.prevPage,
        },
        // Current page
        ...shouldReturnObjInArray(
          currentPage !== totalPages || totalPages === 1,
          {
            itemType: PaginationItemType.PageNumber,
            page: currentPage,
            onClick: parseOnClick({
              onClick,
              pageNumber: currentPage,
              isDisabled: false,
            }),
            'aria-label': getPageLabel(currentPage),
          },
        ),
        // Slash
        ...shouldReturnObjInArray(currentPage !== totalPages, {
          itemType: PaginationItemType.Slash,
        }),
        // Last Page
        ...shouldReturnObjInArray(totalPages > 1, {
          itemType: PaginationItemType.PageNumber,
          page: totalPages,
          onClick: parseOnClick({
            onClick,
            pageNumber: totalPages,
            isDisabled: false,
          }),
          'aria-label': getGotoPageLabel(totalPages),
        }),
        // Next button
        {
          itemType: PaginationItemType.Next,
          page: currentPage + 1,
          isDisabled: currentPage === totalPages,
          onClick: parseOnClick({
            onClick,
            pageNumber: currentPage + 1,
            isDisabled: currentPage === totalPages,
          }),
          'aria-label': locale.nextPage,
        },
      ];

  return { items };
};

export default usePagination;
