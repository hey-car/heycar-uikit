/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import cn from 'classnames';

import { DropdownProps, SelectOptions } from './Dropdown.types';

import styles from './styles/default.module.css';

const Dropdown = React.forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
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
    },
    ref,
  ) => {
    const [selectedOption, setSelectedOption] = useState<SelectOptions | undefined>(
      value,
    );

    const [isOpen, setIsOpen] = useState(false);

    const selectOption = (option: SelectOptions) => {
      if (onChange) {
        if (option !== selectedOption) onChange(option);
      }
      setSelectedOption(option);
    };

    const isOptionSelection = (option: SelectOptions) => {
      return option?.value === selectedOption?.value;
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

    const valueClassNames = cn(disabled && 'disabled', styles.value);

    return (
      <Component
        className={classNames}
        onBlur={onBlurHandler}
        onClick={onClickHandler}
        ref={ref}
        tabIndex={0}
        {...restProps}
      >
        {selectedOption?.label && <span className={valueClassNames}>{selectedOption.label}</span>}
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
                  <span className={styles.leftContent}>
                    {option.leftContent}
                  </span>
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
  },
);

export default Dropdown;
