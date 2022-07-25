import { HTMLAttributes } from 'react';

export interface BadgeIcon {
  /**
   * The content of the button
   */
  fontSize?: number;

  color?: string;
}

export type BadgeIconProps = BadgeIcon & HTMLAttributes<HTMLSpanElement>;
