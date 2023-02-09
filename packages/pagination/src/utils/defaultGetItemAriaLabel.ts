import { AriaLabelType, GetItemAriaLabel } from '../Pagination.types';

const defaultGetItemAriaLabel: GetItemAriaLabel = ({
  type,
  page,
  isSelected,
}) => {
  if (type === AriaLabelType.Page) {
    return `${isSelected ? '' : 'Go to '}page ${page}`;
  }

  return `Go to ${type} page`;
};

export default defaultGetItemAriaLabel;
