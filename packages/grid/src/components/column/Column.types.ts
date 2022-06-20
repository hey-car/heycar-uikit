import { ElementType, ReactNode } from 'react';

import { BreakpointType } from '../../Grid.types';

export type BreakpointValues = {
  [breakpoint in BreakpointType]?: number;
};

export type ColumnProps = {
  /**
   * The content of the component
   */
  children: ReactNode;
  /**
   * Column spans of container (12 max) according to breakpoints
   */
  widths: BreakpointValues;
  /**
   * Additional class name
   */
  className?: string;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: ElementType;
  /**
   * Column offset in columns according to breakpoint
   */
  offset?: BreakpointValues;
  /**
   * Order of component in row according to breakpoint
   */
  order?: BreakpointValues;
};
