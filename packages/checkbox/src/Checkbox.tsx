import React, { FC } from 'react';

import { CheckboxProps } from './Checkbox.types';

import styles from './styles/default.module.css';

const Checkbox: FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled,
  error,
  dataTestId,
  className,
}) => {
  return (
    <label className={styles.label} data-test-id={dataTestId}>
      <input
        checked={checked}
        className={`${className ? className : ''} ${error ? styles.error : ''}`}
        disabled={disabled ? disabled : false}
        onChange={e => onChange(e)}
        type="checkbox"
      />
      {label}
    </label>
  );
};

export default Checkbox;
