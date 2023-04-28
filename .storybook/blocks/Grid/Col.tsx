import React, {
  InputHTMLAttributes,
  useCallback,
  ChangeEvent,
  ReactNode,
} from 'react';

import styles from './Col.module.css';

type ColProps = {
  children?: ReactNode;
  className?: string;
  span?: number;
};

export const Col: React.FC<ColProps> = ({
  children,
  className,
  span = 12,
  ...restProps
}) => (
  <div
    className={`${styles.col} ${styles[`span-${span}`]} ${className || ''}`}
    {...restProps}
  >
    {children}
  </div>
);
