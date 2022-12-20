import React from 'react';

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
  if (type === paginationItemType.page)
    return (
      <li>
        <Component className={styles.button} {...rest}>
          {page}
        </Component>
      </li>
    );

  return <Component className={styles.button}>test</Component>;
};

export default PaginationItem;
