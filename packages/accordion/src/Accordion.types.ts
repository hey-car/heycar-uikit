import React, { AnchorHTMLAttributes } from 'react';

export interface ComponentProps {
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * Title of the accordion
   */
  title: React.ReactNode;
  /**
   * 	If `true`, expands the accordion, otherwise collapse it.
   *  Setting this prop enables control over the accordion.
   */
  open?: boolean;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: React.ElementType;
  /**
   * The id for testing
   */
  dataTestId?: string;
}

export type AccordionProps = ComponentProps &
  Omit<AnchorHTMLAttributes<HTMLElement>, 'title'>;
