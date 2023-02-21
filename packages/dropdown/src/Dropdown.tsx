/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import { DropdownProps, SelectOptions } from './Dropdown.types';

import styles from './styles/default.module.css';

function Dropdown({
  Component = 'div',
  value,
  onChange,
  options,
  disabled,
  dataTestId,
  onBlur,
  onClick,
  fullWidth,
  ...restProps
}: DropdownProps) {
  const [stateValue, setStateValue] = useState<SelectOptions | undefined>(
    value,
  );

  const [isOpen, setIsOpen] = useState(false);

  const isValueIncludedInOptions = useCallback((option)=>
    !!options.find((o) => Object.entries(o).every(([key, val])=>{
      return val === option[key];
    })),
  [options]);

  useEffect(() => {
    if (options.length === 0) setStateValue(undefined);
    if (value && !isValueIncludedInOptions(value)) setStateValue(undefined);
    if (stateValue && !isValueIncludedInOptions(stateValue)) setStateValue(undefined);
    if (!stateValue && value && isValueIncludedInOptions(value)) setStateValue(value);
  }, [value, options, stateValue, isValueIncludedInOptions]);

  const selectOption = useCallback((option: SelectOptions) => {
    if (onChange) {
      if (option !== stateValue) onChange(option);
    }
    setStateValue(option);
  }, [onChange, stateValue]);

  const isOptionSelection = useCallback((option: SelectOptions) => option?.value === stateValue?.value, [stateValue]);

  const onClickHandler = useCallback(() => {
    onClick?.();
    if (!disabled) setIsOpen((nextState) => !nextState);
  }, [onClick, disabled, setIsOpen]);

  const onBlurHandler = useCallback(() => {
    onBlur?.();
    setIsOpen(false);
  }, [onBlur, setIsOpen]);

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
    <Component
      className={classNames}
      onBlur={onBlurHandler}
      onClick={onClickHandler}
      tabIndex={0}
      {...restProps}
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
    </Component>
  );
}

export default Dropdown;
