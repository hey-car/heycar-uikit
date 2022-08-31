import { AnchorHTMLAttributes, MouseEventHandler } from 'react';

export interface ComponentProps {
  /**
   * Customize Chip type
   */
  variant?: 'filter' | 'choice';
  /**
   * Add on Delete callback
   */
  onDelete?: MouseEventHandler<HTMLElement>;
  /**
   * Add on click callback
   */
  onClick?: MouseEventHandler<HTMLElement>;
  /**
   * The content of the Chip
   */
  children: React.ReactNode;
  /**
   * Boolean to make chip disable.
   */
  disabled?: boolean;
  /**
   * selected style for choice chip
   */
  selected?: boolean;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: React.ElementType;
  /**
   * Element placed after the children.
   */
  leftIcon?: React.ReactNode;
  /**
   * Element before after the children.
   */
  rightIcon?: React.ReactNode;
  /**
   * The id for testing
   */
  dataTestId?: string;
}

type HTMLElementProps = ComponentProps & AnchorHTMLAttributes<HTMLElement>;

export type ChipProps = Partial<HTMLElementProps>;
