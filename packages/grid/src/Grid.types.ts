export const breakpoints = ['sm', 'md', 'lg', 'xl'] as const;
export type BreakpointType = typeof breakpoints[number];
export type GapOptions =
  | 0
  | 2
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 56
  | 64;
export type BreakpointGaps = {
  [breakpoint in BreakpointType]?: GapOptions;
};
