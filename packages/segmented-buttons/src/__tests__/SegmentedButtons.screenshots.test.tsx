import { delay } from 'q';

import {
  closeBrowser,
  createStorybookUrl,
  matchHtml,
  openBrowserPage,
  screenshotMatchClick,
  screenshotMatchHover,
} from '../../../screenshotUtils';

const packageName = 'segmented-buttons';

describe('Segmented Buttons screenshots', () => {
  const mainPageURL = createStorybookUrl({
    packageName,
    knobs: {
      icon: 'Icon',
    },
  });

  const selectedPageURL = createStorybookUrl({
    packageName,
    knobs: {
      icon: 'Icon',
      currentValue: 'lft',
    },
  });

  const disabledPageURL = createStorybookUrl({
    packageName,
    knobs: {
      icon: 'Icon',
      disabled: true,
    },
  });

  describe('Standard view', () => {
    describe('Icons', () => {
      test('Renders buttons', async () => {
        const { browser, context, page } = await openBrowserPage(
          mainPageURL,
          undefined,
        );

        await delay(150);

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

      test('Renders buttons with one selected', async () => {
        const { browser, context, page } = await openBrowserPage(
          selectedPageURL,
          undefined,
        );

        await delay(150);

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

      test('Renders buttons disabled', async () => {
        const { browser, context, page } = await openBrowserPage(
          disabledPageURL,
          undefined,
        );

        await delay(150);

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

    describe('No icons', () => {
      test('Renders buttons', async () => {
        const url = createStorybookUrl({
          packageName,
        });
        const { browser, context, page } = await openBrowserPage(
          url,
          undefined,
        );

        await delay(150);

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

      test('Renders buttons with one selected', async () => {
        const url = createStorybookUrl({
          packageName,
          knobs: {
            currentValue: 'lft',
          },
        });
        const { browser, context, page } = await openBrowserPage(
          url,
          undefined,
        );

        await delay(150);

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

      test('Renders buttons disabled', async () => {
        const url = createStorybookUrl({
          packageName,
          knobs: {
            disabled: true,
          },
        });
        const { browser, context, page } = await openBrowserPage(
          url,
          undefined,
        );

        await delay(150);

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

  describe('Wide view', () => {
    describe('Icons', () => {
      test('Renders buttons', async () => {
        const url = createStorybookUrl({
          packageName,
          knobs: {
            icon: 'Icon',
            wideView: true,
          },
        });
        const { browser, context, page } = await openBrowserPage(
          url,
          undefined,
        );

        await delay(150);

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

      test('Renders buttons with one selected', async () => {
        const url = createStorybookUrl({
          packageName,
          knobs: {
            currentValue: 'lft',
            icon: 'Icon',
            wideView: true,
          },
        });
        const { browser, context, page } = await openBrowserPage(
          url,
          undefined,
        );

        await delay(150);

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

      test('Renders buttons disabled', async () => {
        const url = createStorybookUrl({
          packageName,
          knobs: {
            disabled: true,
            icon: 'Icon',
            wideView: true,
          },
        });
        const { browser, context, page } = await openBrowserPage(
          url,
          undefined,
        );

        await delay(150);

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

    describe('No icons', () => {
      test('Renders buttons', async () => {
        const url = createStorybookUrl({
          packageName,
          knobs: { wideView: true },
        });
        const { browser, context, page } = await openBrowserPage(
          url,
          undefined,
        );

        await delay(150);

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

      test('Renders buttons with one selected', async () => {
        const url = createStorybookUrl({
          packageName,
          knobs: {
            currentValue: 'lft',
            wideView: true,
          },
        });
        const { browser, context, page } = await openBrowserPage(
          url,
          undefined,
        );

        await delay(150);

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

      test('Renders buttons disabled', async () => {
        const url = createStorybookUrl({
          packageName,
          knobs: {
            disabled: true,
            wideView: true,
          },
        });
        const { browser, context, page } = await openBrowserPage(
          url,
          undefined,
        );

        await delay(150);

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

  describe('Interactivity states', () => {
    describe('Icons', () => {
      test('button hover state', async () => {
        await screenshotMatchHover(
          mainPageURL,
          '#root button[aria-label="Left"]',
          {
            animations: 'disabled',
          },
        );
      });

      test('button selected hover state', async () => {
        await screenshotMatchHover(
          selectedPageURL,
          '#root button[aria-label="Left"]',
          {
            animations: 'disabled',
          },
        );
      });

      test('button disabled hover state', async () => {
        await screenshotMatchHover(
          disabledPageURL,
          '#root button[aria-label="Left"]',
          {
            animations: 'disabled',
          },
        );
      });

      test('button active state', async () => {
        await screenshotMatchClick(
          mainPageURL,
          '#root button[aria-label="Left"]',
          {
            animations: 'disabled',
          },
          'down',
        );
      });

      test('button selected active state', async () => {
        await screenshotMatchClick(
          selectedPageURL,
          '#root button[aria-label="Left"]',
          {
            animations: 'disabled',
          },
          'down',
        );
      });

      test('button disabled active state', async () => {
        await screenshotMatchClick(
          disabledPageURL,
          '#root button[aria-label="Left"]',
          {
            animations: 'disabled',
          },
          'down',
        );
      });
    });
  });
});
