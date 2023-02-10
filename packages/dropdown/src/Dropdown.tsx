/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
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
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectOption = (option: SelectOptions) => {
    if (onChange) {
      if (option !== stateValue) onChange(option);
    }
    setStateValue(option);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          console.log('enter or space');
          setIsOpen(prev => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);

          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    containerRef.current?.addEventListener('keydown', handler);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      containerRef.current?.removeEventListener('keydown', handler);
    };
  }, [isOpen, highlightedIndex, options, selectOption]);


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
        {options.map((option, index) => (
          <li
            className={`${styles.option} ${isOptionSelection(option) ? styles.selected : ''
              }`}
            key={option.value}
            onClick={e => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
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
