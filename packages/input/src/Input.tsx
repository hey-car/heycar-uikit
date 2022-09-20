import React, { ChangeEvent, FocusEvent, useCallback, useState } from 'react';
import cn from 'classnames';

import FormControl from '@heycar-uikit/form-control';

import { InputProps } from './Input.types';

import styles from './styles/default.module.css';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      defaultValue,
      type = 'text',
      hint,
      error,
      label,
      fullWidth = false,
      disabled,
      readOnly,
      rightIcon,
      rightAddons,
      leftIcon,
      onFocus,
      onBlur,
      onChange,
      className,
      dataTestId,
      ...restProps
    },
    ref,
  ) => {
    const inputClassNames = cn(styles.input, className, {
      [styles.hasLeftIcon]: leftIcon,
    });
    const isUncontrolled = value === undefined;
    const ariaLabel = typeof label === 'string' ? label : undefined;
    const [isFocused, setFocused] = useState(restProps.autoFocus);
    const [stateValue, setStateValue] = useState(defaultValue || '');
    const isFilled = Boolean(isUncontrolled ? stateValue : value);
    const handleInputFocus = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        if (!readOnly) setFocused(true);
        if (onFocus) onFocus(event);
      },
      [onFocus, readOnly],
    );
    const handleInputBlur = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        setFocused(false);

        if (onBlur) onBlur(event);
      },
      [onBlur],
    );
    const handleInputChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event, { value: event.target.value });
        if (isUncontrolled) setStateValue(event.target.value);
      },
      [onChange, isUncontrolled],
    );

    return (
      <FormControl
        disabled={disabled}
        error={error}
        filled={isFilled || isFocused}
        focused={isFocused}
        fullWidth={fullWidth}
        hint={hint}
        label={label}
        leftIcon={leftIcon}
        rightAddons={rightAddons}
        rightIcon={rightIcon}
      >
        <input
          {...restProps}
          aria-label={ariaLabel}
          className={inputClassNames}
          data-test-id={dataTestId}
          disabled={disabled}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          readOnly={readOnly}
          ref={ref}
          type={type}
          value={value}
        />
      </FormControl>
    );
  },
);

Input.displayName = 'Input';

export default Input;
