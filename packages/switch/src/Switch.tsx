import React from 'react';
import cn from 'classnames';

import styles from './styles/default.module.css';

import { SwitchProps } from './Switch.types';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, onChange, disabled = false, className }, ref) => {
    const classNames = cn(styles.container, className);

    return (
      <label className={classNames}>
        <input
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          type="checkbox"
          ref={ref}
        />
        <span className={styles.switch} />
      </label>
    );
  },
);

Switch.displayName = 'Switch';

Switch.defaultProps = {
  disabled: false,
};

export default Switch;
