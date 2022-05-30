/* eslint-disable @typescript-eslint/indent */
import React from 'react';

export const defaultVariantMapping = {
  'display.1': 'p',
  'h.1': 'h1',
  'h.2': 'h2',
  'h.3': 'h3',
  'h.4': 'h4',
  'h.5': 'h5',
  'h.6': 'h6',
  'sh.1': 'span',
  'sh.2': 'span',
  'sh.3': 'span',
  'body.1': 'p',
  'body.2': 'p',
  'body.3': 'p',
  'body.4': 'p',
  'body.5': 'p',
  'body.6': 'p',
  'caption.1': 'caption',
  'caption.2': 'caption',
  'caption.3': 'caption',
  'caption.4': 'caption',
  'caption.5': 'caption',
  'overline.1': 'span',
  'overline.2': 'span',
  'button.1': 'span',
  'button.2': 'span',
  'button.3': 'span',
} as const;

type DefaultMapKeys = keyof typeof defaultVariantMapping;

export interface ComponentProps {
  /* `variant` - typography variant */
  variant: DefaultMapKeys;
  /* `highlighted` - defines if the text is being displayed should be highlighted */
  highlighted?: boolean;
  /* `dataTestId` - the id for testing lab */
  dataTestId?: string;
  /* `className` - additional styles, like color */
  className?: string;
  /* `Component` - string containing customized HTML tag */
  Component?: typeof defaultVariantMapping[DefaultMapKeys];
  /* `children` of the element */
  children: React.ReactNode;
}

export type TypographyProps = ComponentProps;
