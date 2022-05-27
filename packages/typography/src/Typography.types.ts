/* eslint-disable @typescript-eslint/indent */
import React from 'react';

export interface ComponentProps {
  /* `variant` - typography variant */
  variant:
    | 'display.1'
    | 'h.1'
    | 'h.2'
    | 'h.3'
    | 'h.4'
    | 'h.5'
    | 'h.6'
    | 'sh.1'
    | 'sh.2'
    | 'sh.3'
    | 'body.1'
    | 'body.2'
    | 'body.3'
    | 'body.4'
    | 'body.5'
    | 'body.6'
    | 'caption.1'
    | 'caption.2'
    | 'caption.3'
    | 'caption.4'
    | 'caption.5'
    | 'overline.1'
    | 'overline.2'
    | 'button.1'
    | 'button.2'
    | 'button.3';
  /* `highlighted` - defines if the text is being displayed should be highlighted */
  highlighted?: boolean;
  /* `dataTestId` - the id for testing lab */
  dataTestId?: string;
  /* `className` - additional styles, like color */
  className?: string;
  /* `customTag` - string containing customized HTML tag */
  customTag?: keyof JSX.IntrinsicElements;
  /* `children` of the element */
  children: React.ReactNode;
}

export type TypographyProps = ComponentProps;
