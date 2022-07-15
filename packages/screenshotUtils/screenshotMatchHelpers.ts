import { PageScreenshotOptions } from 'playwright';
import { closeBrowser, matchHtml, openBrowserPage } from '.';
import { delay } from 'q';

export const screenshotMatchClick = async (
  pageUrl: string,
  selector: string,
  screenshotOpts?: PageScreenshotOptions,
) => {
  const { browser, context, page } = await openBrowserPage(pageUrl);

  try {
    const elements = await page.$$(selector);

    for (const element of elements) {
      const position = await element.boundingBox();

      if (position) {
        await page.mouse.move(position.x, position.y);
        await page.mouse.down();
        // Waiting for the rendering in case of a slight rendering lag
        await delay(100);
      }
    }
    await matchHtml({
      page,
      expect,
      screenshotOpts: screenshotOpts,
    });
  } catch (error: unknown) {
    console.error(error);
  } finally {
    await closeBrowser({ browser, context, page });
  }
};

export const screenshotMatchHover = async (
  pageUrl: string,
  selector: string,
  screenshotOpts?: PageScreenshotOptions,
) => {
  const { browser, context, page } = await openBrowserPage(pageUrl);

  try {
    await page.hover(selector);
    // Waiting for the rendering in case of a slight rendering lag
    await delay(100);

    await matchHtml({
      page,
      expect,
      screenshotOpts: screenshotOpts,
    });
  } catch (error: unknown) {
    console.error(error);
  } finally {
    await closeBrowser({ browser, context, page });
  }
};
