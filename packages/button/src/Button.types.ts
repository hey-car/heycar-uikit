import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export interface ComponentProps {
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * Set the size of the button
   */
  size?: 'small' | 'large';
  /**
   * Set the color of the button
   */
  color?: 'primary' | 'tertiary';
  /**
   * View of the button
   */
  variant?: 'contained' | 'outlined' | 'link';
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * Element placed after the children.
   */
  leftIcon?: React.ReactNode;
  /**
   * 	Element before after the children.
   */
  rightIcon?: React.ReactNode;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: React.ElementType;
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If true, the button will show a spinner.
   */
  loading?: boolean;
  /**
   * The id for testing
   */
  dataTestId?: string;
}

type AnchorButtonProps = ComponentProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;
type NativeButtonProps = ComponentProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = Partial<NativeButtonProps | AnchorButtonProps>;
