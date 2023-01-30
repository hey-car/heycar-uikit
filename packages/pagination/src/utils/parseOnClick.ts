import { CustomOnClick } from '../Pagination.types';

const parseOnClick = (
  onClick: CustomOnClick | undefined,
  page: number,
  isDisabled: boolean,
) => {
  if (onClick && !isDisabled) {
    return () => onClick(page);
  }

  return undefined;
};

export default parseOnClick;
