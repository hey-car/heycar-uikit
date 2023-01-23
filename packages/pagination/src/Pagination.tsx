import React from 'react';
import cn from 'classnames';

import usePagination from './hooks/usePagination';
import defaultGetItemAriaLabel from './utils/defaultGetItemAriaLabel';
import generateAriaLabel from './utils/generateAriaLabel';
import { PaginationItemProps, PaginationProps } from './Pagination.types';
import { PaginationItem } from './PaginationItem';

import styles from './styles/default.module.css';

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      totalPages,
      currentPage,
      onClick,
      renderItem,
      className,
      getItemAriaLabel = defaultGetItemAriaLabel,
      ...rest
    },
    ref,
  ) => {
    const renderItemFinal = renderItem
      ? (item: PaginationItemProps) => renderItem({ ...item })
      : (item: PaginationItemProps) => <PaginationItem {...item} />;

    const { items } = usePagination({ onClick, totalPages, currentPage });
    const classNames = cn(styles.pagination, className);

    console.log(items);

    return (
      <nav
        aria-label={'Pagination navigation'} // only default value
        className={classNames}
        ref={ref}
        {...rest}
      >
        <ul>
          {items.map(item => (
            <li key={item.type + item.page}>
              {renderItemFinal({
                ...item,
                'aria-label': generateAriaLabel(item, getItemAriaLabel),
              })}
            </li>
          ))}
        </ul>
      </nav>
    );
  },
);

Pagination.displayName = 'Pagination';

export default Pagination;
