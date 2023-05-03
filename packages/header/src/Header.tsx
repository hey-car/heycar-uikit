import React from 'react';

import { TestProps } from './Header.types';

import styles from './styles/default.module.css';

const Test = React.forwardRef<HTMLDivElement, TestProps>(
  ({ children, dataTestId, ...restProps }, ref) => {
    return (
      <div
        className={`${styles.badge}`}
        data-test-id={dataTestId}
        ref={ref}
        {...restProps}
      >
        {children}
      </div>
    );
  },
);

Test.displayName = 'Test';

export default Test;
