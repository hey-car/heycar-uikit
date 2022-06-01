import React from 'react';
import cn from 'classnames';

import { ButtonLoaderProps } from './ButtonLoader.types';

import styles from './ButtonLoader.module.css';

function ButtonLoader({ className }: ButtonLoaderProps) {
  return (
    <div className={cn(styles.loader, className)}>
      <div />
      <div />
      <div />
    </div>
  );
}

export default ButtonLoader;
