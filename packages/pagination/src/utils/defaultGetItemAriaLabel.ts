import {
  GetItemAriaLabel,
  PaginationItemAriaLabelType,
} from '../Pagination.types';

const defaultGetItemAriaLabel: GetItemAriaLabel = ({
  type,
  page,
  isSelected,
}) => {
  if (type === PaginationItemAriaLabelType.Page) {
    return `${isSelected ? '' : 'Go to '}page ${page}`;
  }

  return `Go to ${type} page`;
};

export default defaultGetItemAriaLabel;
