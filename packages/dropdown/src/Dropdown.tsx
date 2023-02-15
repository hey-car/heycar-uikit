/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { ChevronDown, ChevronTop } from '@heycar-uikit/icons';
import Input from '@heycar-uikit/input';

import DropdownOption from './components/DropdownOption';
import { DropdownOptionProps } from './components/DropdownOption.types';
import { DropdownProps } from './Dropdown.types';

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
  placeholder,
  ...restProps
}: DropdownProps) {
  const [stateValue, setStateValue] = useState<DropdownOptionProps | undefined>(
    value,
  );

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectOption = (option: DropdownOptionProps) => {
    if (onChange) {
      if (option !== stateValue) onChange(option);
    }
    setStateValue(option);
  };

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlightedIndex, options, selectOption]);

  const isOptionSelection = (option: DropdownOptionProps) => {
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

  const valueClassNames = cn(disabled && 'disabled', styles.value);

  return (
    <Component
      className={classNames}
      onClick={onClickHandler}
      ref={containerRef}
      tabIndex={0}
      {...restProps}
      onBlur={onBlurHandler}
    >
      <Input
        className={valueClassNames}
        disabled={disabled}
        fullWidth={true}
        onChange={() => {
          setStateValue(options[highlightedIndex]);
        }}
        placeholder={placeholder}
        rightIcon={isOpen ? <ChevronTop /> : <ChevronDown />}
        value={stateValue?.label}
      />
      <ul
        className={`${styles.options} ${isOpen ? styles.show : ''}`}
        data-test-id={dataTestId}
      >
        {options.map((option, index) => (
          <li
            className={`${styles.option} ${isOptionSelection(option) ? styles.selected : ''
              } ${index === highlightedIndex ? styles.highlighted : ''}`}
            key={option.value}
            onMouseDown={e => {
              selectOption(option);
              e.stopPropagation();
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
          >
            <DropdownOption {...option} />
          </li>
        ))}
      </ul>
    </Component>
  );
}

export default Dropdown;
