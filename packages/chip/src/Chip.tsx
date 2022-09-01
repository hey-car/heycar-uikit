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
      selected = false,
      leftIcon,
      onClick,
      onDelete,
      variant = 'filter',
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
        onClick={onClick}
      >
        {leftIcon && (
          <span className={styleIcon[`leftIcon_${variant}`]}>{leftIcon}</span>
        )}
        {children}
        {!onClick && onDelete && (
          <span className={styleIcon.chipCloseIcon} onClick={onDelete}>
            <Close />
          </span>
        )}
      </Component>
    );
  },
);

export default Chip;
