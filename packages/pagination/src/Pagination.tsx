import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import usePagination from './hooks/usePagination.hook';
import { DEFAULT_LOCALE } from './locale/defaultLocale';
import { PaginationItemProps, PaginationProps } from './Pagination.types';
import { PaginationItem } from './PaginationItem';

import styles from './styles/default.module.css';

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      totalPages,
      currentPage,
      onClick,
      renderItem = (item: PaginationItemProps) => <PaginationItem {...item} />,
      locale = DEFAULT_LOCALE,
      className,
      ...rest
    },
    ref,
  ) => {
    const { items } = usePagination({
      onClick,
      totalPages,
      currentPage,
      locale,
    });

    return (
      <nav className={`${styles.pagination} ${className}`} ref={ref} {...rest}>
        <ul>
          {items.map(item => {
            const id = uuidv4();

            return (
              <li key={id}>
                {renderItem({
                  ...item,
                })}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  },
);

Pagination.displayName = 'Pagination';

export default Pagination;
