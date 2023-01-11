import React from 'react';
import cn from 'classnames';

import { ContainerProps } from './Container.types';

import styles from './Container.module.css';

function Container({
  className,
  children,
  Component = 'div',
  ...rest
}: ContainerProps) {
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
