import {
  GetItemAriaLabel,
  PaginationItemAriaLabelType,
  PaginationItemProps,
  PaginationItemType,
} from '../Pagination.types';

export default function generateAriaLabel(
  item: PaginationItemProps,
  getItemAriaLabel: GetItemAriaLabel,
) {
  if (
    item.type === PaginationItemType.PageNumber ||
    item.type === PaginationItemType.Next ||
    item.type === PaginationItemType.Previous
  ) {
    return getItemAriaLabel({
      type: item.type as unknown as PaginationItemAriaLabelType,
      pageNumber: item.page ?? 0,
      isSelected: item.isCurrentPage ? item.isCurrentPage : false,
    });
  }

  return undefined;
}
