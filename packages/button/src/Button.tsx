import React from 'react';
import cn from 'classnames';

import { ButtonProps } from './Button.types';

import styles from './styles/default.module.css';
import stylesSize from './styles/size.module.css';
import stylesVariant from './styles/variant.module.css';

const Button = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,
      size = 'middle',
      // color = 'primary',
      variant = 'secondary',
      // fullWidth,
      // leftIcon,
      // rightIcon,
      // nowrap,
      Component = 'button',
      disabled,
      onClick,
      dataTestId,
    },
    ref,
  ) => {
    const classNames = cn(
      styles.button,
      stylesSize[size],
      stylesVariant[variant],
    );

    return (
      <Component
        className={classNames}
        data-test-id={dataTestId}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        type="button"
      >
        {children}
      </Component>
    );
  },
);

Button.displayName = 'Button';

Button.defaultProps = {
  size: 'small',
  color: 'secondary',
  variant: 'contained',
  fullWidth: false,
  nowrap: false,
};

export default Button;
