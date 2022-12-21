import React from 'react';
import cn from 'classnames';

import { ChevronLeft, ChevronRight } from '@heycar-uikit/icons';
import Typography from '@heycar-uikit/typography';

import {
  IPaginationItem,
  PaginationItemProps,
  PaginationItemType,
  paginationItemType,
} from './Pagination.types';

import styles from './styles/default.module.css';

const PaginationItem: PaginationItemType<IPaginationItem> = ({
  page,
  isCurrentPage,
  isDisabled,
  type,
  Component = 'a',
  ...rest
}) => {
  let component;

  // This
  function disableHref() {
    if (isDisabled) return { href: null };

    return {};
  }

  switch (type) {
    case paginationItemType.page:
      component = (
        <Component
          className={cn(styles.itemNumber, isCurrentPage && styles.currentPage)}
          {...rest}
        >
          <Typography variant="subheading2">{page}</Typography>
        </Component>
      );
      break;
    case paginationItemType.ellipsis:
      component = (
        <Typography className={styles.ellipsis} variant="subheading2">
        ...
      </Typography>
      );
      break;
    case paginationItemType.slash:
      component = (
        <Typography className={styles.slash} variant="subheading2">
        /
        </Typography>
      );
      break;
    case paginationItemType.previous:
      component = (
        <Component
          className={cn(styles.arrow, isDisabled && styles.disabled)}
          {...rest}
          {...disableHref()}
        >
          <ChevronLeft />
        </Component>
      );
      break;
    case paginationItemType.next:
      component = (
        <Component
          className={cn(styles.arrow, isDisabled && styles.disabled)}
          {...rest}
          {...disableHref()}
        >
          <ChevronRight />
        </Component>
      );
      break;
  }

  return <li>{component}</li>;
};

export default PaginationItem;
