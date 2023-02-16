import React, { HTMLAttributes } from 'react';

import { defaultVariantMapping } from './Typography.constants';

type DefaultMapKeys = keyof typeof defaultVariantMapping;

export interface ComponentProps {
  /**
   * `children` of the element
   */
  children: React.ReactNode;
  /**
   * `variant` - typography variant
   */
  variant?: DefaultMapKeys;
  /**
   * `dataTestId` - the id for testing lab
   */
  dataTestId?: string;
  /**
   * `className` - additional styles, like color
   */
  className?: string;
  /**
   * `Component` - string containing customized HTML tag
   */
  Component?: React.ElementType;
}

export type TypographyProps = ComponentProps & HTMLAttributes<HTMLElement>;
