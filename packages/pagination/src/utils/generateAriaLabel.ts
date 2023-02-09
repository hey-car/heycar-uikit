import {
  AriaLabelType,
  GetItemAriaLabel,
  PaginationItemProps,
  PaginationItemType,
} from '../Pagination.types';

export default function generateAriaLabel(
  item: PaginationItemProps,
  getItemAriaLabel: GetItemAriaLabel,
) {
  let ariaLabel = undefined;

  if (
    item.page ||
    (item.page === 0 &&
      (item.type === PaginationItemType.Next ||
        item.type === PaginationItemType.Previous))
  ) {
    ariaLabel = getItemAriaLabel({
      type: item.type as unknown as AriaLabelType,
      page: item.page,
      isSelected: item.isCurrentPage ? item.isCurrentPage : false,
    });
  }

  return ariaLabel;
}
