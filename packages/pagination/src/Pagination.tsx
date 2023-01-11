import React from 'react';
import cn from 'classnames';

import usePagination from './utils/usePagination';
import { PaginationItemProps, PaginationProps } from './Pagination.types';
import PaginationItem from './PaginationItem';

import styles from './styles/default.module.css';

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ totalPages, currentPage, onClick, renderItem, className }) => {
    const renderItemFinal = renderItem
      ? renderItem
      : (item: PaginationItemProps) => <PaginationItem {...item} />;
    const { items } = usePagination({ onClick, totalPages, currentPage });
    const classNames = cn(styles.pagination, className);

    console.log(items);

    return (
      <nav className={classNames}>
        <ul>{items.map(item => renderItemFinal({ ...item }))}</ul>
      </nav>
    );
  },
);

Pagination.displayName = 'Pagination';

export default Pagination;
