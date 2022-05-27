import { MatchHtmlParams } from './helpers.types';

export type ScreenshotTestingParams = Omit<
  MatchHtmlParams,
  'page' | 'css' | 'expect'
> & {
  cases: Array<[string, string]>;
  theme?: string;
};
