import { HTMLAttributes } from 'react';

export type ContainerProps = HTMLAttributes<Element> & {
  /**
   * HTML component tag
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Identifier for automated testing systems
   */
  dataTestId?: string;
};
