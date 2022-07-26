import React from 'react';
import cn from 'classnames';

import BadgeIcon from './components/BadgeIcon';
import { BadgeProps } from './Badge.types';

import styles from './styles/default.module.css';

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
    styles[color],
    styles.badge,
    styles[`background-${background}`],
  );

  return (
    <span className={classNames} data-test-id={dataTestId}>
      {showIcon && <BadgeIcon color={color} fontSize={size} />}
      {count && (
        <span>
          {symbol && symbol}
          {count}
        </span>
      )}
      {text && <span>{text}</span>}
    </span>
  );
}

export default Badge;
