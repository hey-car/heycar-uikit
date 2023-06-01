import React from 'react';

//import ReactSlider from 'react-slider';
import { SliderProps } from './Slider.types';

// import styles from './styles/default.module.css';

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      dataTestId,
      className,
      onChange,
      onAfterChange,
      minDistance,
      stepCount,
      selectedRangeIndexes,
      ariaValueText,
      ...rest
    },
    ref,
  ) => {
    // function removeDraggingClass() {
    //   const activeThumb = document.getElementsByClassName(
    //     'dragging',
    //   )[0] as HTMLDivElement;

    //   if (activeThumb) activeThumb.blur();
    // }

    return (
      <div
        className={`${className}`}
        data-test-id={dataTestId}
        ref={ref}
        {...rest}
      >
        Hello
        {/* <ReactSlider
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={ariaValueText}
          className="heycar-slider"
          max={stepCount - 1}
          min={0}
          minDistance={minDistance}
          onAfterChange={(values: number[], thumbIndex: number) => {
            removeDraggingClass();
            if (onAfterChange)
              onAfterChange([values[0], values[1]], thumbIndex);
          }}
          onChange={(value, index) =>
            onChange && onChange([value[0], value[1]], index)
          }
          pearling={true}
          renderThumb={(p: Record<string, any>, state: ValueState) => (
            <div {...p}>
              {ariaValueText && (
                <span className="tooltip">{state.valueNow}</span>
              )}
            </div>
          )}
          thumbActiveClassName="dragging"
          thumbClassName="range-slider__thumb"
          trackClassName="range-slider__track"
          value={selectedRangeIndexes || [0, stepCount - 1]}
        /> */}
      </div>
    );
  },
);

export default Slider;
