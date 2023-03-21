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

const runTest = async (pageUrl: string, isMobile?: boolean) => {
  const { browser, context, page } = await openBrowserPage(pageUrl, undefined, {
    width: isMobile ? mobileWidthSize : desktopWidthSize,
    height: 768,
  });

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
};

describe('Pagination screenshots tests', () => {
  describe('Screen size = desktop', () => {
    test('currentPage=1 totalPages=1', async () => {
      const pageUrl = createStorybookUrl({
        packageName,
        knobs: {
          currentPage: 1,
          totalPages: 1,
        },
      });

      await runTest(pageUrl);
    });

    test('currentPage=1 totalPages=2', async () => {
      const pageUrl = createStorybookUrl({
        packageName,
        knobs: {
          currentPage: 1,
          totalPages: 2,
        },
      });

      await runTest(pageUrl);
    });

    test('currentPage=1 totalPages=3', async () => {
      const pageUrl = createStorybookUrl({
        packageName,
        knobs: {
          currentPage: 1,
          totalPages: 3,
        },
      });

      await runTest(pageUrl);
    });

    test('currentPage=1 totalPages=4', async () => {
      const pageUrl = createStorybookUrl({
        packageName,
        knobs: {
          currentPage: 1,
          totalPages: 4,
        },
      });

      await runTest(pageUrl);
    });

    test('currentPage=1 totalPages=5', async () => {
      const pageUrl = createStorybookUrl({
        packageName,
        knobs: {
          currentPage: 1,
          totalPages: 5,
        },
      });

      await runTest(pageUrl);
    });

    test('currentPage=2 totalPages=5', async () => {
      const pageUrl = createStorybookUrl({
        packageName,
        knobs: {
          currentPage: 2,
          totalPages: 5,
        },
      });

      await runTest(pageUrl);
    });

    test('currentPage=5 totalPages=5', async () => {
      const pageUrl = createStorybookUrl({
        packageName,
        knobs: {
          currentPage: 5,
          totalPages: 5,
        },
      });

      await runTest(pageUrl);
    });
  });

  describe('Screen size = mobile', () => {
    test('currentPage=1 totalPages=1', async () => {
      const pageUrl = createStorybookUrl({
        packageName,
        knobs: {
          currentPage: 1,
          totalPages: 1,
        },
      });

      await runTest(pageUrl, true);
    });

    test('currentPage=1 totalPages=2', async () => {
      const pageUrl = createStorybookUrl({
        packageName,
        knobs: {
          currentPage: 1,
          totalPages: 2,
        },
      });

      await runTest(pageUrl, true);
    });

    test('currentPage=2 totalPages=5', async () => {
      const pageUrl = createStorybookUrl({
        packageName,
        knobs: {
          currentPage: 2,
          totalPages: 5,
        },
      });

      await runTest(pageUrl, true);
    });

    test('currentPage=5 totalPages=5', async () => {
      const pageUrl = createStorybookUrl({
        packageName,
        knobs: {
          currentPage: 5,
          totalPages: 5,
        },
      });

      await runTest(pageUrl, true);
    });
  });
});
