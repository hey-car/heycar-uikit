import { BreakpointValues } from '../components/column/Column.types';
import { breakpoints } from '../Grid.types';

import { getValuesForAllBreakpoints } from './getValuesForAllBreakpoints';

type Styles = {
  [className: string]: string;
};

export const getClassesAccordingToBreakpoint = (
  values: number[] | BreakpointValues,
  styles: Styles,
  prefix?: string,
) => {
  const addedPrefix = prefix ? `-${prefix}` : '';

  if (Array.isArray(values)) {
    return values.map(
      (value, index) => styles[`${breakpoints[index]}${addedPrefix}-${value}`],
    );
  }

  const updatedValues = getValuesForAllBreakpoints(values);

  return breakpoints.map(
    breakpoint =>
      styles[`${breakpoint}${addedPrefix}-${updatedValues[breakpoint]}`],
  );
};
