import { Locator, Page, PageScreenshotOptions } from 'playwright';
import { delay } from 'q';

import { closeBrowser, matchHtml, openBrowserPage } from '.';

const mouseDown = async (page: Page, element: Locator) => {
  //want to try to emulate real user behaviour, rather than forcing the event
  const box = await element.boundingBox();

  if (box) {
    await page.mouse.move(box.x, box.y);
    await page.mouse.down();
  }
};

export const screenshotMatchClick = async (
  pageUrl: string,
  selector: string,
  screenshotOpts?: PageScreenshotOptions,
  action: 'click' | 'down' = 'click',
  delayTime = 250,
) => {
  const { browser, context, page } = await openBrowserPage(pageUrl);

  try {
    const elements = await page.locator(selector).all();

    // There may be multiple matches for selector
    for (const element of elements) {
      if (action === 'click') {
        await element.click();
      } else if (action === 'down') {
        mouseDown(page, element);
      }

      // Waiting for the rendering in case of a slight rendering lag
      await delay(delayTime);
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
    //unlike screenshotMatchClick we will only hove on first element in selector to emulate the limitation of user behavior
    const element = await page.locator(selector).first();

    await element.hover();
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
