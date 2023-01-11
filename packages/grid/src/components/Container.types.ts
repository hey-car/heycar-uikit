import { HTMLAttributes } from 'react';

export type ContainerProps = HTMLAttributes<Element> & {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: React.ElementType;
};
