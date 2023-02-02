import React from 'react';
import cn from 'classnames';

import { ChevronLeft, ChevronRight } from '@heycar-uikit/icons';
import Typography from '@heycar-uikit/typography';

import {
  PaginationItemProps,
  paginationItemType,
  PropsBasedOnComponent,
} from './Pagination.types';

import styles from './styles/default.module.css';

export const PaginationItem: PropsBasedOnComponent<
  PaginationItemProps,
  'a'
> = ({
  page,
  isCurrentPage,
  isDisabled,
  type,
  onClick,
  component = onClick ? 'button' : 'a',
  ...rest
}) => {
  const Component = component;

  switch (type) {
    case paginationItemType.page:
      return (
        <Component
          className={cn(styles.itemNumber, isCurrentPage && styles.currentPage)}
          {...rest}
          aria-current={isCurrentPage}
          onClick={onClick}
        >
          <Typography variant="subheading2">{page}</Typography>
        </Component>
      );
    case paginationItemType.ellipsis:
      return (
        <Typography className={styles.ellipsis} variant="subheading2">
          {'...'}
        </Typography>
      );
    case paginationItemType.slash:
      return (
        <Typography className={styles.slash} variant="subheading2">
          {'/'}
        </Typography>
      );
    case paginationItemType.previous:
      return (
        <Component
          className={cn(styles.arrow, isDisabled && styles.disabled)}
          {...rest}
          onClick={onClick}
        >
          <ChevronLeft />
        </Component>
      );
    case paginationItemType.next:
      return (
        <Component
          className={cn(styles.arrow, isDisabled && styles.disabled)}
          {...rest}
          onClick={onClick}
        >
          <ChevronRight />
        </Component>
      );
  }
};
