import { delay } from 'q';

import {
  closeBrowser,
  createStorybookUrl,
  matchHtml,
  openBrowserPage,
  screenshotMatchClick,
  screenshotMatchHover,
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
  const mainPageURL = createStorybookUrl({
    packageName,
    componentCategory: 'organisms',
  });

  describe('desktop', () => {
    describe('header items', () => {
      test('All header items visual state', async () => {
        const { browser, context, page } = await openBrowserPage(
          mainPageURL,
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

      test('header open language select popup', async () => {
        await screenshotMatchHover(
          mainPageURL,
          '#root button[aria-label="Select Language - Press the Space key to show sub-menus."]',
          {
            animations: 'disabled',
          },
          { viewPort },
        );
      });
    });

    describe('nav items', () => {
      test('header open nav item w/ 1 subnav group', async () => {
        await screenshotMatchHover(
          mainPageURL,
          'nav[data-nav-type="dropdown-menu"] #nav-item-Carreviews',
          {
            animations: 'disabled',
          },
          { viewPort },
        );
      });

      test('header open nav item w/ 2 subnav groups', async () => {
        await screenshotMatchHover(
          mainPageURL,
          'nav[data-nav-type="dropdown-menu"] #nav-item-CarsbyLocation',
          {
            animations: 'disabled',
          },
          { viewPort },
        );
      });

      test('header open nav item w/ 3 subnav groups', async () => {
        await screenshotMatchHover(
          mainPageURL,
          'nav[data-nav-type="dropdown-menu"] #nav-item-NewsGuides',
          {
            animations: 'disabled',
          },
          { viewPort },
        );
      });
    });
  });

  describe('tablet-l', () => {
    describe('header items', () => {
      test('All header items visual state', async () => {
        const { browser, context, page } = await openBrowserPage(
          mainPageURL,
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
    const mobVP = {
      width: mobileWidth,
      height: 1000,
    };

    describe('header items', () => {
      test('All header items visual state', async () => {
        const { browser, context, page } = await openBrowserPage(
          mainPageURL,
          undefined,
          mobVP,
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

      test('header open search component', async () => {
        await screenshotMatchClick(
          mainPageURL,
          '#root button[aria-label="Search"]',
          {
            animations: 'disabled',
          },
          'click',
          undefined,
          { viewPort: mobVP },
        );
      });
    });

    describe('nav items', () => {
      test('header open burger menu', async () => {
        await screenshotMatchClick(
          mainPageURL,
          '#root button[aria-label="Navigation menu"]',
          {
            animations: 'disabled',
          },
          'click',
          undefined,
          { viewPort: mobVP },
        );
      });

      test('header open nav item w/ 1 subnav group', async () => {
        await screenshotMatchClick(
          mainPageURL,
          '#root button[aria-label="Navigation menu"], nav[data-nav-type="burger-menu"] #burger-nav-item-Carreviews',
          {
            animations: 'disabled',
          },
          'click',
          undefined,
          { viewPort: mobVP },
        );
      });

      test('header open nav item w/ 2 subnav groups', async () => {
        await screenshotMatchClick(
          mainPageURL,
          '#root button[aria-label="Navigation menu"], nav[data-nav-type="burger-menu"] #burger-nav-item-CarsbyLocation',
          {
            animations: 'disabled',
          },
          'click',
          undefined,
          { viewPort: mobVP },
        );
      });

      test('header open nav item w/ 3 subnav groups', async () => {
        await screenshotMatchClick(
          mainPageURL,
          '#root button[aria-label="Navigation menu"], nav[data-nav-type="burger-menu"] #burger-nav-item-NewsGuides',
          {
            animations: 'disabled',
          },
          'click',
          undefined,
          { viewPort: mobVP },
        );
      });
    });
  });
});
