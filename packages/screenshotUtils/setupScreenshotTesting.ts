import { Browser, BrowserContext, chromium, Page } from 'playwright';

import { defaultViewport, matchHtml } from './helpers';
import { ScreenshotTestingParams } from './setupScreenshotTesting.types';

export const storyBookUrl =
  process.env.STORYBOOK_URL || 'http://localhost:9009/iframe.html';

export const setupScreenshotTesting = ({
  it,
  beforeAll,
  afterAll,
  expect,
}: {
  it: jest.It;
  beforeAll: jest.Lifecycle;
  afterAll: jest.Lifecycle;
  expect: jest.Expect;
}) => {
  return ({ cases, theme, ...matchHtmlArgs }: ScreenshotTestingParams) =>
    () => {
      let browser: Browser;
      let context: BrowserContext;
      let page: Page;

      beforeAll(async () => {
        browser = await chromium.launch();
        context = await browser.newContext({ viewport: defaultViewport });
        page = await context.newPage();
      });

      afterAll(async () => {
        await browser.close();
      });

      it.each(cases)('%s', async (_, link: string) => {
        const url = encodeURI(link + (theme ? `&theme=${theme}` : ''));

        await page?.goto(url);

        await matchHtml({
          page,
          expect,
          ...matchHtmlArgs,
        });
      });
    };
};
