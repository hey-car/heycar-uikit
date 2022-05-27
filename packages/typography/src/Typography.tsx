import React from 'react';
import cn from 'classnames';

import type { TypographyProps } from './Typography.types';

import styles from './styles/default.module.css';
import stylesVariant from './styles/variant.module.css';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body.3',
  highlighted = false,
  dataTestId,
  className,
  customTag,
  children,
}) => {
  const [variantName, variantSize] = variant.toLowerCase().split('.');
  const getTypographyTag = (name: string, size: string) => {
    if (name === 'h') return `h${size}`;
    else if (name === 'body' || name === 'display') return 'p';
    else if (name === 'caption') return 'caption';

    return 'span';
  };
  const TypographyTag =
    customTag ||
    (getTypographyTag(variantName, variantSize) as keyof JSX.IntrinsicElements);

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
    <TypographyTag className={classNames} data-test-id={dataTestId}>
      {children}
    </TypographyTag>
  );
};

Typography.displayName = 'Typography';

export default Typography;
