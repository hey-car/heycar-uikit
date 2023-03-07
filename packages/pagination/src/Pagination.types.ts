import React from 'react';

import { Locale } from './locale/defaultLocale';

export type CustomOnClick = (page: number) => void;

export interface PaginationProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
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
   * `locale` - Object with localized strings
   */
  locale?: Locale;
}

interface GetItemAriaLabelArgs {
  type: PaginationItemAriaLabelType;
  pageNumber: number;
  isSelected: boolean;
}

export type GetItemAriaLabel = ({
  type,
  pageNumber,
  isSelected,
}: GetItemAriaLabelArgs) => string;

export enum PaginationItemAriaLabelType {
  PageNumber = 'pageNumber',
  Previous = 'previous',
  Next = 'next',
}

export enum PaginationItemType {
  PageNumber = 'pageNumber',
  Ellipsis = 'ellipsis',
  Slash = 'slash',
  Previous = 'previous',
  Next = 'next',
}

export interface PaginationItemProps {
  /**
   * In case of no onClick event on `Pagination` and desire to render an `a`nchor
   */
  href?: string;
  /**
   * Type of item. Spread from `renderItem` of `Pagination`
   */
  itemType: PaginationItemType;
  /**
   * Aria label. Spread from `renderItem` of `Pagination`
   */
  'aria-label'?: string;
  /**
   * Page number. Spread from `renderItem` of `Pagination`
   */
  page?: number;
  /**
   * Is this page disabled? Spread from `renderItem` of `Pagination`
   */
  isDisabled?: boolean;
  /**
   * Is this page the current one? Spread from `renderItem` of `Pagination`
   */
  isCurrentPage?: boolean;
  /**
   * onClick event. Spread from `renderItem` of `Pagination`
   */
  onClick?: (itemNumber: number) => void;
}

export type UsePaginationArgs = {
  onClick?: CustomOnClick;
  currentPage: number;
  totalPages: number;
  locale: Locale;
};

export interface ParseOnClickArgs {
  onClick?: CustomOnClick;
  pageNumber: number;
  isDisabled: boolean;
}
