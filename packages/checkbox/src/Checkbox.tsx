import React, { FC, useState } from 'react';

import { CheckboxProps } from './Checkbox.types';

//import styles  './styles/default.module.css';

const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isNewChecked = event.target.checked;

    setIsChecked(isNewChecked);
    onChange(isNewChecked);
  };

  return (
    <label>
      <input checked={isChecked} onChange={handleChange} type="checkbox" />
      {label}
    </label>
  );
};

export default Checkbox;
