import React from 'react';
import cn from 'classnames';

import CloseIcon from './icons/CloseIcon';
import { ChipProps } from './Chip.types';

import styles from './styles/default.module.css';
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
      selected && styleVariants.selected,
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
          <span className={styleVariants['chip-close-icon']}>
            <CloseIcon disabled={disabled} />
          </span>
        )}
      </Component>
    );
  },
);

export default Chip;
