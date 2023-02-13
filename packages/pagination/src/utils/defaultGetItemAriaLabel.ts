import {
  GetItemAriaLabel,
  PaginationItemAriaLabelType,
} from '../Pagination.types';

const defaultGetItemAriaLabel: GetItemAriaLabel = ({
  type,
  pageNumber,
  isSelected,
}) => {
  if (type === PaginationItemAriaLabelType.PageNumber) {
    return `${isSelected ? '' : 'Go to '}page ${pageNumber}`;
  }

  return `Go to ${type} page`;
};

export default defaultGetItemAriaLabel;
