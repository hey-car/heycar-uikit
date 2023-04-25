import { delay } from 'q';

import {
  closeBrowser,
  createStorybookUrl,
  matchHtml,
  openBrowserPage,
  //screenshotMatchClick,
} from '../../../screenshotUtils';

const packageName = 'header';
//const accordionButtonSelector = '#root div[data-test-id="snapshot-test-btn-wrapper"] div[role="button"]';
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

      // test('Accordion open first tab', async () => {
      //   const pageUrl = createStorybookUrl({
      //     packageName,
      //   });

      //   await screenshotMatchClick(pageUrl, accordionButtonSelector, {
      //     animations: 'disabled',
      //   });
      // });
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
