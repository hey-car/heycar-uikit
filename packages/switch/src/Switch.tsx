import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { SwitchProps } from './Switch.types';

import styles from './styles/default.module.css';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, disabled = false, className }, ref) => {
    const classNames = cn(styles.container, className);
    const [isChecked, setChecked] = useState(checked);

    useEffect(() => {
      setChecked(checked);
    }, [checked]);

    const handleSwitch = () => {
      setChecked(!isChecked);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e?.key === 'Enter') {
        handleSwitch();
      }
    };

    return (
      <label className={classNames}>
        <input
          checked={isChecked}
          disabled={disabled}
          onChange={() => handleSwitch()}
          ref={ref}
          type="checkbox"
        />
        <span
          className={styles.switch}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        />
      </label>
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;
