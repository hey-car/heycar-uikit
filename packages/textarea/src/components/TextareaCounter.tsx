import React from 'react';
import cn from 'classnames';

import { TextareaCounterProps } from './TextareaCounter.types';

import styles from './TextareaCounter.module.css';

function TextareaCounter({ length, maxLength }: TextareaCounterProps) {
  const isLengthMoreMax = length > maxLength;

  return (
    <div className={styles.counter}>
      <div
        className={cn(styles.countLength, {
          [styles.countLengthError]: isLengthMoreMax,
        })}
      >
        {length}
      </div>
      /{maxLength}
    </div>
  );
}

export default TextareaCounter;
