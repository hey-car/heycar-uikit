import { MatchImageSnapshotOptions } from 'jest-image-snapshot';
import {
  Browser,
  BrowserContext,
  Page,
  PageScreenshotOptions,
} from 'playwright';

export type CustomSnapshotIdentifierParams = {
  currentTestName: string;
  counter: number;
  defaultIdentifier: string;
  testPath: string;
};

export type CloseBrowserParams = {
  page: Page;
  context: BrowserContext;
  browser: Browser;
};

export type EvaluateFn = (page: Page) => void;

export type MatchHtmlParams = {
  page: Page;
  expect: jest.Expect;
  matchImageSnapshotOptions?: MatchImageSnapshotOptions;
  screenshotOpts?: PageScreenshotOptions;
};
