/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  label,
  hint,
  inputRef,
  fullWidth,
  placeholder,
  error,
  onKeyDown,
  ...restProps
}: DropdownProps) {
  const [stateValue, setStateValue] = useState<DropdownOptionProps | undefined>(
    value,
  );

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const selectOption = useCallback((option: DropdownOptionProps) => {
    if (onChange) {
      if (option !== stateValue) onChange(option);
    }
    setStateValue(option);
  }, [onChange, stateValue]);

  const onClickHandler = useCallback(() => {
    onClick?.();
    if (!disabled) setIsOpen((nextState) => !nextState);
  }, [onClick, disabled, setIsOpen]);

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

  const onBlurHandler = useCallback(() => {
    onBlur?.();
    setIsOpen(false);
  }, [onBlur, setIsOpen]);

  const classNames = cn(
    styles.container,
    disabled && styles.disabled,
    fullWidth && styles.fullWidth,
  );

  const valueClassNames = cn(disabled && 'disabled', styles.value);

  return (
    <Component
      className={classNames}
      onBlur={onBlurHandler}
      onClick={onClickHandler}
      ref={containerRef}
      tabIndex={0}
    >
      <Input
        aria-disabled={true}
        className={valueClassNames}
        disabled={disabled}
        error={error}
        fullWidth={true}
        hint={hint}
        label={label}
        onChange={() => {
          setStateValue(options[highlightedIndex]);
        }}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={inputRef}
        rightIcon={isOpen ? <ChevronTop /> : <ChevronDown />}
        value={stateValue?.label}
        {...restProps}
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
