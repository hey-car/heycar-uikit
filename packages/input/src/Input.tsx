import React, { FocusEvent, useCallback, useState } from 'react';
import cn from 'classnames';

import FormControl from '@heycar-uikit/form-control';

import { InputProps } from './Input.types';

import styles from './styles/default.module.css';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      type = 'text',
      hint,
      pattern,
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
      onInput,
      className,
      dataTestId,
      ...restProps
    },
    ref,
  ) => {
    const inputClassNames = cn(styles.input, className, {
      [styles.hasLeftIcon]: leftIcon,
    });
    const ariaLabel = typeof label === 'string' ? label : undefined;
    const [isFocused, setFocused] = useState(restProps.autoFocus);

    const isFilled = Boolean(value ? value : false);
    const handleInputFocus = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        if (!readOnly) setFocused(true);
        if (onFocus) onFocus(event);
      },
      [onFocus, readOnly],
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
          onBlur={onBlur}
          onChange={onChange}
          onFocus={handleInputFocus}
          onInput={onInput}
          pattern={pattern}
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
