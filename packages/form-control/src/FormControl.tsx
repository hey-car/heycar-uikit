import React from 'react';
import cn from 'classnames';

import { FormControlProps } from './FormControl.types';

import styles from './styles/default.module.css';

// extra test comment
const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (
    {
      fullWidth = false,
      className,
      disabled,
      focused,
      filled,
      error,
      hint,
      label,
      leftIcon,
      rightAddons,
      rightIcon,
      bottomAddons,
      children,
      dataTestId,
      ...restProps
    },
    ref,
  ) => {
    const wrapperClassNames = cn(styles.component, className, {
      [styles.fullWidth]: fullWidth,
      [styles.hasLeftIcon]: leftIcon,
      [styles.disabled]: disabled,
      [styles.hasError]: error,
    });
    const innerClassNames = cn(styles.inner, {
      [styles.filled]: filled,
      [styles.focused]: focused,
    });
    const rightAddonsClassNames = cn(styles.addons, {
      [styles.rightAddons]: rightAddons,
      [styles.rightIcon]: rightIcon,
    });
    const errorMessage = typeof error === 'boolean' ? '' : error;

    return (
      <div className={wrapperClassNames} data-test-id={dataTestId}>
        <div {...restProps} className={innerClassNames} ref={ref}>
          {leftIcon && (
            <div className={cn(styles.addons, styles.leftIcon)}>{leftIcon}</div>
          )}
          <div className={styles.inputWrapper}>
            {label && (
              <React.Fragment>
                <label className={styles.label}>
                  <span className={styles.labelInner}>{label}</span>
                </label>
              </React.Fragment>
            )}
            <div className={styles.input}>{children}</div>
          </div>
          <fieldset aria-hidden="true" className={styles.fieldset}>
            <legend className={styles.legend}>
              {label && <span>{label}</span>}
            </legend>
          </fieldset>
          {(rightAddons || rightIcon) && (
            <div className={rightAddonsClassNames}>
              {rightAddons || rightIcon}
            </div>
          )}
        </div>
        {bottomAddons}
        {errorMessage && (
          <span className={cn(styles.sub, styles.error)} role="alert">
            {errorMessage}
          </span>
        )}
        {hint && !errorMessage && (
          <span className={cn(styles.sub, styles.hint)}>{hint}</span>
        )}
      </div>
    );
  },
);

FormControl.displayName = 'FormControl';

export default FormControl;
