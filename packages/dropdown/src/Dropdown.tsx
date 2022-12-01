import React from 'react';
import cn from 'classnames';

import { DropdownProps } from './Dropdown.types';

import styles from './styles/default.module.css';

export const Dropdown = React.forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      label,
      name,
      dataTestId,
      onChange,
      disabled = false,
      className,
      id,
      labelFor,
      children,
      error,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={cn(styles.dropdown, className)}>
        <label htmlFor={labelFor}>{label}</label>
        <select
          className={styles.select}
          data-testid={dataTestId}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          ref={ref}
          {...rest}
        >
          {children}
        </select>
        {error && <p className={styles['error-message']}>{error}</p>}
      </div>
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
