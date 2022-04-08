import React from 'react';
import cn from 'classnames';

import type { ButtonProps } from './Button.types';

import styles from './styles/default.module.css';
import stylesSize from './styles/size.module.css';
import stylesVariant from './styles/variant.module.css';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'secondary',
      size = 'middle',
      onClick,
      disabled,
      dataTestId,
    },
    ref,
  ) => {
    const classNames = cn(
      styles.component,
      stylesSize[size],
      stylesVariant[variant],
    );

    return (
      <button
        className={classNames}
        data-test-id={dataTestId}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        type="button"
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

Button.defaultProps = {
  variant: 'secondary',
  size: 'middle',
};

export default Button;
