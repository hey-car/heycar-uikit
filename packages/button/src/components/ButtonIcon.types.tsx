import { HTMLAttributes } from 'react';

export interface ButtonIcon {
  /**
   * The content of the button
   */
  children: React.ReactNode;

  /**
   * Side of the icon place
   */
  side: 'left' | 'right';

  className?: string;
}

export type ButtonIconProps = ButtonIcon & HTMLAttributes<HTMLSpanElement>;
