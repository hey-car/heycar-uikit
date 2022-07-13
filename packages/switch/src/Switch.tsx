import React from 'react';
import {useCallback} from 'react';

import styles from './styles/default.module.css';

import {SwitchProps} from './Switch.types';

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => onChange?.(event.target.checked),
    [onChange],
  );
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className={styles.switch} />
    </label>
  );
};

Switch.displayName = 'Switch';

Switch.defaultProps = {
  checked: false,
};

export default Switch;
