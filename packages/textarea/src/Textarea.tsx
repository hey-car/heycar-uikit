import React, { ChangeEvent, FocusEvent, useCallback, useState } from 'react';
import cn from 'classnames';

import FormControl from '@heycar-uikit/form-control';

import TextareaCounter from './components/TextareaCounter';
import { TextareaProps } from './Textarea.types';

import styles from './styles/default.module.css';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      value,
      defaultValue,
      hint,
      error,
      label,
      maxLength,
      fullWidth = false,
      resize = 'none',
      disabled,
      readOnly,
      onFocus,
      onBlur,
      onChange,
      className,
      dataTestId,
      ...restProps
    },
    ref,
  ) => {
    const textareaClassNames = cn(styles.textarea, className, {
      [styles.resizeVertical]: resize === 'vertical',
    });
    const isUncontrolled = value === undefined;
    const ariaLabel = typeof label === 'string' ? label : undefined;
    const [isFocused, setFocused] = useState(restProps.autoFocus);
    const [stateValue, setStateValue] = useState(defaultValue || '');
    const isFilled = Boolean(isUncontrolled ? stateValue : value);
    const handleTextareaFocus = useCallback(
      (event: FocusEvent<HTMLTextAreaElement>) => {
        if (!readOnly) setFocused(true);
        if (onFocus) onFocus(event);
      },
      [onFocus, readOnly],
    );
    const handleTextareaBlur = useCallback(
      (event: FocusEvent<HTMLTextAreaElement>) => {
        setFocused(false);

        if (onBlur) onBlur(event);
      },
      [onBlur],
    );
    const handleTextareaChange = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) onChange(event, { value: event.target.value });
        if (isUncontrolled) setStateValue(event.target.value);
      },
      [onChange, isUncontrolled],
    );
    const getValueLength = (): number => {
      if (isUncontrolled) return stateValue.length;

      return value.length;
    };

    return (
      <FormControl
        bottomAddons={
          !!maxLength && (
            <TextareaCounter length={getValueLength()} maxLength={maxLength} />
          )
        }
        className={styles.formControl}
        disabled={disabled}
        error={error}
        filled={isFilled || isFocused}
        focused={isFocused}
        fullWidth={fullWidth}
        hint={hint}
        label={label}
      >
        <textarea
          {...restProps}
          aria-label={ariaLabel}
          className={textareaClassNames}
          data-test-id={dataTestId}
          disabled={disabled}
          maxLength={maxLength}
          onBlur={handleTextareaBlur}
          onChange={handleTextareaChange}
          onFocus={handleTextareaFocus}
          readOnly={readOnly}
          ref={ref}
          value={value}
        />
      </FormControl>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
