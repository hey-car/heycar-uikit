import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { SwitchProps } from './Switch.types';

import styles from './styles/default.module.css';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, disabled = false, className }, ref) => {
    const classNames = cn(styles.container, className);
    const [isChecked, setChecked] = useState(checked);

    useEffect(() => {
      setChecked(isChecked);
    }, [checked]);

    const handleSwitch = () => {
      checked = isChecked;
      setChecked(!checked);
    };

    useEffect(() => {
      window.addEventListener('keypress', () => {
        handleSwitch();
      });
    }, [isChecked]);

    return (
      <label className={classNames}>
        <input
          checked={isChecked}
          disabled={disabled}
          onChange={() => handleSwitch()}
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
