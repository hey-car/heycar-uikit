import React from 'react';
import ReactSlider from 'react-slider';

import Typography from '@heycar-uikit/typography';

import { DEFAULT_LOCALE } from './Slider.constants';
import { SliderProps, ValueState } from './Slider.types';

import styles from './styles/default.module.css';

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      dataTestId,
      className,
      onChange,
      onAfterChange,
      locale = DEFAULT_LOCALE,
      minDistance,
      stepCount,
      selectedRangeIndexes,
      ariaValueText,
      isWithHistogram,
      ...rest
    },
    ref,
  ) => {
    function removeDraggingClass() {
      const activeThumb = document.getElementsByClassName(
        'dragging',
      )[0] as HTMLDivElement;

      if (activeThumb) activeThumb.blur();
    }

    return (
      <div
        className={`${styles.sliderWrapper} ${
          isWithHistogram ? styles.isWithHistogram : ''
        } ${className}`}
        data-test-id={dataTestId}
        ref={ref}
        {...rest}
      >
        <ReactSlider
          ariaLabel={[locale.thumb1, locale.thumb2]}
          ariaValuetext={ariaValueText}
          className={styles.heycarSlider}
          max={stepCount - 1}
          min={0}
          minDistance={minDistance}
          onAfterChange={(values: number[], thumbIndex: number) => {
            removeDraggingClass();
            if (onAfterChange)
              onAfterChange([values[0], values[1]], thumbIndex);
          }}
          onChange={(value, thumbIndex) =>
            onChange && onChange([value[0], value[1]], thumbIndex)
          }
          pearling={true}
          renderThumb={(p: Record<string, any>, state: ValueState) => (
            <div {...p}>
              {ariaValueText && isWithHistogram && (
                <Typography
                  Component="span"
                  className="tooltip"
                  variant="caption5"
                >
                  {typeof ariaValueText === 'function'
                    ? ariaValueText(state)
                    : `${ariaValueText}${state.valueNow}`}
                </Typography>
              )}
            </div>
          )}
          thumbActiveClassName="dragging"
          thumbClassName="range-slider__thumb"
          trackClassName="range-slider__track"
          value={selectedRangeIndexes || [0, stepCount - 1]}
        />
      </div>
    );
  },
);

export default Slider;
