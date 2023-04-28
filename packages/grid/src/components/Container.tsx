import React from 'react';

import { ContainerProps } from './Container.types';

import styles from './Container.module.css';

function Container<E extends React.ElementType = 'div'>({
  className,
  children,
  component,
  ...rest
}: ContainerProps<E>) {
  const Component = component ?? 'div';

  return React.createElement(
    Component,
    {
      className: `${styles.container} ${className || ''}`,
      ...rest,
    },
    children,
  );
}

export default Container;
