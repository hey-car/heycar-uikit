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
      ...restProps
    },
    ref,
  ) => {
    const classNames = cn(
      styleVariants[`chip_${variant}`],
      styles.chip,
      variant === 'choice' && selected && styles.chip_selected,
      disabled && styles.disabled,
    );

    return (
      <Component
        className={classNames}
        data-test-id={dataTestId}
        ref={ref}
        {...restProps}
      >
        {children}
        {variant === 'filter' && (
          <span className={styleIcon['chip-close-icon']}>
            <Close />
          </span>
        )}
      </Component>
    );
  },
);

export default Chip;