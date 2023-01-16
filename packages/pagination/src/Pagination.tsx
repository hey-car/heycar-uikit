import React from 'react';
import cn from 'classnames';

import usePagination from './hooks/usePagination';
import defaultGetItemAriaLabel from './utils/defaultGetItemAriaLabel';
import generateAriaLabel from './utils/generateAriaLabel';
import { PaginationItemProps, PaginationProps } from './Pagination.types';
import { PaginationItem } from './PaginationItem';

import styles from './styles/default.module.css';

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({
    totalPages,
    currentPage,
    onClick,
    renderItem,
    className,
    'aria-label': ariaLabel = 'Pagination navigation',
    getItemAriaLabel = defaultGetItemAriaLabel,
  }) => {
    const renderItemFinal = renderItem
      ? (item: PaginationItemProps) => renderItem({ ...item })
      : (item: PaginationItemProps) => <PaginationItem {...item} />;

    const { items } = usePagination({ onClick, totalPages, currentPage });
    const classNames = cn(styles.pagination, className);

    console.log(items);

    return (
      <nav aria-label={ariaLabel} className={classNames}>
        <ul>
          {items.map(item => {
            return renderItemFinal({
              ...item,
              'aria-label': generateAriaLabel(item, getItemAriaLabel),
            });
          })}
        </ul>
      </nav>
    );
  },
);

Pagination.displayName = 'Pagination';
