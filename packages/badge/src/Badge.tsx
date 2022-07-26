import React from 'react';
import cn from 'classnames';

import BadgeIcon from './components/BadgeIcon';
import { BadgeProps } from './Badge.types';

import styles from './styles/default.module.css';
import styleVariants from './styles/variant.module.css';

function Badge({
  color = 'primary',
  dataTestId,
  count,
  size = 14,
  showIcon,
  symbol,
  background = 'primary',
  text,
}: BadgeProps) {
  const classNames = cn(
    styleVariants[color],
    styles.badge,
    styleVariants[`background-${background}`],
  );

  return (
    <div
      className={classNames}
      data-test-id={dataTestId}
      style={{ fontSize: size }}
    >
      {showIcon && <BadgeIcon color={color} fontSize={size} />}
      {count && (
        <span>
          {symbol && symbol}
          {count}
        </span>
      )}
      &nbsp;
      {text && <span>{text}</span>}
    </div>
  );
}

export default Badge;
