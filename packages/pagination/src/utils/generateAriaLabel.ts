import {
  ariaLabelType,
  getItemAriaLabelFunction,
  IPaginationItem,
  paginationItemType,
} from '../Pagination.types';

export default function generateAriaLabel(
  item: IPaginationItem,
  getItemAriaLabel: getItemAriaLabelFunction,
) {
  let ariaLabel = undefined;

  if (
    item.page &&
    (item.type === paginationItemType.next ||
      item.type === paginationItemType.previous ||
      paginationItemType.page)
  ) {
    ariaLabel = getItemAriaLabel({
      type: item.type as unknown as ariaLabelType,
      page: item.page,
      selected: false,
    });
  }

  return ariaLabel;
}
