import React from 'react';
import cn from 'classnames';

import { ButtonIconProps } from './ButtonIcon.types';

import styles from './ButtonIcon.module.css';

function ButtonIcon({ children, className, side }: ButtonIconProps) {
  const iconSideClassName = `icon_${side}`;
  const classNames = cn(styles.icon, className, styles[iconSideClassName]);

  return <span className={classNames}>{children}</span>;
}

export default ButtonIcon;
