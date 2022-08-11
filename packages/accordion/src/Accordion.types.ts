import { AnchorHTMLAttributes } from 'react';

export interface ComponentProps {
  children: React.ReactNode;
  title: React.ReactNode;
  open?: boolean;
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

export type AccordionProps = ComponentProps & AnchorHTMLAttributes<HTMLElement>;
