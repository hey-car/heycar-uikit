interface ValueState {
  index: number;
  value: number | number[];
  valueNow: number;
}

interface Locale {
  thumb1: string;
  thumb2: string;
}

interface SliderWithHistogramProps {
  /**
   *  Function to call on every value change of the slider. Called with two arguments, the first being the result value(s) the second being thumb index.
   */
  onChange?: (values: [number, number], thumbIndex: number) => void;
  /**
   *  Callback called only after moving a thumb has ended. The callback will only be called if the action resulted in a change. Called with two arguments, the first being the result value(s) the second being thumb index.
   */
  onAfterChange?: (values: [number, number], thumbIndex: number) => void;
  /**
   *  The index of the current values for both thumbs
   */
  selectedRangeIndexes?: [number, number];
  /**
   *  aria-valuetext for screen-readers. The function will be passed a an object with the index and value of the thumb, plus the current value state.
   */
  ariaValueText?: string | ((state: ValueState) => string);
  /**
   *  The minimal distance between any pair of thumbs. Must be positive, but zero means they can sit on top of each other.
   */
  minDistance?: number;
  /**
   * The id for testing
   */
  dataTestId?: string;
  /**
   * Class name(s)
   */
  className?: string;
  /**
   * `locale` - Object with localized strings
   */
  locale?: Locale;
  /**
   * Data for Histogram
   */
  data: number[];
  /**
   * Boolean to hide histogram
   */
  hide?: boolean;
  /**
   * Set histogram in loading state. Useful while fetching data
   */
  isLoading?: boolean;
}

export { Locale, SliderWithHistogramProps, ValueState };
