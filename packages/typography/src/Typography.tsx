import React from 'react';

import { defaultVariantMapping } from './Typography.constants';
import { TypographyProps } from './Typography.types';

import styles from './styles/variant.module.css';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body3',
  className,
  Component = defaultVariantMapping[variant],
  children,
  dataTestId,
  ...restProps
}) => {
  const classNames = `${styles.typography} ${styles[variant]} ${
    className || ''
  }`;

  return (
    <Component className={classNames} data-test-id={dataTestId} {...restProps}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export default Typography;
