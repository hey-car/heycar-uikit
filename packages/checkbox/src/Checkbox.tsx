import React, { FC, useState } from 'react';

import { CheckboxProps } from './Checkbox.types';

import styles from './styles/default.module.css';

const Checkbox: FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled,
  className,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isNewChecked = event.target.checked;

    setIsChecked(isNewChecked);
    onChange(isNewChecked);
  };

  return (
    <label className={styles.label}>
      <input
        checked={isChecked}
        className={className ? className : ''}
        disabled={disabled ? disabled : false}
        onChange={e => handleChange(e)}
        type="checkbox"
      />
      {label}
    </label>
  );
};

export default Checkbox;
