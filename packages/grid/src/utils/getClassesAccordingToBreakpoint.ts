const breakpoints = ['sm', 'md', 'lg', 'xl'];

type Styles = {
  [className: string]: string;
};

type BreakpointType = typeof breakpoints[number];
type BreakpointValues = {
  [breakpoint in BreakpointType]?: number;
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

  return breakpoints.map(
    breakpoint => styles[`${breakpoint}${addedPrefix}-${values[breakpoint]}`],
  );
};
