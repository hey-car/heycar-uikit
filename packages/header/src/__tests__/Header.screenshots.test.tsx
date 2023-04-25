import { delay } from 'q';

import {
  closeBrowser,
  createStorybookUrl,
  matchHtml,
  openBrowserPage,
} from '../../../screenshotUtils';

const packageName = 'header';
const desktopWidth = 1440;
const smallDesktopWidth = 1024;
const mobileWidth = 365;
const viewPort = {
  width: desktopWidth,
  height: 768,
};

describe('Header screenshots', () => {
  describe('desktop', () => {
    describe('header items', () => {
      test('All header items visual state', async () => {
        const pageUrl = createStorybookUrl({
          packageName,
          componentCategory: 'organisms',
        });
        const { browser, context, page } = await openBrowserPage(
          pageUrl,
          undefined,
          viewPort,
        );

        await delay(300);

        try {
          await matchHtml({
            page,
            expect,
          });
        } catch (error: unknown) {
          console.error(error);
        } finally {
          await closeBrowser({ browser, context, page });
        }
      });
    });
  });

  describe('tablet-l', () => {
    describe('header items', () => {
      test('All header items visual state', async () => {
        const pageUrl = createStorybookUrl({
          packageName,
          componentCategory: 'organisms',
        });
        const { browser, context, page } = await openBrowserPage(
          pageUrl,
          undefined,
          {
            ...viewPort,
            width: smallDesktopWidth,
          },
        );

        await delay(300);

        try {
          await matchHtml({
            page,
            expect,
          });
        } catch (error: unknown) {
          console.error(error);
        } finally {
          await closeBrowser({ browser, context, page });
        }
      });
    });
  });

  describe('mobile', () => {
    describe('header items', () => {
      test('All header items visual state', async () => {
        const pageUrl = createStorybookUrl({
          packageName,
          componentCategory: 'organisms',
        });
        const { browser, context, page } = await openBrowserPage(
          pageUrl,
          undefined,
          {
            ...viewPort,
            width: mobileWidth,
          },
        );

        await delay(300);

        try {
          await matchHtml({
            page,
            expect,
          });
        } catch (error: unknown) {
          console.error(error);
        } finally {
          await closeBrowser({ browser, context, page });
        }
      });
    });
  });
});
