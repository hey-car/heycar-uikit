import { BreakpointValues } from '../components/column/Column.types';
import { breakpoints } from '../Grid.types';

export const getValuesForAllBreakpoints = (
  breakpointObject: BreakpointValues,
) => {
  return breakpoints.reduce(
    (obj, breakpoint, index) => ({
      ...obj,
      ...(isNaN(obj[breakpoint] as number) && { [breakpoint]: obj[breakpoints[index - 1]] }),
    }),
    breakpointObject,
  );
};
