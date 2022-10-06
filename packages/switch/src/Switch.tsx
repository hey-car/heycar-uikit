import React from 'react';
import cn from 'classnames';

import { SwitchProps } from './Switch.types';

import styles from './styles/default.module.css';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, onChange, disabled = false, className }, ref) => {
    const classNames = cn(styles.container, className);

    return (
      <label className={classNames}>
        <input
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          ref={ref}
          type="checkbox"
        />
        <span className={styles.switch} tabIndex={0} />
      </label>
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;
