/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { SegmentedButtonsProps } from './SegmentedButtons.types';

import styles from './styles/default.module.css';

const SegmentedButtons = React.forwardRef<
  HTMLDivElement,
  SegmentedButtonsProps
>(
  (
    { className, currentValue, buttons, dataTestId, onChange, ...restProps },
    ref,
  ) => {
    return (
      <div
        className={`${styles.wrapper} ${className}`}
        data-test-id={dataTestId}
        ref={ref}
        role="radiogroup"
        {...restProps}
      >
        {buttons.map(btn => {
          const isActive = currentValue === btn.value;

          return (
            <button
              aria-checked={isActive}
              aria-label={btn.label}
              disabled={btn.isDisabled}
              key={btn.label}
              onClick={() => {
                if (!isActive) onChange(btn.value);
              }}
              role="radio"
            >
              {btn.icon}
              {btn.label}
            </button>
          );
        })}
      </div>
    );
  },
);

SegmentedButtons.displayName = 'SegmentedButtons';

export default SegmentedButtons;
