const breakpoints = ['sm', 'md', 'lg', 'xl'];

type Styles = {
  [className: string]: string;
};

export const getClassesAccordingToBreakpoint = (
  values: number[],
  styles: Styles,
  prefix?: string,
) => {
  const addedPrefix = prefix ? `-${prefix}` : '';

  return values.map(
    (value, index) => styles[`${breakpoints[index]}${addedPrefix}-${value}`],
  );
};
