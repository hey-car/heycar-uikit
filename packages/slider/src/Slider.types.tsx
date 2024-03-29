interface ValueState {
  index: number;
  value: number | number[];
  valueNow: number;
}

interface Locale {
  thumb1: string;
  thumb2: string;
}

interface SliderProps {
  /**
   *  Function to call on every value change of the slider. Called with two arguments, the first being the result value(s) the second being thumb index.
   */
  onChange?: (values: [number, number], thumbIndex: number) => void;
  /**
   *  Callback called only after moving a thumb has ended. The callback will only be called if the action resulted in a change. Called with two arguments, the first being the result value(s) the second being thumb index.
   */
  onAfterChange?: (values: [number, number], thumbIndex: number) => void;
  /**
   *  Number of steps along the Slider
   */
  stepCount: number;
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
   * Alters the slider so it works with the histogram. Should not need to be used for implementation
   */
  isWithHistogram?: boolean;
}

export { Locale, SliderProps, ValueState };
