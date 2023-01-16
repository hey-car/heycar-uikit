import React from 'react';

export interface PaginationProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
  /**
   * `className` - additional styles, like color
   */
  className?: string;
  /**
   * `totalPages` - total number of pages
   */
  totalPages: number;
  /**
   * `currentPage` - current page
   */
  currentPage: number;
  /**
   * `renderItem` - template function to allow different components and props for PaginationItem
   */
  renderItem?: (item: PaginationItemProps) => JSX.Element;
  /**
   * `onClick` - template function for onClick event of items
   */
  onClick?: (page: number) => void;
  /**
   * `aria-label` - aria-label for root pagination component
   */
  'aria-label'?: string;
  /**
   * `getItemAriaLabel` - Function for generation of aria-label of clickable items
   */
  getItemAriaLabel?: getItemAriaLabelFunction;
}

export interface DefaultGetItemAriaLabelProps {
  type: 'page' | 'next' | 'previous';
  page: number;
  selected: boolean;
}

export type getItemAriaLabelFunction = ({
  type,
  page,
  selected,
}: DefaultGetItemAriaLabelProps) => string;

export enum ariaLabelType {
  page = 'page',
  previous = 'previous',
  next = 'next',
}

export enum paginationItemType {
  page = 'page',
  ellipsis = 'ellipsis',
  slash = 'slash',
  previous = 'previous',
  next = 'next',
}

export interface PaginationItemProps {
  type: paginationItemType;
  'aria-label'?: string;
  page?: number;
  isDisabled?: boolean;
  isCurrentPage?: boolean;
  onClick?: (itemNumber: number) => void;
  href?: string;
}

/**
 * `PropsBasedOnComponent` - This interface inherits props from a designated component C through ref
 */
export interface PropsBasedOnComponent<T> {
  <C extends React.ElementType = 'a'>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component?: C;
    } & T &
      Omit<React.ComponentPropsWithoutRef<C>, keyof T>,
  ): JSX.Element | null;
}
