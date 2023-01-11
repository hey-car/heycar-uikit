import React from 'react';

import { ResponsivePropertyType } from '../Grid.types';

export interface RowProps {
  /**
   * Additional class
   */
  className?: string;

  /**
   * Horizontal padding between columns.
   * Possible values: `[0, 8, 16, 24]`
   * or `{ mobile: [0..24], tablet: [0..24], desktop: [0..24] }`
   * or `{ mobile: { s: [0..24], m: [0..24], l: [0..24] },
   * tablet: { s: [0..24], m: [0..24] },
   * desktop: { s: [0..24], m: [0..24], l: [0..24]} }`.
   */
  gutter?: ResponsivePropertyType;

  /**
   * Controlling column alignment along the vertical axis
   */
  align?: 'top' | 'middle' | 'bottom';

  /**
   * Column Alignment Control on the Horizontal axis
   */
  justify?: 'left' | 'center' | 'right' | 'around' | 'between';

  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: React.ElementType;

  /**
   * Content
   */
  children?: React.ReactNode;

  /**
   * Identifier for automated testing systems
   */
  dataTestId?: string;
}
