import React from 'react';
import cn from 'classnames';

import type { TypographyProps } from './Typography.types';

import styles from './styles/default.module.css';
import stylesSize from './styles/size.module.css';
import stylesVariant from './styles/variant.module.css';
import stylesWeight from './styles/weight.module.css';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  size = 2,
  weight = 'regular',
  color = 'neutral-700',
  isHighlighted = false,
  dataTestId,
  className,
  children,
}) => {
  const getTypographyTag = (variantType: string) => {
    if (variantType === 'heading') return `h${size}`;
    else if (variantType === 'body') return 'p';
    else if (variantType === 'caption') return 'caption';

    return 'span';
  };
  const TypographyTag = getTypographyTag(
    variant,
  ) as keyof JSX.IntrinsicElements;

  const classNames = cn(
    styles.typography,
    stylesVariant[variant],
    stylesWeight[weight],
    variant !== 'heading' &&
      variant !== 'display' &&
      stylesSize[`size_${size}`],
    {
      [stylesVariant.highlight]: isHighlighted,
    },
    className,
  );

  return (
    <TypographyTag
      className={classNames}
      data-test-id={dataTestId}
      style={{ color: `var(--color-${color})` }}
    >
      {children}
    </TypographyTag>
  );
};

Typography.displayName = 'Typography';

export default Typography;
