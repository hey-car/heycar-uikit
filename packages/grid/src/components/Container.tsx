import React from 'react';
import cn from 'classnames';

import { ContainerProps } from './Container.types';

import styles from './Container.module.css';

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  as = 'div',
  dataTestId,
  ...rest
}) =>
  React.createElement(
    as,
    {
      className: cn(styles.container, className),
      ['data-test-id']: dataTestId,
      ...rest,
    },
    children,
  );

export default Container;
