import React from 'react';

import { ChevronLeft, ChevronRight } from '@heycar-uikit/icons';

import {
  PaginationItemProps,
  PaginationItemType,
  paginationItemType,
} from './Pagination.types';

import styles from './styles/default.module.css';

export interface OverridableComponent {
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & React.ComponentPropsWithRef<C>,
  ): JSX.Element | null;
}

const PaginationItem: PaginationItemType<PaginationItemProps> = ({
  page,
  type,
  Component = 'a',
  ...rest
}) => {
  let component;

  switch (type) {
    case paginationItemType.page:
      component = (
        <Component className={styles.button} {...rest}>
          {page}
        </Component>
      );
      break;
    case paginationItemType.ellipsis:
      component = '...';
      break;
    case paginationItemType.previous:
      component = (
        <Component className={styles.button} {...rest}>
          <ChevronLeft />
        </Component>
      );
      break;
    case paginationItemType.next:
      component = (
        <Component className={styles.button} {...rest}>
          <ChevronRight />
        </Component>
      );
      break;
  }

  return <li>{component}</li>;
};

export default PaginationItem;
