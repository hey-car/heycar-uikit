import React, { ButtonHTMLAttributes } from 'react';

export interface ComponentProps {
  /**
   * `children` of the element
   */
  children: React.ReactNode;
  /**
   * `variant` - variant of element
   */
  variant?: 'primary' | 'secondary';
  /**
   * `size` - variant of element
   */
  size?: 'small' | 'middle' | 'large';

  /**
   * `dataTestId` - the id for testing lab.
   */
  dataTestId?: string;
}

// type AnchorButtonProps = ComponentProps &
//   AnchorHTMLAttributes<HTMLAnchorElement>;
type NativeButtonProps = ComponentProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = Partial<NativeButtonProps>;
