import React from 'react';

import { PillProps } from './Pill.types';

import styles from './styles/default.module.css';

const Pill = React.forwardRef<HTMLElement, PillProps>(
  (
    { children, leftIcon, dataTestId, Component = 'div', ...restProps },
    ref,
  ) => {
    return (
      <Component
        className={styles.pill}
        data-test-id={dataTestId}
        ref={ref}
        {...restProps}
      >
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        {children}
      </Component>
    );
  },
);

export default Pill;
