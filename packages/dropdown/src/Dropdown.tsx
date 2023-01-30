/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import cn from 'classnames';

import { DropdownProps, SelectOptions } from './Dropdown.types';

import styles from './styles/default.module.css';

export const Dropdown = ({
  value,
  onChange,
  options,
  disabled,
  dataTestId,
  onBlur,
  onClick,
  fullWidth,
}: DropdownProps) => {
  const [stateValue, setStateValue] = useState<SelectOptions | undefined>(
    value,
  );

  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: SelectOptions) => {
    if (onChange) {
      if (option !== stateValue) onChange(option);
    }
    setStateValue(option);
  };

  const isOptionSelection = (option: SelectOptions) => {
    return option?.value === stateValue?.value;
  };

  const onClickHandler = () => {
    if (onClick) onClick();
    if (!disabled) setIsOpen(!isOpen);
  };
  const onBlurHandler = () => {
    if (onBlur) onBlur();
    setIsOpen(false);
  };

  const classNames = cn(
    styles.container,
    disabled && styles.disabled,
    fullWidth && styles.fullWidth,
  );

  const arrowClassNames = cn(
    disabled && styles.caret_disabled,
    isOpen && styles.caret_up,
    !isOpen && styles.caret_down,
  );

  const valueClassNames = cn(
    disabled && 'disabled',
    styles.value,
  );

  return (
    <div
      className={classNames}
      onBlur={onBlurHandler}
      onClick={onClickHandler}
      tabIndex={0}
    >
      <span className={valueClassNames}>
        {stateValue?.label}
      </span>
      <div className={arrowClassNames}></div>
      <ul
        className={`${styles.options} ${isOpen ? styles.show : ''}`}
        data-test-id={dataTestId}
      >
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
