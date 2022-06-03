import { ElementType, ReactNode } from 'react';

type BaseAlignmentOptions = 'start' | 'end' | 'center';

type JustifyOptions =
  | BaseAlignmentOptions
  | 'space-between'
  | 'space-evenly'
  | 'space-around';

type AlignOptions = BaseAlignmentOptions | 'stretch' | 'baseline';

export interface RowProps {
  /**
   * The content of the row
   */
  children: ReactNode;
  /**
   * Additional class name
   */
  className?: string;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: ElementType;
  /**
   * Horizontal alignment of row children
   */
  justify?: JustifyOptions;
  /**
   * Vertical alignment of row children
   */
  align?: AlignOptions;
  /**
   * Reverse order of row items
   */
  reverse?: boolean;
}
