import React from 'react';
import cn from 'classnames';

import { ContainerProps } from './Container.types';

import styles from './Container.module.css';

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  as,
  ...rest
}) =>
  React.createElement(
    as ?? 'div',
    { className: cn(styles.container, className), ...rest },
    children,
  );

export default Container;
