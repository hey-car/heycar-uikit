import { ParseOnClickArgs } from '../Pagination.types';

const parseOnClick = ({
  onClick,
  pageNumber,
  isDisabled,
}: ParseOnClickArgs) => {
  if (onClick && !isDisabled) {
    return () => onClick(pageNumber);
  }

  return undefined;
};

export default parseOnClick;
