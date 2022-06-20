const breakpoints = ['sm', 'md', 'lg', 'xl'] as const;

type BreakpointType = typeof breakpoints[number];
type BreakpointValues = {
  [breakpoint in BreakpointType]?: number;
};

export const getValuesForAllBreakpoints = (
  breakpointObject: BreakpointValues,
) => {
  return breakpoints.reduce(
    (obj, breakpoint, index) => ({
      ...obj,
      ...(!obj[breakpoint] && { [breakpoint]: obj[breakpoints[index - 1]] }),
    }),
    breakpointObject,
  );
};
