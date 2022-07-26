import React from 'react';
import cn from 'classnames';

import { BadgeProps } from './Badge.types';

import styles from './styles/default.module.css';
import styleVariants from './styles/variant.module.css';

function Badge({ color = 'primary', dataTestId, children, text }: BadgeProps) {
  const classNames = cn(styleVariants[`badge-${color}`], styles.badge);

  return (
    <div className={classNames} data-test-id={dataTestId}>
      {children && <span className={styles['badge-icon']}>{children}</span>}
      {text && <span>{text}</span>}
    </div>
  );
}

export default Badge;
