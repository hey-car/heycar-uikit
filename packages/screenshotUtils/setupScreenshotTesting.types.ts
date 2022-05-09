import { MatchHtmlParams } from './helpers';

export type ScreenshotTestingParams = Omit<
  MatchHtmlParams,
  'page' | 'css' | 'expect'
> & {
  cases: Array<[string, string]>;
  theme?: string;
};
