export const breakpoints = ['sm', 'md', 'lg', 'xl'] as const;
export type BreakpointType = typeof breakpoints[number];
