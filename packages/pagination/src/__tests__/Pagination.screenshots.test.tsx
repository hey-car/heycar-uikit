import {
  closeBrowser,
  createStorybookUrl,
  matchHtml,
  openBrowserPage,
} from '../../../screenshotUtils';

const packageName = 'pagination';

const clip = { x: 0, y: 0, width: 750, height: 550 };

const desktopWidthSize = 1280;
const mobileWidthSize = 320;

const viewPort = {
  width: desktopWidthSize,
  height: 768,
};

describe('Pagination screenshots tests', () => {
  test('Screen size = desktop', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
    });

    const { browser, context, page } = await openBrowserPage(
      pageUrl,
      undefined,
      viewPort,
    );

    try {
      await matchHtml({
        page,
        expect,
        screenshotOpts: { clip },
      });
    } catch (error: unknown) {
      console.error(error);
    } finally {
      await closeBrowser({ browser, context, page });
    }
  });

  test('Screen size = mobile', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
    });

    const { browser, context, page } = await openBrowserPage(
      pageUrl,
      undefined,
      {
        ...viewPort,
        width: mobileWidthSize,
      },
    );

    try {
      await matchHtml({
        page,
        expect,
        screenshotOpts: { clip },
      });
    } catch (error: unknown) {
      console.error(error);
    } finally {
      await closeBrowser({ browser, context, page });
    }
  });
});
