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
      labelClassName,
      addonsClassName,
      disabled,
      focused,
      filled,
      error,
      hint,
      label,
      leftAddons,
      rightAddons,
      bottomAddons,
      children,
      dataTestId,
      ...restProps
    },
    ref,
  ) => {
    const wrapperClassNames = cn(styles.component, className, {
      [styles.block]: block,
      [styles.hasLeftAddons]: leftAddons,
      [styles.hasRightAddons]: rightAddons || error,
    });
    const mainClassNames = cn(fieldClassName, styles.inner, {
      [styles.disabled]: disabled,
      [styles.filled]: filled,
      [styles.hasLabel]: label,
      [styles.focused]: focused,
      [styles.hasError]: error,
    });
    const errorMessage = typeof error === 'boolean' ? '' : error;

    return (
      <div className={wrapperClassNames} data-test-id={dataTestId}>
        <div {...restProps} className={mainClassNames} ref={ref}>
          {leftAddons && (
            <div
              className={cn(styles.addons, styles.leftAddons, addonsClassName)}
            >
              {leftAddons}
            </div>
          )}
          <div className={styles.inputWrapper}>
            {label && (
              <React.Fragment>
                <span aria-hidden={true} className={styles.hiddenLabel}>
                  {label}
                </span>
                <div className={cn(styles.label, labelClassName)}>
                  <span className={styles.labelInner}>{label}</span>
                </div>
              </React.Fragment>
            )}
            <div className={styles.input}>{children}</div>
          </div>
          {rightAddons && (
            <div
              className={cn(styles.addons, styles.rightAddons, addonsClassName)}
            >
              {rightAddons}
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
