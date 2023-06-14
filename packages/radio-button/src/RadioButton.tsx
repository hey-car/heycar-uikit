import React, { FC } from 'react';

import { RadioButtonProps } from './RadioButton.types';

import styles from './styles/default.module.css';

const RadioButton: FC<RadioButtonProps> = React.forwardRef<
  HTMLInputElement,
  RadioButtonProps
>(
  (
    {
      checked,
      onChange,
      disabled,
      error,
      dataTestId,
      className,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <div className={styles.wrapper}>
        <input
          checked={checked}
          className={`${styles.radio} ${error ? styles.error : ''} ${
            className ? className : ''
          }`}
          data-test-id={dataTestId}
          disabled={disabled}
          onChange={onChange}
          ref={ref}
          type="radio"
          {...otherProps}
        />
      </div>
    );
  },
);

export default RadioButton;
