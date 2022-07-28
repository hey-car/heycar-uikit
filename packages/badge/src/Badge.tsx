import React from 'react';
import cn from 'classnames';

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
    const classNames = cn(styleVariants[`badge_${color}`], styles.badge);

    return (
      <Component
        data-test-id={dataTestId}
        {...restProps}
        className={classNames}
        ref={ref}
      >
        {leftIcon && <span className={styles.left_icon}>{leftIcon}</span>}
        <span>{children}</span>
      </Component>
    );
  },
);

Badge.defaultProps = {
  color: 'primary',
};

export default Badge;
