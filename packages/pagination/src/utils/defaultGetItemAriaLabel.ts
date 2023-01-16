import {
  ariaLabelType,
  DefaultGetItemAriaLabelProps,
} from '../Pagination.types';

export default function defaultGetItemAriaLabel({
  type,
  page,
  selected,
}: DefaultGetItemAriaLabelProps) {
  if (type === ariaLabelType.page) {
    return `${selected ? '' : 'Go to '}page ${page}`;
  }

  return `Go to ${type} page`;
}
