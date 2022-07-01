import {
  closeBrowser,
  createStorybookUrl,
  matchHtml,
  openBrowserPage,
} from '../../../screenshotUtils';

const packageName = 'grid';

const clip = { x: 0, y: 0, width: 1200, height: 600 };

const desktopWidthSize = 1024;
const tabletWidthSize = 860;
const mobileWidthSize = 320;

const viewPort = {
  width: desktopWidthSize,
  height: 768,
};

describe('Grid screen view size tests', () => {
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

  test('Screen size = tablet', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
    });

    const { browser, context, page } = await openBrowserPage(
      pageUrl,
      undefined,
      {
        ...viewPort,
        width: tabletWidthSize,
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
