import React from 'react';

import { RadioButtonProps } from './RadioButton.types';

import styles from './styles/default.module.css';

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
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
      <div
        className={`${styles.wrapper} ${error ? styles.error : ''} ${
          className ? className : ''
        }`}
      >
        <input
          checked={checked}
          className={styles.radio}
          data-test-id={dataTestId}
          disabled={disabled}
          onChange={onChange}
          ref={ref}
          type="radio"
          {...otherProps}
        />
        <span className={styles.fakeRadio} />
      </div>
    );
  },
);

export default RadioButton;
