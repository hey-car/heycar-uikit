import { log } from 'util';

import React from 'react';
import cn from 'classnames';

import { ChevronLeft, ChevronRight } from '@heycar-uikit/icons';
import Typography from '@heycar-uikit/typography';

import {
  IPaginationItem,
  paginationItemType,
  PropsBasedOnComponent,
} from './Pagination.types';

import styles from './styles/default.module.css';

const PaginationItem: PropsBasedOnComponent<IPaginationItem> = ({
  page,
  isCurrentPage,
  isDisabled,
  type,
  onClick,
  Component = onClick ? 'button' : 'a',
  ...rest
}) => {
  let component;

  function disableHref() {
    // if (isDisabled) return { href: null, onClick: null };

    return {};
  }

  console.log('This is PaginationItem ' + page);
  // if (onClick) onClick();

  switch (type) {
    case paginationItemType.page:
      component = (
        <Component
          className={cn(styles.itemNumber, isCurrentPage && styles.currentPage)}
          {...rest}
          onClick={onClick}
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
          onClick={onClick}
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
          onClick={onClick}
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
