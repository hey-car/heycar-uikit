/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC, useEffect, useRef, useState } from 'react';

import Slider from '@heycar-uikit/slider';

import Histogram from './components/Histogram';
import { sanitiseRangeIndexes } from './utils/histogramHelpers';
import {
  DEFAULT_LOCALE,
  HISTOGRAM_HEIGHT,
  SLIDER_HEIGHT,
} from './SliderWithHistogram.constants';
import { SliderWithHistogramProps } from './SliderWithHistogram.types';

import styles from './styles/default.module.css';

export const SliderWithHistogram: FC<SliderWithHistogramProps> = ({
  dataTestId,
  className,
  onChange,
  onAfterChange,
  locale = DEFAULT_LOCALE,
  minDistance,
  selectedRangeIndexes,
  ariaValueText,
  data,
  hide,
  isLoading,
  ...rest
}) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const [rangeIndexes, setRangeIndexes] = useState<[number, number]>(
    sanitiseRangeIndexes(selectedRangeIndexes, data),
  );

  const handleOnChange = (values: number[], thumbIndex: number) => {
    setRangeIndexes([values[0], values[1]]);
    if (onChange) onChange([values[0], values[1]], thumbIndex);
  };

  // TODO: write own debounce (100)
  const updateCanvasSize = () => {
    if (internalRef.current) {
      // @ts-ignore
      const rect = internalRef.current.getBoundingClientRect();

      const newWidth = rect.width - SLIDER_HEIGHT;

      const newHeight = HISTOGRAM_HEIGHT;

      setWidth(newWidth);
      setHeight(newHeight);
    }
  };

  useEffect(() => {
    updateCanvasSize();

    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    setRangeIndexes(sanitiseRangeIndexes(selectedRangeIndexes, data));
  }, [selectedRangeIndexes, setRangeIndexes, data]);

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      data-test-id={dataTestId}
      ref={internalRef}
      {...rest}
    >
      {!hide && (
        <div className={styles.histogramWrapper}>
          {isLoading ? (
            'LOADING'
          ) : (
            <Histogram
              height={height}
              selectedRangeIndexes={rangeIndexes}
              selectedRangeMinWidth={4}
              values={data}
              width={width}
            />
          )}
        </div>
      )}
      <Slider
        ariaValueText={ariaValueText}
        className={styles.sliderWrapper}
        isWithHistogram={true}
        locale={locale}
        minDistance={minDistance}
        onAfterChange={onAfterChange}
        onChange={handleOnChange}
        selectedRangeIndexes={selectedRangeIndexes}
        stepCount={data.length}
      />
    </div>
  );
};

export default SliderWithHistogram;
