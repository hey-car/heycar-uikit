import React from 'react';
import cn from 'classnames';

import type { TypographyProps } from './Typography.types';
import { defaultVariantMapping } from './Typography.types';

import styles from './styles/default.module.css';
import stylesVariant from './styles/variant.module.css';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body.3',
  highlighted = false,
  dataTestId,
  className,
  Component = defaultVariantMapping[variant],
  children,
}) => {
  const [variantName, variantSize] = variant.toLowerCase().split('.');

  const classNames = cn(
    styles.typography,
    stylesVariant[`typography__${variantName}`],
    stylesVariant[`typography__${variantName}_${variantSize}`],
    {
      [stylesVariant.typography__highlight]: highlighted,
    },
    className,
  );

  return (
    <Component className={classNames} data-test-id={dataTestId}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export default Typography;
