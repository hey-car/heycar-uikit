/* eslint-disable @typescript-eslint/indent */
import React from 'react';

export interface ComponentProps {
  /* `variant` - typography variant */
  variant?:
    | 'display'
    | 'heading'
    | 'subHeading'
    | 'body'
    | 'caption'
    | 'overline'
    | 'button';
  /* `size` - variant size */
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  /* `weight` - variant font weight */
  weight?: 'xbold' | 'bold' | 'medium' | 'regular';
  /* `isHighlighted` - defines if the text is being displayed should be highlighted */
  isHighlighted?: boolean;
  /* `dataTestId` - the id for testing lab */
  dataTestId?: string;
  /* `className` - additional styles, like color */
  className?: string;
  /* `children` of the element */
  children: React.ReactNode;
}

export type TypographyProps = ComponentProps;
