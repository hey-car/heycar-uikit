import React from 'react';
import cn from 'classnames';

import ButtonIcon from './components/ButtonIcon';
import ButtonLoader from './components/ButtonLoader';
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
      color = 'secondary',
      variant = 'contained',
      fullWidth = false,
      leftIcon,
      rightIcon,
      className,
      loading,
      Component = 'button',
      ...restProps
    },
    ref,
  ) => {
    const classNames = cn(
      styles.button,
      stylesVariant[color],
      stylesVariant[variant],
      stylesSize[size],
      {
        [styles.loading]: loading,
        [styles.fullWidth]: fullWidth,
      },
      className,
    );

    return (
      <Component {...restProps} className={classNames} ref={ref}>
        {loading && <ButtonLoader className={styles.loader} />}
        {leftIcon && (
          <ButtonIcon className={styles.icon} side="left">
            {leftIcon}
          </ButtonIcon>
        )}
        <span className={styles.text}>{children}</span>
        {rightIcon && (
          <ButtonIcon className={styles.icon} side="right">
            {rightIcon}
          </ButtonIcon>
        )}
      </Component>
    );
  },
);

Button.displayName = 'Button';

Button.defaultProps = {
  size: 'middle',
  color: 'secondary',
  variant: 'contained',
  fullWidth: false,
};

export default Button;
