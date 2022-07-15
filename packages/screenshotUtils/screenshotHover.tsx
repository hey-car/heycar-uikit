import {PageScreenshotOptions} from "playwright";
import {
  closeBrowser,
  matchHtml,
  openBrowserPage
} from "./index";

export async function screenshotHover(pageUrl: string, selector: string, screenshotOpts?: PageScreenshotOptions) {
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
