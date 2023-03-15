import React from 'react';

import { BadgeProps } from './Badge.types';

import styles from './styles/default.module.css';
import styleVariants from './styles/variant.module.css';

const Badge = React.forwardRef<HTMLElement, BadgeProps>(
  (
    {
      children,
      color = 'primary',
      leftIcon,
      dataTestId,
      Component = 'div',
      ...restProps
    },
    ref,
  ) => {
    return (
      <Component
        className={`${styleVariants[`badge_${color}`]} ${styles.badge}`}
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

Badge.displayName = 'Badge';

export default Badge;
