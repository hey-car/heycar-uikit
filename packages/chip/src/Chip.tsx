import React from 'react';
import cn from 'classnames';

import { Close } from '@heycar-uikit/icons';

import { ChipProps } from './Chip.types';

import styles from './styles/default.module.css';
import styleIcon from './styles/icon.module.css';
import styleVariants from './styles/variant.module.css';

const Chip = React.forwardRef<HTMLElement, ChipProps>(
  (
    {
      children,
      dataTestId,
      Component = 'div',
      disabled,
      variant = 'filter',
      selected = false,
      leftIcon,
      ...restProps
    },
    ref,
  ) => {
    const classNames = cn(
      styleVariants[`${variant}`],
      styles.chip,
      selected && styles.chipSelected,
      disabled && styles.disabled,
    );

    return (
      <Component
        className={classNames}
        data-test-id={dataTestId}
        ref={ref}
        {...restProps}
      >
        {leftIcon && (
          <span className={styleIcon[`leftIcon_${variant}`]}>{leftIcon}</span>
        )}
        {children}
        {variant === 'filter' && (
          <span className={styleIcon.chipCloseIcon}>
            <Close fontSize={16} />
          </span>
        )}
      </Component>
    );
  },
);

export default Chip;
