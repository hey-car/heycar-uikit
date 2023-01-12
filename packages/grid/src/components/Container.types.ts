import React from 'react';

type ContainerBaseProps<E extends React.ElementType> = {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   * @default "div"
   */
  component?: E;
};

export type ContainerProps<E extends React.ElementType> =
  ContainerBaseProps<E> &
    Omit<React.ComponentProps<E>, keyof ContainerBaseProps<E>>;
