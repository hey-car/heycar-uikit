import React from 'react';

import { ResponsivePropertyType } from '../Grid.types';

export type ColProps = {
  /**
   * Additional class
   */
  className?: string;

  /**
   * Controlling column alignment along the vertical axis
   */
  align?: 'top' | 'middle' | 'bottom';

  /**
   * Column width control.
   * Possible values: `[1..12, available, auto]`
   * or `{ mobile: [1..12], tablet: [1..12], desktop: [1..12] }`
   * or `{ mobile: { s: [1..12], m: [1..12], l: [1..12] },
   * tablet: { s: [1..12], m: [1..12] },
   * desktop: { s: [1..12], m: [1..12], l: [1..12] } }`
   */
  width?: ResponsivePropertyType;

  /**
   * Column offset control.
   * Possible values: `[1..11]`
   * or `{ mobile: [1..11], tablet: [1..11], desktop: [1..11] }`
   * or `{ mobile: { s: [1..11], m: [1..11], l: [1..11] },
   * tablet: { s: [1..11], m: [1..11] },
   * desktop: { s: [1..11], m: [1..11], l: [1..11] } }`
   */
  offset?: ResponsivePropertyType;

  /**
   * Manage column order.
   * Possible values: `[1..12, first, last]`
   * or `{ mobile: [1..last], tablet: [1..last], desktop: [1..last] }`
   * or `{ mobile: { s: [1..last], m: [1..last], l: [1..last] },
   * tablet: { s: [1..last], m: [1..last] },
   * desktop: { s: [1..last], m: [1..last], l: [1..last]] } }`
   */
  order?: ResponsivePropertyType;

  /**
   * The html tag of the component
   */
  Component?: keyof JSX.IntrinsicElements;

  /**
   * Content
   */
  children?: React.ReactNode;

  /**
   * Identifier for automated testing systems
   */
  dataTestId?: string;
};
