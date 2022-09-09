import React from 'react';
import cn from 'classnames';

import { FormControlProps } from './FormControl.types';

import styles from './styles/default.module.css';

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (
    {
      block = false,
      className,
      fieldClassName,
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
      [styles.block]: block,
      [styles.hasLeftIcon]: leftIcon,
      // [styles.hasRightAddons]: rightAddons || error,
      [styles.disabled]: disabled,
      [styles.hasError]: error,
    });
    const innerClassNames = cn(fieldClassName, styles.inner, {
      [styles.filled]: filled,
      // [styles.hasLabel]: label,
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
          {/* Addon left */}
          {leftIcon && (
            <div className={cn(styles.addons, styles.leftIcon)}>{leftIcon}</div>
          )}
          <div className={styles.inputWrapper}>
            {/* Label*/}
            {label && (
              <React.Fragment>
                {/* <span aria-hidden={true} className={styles.hiddenLabel}>
                  {label}
                </span> */}
                <label className={styles.label}>
                  <span className={styles.labelInner}>{label}</span>
                </label>
              </React.Fragment>
            )}
            <div className={styles.input}>{children}</div>
          </div>
          <fieldset aria-hidden="true" className={styles.fieldset}>
            <legend className={styles.legend}>
              <span>{label}</span>
            </legend>
          </fieldset>
          {/* Right addon */}
          {(rightAddons || rightIcon) && (
            <div className={rightAddonsClassNames}>
              {rightAddons || rightIcon}
            </div>
          )}
        </div>
        {/* Bottom addon */}
        {bottomAddons}
        {/* Error message */}
        {errorMessage && (
          <span className={cn(styles.sub, styles.error)} role="alert">
            {errorMessage}
          </span>
        )}
        {/* Hint */}
        {hint && !errorMessage && (
          <span className={cn(styles.sub, styles.hint)}>{hint}</span>
        )}
      </div>
    );
  },
);

FormControl.displayName = 'FormControl';

export default FormControl;
