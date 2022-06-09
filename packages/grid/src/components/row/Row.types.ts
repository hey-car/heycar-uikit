import { ElementType, ReactNode } from 'react';

type BaseAlignmentOptions = 'start' | 'end' | 'center';

type JustifyOptions =
  | BaseAlignmentOptions
  | 'space-between'
  | 'space-evenly'
  | 'space-around';

type AlignOptions = BaseAlignmentOptions | 'stretch' | 'baseline';

type GapOptions =
  | 0
  | 2
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 56
  | 64;

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
  rowGap?: GapOptions;
}
