/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { DropdownProps, SelectOptions } from './Dropdown.types';

import styles from './styles/default.module.css';

export const Dropdown = ({ value, onChange, options }: DropdownProps) => {
  const [stateValue, setStateValue] = useState<SelectOptions | undefined>(
    value,
  );

  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: SelectOptions) => {
    if (option !== stateValue) onChange(option);
    setStateValue(option);
  };

  const isOptionSelection = (option: SelectOptions) => {
    return option === stateValue;
  };

  return (
    <div
      className={styles.container}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(true)}
      tabIndex={0}
    >
      <span className={styles.value}>{stateValue?.label}</span>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
        {options.map(option => (
          <li
            className={`${styles.option} ${isOptionSelection(option) ? styles.selected : ''
              }`}
            key={option.value}
            onClick={e => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
          >
            <div className={styles.contentContainer}>
              {option.leftContent && (
                <span className={styles.leftContent}>{option.leftContent}</span>
              )}
              <span className={styles.optionContent}>{option.label}</span>
              {option.rightContent && (
                <span className={styles.rightContent}>
                  {option.rightContent}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
