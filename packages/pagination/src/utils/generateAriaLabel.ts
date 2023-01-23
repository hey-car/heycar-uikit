import {
  ariaLabelType,
  getItemAriaLabelFunction,
  PaginationItemProps,
  paginationItemType,
} from '../Pagination.types';

export default function generateAriaLabel(
  item: PaginationItemProps,
  getItemAriaLabel: getItemAriaLabelFunction,
) {
  let ariaLabel = undefined;

  if (
    item.page ||
    (item.page === 0 && // TODO evaluation if is number & exists
      (item.type === paginationItemType.next ||
        item.type === paginationItemType.previous ||
        paginationItemType.page))
  ) {
    ariaLabel = getItemAriaLabel({
      type: item.type as unknown as ariaLabelType,
      page: item.page,
      selected: item.isCurrentPage ? item.isCurrentPage : false,
    });
  }

  return ariaLabel;
}
