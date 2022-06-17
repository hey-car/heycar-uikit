import React from 'react';
import cn from 'classnames';

import { defaultVariantMapping } from './Typography.constants';
import { TypographyProps } from './Typography.types';

import styles from './styles/variant.module.css';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body3',
  className,
  Component = defaultVariantMapping[variant],
  children,
  dataTestId,
}) => {
  const classNames = cn(styles.typography, styles[variant], className);

  return (
    <Component className={classNames} data-test-id={dataTestId}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

Typography.defaultProps = {
  variant: 'body3',
};

export default Typography;
