import React from 'react';

import BadgeIcon from './components/BadgeIcon';
import { BadgeProps } from './Badge.types';

function Badge({
  color,
  count,
  size,
  icon,
  symbol,
  background,
  text,
}: BadgeProps) {
  return (
    <span>
      {icon && <BadgeIcon>{icon}</BadgeIcon>}
      {symbol && <span>{symbol}</span>}
      {count && <span>{count}</span>}
      {text && <span>{text}</span>}
    </span>
  );
}

export default Badge;
