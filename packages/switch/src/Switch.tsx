import React from 'react';
import cn from 'classnames';

import styles from './styles/default.module.css';

import { SwitchProps } from './Switch.types';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ defaultChecked = false, className, onChange }) => {
    const classNames = cn(styles.container, className);

    return (
      <label className={classNames}>
        <input
          defaultChecked={defaultChecked}
          onChange={onChange}
          type="checkbox"
        />
        <span className={styles.switch} />
      </label>
    );
  },
);

Switch.displayName = 'Switch';

Switch.defaultProps = {
  defaultChecked: false,
};

export default Switch;
