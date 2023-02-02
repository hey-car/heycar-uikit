import React from 'react';

export type CustomOnClick = (page: number) => void;

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
  onClick?: CustomOnClick;
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
  /**
   * In case of no onClick event on `Pagination` and desire to render an `a`nchor
   */
  href?: string;
  /**
   * Type of item, internal use
   */
  type: paginationItemType;
  /**
   * Internal use
   */
  'aria-label'?: string;
  /**
   * Page number. Internal use
   */
  page?: number;
  /**
   * Is this page disabled? Internal use
   */
  isDisabled?: boolean;
  /**
   * Is this page the current one? Internal use
   */
  isCurrentPage?: boolean;
  /**
   * onClick event. Internal use
   */
  onClick?: (itemNumber: number) => void;
}

/**
 * `PropsBasedOnComponent` - This interface inherits props from a designated Component
 */
export interface PropsBasedOnComponent<
  ComponentBaseProps,
  DefaultElement extends React.ElementType,
> {
  <Component extends React.ElementType = DefaultElement>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component?: Component;
    } & ComponentBaseProps &
      Omit<React.ComponentPropsWithoutRef<Component>, keyof ComponentBaseProps>,
  ): JSX.Element | null;
}

export interface UsePaginationProps {
  onClick?: CustomOnClick;
  currentPage: number;
  totalPages: number;
}
