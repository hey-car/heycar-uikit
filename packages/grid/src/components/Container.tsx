import React from 'react';
import cn from 'classnames';

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
      className: cn(styles.container, className),
      ...rest,
    },
    children,
  );
}

export default Container;
