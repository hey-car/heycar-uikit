import { PageScreenshotOptions } from "playwright";
import {
  closeBrowser,
  matchHtml,
  openBrowserPage
} from "./index";

export const screenshotClick = async (pageUrl: string, selector: string, screenshotOpts?: PageScreenshotOptions) => {
  const {browser, context, page} = await openBrowserPage(pageUrl);

  try {
    const elements = await page.$$(selector);

    for (const element of elements) {
      const position = await element.boundingBox();

      if (position) {
        await page.mouse.move(position.x, position.y);
        await page.mouse.down();
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
    await closeBrowser({browser, context, page});
  }
};

export const screenshotHover = async (pageUrl: string, selector: string, screenshotOpts?: PageScreenshotOptions) => {
  const {browser, context, page} = await openBrowserPage(pageUrl);

  try {
    await page.hover(selector);

    await matchHtml({
      page,
      expect,
      screenshotOpts: screenshotOpts,
    });
  } catch (error: unknown) {
    console.error(error);
  } finally {
    await closeBrowser({browser, context, page});
  }
}
